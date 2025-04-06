# BJJ Assistant

Un'applicazione web per gestire e visualizzare tecniche di Brazilian Jiu-Jitsu, protetta da password.

## Caratteristiche

- Pagina di login con protezione tramite password
- Visualizzazione di tecniche di BJJ organizzate per categorie
- Possibilità di aggiungere note personali e link a video
- Design responsive per l'utilizzo su dispositivi mobili

## Come utilizzare l'applicazione

1. Accedi all'applicazione 
2. Naviga tra le diverse categorie di tecniche
3. Clicca su una tecnica per visualizzare i dettagli, i video di riferimento e le note personali
4. Utilizza il pulsante di logout per uscire dall'applicazione

## Deployment su Netlify tramite GitHub

### Prerequisiti

- Un account GitHub
- Un account Netlify

### Passaggi per il deployment

1. **Crea un repository su GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tuousername/bjj-assistant.git
   git push -u origin main
   ```

2. **Collega il repository a Netlify**

   - Accedi al tuo account Netlify
   - Clicca su "New site from Git"
   - Seleziona GitHub come provider
   - Autorizza Netlify ad accedere ai tuoi repository
   - Seleziona il repository bjj-assistant

3. **Configura le impostazioni di build**

   - Build command: lascia vuoto (non è necessario per questo progetto)
   - Publish directory: lascia vuoto o inserisci "." (la directory principale)
   - Clicca su "Deploy site"

4. **Personalizza il dominio (opzionale)**

   - Vai alle impostazioni del sito
   - Clicca su "Domain settings"
   - Puoi utilizzare un sottodominio Netlify gratuito o configurare un dominio personalizzato

5. **Aggiornamenti futuri**

   Per aggiornare il sito, basta fare push delle modifiche al repository GitHub:

   ```bash
   git add .
   git commit -m "Aggiornamento contenuti"
   git push
   ```

   Netlify rileverà automaticamente le modifiche e aggiornerà il sito.

## Personalizzazione

Per personalizzare l'applicazione:

- Modifica il file `main.html` per aggiungere nuove tecniche o categorie
- Aggiorna i link ai video con quelli dei tuoi tutorial preferiti
- Modifica le note personali in base alle tue esperienze
- Cambia la password nel file `script.js` se desideri una password diversa

## Note sulla sicurezza

Questa applicazione utilizza l'autenticazione lato client tramite localStorage. Questo metodo è adatto per uso personale ma non è sicuro per dati sensibili. La password è visibile nel codice sorgente, quindi chiunque abbia accesso al codice può vedere la password.