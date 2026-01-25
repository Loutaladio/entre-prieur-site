# 📧 Configuration Newsletter & Formulaires - Entre'Prieur

## 🚀 Mise en place du système d'emails avec Formspree

### **Étape 1 : S'inscrire sur Formspree** (5 min)
1. Accédez à https://formspree.io/
2. Cliquez sur **"Sign Up"**
3. Créez un compte avec votre email Gmail (monequilibre242@gmail.com)
4. Confirmez votre email

### **Étape 2 : Créer un formulaire pour la Newsletter**
1. Sur Formspree, cliquez sur **"Create a new form"**
2. Donnez un nom : **"Newsletter Entre'Prieur"**
3. Copiez l'**ID du formulaire** (exemple : `xyzabc123`)
4. Remplacez `f/xyzabc123` dans les URLs des formulaires ci-dessous

### **Étape 3 : Remplacer les URLs dans le code HTML**

#### **Dans index.html** (Newsletter) :
Remplacez cette ligne :
```html
<form class="newsletter-form" action="https://formspree.io/f/xyzabc123" method="POST">
```
Par votre URL Formspree :
```html
<form class="newsletter-form" action="https://formspree.io/f/VOTRE_ID" method="POST">
```

#### **Dans contact.html** (Formulaire de contact) :
Cherchez la ligne :
```html
<form id="contactForm" class="contact-form" novalidate>
```
Et remplacez par :
```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/VOTRE_ID_CONTACT" method="POST" novalidate>
```

#### **Dans rejoindre.html** (Candidature) :
Cherchez la ligne :
```html
<form id="applicationForm" class="application-form" novalidate>
```
Et remplacez par :
```html
<form id="applicationForm" class="application-form" action="https://formspree.io/f/VOTRE_ID_CANDIDATURE" method="POST" novalidate>
```

### **Étape 4 : Ajouter des adresses email additionnelles**
Sur le dashboard Formspree :
1. Allez dans les **paramètres du formulaire**
2. Ajoutez les adresses email qui doivent recevoir les emails
3. Confirmez les adresses email

### **Étape 5 : Test**
1. Remplissez un formulaire sur votre site
2. Cliquez sur **"Submit"**
3. Vérifiez que vous recevez l'email sur Gmail

---

## 📱 Fonctionnalités actuelles

### **Newsletter (index.html)**
- ✅ Collecte les emails automatiquement
- ✅ Envoie directement à Gmail
- ✅ Design responsive et professionnel
- ✅ Gratuit (50 emails/mois)

### **Formulaire de Contact (contact.html)**
- ✅ Collecte nom, email, sujet, message
- ✅ Reçu directement sur Gmail
- ✅ Facile à lire et gérer

### **Formulaire de Candidature (rejoindre.html)**
- ✅ Capture toutes les infos des candidats
- ✅ Envoie à Gmail
- ✅ Tous les champs sont conservés

---

## 💡 Tarification Formspree

| Plan | Prix | Emails/mois | Caractéristiques |
|------|------|------------|-----------------|
| **Gratuit** | €0 | 50 | Idéal pour débuter |
| **Débutant** | €25/mois | ∞ | Illimité + Analytics |

---

## 🔐 Sécurité & Bonnes pratiques

✅ **HTTPS** : Le site est sécurisé  
✅ **RGPD** : Formspree respecte la confidentialité  
✅ **Validation** : Les champs email sont validés  
✅ **Spam** : Formspree filtre automatiquement

---

## 📞 Support

Si vous avez des questions :
- 📧 Documentation Formspree : https://formspree.io/help/
- 💬 Support : support@formspree.io

---

## ⚠️ Important

**À faire avant de lancer en production :**
1. ✅ Remplacer les URLs Formspree dans tous les formulaires
2. ✅ Confirmer les adresses email sur Formspree
3. ✅ Tester chaque formulaire
4. ✅ Vérifier que vous recevez les emails sur Gmail

---

**Développé par : DG Club**  
**Pour : Entre'Prieur**  
**Date : 21 janvier 2026**
