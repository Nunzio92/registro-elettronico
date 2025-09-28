# 🎯 Esercizi Pratici - Registro Elettronico
## Sfide e Progetti per Consolidare l'Apprendimento

---

## 📋 Indice Esercizi

### 🟢 **LIVELLO BASE** (Giorno 1)
1. [Primo Componente](#1-primo-componente)
2. [Form Controllati](#2-form-controllati)
3. [Lista Dinamica](#3-lista-dinamica)
4. [Contatore Avanzato](#4-contatore-avanzato)

### 🟡 **LIVELLO INTERMEDIO** (Giorno 2)
5. [Todo List](#5-todo-list)
6. [Tema Personalizzato](#6-tema-personalizzato)
7. [Navigazione Multi-Pagina](#7-navigazione-multi-pagina)
8. [API Integration](#8-api-integration)

### 🔴 **LIVELLO AVANZATO** (Sfide Extra)
9. [Dashboard Completa](#9-dashboard-completa)
10. [Sistema di Notifiche](#10-sistema-di-notifiche)
11. [Filtri e Ricerca](#11-filtri-e-ricerca)
12. [Progetto Finale](#12-progetto-finale)

---

## 🟢 LIVELLO BASE

### 1. Primo Componente
**🎯 Obiettivo**: Creare e utilizzare componenti React

**📝 Consegna**: 
Crea un componente `CartaStudente` che mostra le informazioni di uno studente.

**🛠️ Specifiche**:
```jsx
// Il componente deve ricevere queste props:
<CartaStudente 
  nome="Mario Rossi"
  classe="5A"
  votoMedio={7.5}
  foto="https://via.placeholder.com/100"
/>
```

**✅ Requisiti**:
- Mostra foto, nome, classe e voto medio
- Usa CSS per rendere la carta attraente
- Il voto deve avere colori diversi: rosso (<6), giallo (6-7), verde (>7)

**💡 Suggerimenti**:
```jsx
// Struttura base
const CartaStudente = ({ nome, classe, votoMedio, foto }) => {
  const getColoreVoto = (voto) => {
    if (voto < 6) return 'red';
    if (voto < 7) return 'orange';
    return 'green';
  };

  return (
    <div className="carta-studente">
      {/* Il tuo codice qui */}
    </div>
  );
};
```

**🏆 Bonus**: Aggiungi animazioni CSS hover

---

### 2. Form Controllati
**🎯 Obiettivo**: Gestire input e validazione form

**📝 Consegna**: 
Crea un form per aggiungere un nuovo voto.

**🛠️ Specifiche**:
- Campi: Materia (select), Voto (number), Data (date), Tipo (scritto/orale)
- Validazione: voto tra 1-10, data non futura
- Mostra errori in tempo reale

**✅ Requisiti**:
```jsx
const FormVoto = ({ onAggiungiVoto }) => {
  const [formData, setFormData] = useState({
    materia: '',
    voto: '',
    data: '',
    tipo: 'scritto'
  });
  
  const [errori, setErrori] = useState({});

  // Il tuo codice qui
};
```

**🏆 Bonus**: 
- Salva bozze in localStorage
- Conferma prima dell'invio
- Reset form dopo invio

---

### 3. Lista Dinamica
**🎯 Obiettivo**: Rendering di liste e gestione array

**📝 Consegna**: 
Crea una lista di compiti con possibilità di aggiungere/rimuovere.

**🛠️ Specifiche**:
```jsx
const ListaCompiti = () => {
  const [compiti, setCompiti] = useState([
    { id: 1, testo: 'Studiare matematica', completato: false },
    { id: 2, testo: 'Fare esercizi di fisica', completato: true }
  ]);

  // Funzioni da implementare:
  // - aggiungiCompito(testo)
  // - rimuoviCompito(id)
  // - toggleCompito(id)
};
```

**✅ Requisiti**:
- Input per aggiungere nuovi compiti
- Checkbox per marcare come completati
- Bottone per eliminare compiti
- Stili diversi per completati/non completati

**🏆 Bonus**: 
- Filtri (tutti/completati/da fare)
- Contatore compiti rimanenti
- Drag & drop per riordinare

---

### 4. Contatore Avanzato
**🎯 Obiettivo**: useState e event handling

**📝 Consegna**: 
Crea un contatore con funzionalità avanzate.

**🛠️ Specifiche**:
- Bottoni: +1, -1, +5, -5, Reset
- Limiti: min 0, max 100
- Salva valore in localStorage
- Mostra storico delle operazioni

**✅ Requisiti**:
```jsx
const ContatoreAvanzato = () => {
  const [valore, setValore] = useState(0);
  const [storico, setStorico] = useState([]);

  const incrementa = (quantita) => {
    // Implementa con controlli limiti
  };

  const aggiungiAlloStorico = (operazione) => {
    // Traccia le operazioni
  };
};
```

**🏆 Bonus**: 
- Grafici dell'andamento
- Esporta storico in CSV
- Modalità automatica (incremento ogni secondo)

---

## 🟡 LIVELLO INTERMEDIO

### 5. Todo List
**🎯 Obiettivo**: Applicazione CRUD completa

**📝 Consegna**: 
Todo list completa con persistenza e filtri.

**🛠️ Specifiche**:
- CRUD: Create, Read, Update, Delete
- Categorie: Scuola, Casa, Tempo libero
- Priorità: Alta, Media, Bassa
- Scadenze con notifiche

**✅ Requisiti**:
```jsx
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filtro, setFiltro] = useState('tutti');
  const [ordinamento, setOrdinamento] = useState('data');

  // Implementa:
  // - aggiungiTodo({ testo, categoria, priorita, scadenza })
  // - modificaTodo(id, nuoviDati)
  // - eliminaTodo(id)
  // - filtraTodos()
  // - ordinaTodos()
};
```

**🏆 Bonus**: 
- Ricerca testuale
- Esportazione dati
- Statistiche utilizzo
- Tema scuro/chiaro

---

### 6. Tema Personalizzato
**🎯 Obiettivo**: CSS Variables e theming avanzato

**📝 Consegna**: 
Sistema di temi con personalizzazione completa.

**🛠️ Specifiche**:
- 3+ temi predefiniti (Chiaro, Scuro, Blu, Verde)
- Editor colori personalizzato
- Anteprima in tempo reale
- Salvataggio preferenze

**✅ Requisiti**:
```css
/* themes.css */
:root {
  --primary-hue: 210;
  --primary-saturation: 100%;
  --primary-lightness: 50%;
  --primary: hsl(var(--primary-hue), var(--primary-saturation), var(--primary-lightness));
}

[data-theme="custom"] {
  --primary-hue: var(--custom-hue, 210);
  /* Altri colori personalizzabili */
}
```

```jsx
const ThemeEditor = () => {
  const [coloriPersonalizzati, setColoriPersonalizzati] = useState({
    primaryHue: 210,
    primarySaturation: 100,
    primaryLightness: 50
  });

  // Implementa editor colori
};
```

**🏆 Bonus**: 
- Condivisione temi via URL
- Importa/esporta temi JSON
- Generatore palette automatico

---

### 7. Navigazione Multi-Pagina
**🎯 Obiettivo**: React Router e navigazione complessa

**📝 Consegna**: 
Sistema di navigazione con breadcrumb e menu dinamico.

**🛠️ Specifiche**:
- Menu laterale collassabile
- Breadcrumb navigation
- Pagine annidate (es: /studenti/123/voti)
- Protezione rotte per ruolo

**✅ Requisiti**:
```jsx
// Struttura rotte
const routes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
    breadcrumb: 'Dashboard'
  },
  {
    path: '/studenti',
    element: <StudentiLayout />,
    breadcrumb: 'Studenti',
    children: [
      {
        path: ':id',
        element: <DettaglioStudente />,
        breadcrumb: (params) => `Studente ${params.id}`
      }
    ]
  }
];
```

**🏆 Bonus**: 
- Navigazione con tasti freccia
- Cronologia navigazione
- Bookmarks pagine

---

### 8. API Integration
**🎯 Obiettivo**: Chiamate HTTP e gestione dati asincroni

**📝 Consegna**: 
Integrazione completa con API per gestione voti.

**🛠️ Specifiche**:
- Caricamento dati con loading states
- Gestione errori robusta
- Cache locale per performance
- Retry automatico su errori

**✅ Requisiti**:
```jsx
const useVoti = (studenteId) => {
  const [voti, setVoti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errore, setErrore] = useState(null);

  const caricaVoti = async () => {
    try {
      setLoading(true);
      const dati = await getVoti(studenteId);
      setVoti(dati);
      // Salva in cache
    } catch (error) {
      setErrore(error);
      // Carica da cache se disponibile
    } finally {
      setLoading(false);
    }
  };

  // Implementa retry, refresh, etc.
};
```

**🏆 Bonus**: 
- Sincronizzazione offline
- Ottimistic updates
- Real-time con WebSocket

---

## 🔴 LIVELLO AVANZATO

### 9. Dashboard Completa
**🎯 Obiettivo**: Applicazione complessa con più funzionalità

**📝 Consegna**: 
Dashboard studente con grafici e statistiche.

**🛠️ Specifiche**:
- Grafici andamento voti (Chart.js)
- Calendario compiti e verifiche
- Statistiche per materia
- Widget personalizzabili

**✅ Requisiti**:
- Layout drag & drop per widget
- Esportazione report PDF
- Notifiche push
- Modalità offline

**🏆 Bonus**: 
- AI per suggerimenti studio
- Integrazione calendario esterno
- Condivisione con genitori

---

### 10. Sistema di Notifiche
**🎯 Obiettivo**: Gestione eventi e comunicazioni

**📝 Consegna**: 
Sistema notifiche in-app e browser.

**🛠️ Specifiche**:
- Notifiche toast per azioni
- Centro notifiche con cronologia
- Notifiche browser per scadenze
- Preferenze notifiche per tipo

**✅ Requisiti**:
```jsx
const useNotifiche = () => {
  const [notifiche, setNotifiche] = useState([]);

  const aggiungiNotifica = (tipo, messaggio, azioni) => {
    // Implementa sistema notifiche
  };

  const richiediPermessiBrowser = async () => {
    // Gestisci permessi notifiche browser
  };
};
```

---

### 11. Filtri e Ricerca
**🎯 Obiettivo**: Interfacce di ricerca avanzate

**📝 Consegna**: 
Sistema di filtri multipli per voti e materie.

**🛠️ Specifiche**:
- Ricerca testuale con highlight
- Filtri multipli combinabili
- Ordinamento per colonne
- Salvataggio ricerche preferite

**✅ Requisiti**:
- Debounce per performance
- URL che riflette filtri
- Esportazione risultati
- Filtri avanzati (range date, operatori)

---

### 12. Progetto Finale
**🎯 Obiettivo**: Applicazione completa end-to-end

**📝 Consegna**: 
Estendi il registro elettronico con una funzionalità a scelta.

**💡 Idee Progetto**:

**A) Sistema Messaggistica**
- Chat tra studenti e professori
- Gruppi classe
- Condivisione file
- Notifiche real-time

**B) Pianificatore Studio**
- Calendario studio personalizzato
- Tracciamento tempo studio
- Obiettivi e milestone
- Statistiche produttività

**C) Biblioteca Digitale**
- Catalogo libri e risorse
- Sistema prestiti
- Recensioni e valutazioni
- Raccomandazioni personalizzate

**D) Sistema Valutazioni**
- Rubric di valutazione
- Peer assessment
- Portfolio digitale
- Analytics performance

**✅ Requisiti Minimi**:
- Almeno 5 componenti custom
- Integrazione API completa
- Routing multi-livello
- Sistema di autenticazione
- Responsive design
- Testing di base

**🏆 Criteri Valutazione**:
- **Funzionalità** (30%): Completezza e correttezza
- **Codice** (25%): Qualità, organizzazione, commenti
- **UI/UX** (25%): Design, usabilità, accessibilità
- **Innovazione** (20%): Creatività e funzionalità extra

---

## 🎯 Sistema di Valutazione

### 📊 Rubrica di Valutazione

| Criterio | Eccellente (4) | Buono (3) | Sufficiente (2) | Insufficiente (1) |
|----------|----------------|-----------|-----------------|-------------------|
| **Comprensione Concetti** | Applica tutti i concetti correttamente | Applica la maggior parte dei concetti | Applica alcuni concetti base | Difficoltà con concetti base |
| **Qualità Codice** | Codice pulito, ben organizzato, commentato | Codice generalmente buono | Codice funzionante ma disorganizzato | Codice con molti problemi |
| **Problem Solving** | Risolve problemi complessi autonomamente | Risolve la maggior parte dei problemi | Risolve problemi semplici con aiuto | Difficoltà nella risoluzione |
| **Creatività** | Aggiunge funzionalità innovative | Personalizza oltre i requisiti | Completa i requisiti base | Non completa tutti i requisiti |

### 🏅 Badge di Competenza

Guadagna badge completando gli esercizi:

- 🥉 **React Rookie**: Completa esercizi 1-4
- 🥈 **Component Creator**: Completa esercizi 5-8  
- 🥇 **React Master**: Completa esercizi 9-12
- 🏆 **Full Stack Hero**: Completa progetto finale

### 📈 Tracciamento Progressi

```jsx
// Usa questo componente per tracciare i tuoi progressi
const ProgressTracker = () => {
  const [completati, setCompletati] = useState([]);
  
  const esercizi = [
    { id: 1, nome: 'Primo Componente', livello: 'base' },
    { id: 2, nome: 'Form Controllati', livello: 'base' },
    // ... altri esercizi
  ];

  const percentualeCompletamento = (completati.length / esercizi.length) * 100;

  return (
    <div className="progress-tracker">
      <h3>I Tuoi Progressi: {percentualeCompletamento.toFixed(0)}%</h3>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percentualeCompletamento}%` }}
        />
      </div>
      {/* Lista esercizi con checkbox */}
    </div>
  );
};
```

---

## 💡 Consigli per il Successo

### 🎯 Strategia di Studio
1. **Inizia Semplice**: Non saltare gli esercizi base
2. **Pratica Quotidiana**: 30 minuti al giorno sono meglio di 3 ore una volta
3. **Leggi Codice**: Studia il codice esistente prima di scrivere
4. **Sperimenta**: Modifica gli esempi per capire cosa succede

### 🐛 Debugging Tips
1. **Console.log**: Il tuo migliore amico per capire cosa succede
2. **React DevTools**: Installa l'estensione browser
3. **Errori Comuni**: 
   - Dimenticare le dipendenze in useEffect
   - Non gestire stati di loading
   - Mutare direttamente lo state

### 📚 Risorse Aggiuntive
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [ES6 Features](https://github.com/lukehoban/es6features)
- [JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

## 🤝 Collaborazione e Aiuto

### 👥 Lavoro di Gruppo
- **Pair Programming**: Lavorate in coppia su esercizi complessi
- **Code Review**: Revisionate il codice dei compagni
- **Condivisione**: Condividete soluzioni creative

### 🆘 Quando Chiedere Aiuto
- Dopo aver provato per 15-20 minuti
- Quando l'errore non è chiaro
- Per feedback su design e architettura

### 📝 Come Chiedere Aiuto
1. **Descrivi il problema**: Cosa stai cercando di fare?
2. **Mostra il codice**: Condividi il codice rilevante
3. **Spiega cosa hai provato**: Quali soluzioni hai tentato?
4. **Includi errori**: Copia/incolla messaggi di errore completi

---

**Buon lavoro e divertiti programmando! 🚀**

*Ricorda: ogni esperto è stato una volta un principiante. La chiave è la pratica costante!* 💪
