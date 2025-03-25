document.addEventListener('DOMContentLoaded', function() {
    // Verifica autenticazione
    checkAuthentication();
    
    // Gestione del logout
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', handleLogout);
    
    // Funzione per verificare se l'utente è autenticato
    function checkAuthentication() {
        const isAuthenticated = localStorage.getItem('bjjAuthenticated') === 'true';
        
        if (!isAuthenticated) {
            // Se non autenticato, reindirizza alla pagina di login
            window.location.href = 'index.html';
        }
    }
    
    // Funzione per gestire il logout
    function handleLogout() {
        // Rimuovi lo stato di autenticazione
        localStorage.removeItem('bjjAuthenticated');
        
        // Reindirizza alla pagina di login
        window.location.href = 'index.html';
    }
    

    
    // Carica il tema salvato dal localStorage o usa il tema di sistema
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            applyTheme(savedTheme === 'dark');
        } else {
            // Usa le preferenze del sistema
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark);
        }
    }
    
    // Inizializza il tema
    initializeTheme();
    
    // Gestisce il cambio di tema
    themeToggle.addEventListener('change', function() {
        applyTheme(this.checked);
    });
    
    // Ascolta i cambiamenti del tema di sistema
    window.matchMedia('(prefers-color-scheme: dark)').addListener(function(e) {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches);
        }
    });
    

});

// Funzione per mostrare/nascondere i dettagli delle tecniche
function toggleDetails(id) {
    const detailsElement = document.getElementById(id);
    
    if (detailsElement.classList.contains('hidden')) {
        // Nascondi tutti i dettagli prima di mostrare quello selezionato
        const allDetails = document.querySelectorAll('.technique-details');
        allDetails.forEach(function(detail) {
            detail.classList.add('hidden');
        });
        
        // Mostra i dettagli selezionati
        detailsElement.classList.remove('hidden');
    } else {
        // Nascondi i dettagli se sono già visibili
        detailsElement.classList.add('hidden');
    }
}