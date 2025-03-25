document.addEventListener('DOMContentLoaded', function() {
    // Password corretta per accedere al contenuto
    const correctPassword = 'bjj2025';
    
    // Elementi del DOM
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const errorMessage = document.getElementById('error-message');
    
    // Verifica se l'utente è già autenticato
    checkAuthentication();
    
    // Gestione del click sul pulsante di login
    loginButton.addEventListener('click', handleLogin);
    
    // Gestione dell'invio del form con il tasto Enter
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });
    
    // Funzione per gestire il login
    function handleLogin() {
        const password = passwordInput.value.trim();
        
        if (password === correctPassword) {
            // Salva lo stato di autenticazione
            localStorage.setItem('bjjAuthenticated', 'true');
            
            // Reindirizza alla pagina principale
            window.location.href = 'main.html';
        } else {
            // Mostra messaggio di errore
            errorMessage.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }
    
    // Funzione per verificare se l'utente è già autenticato
    function checkAuthentication() {
        const isAuthenticated = localStorage.getItem('bjjAuthenticated') === 'true';
        
        if (isAuthenticated) {
            window.location.href = 'main.html';
        }
    }
});