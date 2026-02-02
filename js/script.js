/*
 *
 * Entre'Prieur - Script Principal
 * Gestion des interactions, animations et fonctionnalités JavaScript
 * ==================================================================
 */

// ========================================
// CONFIGURATION FORMSPREE
// ========================================
// Formulaire Formspree simple et gratuit
// Allez sur https://formspree.io/ et créez un compte
const FORMSPREE_CANDIDATURE_URL = 'https://formspree.io/f/xgozkozq';  // Candidatures & Adhésion

// ========================================
// CONFIGURATION GOOGLE ANALYTICS
// ========================================
// Google Analytics pour un suivi professionnel et rapports complets
// Clé: G-XXXXXXXXXX (à remplir après création de propriété GA4 sur console.google.com)
const GA_MEASUREMENT_ID = 'G-Z43JJQ6R6Z'; // ID GA4 Entre'Prieur

// ========================================
// INITIALISATION GLOBALE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialiser tous les modules
    initMenu();
    initVisitCounter();
    initDynamicEvent();    // ← Nouvelle fonction dynamique
    initCountdown();       // ← Fallback classique si events-data.js non chargé
    initFormValidation();
    initScrollAnimations();
    initAnalytics();
    // Setup project-specific forms
    setupBrunchForm();
});

// ========================================
// MENU MOBILE - HAMBURGER
// ========================================

/**
 * Gère l'ouverture/fermeture du menu mobile
 */
function initMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (!hamburger || !navMenu) return;

    // Toggle menu au clic sur hamburger
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(event) {
        const isClickInside = hamburger.contains(event.target) || navMenu.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Mettre à jour le lien actif basé sur la page actuelle
    updateActiveLink();
}

/**
 * Met à jour le lien nav actif basé sur l'URL actuelle
 */
function updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// COMPTEUR DE VISITES
// ========================================

/**
 * Initialise et gère le compteur de visites avec localStorage + Google Analytics
 * Le vrai compteur global vient de Google Analytics pour rapports complets
 */
function initVisitCounter() {
    const visitCounter = document.getElementById('visitCount');
    if (!visitCounter) return;

    // Fallback local (localStorage) si GA pas disponible
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    if (visitCounter) visitCounter.textContent = visitCount;
}
    
/**
 * Récupère un lien vers le rapport Google Analytics (pour l'admin)
 * À utiliser depuis la console ou l'interface admin
 */
function getAnalyticsReportLink() {
    return `https://analytics.google.com/analytics/web/`;
}

/**
 * Affiche un guide pour l'export de rapport mensuel
 */
function exportMonthlyReport() {
    console.log(`%c📊 EXPORT RAPPORT MENSUEL`, 'font-size:16px; font-weight:bold; color:#1e3a8a;');
    console.log(`
    1. Accédez à: https://analytics.google.com
    2. Sélectionnez votre propriété
    3. Allez à "Rapports" → "Acquisition" ou "Engagement"
    4. Filtrez par période mensuelle
    5. Cliquez sur "Exporter" → CSV/Google Sheets
    
    Métriques clés à suivre:
    - Utilisateurs totaux
    - Nouvelles sessions
    - Engagement (temps de session)
    - Taux de rebond
    - Principales pages
    `);
}

// Exposer les fonctions pour utilisation dans la console
window.getAnalyticsReportLink = getAnalyticsReportLink;
window.exportMonthlyReport = exportMonthlyReport;

// ========================================
// COMPTE À REBOURS
// ========================================

/**
 * Lance un compte à rebours vers l'événement du 28 février 2026
 */
// ========================================
// GESTION DYNAMIQUE DES ÉVÉNEMENTS
// ========================================

/**
 * Initialise le prochain événement de manière dynamique
 */
function initDynamicEvent() {
    // Vérifier si la fonction/données existent
    if (typeof getNextEvent !== 'function' || !eventsData) {
        console.log('Events data non disponible - utilisation des données par défaut');
        return;
    }

    // Obtenir le prochain événement
    const nextEvent = getNextEvent();
    
    if (!nextEvent) {
        console.log('Aucun événement à venir');
        return;
    }

    // CHARGER LES DONNÉES SAUVEGARDÉES DU LOCALSTORAGE
    // (Affiche/images uploadées via admin.html)
    loadSavedEventData(nextEvent);
    
    // Mise à jour des éléments HTML avec les données dynamiques
    updateEventDisplay(nextEvent);
    
    // Lancer le countdown
    initAdvancedCountdown(nextEvent.fullDate);
}

/**
 * Charger les données sauvegardées du localStorage
 * (uploaded via admin.html)
 */
function loadSavedEventData(event) {
    const storageKey = `event_${event.id}`;
    const savedData = localStorage.getItem(storageKey);
    
    if (savedData) {
        try {
            const saved = JSON.parse(savedData);
            // Mettre à jour l'événement avec les données sauvegardées
            if (saved.posterStatus) {
                event.posterStatus = saved.posterStatus;
                console.log(`✅ Données chargées du localStorage pour ${event.id}`);
            }
            if (saved.posterBase64) {
                // Affiche a été uploadée - mettre à jour le chemin
                event.posterBase64 = saved.posterBase64;
                console.log(`✅ Image Base64 chargée pour ${event.id}`);
            }
        } catch (e) {
            console.log('Erreur lors du chargement des données stockées:', e);
        }
    }
}

/**
 * Met à jour l'affichage de l'événement
 */
function updateEventDisplay(event) {
    // Titre
    const eventTitle = document.getElementById('eventTitle');
    if (eventTitle) eventTitle.textContent = event.title;

    // Date
    const eventDateBadge = document.getElementById('eventDateBadge');
    if (eventDateBadge) eventDateBadge.textContent = `${event.date} ${event.month} ${event.year}`;

    // Lieu
    const eventLocation = document.getElementById('eventLocation');
    if (eventLocation) eventLocation.textContent = event.location;

    // Horaire
    const eventTime = document.getElementById('eventTime');
    if (eventTime) eventTime.textContent = event.time;

    // Tarif
    const eventPrice = document.getElementById('eventPrice');
    if (eventPrice) {
        // Gérer les tarifs si c'est un tableau
        if (Array.isArray(event.price)) {
            eventPrice.textContent = event.price[0].amount;
        } else {
            eventPrice.textContent = event.price;
        }
    }

    // Places
    const eventPlaces = document.getElementById('eventPlaces');
    if (eventPlaces) eventPlaces.textContent = event.places;

    // Affiche/Poster
    const eventPoster = document.getElementById('eventPoster');
    if (eventPoster) {
        // Priorité : utiliser l'image Base64 uploadée (plus récente)
        if (event.posterBase64) {
            eventPoster.src = event.posterBase64;
            console.log('✅ Affiche affichée depuis l\'upload (Base64)');
        } else if (event.poster) {
            // Sinon utiliser le chemin par défaut
            eventPoster.src = event.poster;
        }
        eventPoster.alt = event.title;
    }

    // Badge de statut affiche
    const posterStatusBadge = document.getElementById('posterStatusBadge');
    if (posterStatusBadge) {
        if (event.posterStatus === 'ready') {
            posterStatusBadge.classList.remove('pending');
            posterStatusBadge.classList.add('ready');
            posterStatusBadge.innerHTML = '<i class="fas fa-check-circle"></i> Affiche prête';
        } else {
            posterStatusBadge.classList.remove('ready');
            posterStatusBadge.classList.add('pending');
            posterStatusBadge.innerHTML = '<i class="fas fa-clock"></i> Affiche en attente';
        }
    }
}

/**
 * Countdown avancé avec animation WOW
 */
function initAdvancedCountdown(targetDateString) {
    const days = document.getElementById('countdownDays');
    const hours = document.getElementById('countdownHours');
    const minutes = document.getElementById('countdownMinutes');

    if (!days || !hours || !minutes) {
        console.log('Éléments countdown non trouvés');
        return;
    }

    const targetDate = new Date(targetDateString).getTime();

    function updateAdvancedCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const daysValue = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hoursValue = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesValue = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            // Mise à jour avec animation
            updateCountdownValue(days, daysValue);
            updateCountdownValue(hours, hoursValue);
            updateCountdownValue(minutes, minutesValue);
        } else {
            days.textContent = '0';
            hours.textContent = '0';
            minutes.textContent = '0';
            clearInterval(countdownInterval);
        }
    }

    function updateCountdownValue(element, value) {
        const formattedValue = String(value).padStart(2, '0');
        if (element.textContent !== formattedValue) {
            element.textContent = formattedValue;
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = '';
            }, 10);
        }
    }

    // Mise à jour initiale
    updateAdvancedCountdown();

    // Mise à jour chaque seconde
    const countdownInterval = setInterval(updateAdvancedCountdown, 1000);
}

// ========================================
// COUNTDOWN CLASSIQUE (ancienne version)
// ========================================

function initCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    // Date cible: 28 février 2026 à 9:00
    const targetDate = new Date('2026-02-28T09:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days}j ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElement.textContent = 'L\'événement est en cours !';
            clearInterval(countdownInterval);
        }
    }

    // Mise à jour initiale
    updateCountdown();

    // Mise à jour chaque seconde
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// ========================================
// VALIDATION DE FORMULAIRES
// ========================================

/**
 * Initialise la validation pour tous les formulaires
 */
function initFormValidation() {
    const applicationForm = document.getElementById('applicationForm');
    const contactForm = document.getElementById('contactForm');

    if (applicationForm) {
        setupApplicationFormValidation(applicationForm);
    }
}

/**
 * Valide et gère le formulaire de candidature
 */
function setupApplicationFormValidation(form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        if (!validateApplicationForm(form)) {
            return;
        }

        // Récupérer les données du formulaire
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        console.log('📨 Candidature soumise:', data);

        try {
            // Envoyer via Formspree
            if (FORMSPREE_CANDIDATURE_URL && FORMSPREE_CANDIDATURE_URL !== 'https://formspree.io/f/YOUR_FORM_ID') {
                const response = await fetch(FORMSPREE_CANDIDATURE_URL, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: formData
                });
                if (response.ok) {
                    console.log('✅ Email envoyé via Formspree');
                } else {
                    console.warn('⚠️ Erreur Formspree');
                }
            }
        } catch (error) {
            console.warn('⚠️ Erreur Formspree, sauvegarde locale:', error);
        }

        // Afficher le message de succès
        const successMessage = document.getElementById('formSuccessMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Enregistrer les données dans localStorage (fallback)
        const submissions = JSON.parse(localStorage.getItem('applications') || '[]');
        submissions.push({
            ...data,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('applications', JSON.stringify(submissions));

        // Réinitialiser le formulaire après 2 secondes
        setTimeout(() => {
            form.reset();
            if (successMessage) {
                successMessage.style.display = 'none';
            }
        }, 3000);
    });
}

/**
 * Valide le formulaire de candidature
 */
function validateApplicationForm(form) {
    let isValid = true;
    clearAllErrors(form);

    // Validation du nom
    const fullName = form.querySelector('#fullName');
    if (!fullName.value.trim() || fullName.value.trim().length < 3) {
        showError('fullNameError', 'Le nom doit contenir au moins 3 caractères');
        isValid = false;
    }

    // Validation email
    const email = form.querySelector('#email');
    if (!isValidEmail(email.value)) {
        showError('emailError', 'Veuillez entrer une adresse email valide');
        isValid = false;
    }

    // Validation téléphone
    const phone = form.querySelector('#phone');
    if (!phone.value.trim() || phone.value.trim().length < 8) {
        showError('phoneError', 'Le téléphone doit contenir au moins 8 chiffres');
        isValid = false;
    }

    // Validation ville
    const city = form.querySelector('#city');
    if (!city.value.trim()) {
        showError('cityError', 'Veuillez entrer votre ville');
        isValid = false;
    }

    // Validation entreprise
    const companyName = form.querySelector('#companyName');
    if (!companyName.value.trim()) {
        showError('companyNameError', 'Veuillez entrer le nom de votre entreprise');
        isValid = false;
    }

    // Validation domaine
    const domain = form.querySelector('#domain');
    if (!domain.value) {
        showError('domainError', 'Veuillez sélectionner un domaine');
        isValid = false;
    }

    // Validation années d'expérience
    const yearsExperience = form.querySelector('#yearsExperience');
    if (yearsExperience.value === '' || yearsExperience.value < 0) {
        showError('yearsExperienceError', 'Veuillez entrer un nombre valide');
        isValid = false;
    }

    // Validation statut business
    const businessStatus = form.querySelector('#businessStatus');
    if (!businessStatus.value) {
        showError('businessStatusError', 'Veuillez sélectionner un statut');
        isValid = false;
    }

    // Validation motivation
    const motivation = form.querySelector('#motivation');
    if (!motivation.value.trim() || motivation.value.trim().length < 10) {
        showError('motivationError', 'La motivation doit contenir au moins 10 caractères');
        isValid = false;
    }

    // Validation adhésion aux valeurs
    const values = form.querySelector('#values');
    if (!values || !values.checked) {
        showError('valuesError', 'Vous devez accepter les valeurs de Entre\'Prieur');
        isValid = false;
    }

    return isValid;
}

/**
 * Valide un email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Affiche un message d'erreur
 */
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');

        // Ajouter la classe d'erreur au champ
        const inputName = elementId.replace('Error', '');
        const input = document.querySelector(`#${inputName}`);
        if (input) {
            input.classList.add('error');
        }
    }
}

/**
 * Efface tous les messages d'erreur
 */
function clearAllErrors(form) {
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });

    const errorInputs = form.querySelectorAll('.error');
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });
}

// ========================================
// ANIMATIONS AU SCROLL
// ========================================

/**
 * Initialise les animations au scroll
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-aos]');
    
    if (elements.length === 0) return;

    // Utiliser Intersection Observer pour les animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.getAttribute('data-aos');
                element.classList.add('fade-in-up');
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// ANALYTICS BASIQUE
// ========================================

/**
 * Initialise le suivi analytique basique
 */
function initAnalytics() {
    // Temps d'arrivée
    const pageLoadTime = performance.now();
    sessionStorage.setItem('pageLoadTime', pageLoadTime);

    // Enregistrer les pages visitées
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let pagesVisited = JSON.parse(sessionStorage.getItem('pagesVisited') || '[]');
    
    if (!pagesVisited.includes(currentPage)) {
        pagesVisited.push(currentPage);
        sessionStorage.setItem('pagesVisited', JSON.stringify(pagesVisited));
    }

    // Tracer le temps passé sur la page
    window.addEventListener('beforeunload', function() {
        const timeOnPage = Math.round((performance.now() - pageLoadTime) / 1000);
        let analytics = JSON.parse(localStorage.getItem('analytics') || '{}');
        
        if (!analytics[currentPage]) {
            analytics[currentPage] = {
                visits: 0,
                totalTime: 0,
                averageTime: 0
            };
        }

        analytics[currentPage].visits += 1;
        analytics[currentPage].totalTime += timeOnPage;
        analytics[currentPage].averageTime = Math.round(
            analytics[currentPage].totalTime / analytics[currentPage].visits
        );

        localStorage.setItem('analytics', JSON.stringify(analytics));
        
        console.log(`📊 Temps sur la page: ${timeOnPage}s`);
    });

    // Afficher les stats au clic sur Ctrl+Shift+A
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            showAnalytics();
        }
    });
}

/**
 * Affiche les statistiques analytiques
 */
function showAnalytics() {
    const analytics = JSON.parse(localStorage.getItem('analytics') || '{}');
    const applications = JSON.parse(localStorage.getItem('applications') || '[]');
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const visitCount = localStorage.getItem('visitCount') || 0;

    console.group('📊 STATISTIQUES ENTRE\'PRIEUR');
    console.log(`👤 Total des visites: ${visitCount}`);
    console.log('📄 Pages visitées:', analytics);
    console.log('📝 Candidatures reçues:', applications.length);
    console.log('📧 Messages reçus:', messages.length);
    console.groupEnd();

    alert(`
    📊 STATISTIQUES ENTRE'PRIEUR
    =============================
    👤 Total des visites: ${visitCount}
    
    📄 Pages visitées:
    ${Object.entries(analytics).map(([page, data]) => 
        `  • ${page}: ${data.visits} visites (${data.averageTime}s moyenne)`
    ).join('\n')}
    
    📝 Candidatures reçues: ${applications.length}
    📧 Messages reçus: ${messages.length}
    =============================
    `);
}

// ========================================
// UTILITAIRES
// ========================================

/**
 * Smooth scroll vers une section
 */
function smoothScroll(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Ajoute une classe après un délai
 */
function addClassAfterDelay(element, className, delay) {
    setTimeout(() => {
        element.classList.add(className);
    }, delay);
}

/**
 * Bascule une classe
 */
function toggleClass(element, className) {
    element.classList.toggle(className);
}

// ========================================
// FORMS: Inscriptions Brunch
// ========================================
/**
 * Configure le formulaire d'inscription au brunch (événements)
 */
function setupBrunchForm() {
    const form = document.getElementById('brunchForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(form));
        if (!data.fullName || !data.email) {
            alert('Veuillez renseigner votre nom et email pour réserver.');
            return;
        }

        console.log('📨 Pré-inscription Brunch:', data);

        try {
            // Envoyer via le formulaire HTML (Formspree)
            const response = await fetch(form.action, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(form)
            });
            if (response.ok) {
                console.log('✅ Pré-inscription Brunch envoyée via Formspree');
            }
        } catch (error) {
            console.warn('⚠️ Erreur Formspree:', error);
        }

        // Sauvegarder localement (fallback)
        const regs = JSON.parse(localStorage.getItem('brunchRegistrations') || '[]');
        regs.push({ ...data, timestamp: new Date().toISOString() });
        localStorage.setItem('brunchRegistrations', JSON.stringify(regs));

        form.reset();
        alert('Pré-inscription reçue — merci! Vous serez contacté pour le paiement.');
    });
}

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================

console.log(`
%c🙏 Bienvenue sur Entre'Prieur 🙏
%cRendez-vous des entrepreneurs chrétiens

Où la foi guide l'action
L'entrepreneuriat gagne en sens et en impact

Développé par DG Club | Porté par Mon Équilibre

Astuce: Appuyez sur Ctrl+Shift+A pour voir les statistiques
`, 'color: #1e3a8a; font-size: 18px; font-weight: bold; font-family: Playfair Display;', 'color: #6b7280; font-size: 14px;');
