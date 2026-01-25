# 📋 GUIDE DE MAINTENANCE - Entre'Prieur

## 🎯 Guide Rapide pour les Modifications

Ce document vous aide à modifier rapidement le contenu du site sans casser la structure.

---

## 📝 Modifications Fréquentes

### 1. Changer les Dates des Événements

**Fichier à modifier** : `index.html` et `evenements.html`

**Rechercher** : "28 février 2026"

**À remplacer par** : Votre nouvelle date

```html
<!-- AVANT -->
<span class="event-date-badge">28 février 2026</span>

<!-- APRÈS -->
<span class="event-date-badge">15 mars 2026</span>
```

---

### 2. Mettre à jour le Compte à Rebours

**Fichier** : `js/script.js`

**Fonction** : `initCountdown()`

```javascript
// Ligne environ 140
const targetDate = new Date('2026-02-28T09:00:00').getTime();

// Changer à votre nouvelle date
const targetDate = new Date('2026-03-15T09:00:00').getTime();
```

---

### 3. Modifier les Informations de Contact

**Fichier** : Toutes les pages (footer)

**Rechercher** : `monequilibre242@gmail.com` ou `068 673 747`

**Les emplacements** :
- Footer de chaque page
- Page contact.html
- Liens cliquables

```html
<!-- Email -->
<a href="mailto:NOUVEL_EMAIL@domaine.com">

<!-- Téléphone -->
<a href="tel:+242XXXXXXXXX">
```

---

### 4. Changer la Couleur de Thème

**Fichier** : `css/styles.css`

**Variables à modifier** (haut du fichier) :

```css
:root {
    --primary-navy: #1e3a8a;    /* ← Changer cette couleur */
    --primary-gold: #d4af37;    /* ← Ou celle-ci */
    --white: #ffffff;
    --light-gray: #f8f9fa;
}
```

**Exemple** : Passer au bleu royal :
```css
--primary-navy: #003366;  /* Bleu plus foncé */
```

---

### 5. Modifier le Contenu d'une Section

### ✏️ Accroche d'Accueil (Hero)

**Fichier** : `index.html`

```html
<h1 class="hero-title">
    Quand la foi guide l'action  <!-- ← À modifier -->
</h1>
<p class="hero-subtitle">
    L'entrepreneuriat gagne en sens et en impact  <!-- ← À modifier -->
</p>
```

### ✏️ Piliers de la Communauté

**Fichier** : `index.html`

```html
<div class="pillar-card">
    <div class="pillar-icon">👁️</div>
    <h3>Vision</h3>  <!-- ← Titre -->
    <p>Une communauté d'entrepreneurs chrétiens...</p>  <!-- ← Description -->
</div>
```

Répétez pour chaque pilier.

---

## 🖼️ Ajouter/Modifier des Images

### Utiliser les Images Existantes

**Dossier** : `img/`

**Images disponibles** :
- IMG_4606.jfif
- IMG_4609.jfif
- IMG_4612.jfif
- IMG_4613.jfif
- IMG_4626.jfif
- IMG_4655.jfif (Mima Steeve)
- IMG_4658.jfif
- IMG_4660.jfif
- IMG_4674.jfif
- IMG_4676.jfif
- IMG_4677.jfif

### Placer une Image dans une Page

```html
<!-- Galerie événements -->
<div class="gallery-item">
    <img src="img/IMG_4606.jfif" alt="Événement Entre'Prieur" loading="lazy">
</div>

<!-- Profil fondatrice -->
<div class="founder-image">
    <img src="img/IMG_4655.jfif" alt="Mima Steeve - Fondatrice" loading="lazy">
</div>
```

---

## 📋 Ajouter un Nouvel Événement

### Dans le Calendrier

**Fichier** : `evenements.html`

```html
<div class="calendar-event">
    <div class="calendar-month">Avril</div>
    <div class="calendar-date">12</div>
    <div class="calendar-info">
        <p class="calendar-title">Brunch Entre'Prieur</p>
        <p class="calendar-place">Pointe-Noire</p>
    </div>
    <span class="event-status soon">À venir</span>
</div>
```

---

## 🎨 Customiser le Style

### Modifier la Couleur d'un Élément

**Fichier** : `css/styles.css`

Trouver la classe et modifier :

```css
/* Avant */
.btn-primary {
    background-color: var(--primary-navy);
}

/* Après - Couleur personnalisée */
.btn-primary {
    background-color: #2e5c8f;  /* Bleu légèrement plus clair */
}
```

### Changer la Taille de Police

```css
h1 {
    font-size: 3.5rem;  /* Augmenter ou diminuer */
}
```

### Ajouter de l'Espace

```css
section {
    padding: 60px 0;  /* 60px vertical, 0 horizontal */
}
```

---

## 📱 Adapter pour Mobile

### Breakpoints à Connaître

```css
@media (max-width: 768px) {
    /* Appliqué aux tablettes et mobiles */
}

@media (max-width: 480px) {
    /* Appliqué aux petits mobiles */
}
```

### Exemple : Cacher un Élément sur Mobile

```css
.element-desktop-only {
    display: block;
}

@media (max-width: 768px) {
    .element-desktop-only {
        display: none;  /* Caché sur mobile */
    }
}
```

---

## ✅ Validation des Formulaires

### Ajouter un Champ au Formulaire

**Fichier** : `rejoindre.html`

```html
<div class="form-group">
    <label for="website">Site web (optionnel)</label>
    <input 
        type="url" 
        id="website" 
        name="website" 
        placeholder="https://..."
    >
</div>
```

### Rendre un Champ Obligatoire

```html
<input 
    type="text" 
    id="fieldName" 
    name="fieldName" 
    required           <!-- ← Ajout du required -->
    aria-required="true"
>
```

---

## 🔍 Tester le Site

### Avant de Publier

1. **Ouvrir** : Clic-droit → Inspecter → Console
2. **Vérifier** :
   - Pas d'erreurs en rouge
   - Responsive design
   - Tous les liens fonctionnent
   - Formulaires se soumettent
   - Animations fluides

### Raccourcis Utiles

- `Ctrl+Shift+A` : Voir les statistiques
- `F12` : Ouvrir les outils de développeur
- `Ctrl+Shift+I` : Inspecter un élément

---

## 🐛 Dépannage Courant

### Le Site n'Affiche Pas les Images

**Solution** :
```html
<!-- Vérifier que le chemin est correct -->
<!-- ❌ FAUX -->
<img src="IMG_4606.jfif">

<!-- ✅ BON -->
<img src="img/IMG_4606.jfif">
```

### Le Menu n'Apparaît Pas

- Vérifier que `js/script.js` est chargé
- F12 → Console → chercher les erreurs
- Vérifier que l'ID `hamburger` existe

### Les Formulaires Ne Se Soumettent Pas

- Vérifier que tous les champs obligatoires sont remplis
- Vérifier la validation email
- Vérifier que les checkboxes sont cochées

---

## 🚀 Déployer le Site

### Prérequis

1. **Dossier complet** avec :
   - Tous les fichiers `.html`
   - Dossier `css/` avec `styles.css`
   - Dossier `js/` avec `script.js`
   - Dossier `img/` avec les images

2. **Hébergeur** :
   - Namecheap
   - OVH
   - 1and1
   - AWS S3
   - Vercel
   - Netlify

### Steps de Déploiement

1. Compresser le dossier
2. Uploader sur l'hébergeur
3. Configurer le domaine
4. Tester l'accès

---

## 📊 Suivre les Visites

### Accéder aux Stats

- Appuyer sur `Ctrl+Shift+A` sur le site
- Ou dans la console du navigateur :

```javascript
// Voir le nombre de visites
localStorage.getItem('visitCount')

// Voir les candidatures
JSON.parse(localStorage.getItem('applications'))
```

### Exporter les Données

```javascript
// Copier dans la console
JSON.stringify(JSON.parse(localStorage.getItem('applications')), null, 2)
```

---

## 📞 Contacts Clés

| Contact | Email | Téléphone |
|---------|-------|-----------|
| Entre'Prieur | monequilibre242@gmail.com | +242 068 673 747 |
| Mon Équilibre | monequilibre242@gmail.com | +242 068 673 747 |
| Support | À définir | À définir |

---

## 📌 Checklist de Maintenance

### Hebdomadaire
- [ ] Vérifier les nouveaux messages de contact
- [ ] Vérifier les nouvelles candidatures

### Mensuel
- [ ] Vérifier les liens externes
- [ ] Tester la responsivité mobile
- [ ] Vérifier les images

### Trimestriel
- [ ] Mettre à jour les événements
- [ ] Analyser les statistiques
- [ ] Optimiser le contenu

---

## 💡 Astuces Pro

### 1. Utiliser Find & Replace (Ctrl+H)

Très utile pour changer toutes les dates d'une coup.

### 2. Sauvegarder Avant de Modifier

Créer une copie du fichier avant toute grosse modification.

### 3. Tester en Live Server

Installer l'extension "Live Server" sur VS Code pour tester en direct.

### 4. Utiliser les DevTools

`F12` → Elements pour explorer la structure HTML et CSS.

---

## 📚 Ressources Utiles

- [Google Fonts](https://fonts.google.com/)
- [HTML5 Documentation](https://developer.mozilla.org/fr/docs/Web/HTML)
- [CSS3 Guide](https://developer.mozilla.org/fr/docs/Web/CSS)
- [JavaScript Reference](https://developer.mozilla.org/fr/docs/Web/JavaScript)

---

**Dernière mise à jour** : 21 janvier 2026  
**Version** : 1.0  
**Statut** : Production
