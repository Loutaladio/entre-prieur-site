/**
 * ========================================
 * DONNÉES CENTRALISÉES DES ÉVÉNEMENTS
 * ========================================
 * Source unique de vérité pour tous les événements
 * Structure basée sur les fiches PDF du designer
 * 
 * 📋 CHAQUE ÉVÉNEMENT CONTIENT :
 * - Infos de base (date, lieu, tarif)
 * - Thématiques (liste complète)
 * - Objectifs (général + spécifiques)
 * - Statut de l'affiche (pending/ready)
 * - Référence PDF
 */

const eventsData = [
    {
        // ========== IDENTIFIANTS ==========
        id: 'event-001',
        title: 'Entre\'Prieur – Rendez-vous des entrepreneurs chrétiens',
        edition: 'Édition février 2026',
        
        // ========== DATES & HORAIRES ==========
        month: 'Février',
        date: 28,
        fullDate: '2026-02-28',
        year: 2026,
        time: '10:00',
        duration: '2h30 à 3h',
        
        // ========== LIEU & TARIF ==========
        location: 'À communiquer ultérieurement',
        price: [
            { type: 'Standard', amount: '10 000 FCFA' },
            { type: 'Premium (avec avantages + goodies)', amount: '25 000 FCFA' }
        ],
        places: 'Places limitées',
        
        // ========== AFFICHE & DOCUMENTS ==========
        poster: 'img/Affiche28Fevrier2026.png',
        posterBase64: null,  // À remplir via admin.html (upload + copie Base64 depuis admin.html)
        posterStatus: 'pending',  // pending | ready
        pdfReference: 'docs/28fev2026.pdf',
        
        // ========== THÉMATIQUES ==========
        themes: [
            'Vision entrepreneuriale',
            'Discipline et constance',
            'Leadership',
            'Stratégie et planification',
            'Entrepreneuriat et foi',
            'Prise de décision alignée',
            'Impact et responsabilité'
        ],
        
        // ========== OBJECTIFS ==========
        objectiveGeneral: 'Créer un espace d\'échange, de réflexion et de structuration pour concilier foi, vision et action',
        objectives: [
            'Favoriser la mise en relation entre entrepreneurs',
            'Stimuler la réflexion stratégique',
            'Encourager la discipline et la planification',
            'Introduire la philosophie d\'Entre\'Prieur',
            'Poser les bases d\'un réseau engagé et structuré'
        ],
        
        // ========== CONTEXTE & ORGANISATEURS ==========
        carrier: 'Mon Équilibre',
        carrierDescription: 'Plateforme axée sur vision, discipline, alignement et impact',
        targetAudience: 'Entrepreneurs, dirigeants, porteurs de projets, indépendants, freelances',
        format: 'Brunch en présentiel, interactif et participatif avec temps de prière, réflexion et discussions pratiques',
        vision: 'Quand la foi guide l\'action, l\'entrepreneuriat gagne en sens et en impact',
        context: 'Première édition inaugurale du concept',
        
        // ========== ORGANISATION & RÔLES ==========
        organization: [
            { role: 'Coordinateur général & Spiritualité', name: 'MIMA STEEVE' },
            { role: 'Communication & Programme', name: 'EMMANUEL MBAYE' },
            { role: 'Logistique & Restauration', name: 'GLORIA CÉLESTE LOUZOLO' },
            { role: 'Finance/Budget', name: 'BERTINA DÉBORAH BALEZANABO' }
        ],
        
        // ========== ALERTES & NOTIFICATIONS ==========
        alertDaysBeforeEvent: 7,
        designerEmail: 'danickarcel@gmail.com',
        adminEmail: 'monequilibre242@gmail.com',
        alertSent: false,
        
        // ========== STATUT ==========
        status: 'À venir'
    },

    // ========== MARS 2026 ==========
    {
        id: 'event-002',
        title: 'Entre\'Prieur – Rendez-vous des entrepreneurs chrétiens',
        edition: 'Édition mars 2026',
        month: 'Mars',
        date: 28,
        fullDate: '2026-03-28',
        year: 2026,
        time: '10:00',
        duration: '2h30 à 3h',
        location: 'À communiquer ultérieurement',
        price: [
            { type: 'Standard', amount: '10 000 FCFA' },
            { type: 'Premium (avec avantages + goodies)', amount: '25 000 FCFA' }
        ],
        places: 'Places limitées',
        poster: 'img/AfficheMars2026.png',
        posterBase64: null,  // À remplir via admin.html
        posterStatus: 'pending',
        pdfReference: 'docs/28mars2026.pdf',
        themes: [],  // À remplir par le designer
        objectives: [],
        alertDaysBeforeEvent: 7,
        designerEmail: 'danickarcel@gmail.com',
        adminEmail: 'monequilibre242@gmail.com',
        alertSent: false,
        status: 'À venir'
    },

    // ========== MAI 2026 ==========
    {
        id: 'event-003',
        title: 'Entre\'Prieur – Rendez-vous des entrepreneurs chrétiens',
        edition: 'Édition mai 2026',
        month: 'Mai',
        date: 23,
        fullDate: '2026-05-23',
        year: 2026,
        time: '10:00',
        duration: '2h30 à 3h',
        location: 'À communiquer ultérieurement',
        price: [
            { type: 'Standard', amount: '10 000 FCFA' },
            { type: 'Premium (avec avantages + goodies)', amount: '25 000 FCFA' }
        ],
        places: 'Places limitées',
        poster: 'img/AfficheMai2026.png',
        posterBase64: null,  // À remplir via admin.html
        posterStatus: 'pending',
        pdfReference: 'docs/23mai2026.pdf',
        themes: [],
        objectives: [],
        alertDaysBeforeEvent: 7,
        designerEmail: 'danickarcel@gmail.com',
        adminEmail: 'monequilibre242@gmail.com',
        alertSent: false,
        status: 'À venir'
    },

    // ========== JUILLET 2026 ==========
    {
        id: 'event-004',
        title: 'Entre\'Prieur – Rendez-vous des entrepreneurs chrétiens',
        edition: 'Édition juillet 2026',
        month: 'Juillet',
        date: 25,
        fullDate: '2026-07-25',
        year: 2026,
        time: '10:00',
        duration: '2h30 à 3h',
        location: 'À communiquer ultérieurement',
        price: [
            { type: 'Standard', amount: '10 000 FCFA' },
            { type: 'Premium (avec avantages + goodies)', amount: '25 000 FCFA' }
        ],
        places: 'Places limitées',
        poster: 'img/AffichejuIllet2026.png',
        posterBase64: null,  // À remplir via admin.html
        posterStatus: 'pending',
        pdfReference: 'docs/25juillet2026.pdf',
        themes: [],
        objectives: [],
        alertDaysBeforeEvent: 7,
        designerEmail: 'danickarcel@gmail.com',
        adminEmail: 'monequilibre242@gmail.com',
        alertSent: false,
        status: 'À venir'
    },

    // ========== SEPTEMBRE 2026 ==========
    {
        id: 'event-005',
        title: 'Entre\'Prieur – Rendez-vous des entrepreneurs chrétiens',
        edition: 'Édition septembre 2026',
        month: 'Septembre',
        date: 26,
        fullDate: '2026-09-26',
        year: 2026,
        time: '10:00',
        duration: '2h30 à 3h',
        location: 'À communiquer ultérieurement',
        price: [
            { type: 'Standard', amount: '10 000 FCFA' },
            { type: 'Premium (avec avantages + goodies)', amount: '25 000 FCFA' }
        ],
        places: 'Places limitées',
        poster: 'img/AfficheSeptembre2026.png',
        posterBase64: null,  // À remplir via admin.html
        posterStatus: 'pending',
        pdfReference: 'docs/26septembre2026.pdf',
        themes: [],
        objectives: [],
        alertDaysBeforeEvent: 7,
        designerEmail: 'danickarcel@gmail.com',
        adminEmail: 'monequilibre242@gmail.com',
        alertSent: false,
        status: 'À venir'
    }
];

/**
 * Fonction pour obtenir le prochain événement
 */
function getNextEvent() {
    const today = new Date();
    return eventsData.find(event => new Date(event.fullDate) > today);
}

/**
 * Fonction pour calculer le temps restant (countdown)
 */
function calculateCountdown(targetDate) {
    const today = new Date();
    const target = new Date(targetDate);
    
    const msPerDay = 24 * 60 * 60 * 1000;
    const msPerHour = 60 * 60 * 1000;
    const msPerMinute = 60 * 1000;
    
    const diff = target - today;
    
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    
    const days = Math.floor(diff / msPerDay);
    const hours = Math.floor((diff % msPerDay) / msPerHour);
    const minutes = Math.floor((diff % msPerHour) / msPerMinute);
    const seconds = Math.floor((diff % msPerMinute) / 1000);
    
    return { days, hours, minutes, seconds, expired: false };
}

/**
 * Fonction pour formater le countdown
 */
function formatCountdown(countdown) {
    if (countdown.expired) {
        return 'Événement passé';
    }
    return `${countdown.days}j ${countdown.hours}h ${countdown.minutes}m`;
}

/**
 * ========================================
 * GESTION DES ALERTES EMAIL
 * ========================================
 * Vérifie si une alerte doit être envoyée
 * (7 jours avant l'événement)
 */

function checkAndSendAlerts() {
    const today = new Date();
    
    eventsData.forEach(event => {
        const eventDate = new Date(event.fullDate);
        const daysUntilEvent = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
        
        // Vérifier si c'est le jour de l'alerte ET que l'affiche est toujours pending
        if (daysUntilEvent === event.alertDaysBeforeEvent && !event.alertSent && event.posterStatus === 'pending') {
            sendDesignerAlert(event);
            event.alertSent = true;  // Marquer comme envoyée pour ne pas renvoyer
        }
    });
}

/**
 * Envoyer une alerte au designer
 * (À intégrer avec un vrai service d'email)
 */
function sendDesignerAlert(event) {
    console.log(`📧 ALERTE AFFICHE NÉCESSAIRE`);
    console.log(`
        ========================================
        Événement : ${event.edition}
        Date : ${event.date} ${event.month} ${event.year}
        Jours restants : ${event.alertDaysBeforeEvent}
        ========================================
        
        Destinataires :
        - Designer : ${event.designerEmail}
        - Admin : ${event.adminEmail}
        
        Message : L'affiche pour cet événement doit être prête dans 7 jours !
        Référence PDF : ${event.pdfReference}
    `);
    
    // TODO: Intégrer un vrai service (SendGrid, Mailgun, PHP mail, etc.)
}

/**
 * Vérifier si l'affiche existe
 */
function isPosterReady(event) {
    return event.posterStatus === 'ready';
}

/**
 * Obtenir le statut de l'affiche (pour affichage)
 */
function getPosterStatusBadge(event) {
    if (event.posterStatus === 'ready') {
        return '<span class="badge badge-success">✅ Affiche prête</span>';
    } else {
        return '<span class="badge badge-warning">⏳ Affiche en attente</span>';
    }
}
