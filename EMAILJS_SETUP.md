# 📧 Configuration EmailJS - Guide Complet

## Qu'est-ce que EmailJS ?

**EmailJS** permet d'envoyer des emails directement depuis votre site web **sans serveur backend**.

✅ **Gratuit** - 200 emails/mois (largement suffisant)  
✅ **Simple** - Configuration en 5 minutes  
✅ **Sécurisé** - Données chiffrées  

---

## 🚀 Configuration en 5 étapes

### **Étape 1 : Créer un compte EmailJS**

1. Allez sur : https://www.emailjs.com/
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Sign up with Gmail"** (le plus simple)
4. Complétez votre profil

✅ **Compte créé !**

---

### **Étape 2 : Ajouter un service email**

1. Dans le tableau de bord, cliquez sur **"Email Services"** (dans la barre gauche)
2. Cliquez sur **"Add Service"**
3. Choisissez votre fournisseur :
   - **Gmail** (recommended)
   - Outlook
   - Yahoo
   - Autre

#### Si vous choisissez Gmail :
1. Cliquez sur **"Gmail"**
2. Cliquez sur **"Connect Account"**
3. Sélectionnez votre compte Gmail
4. Autorisez l'accès
5. Cliquez sur **"Create Service"**

✅ **Service créé !** (Note: `Service ID` = quelque chose comme `gmail_xxxxxxx`)

---

### **Étape 3 : Créer un template d'email**

Un template c'est le "modèle" de votre email.

1. Allez dans **"Email Templates"** (barre gauche)
2. Cliquez sur **"Create New Template"**
3. Remplissez :

#### **Nom du template :**
```
Entre Prieur - Alerte Affiche
```

#### **Destinataire (To email) :**
```
{{to_email}}
```

#### **Sujet :**
```
🎨 Affiche Entre'Prieur - {{event_title}}
```

#### **Contenu (corps de l'email) :**
Copier-coller ceci :

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

4. Cliquez sur **"Save"**

✅ **Template créé !** (Note: `Template ID` = quelque chose comme `template_abc123xyz`)

---

### **Étape 4 : Récupérer vos clés**

#### **Service ID :**
1. Allez dans **"Email Services"**
2. Cliquez sur le service Gmail que vous avez créé
3. Vous verrez `Service ID` - copier-le

#### **Template ID :**
1. Allez dans **"Email Templates"**
2. Cliquez sur votre template "Entre Prieur - Alerte Affiche"
3. Vous verrez `Template ID` en haut - copier-le

#### **Public Key :**
1. Allez dans **"Account"** (en bas à gauche)
2. Vous verrez `Public Key` - copier-le

---

### **Étape 5 : Configurer le fichier JavaScript**

Ouvrez le fichier : `js/admin.js`

Cherchez les 3 lignes en haut :

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

Remplacez les valeurs :

```javascript
const EMAILJS_SERVICE_ID = 'gmail_xxxxxxxxxx';          // Votre Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxxxx';      // Votre Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxx';  // Votre Public Key
```

**Sauvegardez le fichier.**

✅ **Configuration terminée !**

---

## 🧪 Test

1. Allez sur `admin.html`
2. Sélectionnez un événement
3. Uploadez une affiche
4. Cliquez sur "Marquer Prêt + Envoyer Alerte"
5. Vérifiez votre email (`danickarcel@gmail.com` et `monequilibre242@gmail.com`)

Vous devriez recevoir l'email en quelques secondes ! 📧

---

## ⚠️ Troubleshooting

### **Les emails ne s'envoient pas**

**Problème 1 : Les clés ne sont pas bonnes**
- Vérifiez que vous avez copié les bonnes valeurs
- Les clés sont sensibles à la casse (majuscules/minuscules)

**Problème 2 : Gmail n'est pas autorisé**
- Dans Gmail, allez dans Paramètres > Sécurité
- Activez "Autoriser les apps non sécurisées"

**Problème 3 : Service non activé**
- Allez dans EmailJS > Email Services
- Vérifiez que le statut est "Connected" (vert)

### **Comment tester sans EmailJS ?**

Si vous n'avez pas configuré EmailJS, le système passe automatiquement en mode "Simulation" :
- L'interface fonctionne normalement
- Les logs console affichent les infos
- Parfait pour tester avant de configurer les vrais emails

---

## 💡 Astuces

### **Limite gratuite**
- 200 emails/mois = ~6-7 emails par jour
- Pour Entre'Prieur (1 événement/mois) c'est **largement suffisant**

### **Personnalisation**
- Vous pouvez modifier le template EmailJS pour changer le design
- Les variables `{{}}` doivent rester telles quelles

### **Monitoring**
- Allez dans **"Statistics"** pour voir les emails envoyés/reçus

---

## 📞 Support

- **EmailJS Support** : https://www.emailjs.com/docs/
- **Notre équipe** : danickarcel@gmail.com

---

**Besoin d'aide ? N'hésitez pas à nous contacter !** 🙏
