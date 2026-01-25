# 🔄 Plan de Migration - Mode Simulation → Mode Email Réel

## 🎯 Objectif

Passer du mode **simulation** (logs console) au mode **email réel** (EmailJS) en quelques clics.

---

## 📊 État actuel

### **Phase 1 : Mode Simulation** ✅ MAINTENANT
```
✓ Admin interface complète
✓ Upload affiche fonctionne
✓ Simulation d'email dans console
✓ Pas besoin EmailJS
✓ Parfait pour tester
```

### **Phase 2 : Mode Email Réel** ⏳ À FAIRE
```
→ Configuration EmailJS (5 min)
→ Remplacer les clés
→ Tester vrais emails
→ Go live!
```

---

## 🕐 Temps requis

| Étape | Durée | Notes |
|-------|-------|-------|
| Créer compte EmailJS | 2 min | Gmail login |
| Créer service Gmail | 1 min | 1 clic |
| Créer template email | 2 min | Copy-paste |
| Récupérer clés | 1 min | Copy-paste |
| Coller dans admin.js | 1 min | 3 lignes |
| **TOTAL** | **~7 min** | Tout compris |

---

## 📋 Étapes détaillées

### **ÉTAPE 1 : Créer compte EmailJS**

**URL:** https://www.emailjs.com/

```
1. Cliquez "Sign Up"
2. Choisissez "Sign up with Gmail"
3. Connectez-vous avec votre Gmail
4. Complétez votre profil
5. Confirmez l'email
```

✅ **Compte créé!**

---

### **ÉTAPE 2 : Connecter Gmail**

```
Dashboard (après login)
  ↓
Cliquez "Email Services" (gauche)
  ↓
Cliquez "Add Service"
  ↓
Cliquez "Gmail"
  ↓
Cliquez "Connect Account"
  ↓
Sélectionnez votre Gmail
  ↓
Cliquez "Autoriser"
  ↓
Cliquez "Create Service"
```

**Vous verrez un écran avec :**
```
Service ID: gmail_xxxxxxxxxx
Name: Gmail
Status: Connected ✅
```

✅ **Copier le Service ID!**

---

### **ÉTAPE 3 : Créer le template d'email**

```
Dashboard
  ↓
Cliquez "Email Templates" (gauche)
  ↓
Cliquez "Create New Template"
  ↓
Remplissez les champs:
```

#### **Nom du template :**
```
Entre Prieur - Alerte Affiche
```

#### **To Email :**
```
{{to_email}}
```

#### **Subject :**
```
🎨 Affiche Entre'Prieur - {{event_title}}
```

#### **Email Body (contenu):**
```
Bonjour,

{{message}}

📅 Détails de l'événement :
- Titre : {{event_title}}
- Date : {{event_date}}
- Heure : {{event_time}}

Merci de vérifier le portail admin pour plus d'infos.

Cordialement,
Entre'Prieur Admin
```

**Puis :**
```
Cliquez "Save"
```

**Vous verrez :**
```
Template ID: template_xxxxxxxxxx
```

✅ **Copier le Template ID!**

---

### **ÉTAPE 4 : Récupérer la Public Key**

```
Dashboard
  ↓
Cliquez "Account" (bas gauche)
  ↓
Vous verrez "Public Key"
  ↓
Cliquez copier (icon à droite)
```

**Vous avez :**
```
Public Key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

✅ **Copier la Public Key!**

---

### **ÉTAPE 5 : Coller les clés**

Ouvrez : `js/admin.js`

Cherchez les 3 lignes (vers le haut, ligne ~11-13) :

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // À remplir
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // À remplir
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // À remplir
```

Remplacez par vos valeurs :

```javascript
const EMAILJS_SERVICE_ID = 'gmail_xxxxxxxxxx';              // Votre Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxxxx';          // Votre Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Votre Public Key
```

✅ **Fichier sauvegardé!**

---

### **ÉTAPE 6 : Tester**

1. Ouvrez `admin.html` dans votre navigateur
2. Sélectionnez un événement
3. Uploadez une affiche
4. Cliquez "Marquer Prêt + Envoyer Alerte"
5. Vérifiez les 2 emails :
   - danickarcel@gmail.com
   - monequilibre242@gmail.com

✅ **Emails reçus!**

---

## 🔍 Vérification console

Ouvrez **F12 → Console**

### **Mode Simulation (AVANT)**
```
⚠️ EmailJS non configuré - Mode simulation activé

Après "Envoyer":
📧 ALERTE AFFICHE NÉCESSAIRE
========================================
Événement : Édition février 2026
Date : 28 février 2026
...
========================================
```

### **Mode Real (APRÈS)**
```
✅ EmailJS initialisé

Après "Envoyer":
Pas d'erreur = Succès ✅
```

---

## ✉️ Email attendu

### **Objet :**
```
🎨 Affiche Entre'Prieur - Entre'Prieur – Rendez-vous des entrepreneurs chrétiens
```

### **Contenu :**
```
Bonjour,

L'affiche pour cet événement est prête!

📅 Détails de l'événement :
- Titre : Entre'Prieur – Rendez-vous des entrepreneurs chrétiens
- Date : 28 février 2026
- Heure : 10:00

Merci de vérifier le portail admin pour plus d'infos.

Cordialement,
Entre'Prieur Admin
```

---

## 🚨 Résolution de problèmes

### **Problème : "Email not sent"**

**Solution :**
```
1. Vérifier les clés sont correctes
2. Vérifier Service est "Connected" (vert)
3. Vérifier les {{ }} dans le template
4. Attendre 30 sec (limite gratuite)
```

### **Problème : "Invalid email"**

**Solution :**
```
1. Vérifier que {{to_email}} contient @ et .
2. Vérifier danickarcel@gmail.com est valide
3. Vérifier monequilibre242@gmail.com est valide
```

### **Problème : Email reçu vide**

**Solution :**
```
1. Vérifier le template sur EmailJS
2. Vérifier qu'il y a du contenu
3. Vérifier les {{ }} correspondent à admin.js
```

---

## 📊 Limite gratuite EmailJS

| Limite | Quota | Utilisation |
|--------|-------|-------------|
| Emails/mois | 200 | ~7/jour |
| Pour Entre'Prieur | 2/mois | Aucun problème |
| Disponible | Gratuit | Oui ✅ |

---

## 🔐 Sécurité des clés

⚠️ **IMPORTANT:** Les clés dans le code sont **publiquement visibles**

C'est OK parce que :
```
✓ Public Key est faite pour être publique
✓ EmailJS ne permet d'envoyer QUE via ce template
✓ On ne peut pas utiliser la clé pour autre chose
✓ Limitation à 200 emails/mois
```

---

## 📅 Checklist Migration

```
□ Compte EmailJS créé
□ Gmail connecté à EmailJS
□ Template créé dans EmailJS
□ Service ID copié
□ Template ID copié
□ Public Key copié
□ Clés collées dans admin.js
□ admin.js sauvegardé
□ admin.html testé
□ Affiche uploadée avec succès
□ Email reçu par danickarcel@gmail.com
□ Email reçu par monequilibre242@gmail.com
□ Mode réel activé ✅
```

---

## 🎯 Avant/Après

### **AVANT (Simulation)**
```
Console:
📧 ALERTE AFFICHE NÉCESSAIRE
[données affichées dans console]
```

### **APRÈS (Email Réel)**
```
Console:
✅ Alerte envoyée avec succès!

Email:
Reçu dans la boîte!
[Email bien formaté]
```

---

## 💡 Tips

### **Test avec un autre email**
Vous pouvez changer `designerEmail` ou `adminEmail` temporairement pour tester.

Modifiez dans `js/events-data.js` :
```javascript
designerEmail: 'votre_email_test@gmail.com',
adminEmail: 'autre_email_test@gmail.com',
```

### **Voir l'historique des emails**
Dans EmailJS Dashboard → Statistics

### **Modifier le template**
Vous pouvez modifier le contenu de l'email anytime dans EmailJS

---

## ✅ C'est tout!

Vous êtes maintenant en mode **email réel** avec EmailJS! 🎉

Les emails partiront automatiquement quand la designer upload une affiche.

---

## 📞 Support

**Si problème:**
- Consulter : EMAILJS_SETUP.md
- Contact : danickarcel@gmail.com

**Si oubli clés:**
- Aller sur : https://www.emailjs.com/dashboard/
- Account → Copier les clés à nouveau

---

**Créé le 25 janvier 2026**  
**Pour: Entre'Prieur - Système Admin d'Affiches**  
**Version: 1.0**
