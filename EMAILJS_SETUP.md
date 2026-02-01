# ⚙️ Configuration Formspree (Simple)

## 📧 Comment Configurer Formspree pour Recevoir les Emails

### Étape 1 : Créer un Compte Formspree

1. Allez sur https://formspree.io/
2. Cliquez sur **"Sign up"** et créez un compte gratuit
3. Vérifiez votre email

### Étape 2 : Créer un Formulaire pour les Candidatures

1. Dans le dashboard, cliquez sur **"New Form"**
2. Donnez-lui le nom : `Candidatures Entre'Prieur`
3. Cliquez sur **"Create"**
4. **Copiez l'URL du formulaire** qui ressemble à : `https://formspree.io/f/xxxxxxxxx`

### Étape 3 : Créer un Formulaire pour les Contacts

1. Cliquez à nouveau sur **"New Form"**
2. Donnez-lui le nom : `Contact Entre'Prieur`
3. Cliquez sur **"Create"**
4. **Copiez l'URL du formulaire** qui ressemble à : `https://formspree.io/f/yyyyyyyyy`

### Étape 4 : Remplir la Configuration dans le Code

Ouvrez **`js/script.js`** et remplacez les 2 lignes au début du fichier (lignes 11-12) :

```javascript
const FORMSPREE_CANDIDATURE_URL = 'https://formspree.io/f/xxxxxxxxx';  // ← Collez l'URL du formulaire candidatures
const FORMSPREE_CONTACT_URL = 'https://formspree.io/f/yyyyyyyyy';     // ← Collez l'URL du formulaire contact
```

### Étape 5 : Tester

1. Ouvrez `rejoindre.html` dans le navigateur
2. Remplissez le formulaire
3. Cliquez sur "Envoyer ma candidature"
4. Vous devriez recevoir un email
5. Les données sont aussi sauvegardées en localStorage

## ✅ Vérification

- ✅ Vous avez créé un compte Formspree
- ✅ Vous avez 2 formulaires (candidatures + contact)
- ✅ Vous avez copié les 2 URLs Formspree
- ✅ Vous avez rempli `js/script.js` lignes 11-12

## 🚨 Si ça ne marche pas

### Les données sont sauvegardées localement

Même si Formspree ne fonctionne pas :
- Les données sont **toujours** sauvegardées en **localStorage**
- Allez dans **DevTools (F12) → Application → Local Storage**
- Vous trouverez :
  - `applications` - Toutes les candidatures
  - `contactMessages` - Tous les messages de contact

### Dépannage

1. **Vérifiez que les URLs sont correctes**
   - Copier exactement depuis Formspree
   - Doit commencer par `https://formspree.io/f/`

2. **Vérifiez la console** (F12)
   - Ouvrez la console pour voir les messages d'erreur
   - Les emails devraient logger : ✅ Email envoyé via Formspree

3. **Vérifiez votre email**
   - Vérifiez vos spams/promotions
   - Confirmez votre email dans Formspree si demandé

## 🆓 Limite Gratuite Formspree

Formspree offre **50 soumissions gratuites par mois**. C'est largement suffisant pour un petit site !

Si vous en avez besoin de plus, vous pouvez faire un upgrade (€5/mois pour illimité).
