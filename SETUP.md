# 🚀 GUIDE DE DÉMARRAGE - Entre'Prieur

Bienvenue ! Ce guide vous aidera à démarrer rapidement avec le site Entre'Prieur.

---

## ⚡ Démarrage Rapide

### 1️⃣ Ouvrir le Site Localement

**Option A : Clic Simple**
1. Ouvrir le dossier `site_web`
2. Double-cliquer sur `index.html`
3. Le site s'ouvre dans votre navigateur

**Option B : Avec VS Code (Meilleur)**
1. Ouvrir VS Code
2. Ouvrir le dossier `site_web`
3. Installer l'extension "Live Server"
4. Clic droit sur `index.html` → "Open with Live Server"
5. Le site se charge automatiquement avec rechargement en direct

---

## 🗂️ Structure du Projet

```
site_web/
├── 📄 index.html           ← ACCUEIL (commencer ici)
├── 📄 vision.html          ← Page Vision
├── 📄 evenements.html      ← Page Événements
├── 📄 rejoindre.html       ← Page Candidature
├── 📄 contact.html         ← Page Contact
├── 📁 css/
│   └── styles.css          ← Style unique
├── 📁 js/
│   └── script.js           ← Logique JS
├── 📁 img/
│   └── [10 images]         ← Photos d'événements
├── 📄 README.md            ← Documentation complète
├── 📄 MAINTENANCE.md       ← Guide de maintenance
└── 📄 SETUP.md             ← Ce fichier
```

---

## 🎨 Identité Visuelle

### Couleurs Officielles
```
🔵 Bleu Marine  : #1e3a8a   (Principal)
✨ Or          : #d4af37   (Accent)
⚪ Blanc       : #ffffff   (Fond)
🩶 Gris Clair  : #f8f9fa   (Arrière-plan)
```

### Polices
```
Titres : Playfair Display (serif, élégante)
Texte  : Inter (sans-serif, moderne)
```

---

## 📄 Pages du Site

| Page | URL | Objectif |
|------|-----|----------|
| Accueil | `index.html` | Présentation générale |
| Vision | `vision.html` | Valeurs & Fondatrice |
| Événements | `evenements.html` | Brunchs & Calendrier |
| Rejoindre | `rejoindre.html` | Formulaire candidature |
| Contact | `contact.html` | Contacter l'équipe |

---

## ✅ Fonctionnalités Incluses

### ✨ Features Prêtes à l'Emploi

1. **Menu Mobile** - Responsive hamburger menu
2. **Compteur de Visites** - Stocké localement
3. **Compte à Rebours** - Vers l'événement
4. **Formulaire de Candidature** - Validation complète
5. **Formulaire de Contact** - Avec vérification
6. **Analytics** - Stats basiques (Ctrl+Shift+A)
7. **Animations** - Au scroll
8. **Responsive Design** - 320px à 1920px+

---

## 🎯 Première Utilisation

### Étape 1 : Parcourir le Site
1. Ouvrir `index.html`
2. Cliquer sur chaque page du menu
3. Tester le menu mobile (réduire l'écran)

### Étape 2 : Tester les Formulaires
1. Aller sur "Rejoindre"
2. Remplir le formulaire (voir les validations)
3. Soumettre → Voir le message de succès
4. Aller sur "Contact"
5. Tester le formulaire de contact

### Étape 3 : Accéder aux Stats
1. N'importe où sur le site
2. Appuyer sur `Ctrl+Shift+A`
3. Voir les statistiques en pop-up

### Étape 4 : Inspecter le Code
1. Appuyer sur `F12`
2. Onglet "Elements" → voir HTML
3. Onglet "Styles" → voir CSS
4. Onglet "Console" → voir erreurs JS

---

## 🔧 Modifications Basiques

### Changer le Titre Principal

**Fichier** : `index.html`

```html
<!-- Chercher cette ligne -->
<h1 class="hero-title">Quand la foi guide l'action</h1>

<!-- La remplacer par -->
<h1 class="hero-title">Votre nouveau titre</h1>
```

### Changer la Date d'Événement

**Fichier** : `index.html` et `evenements.html`

Chercher : `28 février 2026`  
Remplacer par : Votre date

**Aussi dans** : `js/script.js`

```javascript
const targetDate = new Date('2026-02-28T09:00:00').getTime();
// Remplacer 02-28 par votre date MM-DD
```

### Changer le Numéro de Téléphone

Chercher : `+242 068 673 747`  
Remplacer partout par votre numéro

### Changer l'Email

Chercher : `monequilibre242@gmail.com`  
Remplacer partout par votre email

---

## 🌐 Navigateurs Supportés

✅ Chrome/Edge (v90+)  
✅ Firefox (v88+)  
✅ Safari (v14+)  
✅ Mobile browsers

---

## 📊 Données Locales

### Où Sont Stockées les Données ?

Les formulaires et visites sont stockés dans **localStorage** du navigateur :

```javascript
// Accéder depuis la console (F12)
localStorage.getItem('visitCount')
localStorage.getItem('applications')
localStorage.getItem('contactMessages')
```

### Voir les Candidatures

```javascript
// Dans la console F12, taper :
JSON.parse(localStorage.getItem('applications'))
```

### Exporter les Données

```javascript
// Copier tout le contenu
JSON.stringify(JSON.parse(localStorage.getItem('applications')), null, 2)

// Puis coller dans un fichier .txt ou .json
```

---

## 🎨 Personnalisation

### Changer la Couleur Principale

**Fichier** : `css/styles.css`

```css
:root {
    --primary-navy: #1e3a8a;  /* ← Votre couleur ici */
}
```

Couleurs alternatives :
- Bleu foncé : `#003366`
- Bleu royal : `#004494`
- Noir : `#000000`

### Ajouter une Police

**Fichier** : `css/styles.css` (haut du fichier)

```html
<!-- Ajouter cette ligne dans <head> -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">

<!-- Puis dans styles.css -->
h1 {
    font-family: 'YourFont', serif;
}
```

---

## 📱 Tester la Responsivité

### Avec Chrome DevTools (F12)

1. Appuyer sur `F12`
2. Cliquer sur l'icône téléphone 📱
3. Choisir un appareil
4. Redimensionner et tester

### Breakpoints Testés
- Mobile : 375px (iPhone)
- Tablette : 768px (iPad)
- Desktop : 1024px+

---

## ⚙️ Configuration Avancée

### Ajouter un Nouveau Lien Social

**Fichier** : Toutes les pages (footer)

```html
<!-- Trouver cette section -->
<div class="social-links">
    <a href="https://instagram.com" target="_blank">📱 Instagram</a>
    <a href="https://tiktok.com" target="_blank">🎵 TikTok</a>
    <!-- Ajouter ici -->
    <a href="https://linkedin.com" target="_blank">💼 LinkedIn</a>
</div>
```

### Ajouter une Nouvelle Section

Voir le fichier `MAINTENANCE.md` pour les détails.

---

## 🚀 Déploiement

### Option 1 : Hébergement Gratuit (Netlify)

1. Aller sur [netlify.com](https://netlify.com)
2. Créer un compte gratuit
3. Drag & drop le dossier `site_web`
4. Voilà ! Votre site est en ligne

### Option 2 : Avec un Domaine (OVH, Namecheap)

1. Acheter un domaine
2. Acheter l'hébergement
3. Uploader les fichiers par FTP
4. Configurer le domaine

### Option 3 : GitHub Pages (Gratuit & Simple)

1. Créer un repo GitHub
2. Uploader les fichiers
3. Activer GitHub Pages
4. Accès direct à votre site

---

## 🐛 Dépannage

### Le site n'affiche pas les images

```html
<!-- ❌ MAUVAIS -->
<img src="IMG_4606.jfif">

<!-- ✅ BON -->
<img src="img/IMG_4606.jfif">
```

### Le JS ne fonctionne pas

- Vérifier que `js/script.js` existe
- Appuyer sur F12 → Console
- Chercher les erreurs en rouge

### Les styles ne s'appliquent pas

- Vérifier que `css/styles.css` existe
- Essayer Ctrl+F5 (vider le cache)
- Vérifier les noms de classe HTML

### Les formulaires ne se soumettent pas

- Tous les champs obligatoires sont-ils remplis ?
- L'email est-il valide ?
- Les checkboxes sont-elles cochées ?

---

## 📞 Support

### Questions sur le Code ?
- Voir `README.md` pour la documentation
- Voir `MAINTENANCE.md` pour les modifications
- Ouvrir la console `F12` pour déboguer

### Questions sur Entre'Prieur ?
- Email : monequilibre242@gmail.com
- Téléphone : +242 068 673 747

---

## ✨ Tips & Tricks

### 🎯 Raccourcis Utiles

| Action | Raccourci |
|--------|-----------|
| Voir les stats | `Ctrl+Shift+A` |
| Inspecter | `F12` ou `Ctrl+Shift+I` |
| Vider le cache | `Ctrl+F5` |
| Trouver du texte | `Ctrl+F` |
| Remplacer du texte | `Ctrl+H` |

### 💡 Bonnes Pratiques

1. **Toujours sauvegarder** avant de modifier
2. **Tester en mobile** avant de publier
3. **Vérifier les liens** régulièrement
4. **Mettre à jour les dates** des événements
5. **Garder le backup** du code original

---

## 📚 Documentation

- **README.md** → Vue d'ensemble complète
- **MAINTENANCE.md** → Guide détaillé des modifications
- **SETUP.md** → Ce fichier (démarrage)

---

## 🎉 Prêt à Commencer !

1. ✅ Ouvrir `index.html`
2. ✅ Explorer les 5 pages
3. ✅ Tester les formulaires
4. ✅ Personnaliser le contenu
5. ✅ Déployer sur internet
6. ✅ Profiter ! 🎊

---

## 📌 Checksum des Fichiers

```
index.html          ✓ HTML5 sémantique
vision.html         ✓ Complet
evenements.html     ✓ Calendrier inclus
rejoindre.html      ✓ Formulaire validé
contact.html        ✓ Prêt
css/styles.css      ✓ 600+ lignes optimisées
js/script.js        ✓ 400+ lignes commentées
img/                ✓ 10 images prêtes
README.md           ✓ Documentation complète
MAINTENANCE.md      ✓ Guide des mods
```

---

**Entre'Prieur © 2026**  
*Quand la foi guide l'action*

**Dernière mise à jour** : 21 janvier 2026  
**Statut** : ✅ Production-Ready
