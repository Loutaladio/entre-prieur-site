/**
 * ========================================
 * ADMIN PANEL - GESTION DES AFFICHES
 * ========================================
 * Interface pour uploader les affiches
 * et envoyer les alertes automatiquement
 */

// ========== INITIALISATION EMAILJS ==========
// ⚠️ À CONFIGURER : Remplacer par vos clés EmailJS
// Inscrivez-vous gratuitement sur https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // À remplir
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // À remplir
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // À remplir

// Essayer d'initialiser EmailJS (peut échouer si les clés ne sont pas configurées)
try {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('✅ EmailJS initialisé');
} catch (e) {
    console.warn('⚠️ EmailJS non configuré. Les alertes ne seront pas envoyées.');
}

// ========== VARIABLES GLOBALES ==========
let selectedEventId = null;
let posterFile = null;
let posterBase64 = null;

// ========== DOM ELEMENTS ==========
const eventsGrid = document.getElementById('eventsGrid');
const uploadZone = document.getElementById('uploadZone');
const posterInput = document.getElementById('posterInput');
const posterPreview = document.getElementById('posterPreview');
const previewContainer = document.getElementById('previewContainer');
const fileInfo = document.getElementById('fileInfo');
const sendBtn = document.getElementById('sendBtn');
const resetBtn = document.getElementById('resetBtn');
const alertMessage = document.getElementById('alertMessage');
const base64Container = document.getElementById('base64Container');
const base64Code = document.getElementById('base64Code');
const copyBase64Btn = document.getElementById('copyBase64Btn');
const eventNameForCode = document.getElementById('eventNameForCode');

// ========== ÉVÉNEMENTS GRILLE ==========
function initializeEventCards() {
    eventsGrid.innerHTML = '';
    
    eventsData.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-card-date">${event.date}</div>
            <div class="event-card-month">${event.month} ${event.year}</div>
        `;
        
        card.addEventListener('click', () => selectEvent(event.id, card));
        eventsGrid.appendChild(card);
    });
}

/**
 * Sélectionner un événement
 */
function selectEvent(eventId, cardElement) {
    // Retirer la sélection précédente
    document.querySelectorAll('.event-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Ajouter la sélection
    cardElement.classList.add('selected');
    selectedEventId = eventId;
    
    // Afficher message
    showAlert('✅ Événement sélectionné!', 'success');
}

// ========== UPLOAD AFFICHE (ZONE DRAG & DROP) ==========
uploadZone.addEventListener('click', () => posterInput.click());

uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
});

uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
});

uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleImageUpload(files[0]);
    }
});

posterInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleImageUpload(e.target.files[0]);
    }
});

/**
 * Traiter l'upload d'image
 */
function handleImageUpload(file) {
    // Vérifier le type
    if (!file.type.startsWith('image/')) {
        showAlert('❌ Veuillez sélectionner une image!', 'error');
        return;
    }
    
    // Vérifier la taille (5MB max)
    if (file.size > 5 * 1024 * 1024) {
        showAlert('❌ Image trop grande (max 5MB)', 'error');
        return;
    }
    
    posterFile = file;
    
    // Lire et afficher prévisualisation
    const reader = new FileReader();
    reader.onload = (e) => {
        posterBase64 = e.target.result;
        posterPreview.src = posterBase64;
        previewContainer.style.display = 'block';
        
        // Afficher infos du fichier
        const sizeKB = (file.size / 1024).toFixed(2);
        fileInfo.textContent = `📄 ${file.name} (${sizeKB} KB)`;
        
        // Afficher le code Base64 pour copie
        displayBase64Code();
        
        // Activer le bouton d'envoi
        if (selectedEventId) {
            sendBtn.disabled = false;
        }
        
        showAlert('✅ Affiche prête! Copie le code ou envoie l\'alerte.', 'success');
    };
    reader.readAsDataURL(file);
}

/**
 * Afficher le code Base64 pour copie
 */
function displayBase64Code() {
    const event = eventsData.find(e => e.id === selectedEventId);
    if (!event) return;
    
    base64Container.style.display = 'block';
    base64Code.value = posterBase64;
    eventNameForCode.textContent = event.edition;
}

// ========== ENVOI ALERTE ==========
/**
 * Envoyer l'alerte email (Option 1: EmailJS - pour vrai email)
 * OU sauvegarder localement si EmailJS non configuré
 */
async function sendAlert() {
    if (!selectedEventId) {
        showAlert('❌ Sélectionnez d\'abord un événement!', 'error');
        return;
    }
    
    if (!posterFile) {
        showAlert('❌ Uploadez une affiche d\'abord!', 'error');
        return;
    }
    
    // Récupérer l'événement
    const event = eventsData.find(e => e.id === selectedEventId);
    
    // Marquer comme prêt
    event.posterStatus = 'ready';
    event.alertSent = true;
    
    // Sauvegarder dans localStorage
    saveEventToStorage(event);
    
    // Montrer un loader
    sendBtn.disabled = true;
    sendBtn.innerHTML = '<div class="loader"></div> Envoi en cours...';
    
    try {
        // Vérifier si EmailJS est configuré
        if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            // Fallback: Simulation d'envoi
            console.log('📧 Simulation d\'alerte:');
            console.log(`Événement: ${event.edition}`);
            console.log(`Designer: ${event.designerEmail}`);
            console.log(`Admin: ${event.adminEmail}`);
            console.log(`Affiche: ${posterFile.name}`);
            
            // Simuler délai d'envoi
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            showAlert(`✅ Alerte simulée! En vrai, elle irait à:\n- ${event.designerEmail}\n- ${event.adminEmail}`, 'success');
        } else {
            // Vrai envoi via EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    to_email: `${event.designerEmail},${event.adminEmail}`,
                    event_title: event.edition,
                    event_date: `${event.date} ${event.month} ${event.year}`,
                    event_time: event.time,
                    message: `L'affiche pour cet événement est prête!`,
                    from_name: 'Entre\'Prieur - Admin'
                }
            );
            
            showAlert('✅ Alerte envoyée avec succès!', 'success');
        }
        
        // Réinitialiser après succès
        setTimeout(() => {
            resetForm();
        }, 2000);
        
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        showAlert('❌ Erreur lors de l\'envoi. Vérifiez la configuration EmailJS.', 'error');
    } finally {
        sendBtn.disabled = false;
        sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Marquer Prêt + Envoyer Alerte';
    }
}

// ========== SAUVEGARDE LOCALE ==========
/**
 * Sauvegarder dans localStorage
 * (En cas d'absence de serveur)
 */
function saveEventToStorage(event) {
    const storageKey = `event_${event.id}`;
    const eventData = {
        ...event,
        posterBase64: posterBase64,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem(storageKey, JSON.stringify(eventData));
    console.log(`✅ Événement sauvegardé: ${storageKey}`);
}

/**
 * Récupérer depuis localStorage
 */
function loadEventFromStorage(eventId) {
    const storageKey = `event_${eventId}`;
    const data = localStorage.getItem(storageKey);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}

/**
 * Réinitialiser ==========
 */
function resetForm() {
    selectedEventId = null;
    posterFile = null;
    posterBase64 = null;
    
    document.querySelectorAll('.event-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    posterInput.value = '';
    previewContainer.style.display = 'none';
    base64Container.style.display = 'none';
    sendBtn.disabled = true;
    alertMessage.classList.remove('show');
}

// ========== AFFICHER ALERTE MESSAGE ==========
function showAlert(message, type = 'info') {
    alertMessage.className = `alert alert-${type} show`;
    
    let icon = '📌';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    if (type === 'warning') icon = '⚠️';
    
    alertMessage.innerHTML = `
        <span>${icon}</span>
        <span>${message}</span>
    `;
    
    // Auto-hide après 5 secondes
    setTimeout(() => {
        alertMessage.classList.remove('show');
    }, 5000);
}

// ========== EVENT LISTENERS ==========
sendBtn.addEventListener('click', sendAlert);
resetBtn.addEventListener('click', resetForm);

// Copier le code Base64
copyBase64Btn.addEventListener('click', () => {
    base64Code.select();
    document.execCommand('copy');
    showAlert('✅ Code copié! Maintenant colle-le dans events-data.js', 'success');
});

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeEventCards();
    console.log('✅ Admin Panel chargé');
    
    // Afficher message si EmailJS non configuré
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        showAlert('⚠️ EmailJS non configuré - Mode simulation activé', 'warning');
    }
});

/**
 * ========================================
 * CONFIGURATION EMAILJS - INSTRUCTIONS
 * ========================================
 * 
 * 1. Allez sur https://www.emailjs.com/
 * 2. Créez un compte (gratuit)
 * 3. Créez un Service (Gmail, Outlook, etc.)
 * 4. Créez un Template d'email
 * 5. Récupérez vos clés:
 *    - Service ID
 *    - Template ID
 *    - Public Key
 * 6. Remplacez les 3 variables en haut de ce fichier
 * 
 * Template EmailJS devrait contenir:
 * - {{to_email}} : Adresse email destinataire
 * - {{event_title}} : Titre de l'événement
 * - {{event_date}} : Date de l'événement
 * - {{event_time}} : Heure de l'événement
 * - {{message}} : Message personnalisé
 * 
 * ========================================
 */
