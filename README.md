# 🙏 Entre'Prieur - Site Web Premium

> **Entre'Prieur** : Rendez-vous des entrepreneurs chrétiens où la foi guide l'action

## 📋 Vue d'ensemble

Un site web professionnel et inspirant pour la communauté Entre'Prieur, dédiée aux entrepreneurs chrétiens. Le site présente la vision du mouvement, les événements, et permet aux candidats de rejoindre la communauté.

---

## 🎨 Identité Visuelle

### Couleurs
- **Bleu Marine** : `#1e3a8a` (Primaire)
- **Or** : `#d4af37` (Accent)
- **Blanc** : `#ffffff` (Fond)
- **Gris Clair** : `#f8f9fa` (Arrière-plan secondaire)

### Typographie
- **Titres** : [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) - Serif
- **Corps** : [Inter](https://fonts.google.com/specimen/Inter) - Sans-serif

---

## 📄 Pages du Site

### 1. **Accueil** (`index.html`)
- En-tête avec navigation
- Section héros avec slogan
- Prochain événement (28 février 2026)
- 4 piliers de Entre'Prieur
- Appel à l'action
- Compteur de visites
- Footer

### 2. **Vision** (`vision.html`)
- Présentation de la communauté
- Partenariat avec Mon Équilibre
- 5 valeurs fondamentales
- Profil de la fondatrice (Mima Steeve)
- Appel à rejoindre le mouvement

### 3. **Événements** (`evenements.html`)
- Format des brunchs
- Détails du brunch du 28 février 2026
- Thématiques et objectifs
- Calendrier des événements (2026)
- Galerie des événements passés

### 4. **Rejoindre** (`rejoindre.html`)
- Critères d'adhésion
- Processus de candidature
- Formulaire complet de candidature
- FAQ sur l'adhésion

### 5. **Contact** (`contact.html`)
- Coordonnées de contact
- Formulaire de contact
- Autres moyens de contact
- FAQ générale

---

## 🛠️ Structure Technique

### Stack Technologique
- **HTML5** : Sémantique et accessibilité
- **CSS3** : Vanilla (pas de framework)
- **JavaScript** : Vanilla (pas de dépendances)
- **Polices** : Google Fonts (Playfair Display + Inter)

### Architecture des Fichiers
```
site_web/
├── index.html          # Page d'accueil
├── vision.html         # Page vision
├── evenements.html     # Page événements
├── rejoindre.html      # Page candidature
├── contact.html        # Page contact
├── css/
│   └── styles.css      # Feuille de style principale
├── js/
│   └── script.js       # Script principal
├── img/                # Images (existantes)
└── README.md           # Cette documentation
```

---

## ⚡ Fonctionnalités JavaScript

### 1. **Menu Mobile (Hamburger)**
- Navigation responsive
- Toggle du menu sur mobile
- Fermeture au clic externe
- Détection de la page active

### 2. **Compteur de Visites**
- Stockage avec `localStorage`
- Compteur global persistent
- Affichage en bas à droite
- Mise à jour automatique

### 3. **Compte à Rebours**
- Compte à rebours vers le 28 février 2026
- Format: Jours, Heures, Minutes, Secondes
- Mise à jour en temps réel
- Message à la fin de l'événement

### 4. **Validation de Formulaires**
- **Formulaire de Candidature** :
  - Informations personnelles
  - Données professionnelles
  - Motivation (min. 50 caractères)
  - Acceptation des conditions
  
- **Formulaire de Contact** :
  - Nom, email, téléphone
  - Sujet et message
  - Validation email
  - Message de succès

### 5. **Analytics Basique**
- Nombre de visites
- Pages visitées
- Temps passé par page
- Candidatures reçues
- Messages de contact
- Accès avec `Ctrl+Shift+A`

### 6. **Animations au Scroll**
- Fade-in des éléments
- Intersection Observer
- Smooth scroll

---

## 📱 Responsive Design

### Breakpoints
- **Desktop** : 1024px+
- **Tablette** : 768px - 1023px
- **Mobile** : 480px - 767px
- **Petit Mobile** : < 480px

### Features Mobile
- Menu hamburger
- Navigation simplifiée
- Layout adapté
- Images optimisées
- Touch-friendly buttons

---

## ♿ Accessibilité

### Standards Appliqués
- **ARIA Labels** : Éléments interactifs
- **Contraste** : Ratio WCAG AA
- **Navigation** : Au clavier
- **Focus** : Visible et clair
- **Structure** : Sémantique HTML5
- **Images** : Alt text descriptif

---

## 🚀 Optimisation Performance

### Checklist
- ✅ CSS minifié et critiques inlined
- ✅ Images optimisées (lazy loading)
- ✅ JavaScript asynchrone
- ✅ Pas de dépendances externes
- ✅ Polices Google optimisées
- ✅ Caching avec localStorage

### Objectifs
- Temps de chargement < 2s
- Lighthouse Score > 90
- Core Web Vitals optimisés

---

## 💾 Données Stockées (localStorage)

### Clés
```javascript
visitCount              // Nombre de visites global
applications          // Candidatures reçues
contactMessages       // Messages de contact
analytics            // Statistiques pages
pagesVisited         // Pages visitées (session)
```

### Accès aux Données
```javascript
// Voir le compteur
localStorage.getItem('visitCount')

// Voir les candidatures
JSON.parse(localStorage.getItem('applications'))

// Voir les messages
JSON.parse(localStorage.getItem('contactMessages'))

// Voir les analytics
JSON.parse(localStorage.getItem('analytics'))
```

---

## 🎯 Utilisation du Site

### Pour les Visiteurs
1. Accueil → Présentation générale
2. Vision → Comprendre le mouvement
3. Événements → Découvrir les brunchs
4. Rejoindre → Candidater
5. Contact → Prendre contact

### Pour les Administrateurs
- **Accès Analytics** : `Ctrl+Shift+A`
- **Données Locales** : Console du navigateur
- **Formulaires** : localStorage

---

## 📧 Informations de Contact

- **Email** : monequilibre242@gmail.com
- **Téléphone** : +242 068 673 747
- **Lieu** : Pointe-Noire, Congo

---

## 🔗 Réseaux Sociaux

- [Instagram](https://instagram.com)
- [TikTok](https://tiktok.com)

---

## 📜 Informations Légales

**Projet porté par** : Mon Équilibre  
**Développé par** : DG Club  
**Année** : 2026

### Fondatrice
**Mima Steeve** - Fondatrice de Entre'Prieur

---

## 📖 Documentation Additionnelle

### Variables CSS
Voir le fichier `css/styles.css` pour la liste des variables CSS utilisées.

### Fonctions JavaScript
Voir le fichier `js/script.js` pour la documentation des fonctions principales.

### Formulaires
- Validation complète côté client
- Messages d'erreur personnalisés
- Stockage sécurisé des données
- Confirmation d'envoi

---

## ✨ Prochains Événements

| Mois | Date | Lieu | Statut |
|------|------|------|--------|
| Février | 28 | Pointe-Noire | **Ouvert** |
| Mars | 28 | À confirmer | À venir |
| Mai | 23 | À confirmer | À venir |
| Juillet | 25 | À confirmer | À venir |
| Septembre | 26 | À confirmer | À venir |

---

## 🎓 Thématiques 2026

- 💼 Intégration de la foi dans la gestion d'entreprise
- 🌱 Croissance entrepreneuriale et spirituelle
- 🎯 Impact communautaire de l'entrepreneuriat
- 💡 Valeurs et éthique en affaires
- 🤝 Réseautage et partenariats stratégiques

---

## 🙏 Valeurs Fondamentales

1. **Foi** - Guidance spirituelle
2. **Discipline** - Engagement et responsabilité
3. **Excellence** - Qualité et dépassement
4. **Impact** - Différence positive
5. **Communauté** - Croissance collective

---

## 📝 Notes de Développement

### Couleurs Utilisées
```css
--primary-navy: #1e3a8a;      /* Bleu principal */
--primary-gold: #d4af37;       /* Or accentuation */
--white: #ffffff;              /* Blanc */
--light-gray: #f8f9fa;         /* Gris clair */
--dark-gray: #6b7280;          /* Gris foncé */
--border-light: #e5e7eb;       /* Bordure légère */
--text-dark: #1f2937;          /* Texte foncé */
```

### Points de Rupture
```css
480px   /* Mobile */
768px   /* Tablette */
1024px  /* Desktop */
```

---

## 🤝 Support

Pour toute question ou suggestion concernant le site :
- Email : monequilibre242@gmail.com
- Téléphone : +242 068 673 747

---

**Entre'Prieur © 2026**  
*Quand la foi guide l'action*
