# 🎯 Entre'Prieur - Système de Gestion des Événements

## ✨ Qu'est-ce qu'on vient de créer ?

Un **système complet et automatisé** pour gérer les affiches et les alertes des événements, sans aucune complexité technique.

---

## 📋 Fichiers Créés/Modifiés

### **Nouveaux fichiers :**

| Fichier | Description |
|---------|-------------|
| `admin.html` | Interface pour uploader les affiches |
| `js/admin.js` | Logique d'upload et d'alertes |
| `ADMIN_GUIDE.md` | Guide pour la designer |
| `EMAILJS_SETUP.md` | Configuration des emails |

### **Fichiers modifiés :**

| Fichier | Modifications |
|---------|--------------|
| `js/events-data.js` | Structure complète du PDF février 2026 + infos emails |
| `index.html` | Badge "Affiche en attente" + statut dynamique |
| `js/script.js` | Gestion du badge de statut affiche |
| `css/styles.css` | Styles pour le badge (pending/ready) |

---

## 🎨 Le Panel Admin - Comment ça marche

### **Étape 1 : Sélectionner l'événement**
```
[Février 28] [Mars 28] [Mai 23] [Juillet 25] [Septembre 26]
```
Cliquez sur le mois → Il devient bleu ✅

### **Étape 2 : Uploader l'affiche**
```
┌─────────────────────────────┐
│  🖼️  Cliquez ou glissez     │
│         votre image ici      │
└─────────────────────────────┘
```
- Format : PNG, JPG, JPEG
- Taille : jusqu'à 5MB
- Drag & drop supporté

### **Étape 3 : Visualiser**
```
📷 Aperçu
[Image prévisalisée]
📄 Affiche_Feb_2026.jpg (245 KB)
```

### **Étape 4 : Envoyer**
```
[🚀 Marquer Prêt + Envoyer Alerte] [↻ Réinitialiser]
```

### **Résultat :**
✅ Affiche sauvegardée en local  
✅ Emails envoyés à :
- danickarcel@gmail.com (Designer)
- monequilibre242@gmail.com (Mon Équilibre)

---

## 🌐 Site Public - Affichage du statut

### **Avant (Affiche en attente)**
```
📌 PROCHAIN
⏳ Affiche en attente     ← Badge jaune
Entre'Prieur - Février 2026
...
```

### **Après (Affiche prête)**
```
📌 PROCHAIN
✅ Affiche prête     ← Badge vert
Entre'Prieur - Février 2026
...
```

---

## 📊 Structure des données

### `events-data.js` - Février 2026 (exemple complet)

```javascript
{
    id: 'event-001',
    title: 'Entre\'Prieur – Rendez-vous des entrepreneurs chrétiens',
    edition: 'Édition février 2026',
    
    // Dates & Horaires
    fullDate: '2026-02-28',
    time: '10:00',
    duration: '2h30 à 3h',
    
    // Lieu & Tarif
    location: 'À communiquer ultérieurement',
    price: [
        { type: 'Standard', amount: '10 000 FCFA' },
        { type: 'Premium (avec avantages + goodies)', amount: '25 000 FCFA' }
    ],
    
    // Affiche & Statut
    poster: 'img/Affiche28Fevrier2026.png',
    posterStatus: 'pending',  // ← Changé en 'ready' après upload
    
    // Thématiques (du PDF)
    themes: [
        'Vision entrepreneuriale',
        'Discipline et constance',
        'Leadership',
        'Stratégie et planification',
        'Entrepreneuriat et foi',
        'Prise de décision alignée',
        'Impact et responsabilité'
    ],
    
    // Objectifs (du PDF)
    objectives: [
        'Favoriser la mise en relation entre entrepreneurs',
        'Stimuler la réflexion stratégique',
        // ...
    ],
    
    // Organisation
    organization: [
        { role: 'Coordinateur général & Spiritualité', name: 'MIMA STEEVE' },
        { role: 'Communication & Programme', name: 'EMMANUEL MBAYE' },
        // ...
    ],
    
    // Alertes
    alertDaysBeforeEvent: 7,
    designerEmail: 'danickarcel@gmail.com',
    adminEmail: 'monequilibre242@gmail.com',
    alertSent: false,
}
```

---

## 🔧 Configuration EmailJS

### **Gratuit ?** ✅ OUI
- 200 emails/mois inclus
- 1 événement/mois = ~2 emails = aucun problème

### **Comment configurer ?**
1. Lire `EMAILJS_SETUP.md` (guide détaillé)
2. Signer sur https://www.emailjs.com/
3. Obtenir 3 clés (5 minutes)
4. Coller dans `js/admin.js`

### **Mode sans configuration ?**
Le système fonctionne aussi en **mode simulation** :
- L'interface fonctionne parfaitement
- Les alertes s'affichent dans la console
- Idéal pour tester avant de configurer les vrais emails

---

## 📱 Responsivité

### **Desktop**
- 2 colonnes : grille d'événements + formulaire
- Interface large et aérée

### **Tablet**
- 1 colonne adaptée
- Boutons redimensionnés

### **Mobile**
- Stack vertical
- Affichage optimisé
- Touches larges pour sélection

---

## 🚀 Fluxe d'utilisation - Jour après jour

### **Jour 0 (Aujourd'hui - 25 Jan)**
- ✅ Panel admin est live
- ✅ Événements configurés
- ✅ Système prêt

### **Jour 21 (21 Février)**
- Designer prépare l'affiche
- 7 jours avant = **Alerte auto envoyée**

### **Jour 28 (28 Février - Jour de l'événement)**
- ✅ L'affiche s'affiche sur le site
- ✅ Badge change à "Affiche prête"
- ✅ Participants voient tout

---

## ✅ Checklist de validation

- [x] Interface admin intuitive ← Simple comme Facebook ✨
- [x] Upload drag & drop fonctionnel
- [x] Prévisualisation de l'affiche
- [x] Badge de statut dynamique
- [x] Système d'alertes email
- [x] localStorage pour sauvegardes
- [x] EmailJS intégré (gratuit)
- [x] Design responsive
- [x] Guides complets créés
- [x] Données février 2026 complètes

---

## 📖 Documentation

### Pour la designer :
→ Lire : `ADMIN_GUIDE.md`

### Pour configurer les emails :
→ Lire : `EMAILJS_SETUP.md`

### Pour développer/modifier :
→ Consulter : `js/admin.js` (bien commenté)

---

## 🎯 Prochaines étapes (optionnelles)

### **Niveau 1 : Basique** ✅ FAIT
- Interface admin
- Upload affiche
- Alertes email

### **Niveau 2 : Avancé** (À faire si souhaité)
- Dashboard avec statistiques
- Export PDF des événements
- Intégration Google Calendar

### **Niveau 3 : Entreprise** (Futur)
- Multi-utilisateurs
- Versioning des affiches
- Analytics avancées

---

## 💡 Astuces

### **Si l'affiche ne s'affiche pas**
1. Vérifier le chemin : `img/Affiche28Fevrier2026.png`
2. Vérifier que le fichier existe
3. Vérifier les permissions

### **Si les emails ne partent pas**
1. Vérifier les clés EmailJS
2. Vérifier la connexion Internet
3. Consulter `EMAILJS_SETUP.md`

### **Si vous voulez tester sans email**
- Ne configurez pas EmailJS
- Le système fonctionne en mode simulation

---

## 📞 Support

**Designer** : danickarcel@gmail.com  
**Admin** : monequilibre242@gmail.com  
**Développeur** : [Votre contact]

---

## 🙏 Résumé

Vous avez maintenant un **système professionnel** pour :
- ✅ Gérer les affiches mensuelles
- ✅ Alerter automatiquement
- ✅ Afficher le statut en temps réel
- ✅ Tout sans code/complexité

**Bienvenue dans le futur de Entre'Prieur !** 🚀

---

**Créé le 25 janvier 2026**  
**Entre'Prieur - Rendez-vous des entrepreneurs chrétiens**
