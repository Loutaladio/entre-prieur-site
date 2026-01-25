# 🧪 GUIDE DE TEST - Étape par Étape

## 📝 Avant de commencer

Ouvrir 2 onglets navigateur côte à côte :
- **Onglet GAUCHE** : admin.html (pour uploader)
- **Onglet DROITE** : index.html (pour voir résultat)

Ouvrir aussi la **CONSOLE (F12)** pour voir les messages de debug.

---

## 🧪 TEST 1 : Vérifier que admin.html charge

### **Étape 1.1 - Ouvrir admin.html**
```
URL: file:///[votre_chemin]/admin.html
Ou: http://localhost/[site]/admin.html
```

### **Étape 1.2 - Vérifier l'interface**
```
✓ Voir titre : "📸 UPLOADER L'AFFICHE"
✓ Voir 5 boutons : Février, Mars, Mai, Juillet, Septembre
✓ Voir zone de upload (zone grise avec caméra 🖼️)
✓ Voir 2 boutons en bas : "Marquer Prêt" et "Réinitialiser"
```

### **Étape 1.3 - Vérifier la console**
```
Ouvrir F12 → Console

Vous devriez voir:
✅ EmailJS initialisé
OU
⚠️ EmailJS non configuré

✅ Admin Panel chargé
```

**Si ✓ tout bon → TEST 1 RÉUSSI** ✅

---

## 🧪 TEST 2 : Sélectionner un événement

### **Étape 2.1 - Cliquer sur "Février"**
```
Dans admin.html (onglet GAUCHE)
Cliquer sur le bouton "28 Février"
```

### **Étape 2.2 - Vérifier la sélection**
```
✓ Bouton devient BLEU
✓ Message : "✅ Événement sélectionné!"
✓ Console affiche : "✅ Événement sélectionné!"
```

**Si ✓ tout bon → TEST 2 RÉUSSI** ✅

---

## 🧪 TEST 3 : Uploader une affiche

### **Étape 3.1 - Préparer une image**
```
Avoir une image prête :
- Format: PNG, JPG ou JPEG
- Taille: < 5MB (ex: 1-2MB c'est bien)
- Idée: Prendre screenshot, le renommer "test.jpg"
```

### **Étape 3.2 - Uploader (Méthode 1 - Clic)**
```
1. Cliquer sur zone de upload (zone grise)
2. Sélectionner votre image
3. Double-cliquer ou appuyer "Ouvrir"
```

### **Étape 3.3 - Uploader (Méthode 2 - Drag & Drop)**
```
1. Ouvrir dossier avec votre image
2. Glisser-déposer l'image sur zone de upload
```

### **Étape 3.4 - Vérifier l'upload**
```
✓ Message : "✅ Affiche prête à être envoyée!"
✓ Zone de upload change de couleur
✓ Prévisualisation s'affiche
✓ Nom du fichier affiché
✓ Taille du fichier affichée (ex: "245 KB")
✓ Bouton "Marquer Prêt" devient BLEU (actif)
```

**Si ✓ tout bon → TEST 3 RÉUSSI** ✅

---

## 🧪 TEST 4 : Envoyer l'alerte

### **Étape 4.1 - Cliquer "Marquer Prêt + Envoyer Alerte"**
```
Dans admin.html (onglet GAUCHE)
Cliquer bouton bleu : "🚀 Marquer Prêt + Envoyer Alerte"
```

### **Étape 4.2 - Vérifier la réponse**
```
✓ Message : "✅ Alerte simulée!" (ou "✅ Alerte envoyée!" si EmailJS)
✓ Bouton grisé quelques secondes (loader)
✓ Console affiche les détails de l'événement
✓ Après ~2 sec, formulaire se réinitialise
```

### **Étape 4.3 - Vérifier localStorage (Console)**
```
Ouvrir F12 → Console

Taper:
localStorage

Vous devriez voir clé: "event_event-001"

OU taper directement:
JSON.parse(localStorage.getItem('event_event-001'))

Voir les données sauvegardées ✅
```

**Si ✓ tout bon → TEST 4 RÉUSSI** ✅

---

## 🧪 TEST 5 : Vérifier mise à jour index.html

### **Étape 5.1 - Aller sur index.html (onglet DROITE)**
```
URL: file:///[votre_chemin]/index.html
Ou: http://localhost/[site]/index.html
```

### **Étape 5.2 - Vérifier avant rafraîchissement**
```
Section "PROCHAIN ÉVÉNEMENT" :
✓ Voir image placeholder par défaut (grise)
✓ Voir badge : "⏳ Affiche en attente" (JAUNE)
✓ Voir titre : "Entre'Prieur – Rendez-vous..."
✓ Voir date : "28 février 2026"
```

### **Étape 5.3 - Rafraîchir la page (F5)**
```
Appuyer F5 pour rafraîchir index.html
```

### **Étape 5.4 - Vérifier la mise à jour**
```
Section "PROCHAIN ÉVÉNEMENT" :
✓ Affiche a CHANGÉ → Maintenant voir votre image uploadée! 📸
✓ Badge a CHANGÉ → "✅ Affiche prête" (VERT)
✓ Animation pulse sur le badge ✨

Console:
✓ "✅ Données chargées du localStorage"
✓ "✅ Affiche affichée depuis l'upload (Base64)"
```

**Si ✓ TOUT BON → TEST 5 RÉUSSI** ✅

---

## 🧪 TEST 6 : Vérifier le badge

### **Étape 6.1 - Observer le badge**
```
Avant upload:
  ⏳ Affiche en attente (JAUNE)
  
Après upload:
  ✅ Affiche prête (VERT)
```

### **Étape 6.2 - Vérifier l'icône**
```
Badge JAUNE = ⏳ horloge
Badge VERT = ✅ check

Les deux doivent être visibles et différents
```

### **Étape 6.3 - Vérifier l'animation**
```
Badge JAUNE doit avoir animation "pulse"
(Petit clignotement doux)
```

**Si ✓ tout bon → TEST 6 RÉUSSI** ✅

---

## 🧪 TEST 7 : Responsivité

### **Étape 7.1 - Tester en mobile**
```
Appuyer F12 → Cliquer icône phone
OU Ctrl+Shift+M (toggle device toolbar)

Sélectionner "iPhone 12" ou "Pixel 5"
```

### **Étape 7.2 - Vérifier admin.html en mobile**
```
✓ Interface reste lisible
✓ Boutons tactiles (larges)
✓ Zone upload toujours visible
✓ Pas de débordement horizontal
```

### **Étape 7.3 - Vérifier index.html en mobile**
```
✓ Affiche s'empile verticalement
✓ Badge visible et lisible
✓ Image redimensionnée mais proportionnelle
✓ Texte lisible
```

**Si ✓ tout bon → TEST 7 RÉUSSI** ✅

---

## ✅ CHECKLIST COMPLET

```
TEST 1 - Admin.html charge?
  □ Titre visible
  □ 5 boutons visible
  □ Zone upload visible
  □ Console: ✅ Admin Panel chargé

TEST 2 - Sélection événement?
  □ Bouton devient bleu
  □ Message confirmation

TEST 3 - Upload affiche?
  □ Image prévisualisée
  □ Nom fichier affiché
  □ Taille affichée
  □ Bouton "Envoyer" actif (bleu)

TEST 4 - Envoi alerte?
  □ Message confirmation
  □ Données en localStorage
  □ Formulaire réinitialisé

TEST 5 - Index.html mise à jour?
  □ Image s'affiche
  □ Badge change couleur
  □ Console logs visibles

TEST 6 - Badge correct?
  □ Avant: Jaune (⏳)
  □ Après: Vert (✅)
  □ Animation pulse visible

TEST 7 - Responsive?
  □ Admin mobile lisible
  □ Index mobile lisible
  □ Images redimensionnées
```

Si **TOUT EST ✅** → **SYSTÈME FONCTIONNE PARFAITEMENT** 🎉

---

## 🐛 SI QUELQUE CHOSE NE FONCTIONNE PAS

### **Problème: admin.html ne charge pas**
```
Solution:
1. Vérifier l'URL du fichier
2. F12 → Console → Chercher erreur rouge
3. Vérifier que js/events-data.js existe
4. Vérifier que js/admin.js existe
```

### **Problème: Upload ne fonctionne pas**
```
Solution:
1. Vérifier taille image (< 5MB)
2. Vérifier format (PNG, JPG, JPEG)
3. F12 → Console → Chercher erreur
4. Essayer méthode drag & drop OU clic
```

### **Problème: Badge ne change pas**
```
Solution:
1. Rafraîchir F5 (pas Ctrl+R)
2. Vérifier localStorage: 
   F12 → Application → LocalStorage → Voir clé "event_event-001"
3. Vider cache: Ctrl+Shift+Delete
4. Tester dans incognito (Ctrl+Shift+N)
```

### **Problème: Affiche ne s'affiche pas**
```
Solution:
1. Rafraîchir F5
2. Vérifier console: Messages d'erreur?
3. Vérifier que image est bien uploadée
4. Vérifier taille image (pas trop grosse)
```

---

## 📊 RÉSUMÉ DES TESTS

| # | Test | Dure | Résultat |
|---|------|------|----------|
| 1 | Interface admin | 1 min | ✅/❌ |
| 2 | Sélection événement | 1 min | ✅/❌ |
| 3 | Upload affiche | 2 min | ✅/❌ |
| 4 | Envoi alerte | 1 min | ✅/❌ |
| 5 | Index.html mise à jour | 2 min | ✅/❌ |
| 6 | Badge correct | 1 min | ✅/❌ |
| 7 | Responsive | 2 min | ✅/❌ |
| **TOTAL** | **7 tests** | **~10 min** | **VALIDATE** |

---

## 🎯 SI TOUS LES TESTS RÉUSSISSENT

```
Félicitations! 🎉

Votre système fonctionne PARFAITEMENT:
✅ Upload fonctionne
✅ Email system prêt
✅ Badge dynamique
✅ Mise à jour en temps réel
✅ Responsive design

Vous pouvez:
1. Donner accès à la designer
2. Configurer EmailJS (optionnel)
3. Déployer sur serveur
```

---

## 📞 VOUS ÊTES BLOQUÉ?

Consultez:
1. F12 → Console → Erreurs rouges?
2. README_QUICK_START.md
3. IMPLEMENTATION_CHECKLIST.md
4. Code source (bien commenté)

Contact: danickarcel@gmail.com

---

**Bonne chance! 🚀 Vous allez y arriver!**
