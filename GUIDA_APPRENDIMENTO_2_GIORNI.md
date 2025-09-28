# 📚 Guida Apprendimento React - Registro Elettronico
## Piano di Sviluppo per Studenti delle Superiori (2 Giorni)

> **Obiettivo**: Imparare React **costruendo da zero** un'applicazione reale, implementando ogni funzionalità passo dopo passo

## 🎯 Approccio "Learning by Building"

In questo corso **NON** studierai solo teoria, ma **costruirai da zero** ogni parte dell'applicazione:
- ✅ Partirai da file quasi vuoti con commenti guida
- ✅ Implementerai ogni funzionalità seguendo le istruzioni step-by-step  
- ✅ Vedrai crescere l'app ad ogni step completato
- ✅ Imparerai debugging e problem-solving reali

---

## 🎯 Cosa Imparerai

Al termine di questi 2 giorni saprai:
- ✅ Creare e gestire componenti React
- ✅ Utilizzare useState e useEffect
- ✅ Implementare autenticazione con Context API
- ✅ Gestire temi dark/light con CSS Variables
- ✅ Configurare routing con React Router
- ✅ Fare chiamate API con fetch
- ✅ Gestire form controllati

---

## 📋 Prerequisiti

**Conoscenze richieste:**
- HTML/CSS di base
- JavaScript ES6+ (arrow functions, destructuring, promises)
- Concetti base di programmazione

**Setup necessario:**
- Node.js installato (versione 16+)
- Editor di codice (VS Code consigliato)
- Browser moderno con DevTools
- **Progetto starter** preparato dall'insegnante

## 📁 Struttura del Progetto Starter

Riceverai un progetto con questa struttura:
```
src/
├── components/     # 🔴 File da implementare (quasi vuoti)
├── contexts/       # 🔴 File da implementare (quasi vuoti)  
├── pages/          # 🔴 File da implementare (quasi vuoti)
├── services/       # ✅ Già fornito (API calls)
├── styles/         # ✅ Già fornito (CSS e temi)
└── App.js          # 🔴 Da implementare (routing)
```

**🔴 = Da implementare tu**  
**✅ = Già fornito**

---

# 🚀 GIORNO 1: Fondamenta e Autenticazione

## ⏰ Programma Giorno 1 (4-5 ore)

### 📅 Mattina (2.5 ore)
- **09:00-09:30**: Setup progetto e panoramica
- **09:30-10:30**: Concetti React base + primo componente
- **10:30-10:45**: ☕ Pausa
- **10:45-11:45**: useState Hook e form controllati
- **11:45-12:00**: Context API teoria

### 📅 Pomeriggio (2 ore)  
- **14:00-15:00**: Implementazione AuthContext
- **15:00-15:15**: ☕ Pausa
- **15:15-16:00**: LoginForm completo
- **16:00-16:15**: Test e debug

---

## 🛠️ Attività Giorno 1

### 1️⃣ Setup e Primo Avvio (30 min)

**Cosa farai:**
```bash
# 1. Il progetto è già preparato dall'insegnante
cd registro-elettronico-fullstack

# 2. Installa dipendenze
npm install

# 3. Avvia il progetto
npm start
```

**🎯 Obiettivo**: Vedere il progetto starter e capire cosa implementerai

**📝 Esercizio**: 
- Esplora la cartella `src/` e nota i file con commenti `🎯 TASK`
- Apri il browser su `http://localhost:3000`
- Dovresti vedere: "Benvenuto nel Corso React!"

> **Importante**: Ogni file che modificherai ha commenti `🎯 TASK` che ti guidano passo dopo passo!

---

### 2️⃣ Concetti React Base (60 min)

**📖 Teoria (20 min):**

**Cos'è un Componente React?**
```jsx
// Componente funzionale - è come una funzione che restituisce HTML
function Saluto({ nome }) {
  return <h1>Ciao {nome}!</h1>;
}

// JSX - JavaScript + XML, permette di scrivere HTML in JS
const elemento = <div>Questo è JSX</div>;
```

**Props - Come passare dati ai componenti:**
```jsx
// Componente padre
function App() {
  return <Saluto nome="Mario" />;
}

// Componente figlio riceve props
function Saluto({ nome }) {
  return <h1>Ciao {nome}!</h1>;
}
```

**🛠️ Pratica (40 min):**

**🎯 TASK 1: Crea il tuo primo componente**

Apri il file `src/App.js` e vedrai dei commenti che ti guidano. 

**Step 1**: Crea `src/components/Benvenuto.js` seguendo l'esempio nella **[Guida Step-by-Step](./GUIDA_IMPLEMENTAZIONE_STEP_BY_STEP.md#step-1)**

**Step 2**: Modifica `src/App.js` per usare il componente seguendo i commenti `🎯 TASK`

**🎯 Checkpoint**: Il tuo componente personalizzato deve apparire nella pagina!

> **Nota**: Ogni volta che completi un task, vedrai immediatamente il risultato nel browser. Se qualcosa non funziona, controlla la console per errori!

---

### 3️⃣ useState Hook - Gestire lo Stato (60 min)

**📖 Teoria (20 min):**

**Cos'è lo State?**
Lo state è la "memoria" del componente - dati che possono cambiare nel tempo.

```jsx
import React, { useState } from 'react';

function Contatore() {
  // useState restituisce [valore, funzione per cambiarlo]
  const [numero, setNumero] = useState(0);
  
  const incrementa = () => {
    setNumero(numero + 1); // Cambia lo state
  };
  
  return (
    <div>
      <p>Numero: {numero}</p>
      <button onClick={incrementa}>+1</button>
    </div>
  );
}
```

**🛠️ Pratica (40 min):**

**🎯 TASK 2: Implementa useState con Form Controllati**

Ora implementerai un form di login semplice per capire useState.

**Step 1**: Crea un componente di test seguendo l'esempio nella **[Guida Step-by-Step](./GUIDA_IMPLEMENTAZIONE_STEP_BY_STEP.md#step-2)**

**Step 2**: Sperimenta con useState:
- Aggiungi/rimuovi campi
- Cambia la logica di validazione  
- Prova diversi tipi di input

**🎯 Checkpoint**: Il form deve funzionare e mostrare messaggi di successo/errore!

> **Concetto Chiave**: Hai appena imparato i **controlled components** - il pattern fondamentale di React per gestire form!

---

### 4️⃣ Context API - Condividere Stato Globale (60 min)

**📖 Teoria (30 min):**

**Problema: Props Drilling**
```jsx
// ❌ Problema: passare dati attraverso molti componenti
function App() {
  const [user, setUser] = useState(null);
  return <Header user={user} />;
}

function Header({ user }) {
  return <Navigation user={user} />;
}

function Navigation({ user }) {
  return <UserMenu user={user} />;
}
```

**✅ Soluzione: Context API**
```jsx
// 1. Crea il Context
const AuthContext = createContext();

// 2. Provider che fornisce i dati
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Hook per usare il Context
function useAuth() {
  return useContext(AuthContext);
}

// 4. Usa ovunque senza props!
function UserMenu() {
  const { user } = useAuth();
  return <div>Ciao {user?.name}!</div>;
}
```

**🛠️ Pratica (30 min):**

**🎯 TASK 3: Implementa AuthContext da Zero**

Ora costruirai il sistema di autenticazione globale dell'app.

**Step 1**: Apri `src/contexts/AuthContext.js` e vedrai la struttura da completare

**Step 2**: Implementa ogni parte seguendo i commenti `🎯 TASK`:
- createContext()
- useAuth() custom hook  
- AuthProvider component
- login() e logout() functions
- localStorage persistence

**Step 3**: Testa il Context con il componente di test fornito

**🎯 Checkpoint**: I bottoni Login/Logout devono funzionare e salvare lo stato!

> **Concetto Chiave**: Hai appena implementato il **Context API** - il modo React per condividere stato tra componenti senza "props drilling"!

---

### 5️⃣ LoginForm Completo con Material-UI (60 min)

**🛠️ Pratica:**

**🎯 TASK 4: Costruisci LoginForm Completo**

Ora creerai il form di login professionale con Material-UI.

**Step 1**: Apri `src/components/LoginForm.js` e implementa seguendo i `🎯 TASK`

**Step 2**: Collega il form al tuo AuthContext:
- Importa e usa `useAuth()`
- Gestisci submit del form
- Mostra errori di validazione
- Implementa redirect dopo login

**Step 3**: Testa il form completo

**🎯 Checkpoint**: Login deve funzionare con UI professionale e gestione errori!

> **Concetto Chiave**: Hai combinato **useState**, **useEffect**, **Context API** e **event handling** in un componente reale!

---

## 🧪 Test e Verifica Giorno 1

**Quiz Rapido:**
1. Cos'è JSX?
2. Come si crea uno state in React?
3. Perché usiamo il Context API?
4. Cosa sono i controlled components?

**Sfida Pratica:**
Crea un componente `ContatoreLike` che:
- Ha un bottone "👍 Like"
- Mostra il numero di like
- Salva il numero nel localStorage

---

# 🚀 GIORNO 2: Temi, Routing e API

## ⏰ Programma Giorno 2 (4-5 ore)

### 📅 Mattina (2.5 ore)
- **09:00-09:30**: Recap Giorno 1 + Q&A
- **09:30-10:30**: CSS Variables e ThemeContext
- **10:30-10:45**: ☕ Pausa
- **10:45-11:45**: React Router e navigazione
- **11:45-12:00**: useEffect Hook approfondito

### 📅 Pomeriggio (2 ore)
- **14:00-15:00**: HTTP Service e chiamate API
- **15:00-15:15**: ☕ Pausa
- **15:15-16:00**: Integrazione completa
- **16:00-16:15**: Progetto finale e next steps

---

## 🛠️ Attività Giorno 2

### 1️⃣ CSS Variables e Theming (60 min)

**📖 Teoria (20 min):**

**CSS Variables (Custom Properties):**
```css
/* Definisci variabili CSS */
:root {
  --primary-color: #1976d2;
  --background-color: #ffffff;
  --text-color: #000000;
}

/* Tema scuro */
[data-theme="dark"] {
  --primary-color: #90caf9;
  --background-color: #121212;
  --text-color: #ffffff;
}

/* Usa le variabili */
.button {
  background-color: var(--primary-color);
  color: var(--text-color);
}
```

**Vantaggi:**
- ✅ Performance migliore (no re-render React)
- ✅ Transizioni CSS smooth
- ✅ Più semplice da capire

**🛠️ Pratica (40 min):**

**Esercizio 7: Crea il tuo tema**
```css
/* Aggiungi in src/styles/themes.css */
:root {
  --mio-colore-primario: #ff5722;
  --mio-colore-secondario: #ffc107;
}

[data-theme="dark"] {
  --mio-colore-primario: #ff8a65;
  --mio-colore-secondario: #ffd54f;
}
```

**Esercizio 8: Componente che usa il tema**
```jsx
// Crea src/components/CardPersonalizzata.js
import React from 'react';

const CardPersonalizzata = ({ titolo, contenuto }) => {
  return (
    <div style={{
      backgroundColor: 'var(--mio-colore-primario)',
      color: 'var(--text-color)',
      padding: '20px',
      borderRadius: '8px',
      margin: '10px'
    }}>
      <h3>{titolo}</h3>
      <p>{contenuto}</p>
    </div>
  );
};

export default CardPersonalizzata;
```

**Esercizio 9: Studia ThemeContext**
- Apri `src/contexts/ThemeContext.js`
- Capisce come `toggleTheme()` cambia il tema
- Prova il toggle tema nell'app

---

### 2️⃣ React Router - Navigazione (60 min)

**📖 Teoria (20 min):**

**Single Page Application (SPA):**
- Una sola pagina HTML
- JavaScript cambia il contenuto
- URL cambiano senza reload

**React Router Concetti:**
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**🛠️ Pratica (40 min):**

**Esercizio 10: Analizza il routing esistente**
- Apri `src/App.js`
- Identifica tutte le rotte
- Capisce cosa fa `ProtectedRoute`

**Esercizio 11: Aggiungi una nuova pagina**
```jsx
// Crea src/pages/Profilo.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profilo = () => {
  const { user } = useAuth();
  
  return (
    <div>
      <h1>Il Mio Profilo</h1>
      <p>Username: {user?.username}</p>
      <p>Ruolo: {user?.role}</p>
      {/* Aggiungi altri dettagli */}
    </div>
  );
};

export default Profilo;
```

**Esercizio 12: Aggiungi la rotta in App.js**
```jsx
// In App.js, aggiungi:
import Profilo from './pages/Profilo';

// Nelle Routes:
<Route path="/profilo" element={
  <ProtectedRoute>
    <Layout>
      <Profilo />
    </Layout>
  </ProtectedRoute>
} />
```

---

### 3️⃣ useEffect Hook - Side Effects (60 min)

**📖 Teoria (30 min):**

**Cos'è un Side Effect?**
Operazioni che "escono" dal componente:
- Chiamate API
- Timer
- Manipolazione DOM
- Sottoscrizioni

**useEffect Patterns:**
```jsx
import React, { useState, useEffect } from 'react';

function Esempio() {
  const [dati, setDati] = useState([]);
  
  // 1. Esegui solo al mount (array vuoto)
  useEffect(() => {
    console.log('Componente montato');
  }, []);
  
  // 2. Esegui ad ogni render (no array)
  useEffect(() => {
    console.log('Ogni render');
  });
  
  // 3. Esegui quando cambia una dipendenza
  useEffect(() => {
    fetchDati();
  }, [dati.length]); // Solo quando cambia dati.length
  
  // 4. Cleanup (pulizia)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    // Cleanup function
    return () => {
      clearInterval(timer);
    };
  }, []);
}
```

**🛠️ Pratica (30 min):**

**Esercizio 13: Timer con useEffect**
```jsx
// Crea src/components/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [secondi, setSecondi] = useState(0);
  const [attivo, setAttivo] = useState(false);

  useEffect(() => {
    let intervallo = null;
    
    if (attivo) {
      intervallo = setInterval(() => {
        setSecondi(secondi => secondi + 1);
      }, 1000);
    } else if (!attivo && secondi !== 0) {
      clearInterval(intervallo);
    }
    
    return () => clearInterval(intervallo);
  }, [attivo, secondi]);

  const reset = () => {
    setSecondi(0);
    setAttivo(false);
  };

  return (
    <div>
      <div>Tempo: {secondi}s</div>
      <button onClick={() => setAttivo(!attivo)}>
        {attivo ? 'Pausa' : 'Start'}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
```

---

### 4️⃣ HTTP Service - Chiamate API (60 min)

**📖 Teoria (20 min):**

**Fetch API:**
```jsx
// GET request
const response = await fetch('https://api.esempio.com/dati');
const dati = await response.json();

// POST request
const response = await fetch('https://api.esempio.com/dati', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ nome: 'Mario' })
});
```

**Async/Await vs Promises:**
```jsx
// Con Promises
fetch('/api/dati')
  .then(response => response.json())
  .then(dati => console.log(dati))
  .catch(error => console.error(error));

// Con Async/Await (più leggibile)
try {
  const response = await fetch('/api/dati');
  const dati = await response.json();
  console.log(dati);
} catch (error) {
  console.error(error);
}
```

**🛠️ Pratica (40 min):**

**Esercizio 14: Studia il servizio API esistente**
- Apri `src/services/api.js`
- Identifica la funzione `apiRequest`
- Capisce come gestisce gli errori

**Esercizio 15: Componente che carica dati**
```jsx
// Crea src/components/ListaStudenti.js
import React, { useState, useEffect } from 'react';
import { getStudenti } from '../services/api';

const ListaStudenti = () => {
  const [studenti, setStudenti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errore, setErrore] = useState(null);

  useEffect(() => {
    const caricaStudenti = async () => {
      try {
        setLoading(true);
        const dati = await getStudenti();
        setStudenti(dati);
      } catch (error) {
        setErrore(error.message);
      } finally {
        setLoading(false);
      }
    };

    caricaStudenti();
  }, []);

  if (loading) return <div>Caricamento...</div>;
  if (errore) return <div>Errore: {errore}</div>;

  return (
    <div>
      <h2>Lista Studenti</h2>
      <ul>
        {studenti.map(studente => (
          <li key={studente.id}>
            {studente.nome} {studente.cognome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaStudenti;
```

---

### 5️⃣ Integrazione Completa (60 min)

**🛠️ Pratica:**

**Esercizio 16: Dashboard personalizzata**
Modifica `src/pages/Dashboard.js` per includere:
- Il tuo componente Timer
- La tua CardPersonalizzata
- Un toggle per il tema
- Link alla nuova pagina Profilo

**Esercizio 17: Form di feedback**
```jsx
// Crea un form che:
// 1. Raccoglie feedback dello studente
// 2. Usa useState per gestire i campi
// 3. Simula invio con setTimeout
// 4. Mostra messaggio di successo
```

---

## 🧪 Test e Verifica Giorno 2

**Quiz Finale:**
1. Quando si usa useEffect?
2. Come funzionano le CSS Variables?
3. Cos'è una SPA?
4. Come gestisci errori nelle chiamate API?

**Progetto Finale:**
Crea una pagina "I Miei Voti" che:
- Carica voti da API
- Mostra loading spinner
- Gestisce errori
- Ha un tema personalizzato
- È accessibile via routing

---

## 🎓 Cosa Hai Imparato

### ✅ Concetti React Fondamentali
- **Componenti**: Blocchi riutilizzabili di UI
- **Props**: Passaggio dati tra componenti
- **State**: Memoria locale del componente
- **Hooks**: useState, useEffect, useContext

### ✅ Architettura Applicazione
- **Context API**: Stato globale senza props drilling
- **Routing**: Navigazione SPA con React Router
- **Protected Routes**: Controllo accesso alle pagine

### ✅ Styling e UX
- **CSS Variables**: Theming performante
- **Material-UI**: Componenti UI professionali
- **Responsive Design**: Adattamento a diversi schermi

### ✅ Comunicazione con Backend
- **Fetch API**: Chiamate HTTP moderne
- **Async/Await**: Gestione asincrona pulita
- **Error Handling**: Gestione robusta degli errori

---

## 🚀 Prossimi Passi

### 📚 Approfondimenti Consigliati
1. **React Hooks Avanzati**: useReducer, useMemo, useCallback
2. **Testing**: Jest e React Testing Library
3. **State Management**: Redux o Zustand
4. **Performance**: React.memo, lazy loading
5. **TypeScript**: Tipizzazione statica

### 🛠️ Progetti Pratici
1. **Todo App**: CRUD completo con persistenza
2. **Weather App**: Integrazione API esterne
3. **Chat App**: WebSocket e real-time
4. **E-commerce**: Carrello e pagamenti

### 📖 Risorse di Studio
- [React Docs Ufficiali](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript.info](https://javascript.info)

---

## 🤝 Supporto e Community

**Hai domande?**
- Chiedi al tuo insegnante
- Cerca su Stack Overflow
- Unisciti a community React italiane
- Pratica con progetti personali

**Ricorda**: La programmazione si impara facendo! 💪

---

*Buon coding! 🚀*
