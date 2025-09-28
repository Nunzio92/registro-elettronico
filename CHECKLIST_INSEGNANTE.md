# ✅ Checklist per l'Insegnante
## Guida per Condurre il Corso di 2 Giorni

---

## 📋 Preparazione Pre-Corso

### 🛠️ Setup Tecnico (1 settimana prima)

**Per ogni postazione studente:**
- [ ] Node.js v16+ installato
- [ ] VS Code con estensioni:
  - [ ] ES7+ React/Redux/React-Native snippets
  - [ ] Bracket Pair Colorizer
  - [ ] Auto Rename Tag
  - [ ] Prettier - Code formatter
- [ ] Browser moderno (Chrome/Firefox) con React DevTools
- [ ] Git configurato con nome e email
- [ ] Accesso a internet stabile

**Repository e Materiali:**
- [ ] Fork del progetto per ogni studente
- [ ] Slide di presentazione preparate
- [ ] Esempi di codice testati
- [ ] Backup del progetto funzionante

### 📚 Materiale Didattico

**Documenti stampati (opzionale):**
- [ ] Cheat sheet JavaScript ES6
- [ ] Cheat sheet React Hooks
- [ ] Lista comandi Git essenziali
- [ ] Glossario termini tecnici

**Risorse digitali:**
- [ ] Link a documentazione ufficiale
- [ ] Video tutorial di backup
- [ ] Esempi di codice su CodePen/CodeSandbox

---

## 🎯 GIORNO 1: Checklist Attività

### 🌅 Mattina (09:00 - 12:00)

#### ⏰ 09:00-09:30: Introduzione e Setup
**Obiettivi:**
- [ ] Presentazioni e aspettative
- [ ] Verifica setup tecnico
- [ ] Panoramica progetto finale

**Script introduttivo:**
```
"Benvenuti! Nei prossimi 2 giorni costruiremo insieme un'applicazione web moderna. 
Non preoccupatevi se alcuni concetti sembrano complessi all'inizio - 
impareremo passo dopo passo, sempre con esempi pratici."
```

**Checklist tecnica:**
- [ ] Tutti riescono ad aprire VS Code
- [ ] `npm --version` funziona per tutti
- [ ] Repository clonato correttamente
- [ ] `npm install` completato senza errori
- [ ] `npm start` avvia l'applicazione

**⚠️ Problemi comuni:**
- Permessi amministratore per installazioni
- Proxy aziendale che blocca npm
- Porte 3000/3001 già occupate

#### ⏰ 09:30-10:30: React Fundamentals
**Obiettivi:**
- [ ] Spiegare cos'è React e perché si usa
- [ ] Mostrare JSX con esempi live
- [ ] Creare primo componente insieme

**Metodologia:**
1. **Spiegazione teorica** (10 min): Cos'è un componente
2. **Live coding** (15 min): Creare componente `Saluto`
3. **Pratica guidata** (15 min): Studenti creano `CartaStudente`
4. **Condivisione** (10 min): Alcuni studenti mostrano il loro lavoro

**Punti chiave da enfatizzare:**
- [ ] "Componenti sono come mattoncini LEGO"
- [ ] "JSX è HTML dentro JavaScript"
- [ ] "Props sono come parametri di una funzione"

**Verifica comprensione:**
- [ ] Tutti hanno creato il componente `Saluto`
- [ ] Capiscono la differenza tra HTML e JSX
- [ ] Sanno passare props semplici

#### ⏰ 10:45-11:45: useState Hook
**Obiettivi:**
- [ ] Spiegare il concetto di "stato"
- [ ] Mostrare useState con contatore
- [ ] Implementare form controllati

**Demo live coding:**
```jsx
// Inizia con questo esempio semplice
function Contatore() {
  const [numero, setNumero] = useState(0);
  
  return (
    <div>
      <p>Numero: {numero}</p>
      <button onClick={() => setNumero(numero + 1)}>+1</button>
    </div>
  );
}
```

**Esercizio guidato:**
- [ ] Studenti aggiungono bottone "-1"
- [ ] Aggiungono bottone "Reset"
- [ ] Implementano limiti (min/max)

**Concetti da verificare:**
- [ ] Capiscono che lo state è "memoria" del componente
- [ ] Sanno quando usare useState
- [ ] Comprendono il pattern di aggiornamento immutabile

#### ⏰ 11:45-12:00: Context API Introduzione
**Obiettivi:**
- [ ] Spiegare il problema del "props drilling"
- [ ] Introdurre il concetto di Context
- [ ] Mostrare AuthContext esistente

**Approccio:**
1. **Problema** (5 min): Mostrare props drilling con esempio
2. **Soluzione** (10 min): Spiegare Context come "scatola magica"

---

### 🌆 Pomeriggio (14:00 - 16:15)

#### ⏰ 14:00-15:00: AuthContext Implementation
**Obiettivi:**
- [ ] Analizzare AuthContext esistente
- [ ] Capire Provider pattern
- [ ] Implementare custom hook useAuth

**Metodologia:**
1. **Code reading** (20 min): Leggere AuthContext.js insieme
2. **Spiegazione pattern** (20 min): Provider, Consumer, Hook
3. **Modifica guidata** (20 min): Aggiungere funzionalità

**Esercizio pratico:**
- [ ] Aggiungere campo "Ricordami" al login
- [ ] Mostrare nome utente nella navbar
- [ ] Implementare logout con conferma

#### ⏰ 15:15-16:00: LoginForm Completo
**Obiettivi:**
- [ ] Analizzare form controllati
- [ ] Gestire validazione
- [ ] Integrare con AuthContext

**Punti di attenzione:**
- [ ] Spiegare `e.preventDefault()`
- [ ] Mostrare pattern `[name]: value`
- [ ] Gestione errori user-friendly

#### ⏰ 16:00-16:15: Recap e Q&A
**Attività:**
- [ ] Riassunto concetti appresi
- [ ] Domande e chiarimenti
- [ ] Anteprima giorno 2

---

## 🎯 GIORNO 2: Checklist Attività

### 🌅 Mattina (09:00 - 12:00)

#### ⏰ 09:00-09:30: Recap e Warm-up
**Attività:**
- [ ] Quiz veloce sui concetti del giorno 1
- [ ] Risoluzione problemi homework (se assegnato)
- [ ] Setup per giorno 2

**Quiz suggerito:**
1. "Cos'è JSX?"
2. "Come si crea uno state in React?"
3. "A cosa serve il Context API?"

#### ⏰ 09:30-10:30: CSS Variables e Theming
**Obiettivi:**
- [ ] Spiegare CSS Custom Properties
- [ ] Mostrare vantaggi vs CSS-in-JS
- [ ] Implementare toggle tema

**Demo pratica:**
```css
/* Mostrare questo esempio live */
:root {
  --primary: #1976d2;
  --background: #ffffff;
}

[data-theme="dark"] {
  --primary: #90caf9;
  --background: #121212;
}

.button {
  background: var(--primary);
  color: var(--background);
}
```

**Esercizio:**
- [ ] Studenti creano il loro tema personalizzato
- [ ] Aggiungono colori custom
- [ ] Testano il toggle

#### ⏰ 10:45-11:45: React Router
**Obiettivi:**
- [ ] Spiegare SPA vs MPA
- [ ] Configurare routing base
- [ ] Implementare navigazione

**Concetti chiave:**
- [ ] BrowserRouter vs HashRouter
- [ ] Routes e Route components
- [ ] Link vs anchor tag
- [ ] useNavigate hook

**Esercizio guidato:**
- [ ] Aggiungere nuova pagina "Profilo"
- [ ] Creare menu di navigazione
- [ ] Implementare breadcrumb semplice

#### ⏰ 11:45-12:00: useEffect Deep Dive
**Obiettivi:**
- [ ] Spiegare side effects
- [ ] Mostrare dependency array
- [ ] Gestire cleanup

**Pattern essenziali:**
```jsx
// Mostrare questi 3 pattern principali
useEffect(() => {
  // Solo al mount
}, []);

useEffect(() => {
  // Quando cambia dependency
}, [dependency]);

useEffect(() => {
  // Con cleanup
  return () => {
    // Pulizia
  };
}, []);
```

---

### 🌆 Pomeriggio (14:00 - 16:15)

#### ⏰ 14:00-15:00: HTTP Service e API
**Obiettivi:**
- [ ] Spiegare fetch API
- [ ] Gestire async/await
- [ ] Implementare error handling

**Demo live:**
```jsx
// Esempio progressivo
const [dati, setDati] = useState([]);
const [loading, setLoading] = useState(true);
const [errore, setErrore] = useState(null);

useEffect(() => {
  const fetchDati = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/dati');
      const result = await response.json();
      setDati(result);
    } catch (error) {
      setErrore(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  fetchDati();
}, []);
```

#### ⏰ 15:15-16:00: Integrazione Completa
**Obiettivi:**
- [ ] Connettere tutti i pezzi
- [ ] Testare l'applicazione completa
- [ ] Debugging comune

**Attività:**
- [ ] Test completo del flusso login
- [ ] Verifica cambio tema
- [ ] Test navigazione
- [ ] Controllo chiamate API

#### ⏰ 16:00-16:15: Wrap-up e Next Steps
**Attività:**
- [ ] Celebrare i risultati ottenuti
- [ ] Discutere possibili miglioramenti
- [ ] Fornire risorse per continuare

---

## 🎓 Valutazione e Feedback

### 📊 Metodi di Valutazione

**Valutazione Formativa (durante il corso):**
- [ ] Osservazione diretta durante esercizi
- [ ] Domande frequenti per verificare comprensione
- [ ] Peer review tra studenti
- [ ] Auto-valutazione con checklist

**Valutazione Sommativa (fine corso):**
- [ ] Progetto pratico completato
- [ ] Presentazione di 5 minuti del proprio lavoro
- [ ] Quiz finale sui concetti chiave
- [ ] Portfolio con tutti gli esercizi

### 📝 Rubrica di Valutazione

| Aspetto | Eccellente (4) | Buono (3) | Sufficiente (2) | Da migliorare (1) |
|---------|----------------|-----------|-----------------|-------------------|
| **Partecipazione** | Sempre attivo, aiuta i compagni | Generalmente attivo | Partecipa quando richiesto | Passivo, distratto |
| **Comprensione** | Applica concetti in nuovi contesti | Comprende e applica correttamente | Comprende con aiuto | Difficoltà di comprensione |
| **Codice** | Pulito, ben strutturato, commentato | Funzionante e organizzato | Funzionante ma disordinato | Non funzionante o copiato |
| **Problem Solving** | Risolve autonomamente problemi complessi | Risolve la maggior parte dei problemi | Risolve problemi semplici | Ha bisogno di aiuto costante |

### 🔄 Raccolta Feedback

**Feedback degli studenti:**
- [ ] Questionario anonimo fine giornata
- [ ] Feedback verbale durante le pause
- [ ] Suggerimenti per miglioramenti

**Domande suggerite:**
1. "Quale concetto è stato più difficile?"
2. "Cosa vorresti approfondire?"
3. "Il ritmo è stato appropriato?"
4. "Cosa cambieresti del corso?"

---

## 🚨 Gestione Problemi Comuni

### 🐛 Problemi Tecnici

**Errori di installazione:**
```bash
# Soluzioni comuni
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Per problemi di permessi (Mac/Linux)
sudo chown -R $(whoami) ~/.npm
```

**Errori di compilazione:**
- [ ] Controllare sintassi JSX (parentesi, virgole)
- [ ] Verificare import/export
- [ ] Controllare nomi variabili (case-sensitive)

**Browser non si aggiorna:**
- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Disabilitare cache in DevTools
- [ ] Controllare console per errori

### 👥 Gestione Classe

**Studenti in difficoltà:**
- [ ] Pair programming con compagno più esperto
- [ ] Esercizi semplificati
- [ ] Supporto individuale durante pause

**Studenti avanzati:**
- [ ] Esercizi bonus più complessi
- [ ] Ruolo di mentor per i compagni
- [ ] Ricerca e presentazione di argomenti avanzati

**Gestione tempo:**
- [ ] Buffer di 10-15 min per ogni sessione
- [ ] Attività alternative se si finisce prima
- [ ] Priorità chiare su cosa è essenziale

---

## 📚 Risorse di Supporto

### 🔗 Link Utili da Condividere

**Documentazione:**
- [React Docs](https://react.dev) - Documentazione ufficiale
- [MDN Web Docs](https://developer.mozilla.org) - Riferimento JavaScript
- [React Router](https://reactrouter.com) - Routing documentation

**Tutorial e Guide:**
- [React Tutorial](https://react.dev/learn/tutorial-tic-tac-toe) - Tutorial ufficiale
- [JavaScript.info](https://javascript.info) - JavaScript moderno
- [CSS Tricks](https://css-tricks.com) - CSS e layout

**Strumenti:**
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Extension browser
- [CodePen](https://codepen.io) - Playground online
- [Prettier](https://prettier.io) - Code formatter

### 📖 Materiale di Approfondimento

**Per studenti motivati:**
- [ ] Lista di progetti React per principianti
- [ ] Roadmap sviluppatore frontend
- [ ] Community e forum di supporto

**Per l'insegnante:**
- [ ] Corsi avanzati su React
- [ ] Best practices per insegnare programmazione
- [ ] Aggiornamenti su nuove feature React

---

## 🎯 Obiettivi di Apprendimento Verificabili

### ✅ Fine Giorno 1 - Lo studente sa:
- [ ] Creare un componente React funzionale
- [ ] Utilizzare props per passare dati
- [ ] Gestire stato locale con useState
- [ ] Implementare event handlers
- [ ] Utilizzare Context API per stato globale
- [ ] Creare form controllati

### ✅ Fine Giorno 2 - Lo studente sa:
- [ ] Implementare theming con CSS Variables
- [ ] Configurare routing con React Router
- [ ] Utilizzare useEffect per side effects
- [ ] Fare chiamate API con fetch
- [ ] Gestire stati di loading ed errore
- [ ] Integrare tutti i concetti in un'app funzionante

### 🏆 Obiettivi Bonus - Lo studente sa:
- [ ] Debuggare applicazioni React con DevTools
- [ ] Organizzare codice in moduli riutilizzabili
- [ ] Applicare best practices di sviluppo
- [ ] Continuare l'apprendimento autonomamente

---

## 📋 Checklist Post-Corso

### 📤 Consegne Studenti
- [ ] Repository GitHub con codice finale
- [ ] README con descrizione del progetto
- [ ] Screenshot dell'applicazione funzionante
- [ ] Riflessione scritta sull'esperienza (opzionale)

### 📊 Valutazione Corso
- [ ] Analisi feedback studenti
- [ ] Auto-valutazione dell'insegnante
- [ ] Identificazione miglioramenti per prossima edizione
- [ ] Aggiornamento materiali didattici

### 🔄 Follow-up
- [ ] Condivisione risorse aggiuntive
- [ ] Invito a community/gruppi di studio
- [ ] Suggerimenti per progetti futuri
- [ ] Disponibilità per domande post-corso

---

**Buona fortuna con il corso! 🚀**

*Ricorda: l'obiettivo non è creare esperti React in 2 giorni, ma accendere la passione per la programmazione e fornire basi solide per continuare l'apprendimento.*
