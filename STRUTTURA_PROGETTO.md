# 📁 Struttura Progetto - Registro Elettronico
## Organizzazione File per Corso React (2 Giorni)

---

## 🎯 Panoramica

Questo progetto è organizzato per supportare un **corso React hands-on di 2 giorni** dove gli studenti delle superiori costruiscono da zero un'applicazione completa.

---

## 📚 **Materiale Didattico**

### 📖 **Guide per Studenti**
```
📋 README_CORSO.md                    # Panoramica completa del corso
📖 GUIDA_APPRENDIMENTO_2_GIORNI.md    # Piano dettagliato delle attività
🛠️ GUIDA_IMPLEMENTAZIONE_STEP_BY_STEP.md  # ⭐ GUIDA PRINCIPALE - Implementazione da zero
💪 ESERCIZI_PRATICI.md                # Esercizi aggiuntivi e progetti
📝 CHEAT_SHEET_REACT.md               # Riferimento rapido React
```

### 👨‍🏫 **Guide per Insegnante**
```
⚙️ SETUP_PROGETTO_STARTER.md          # Come preparare file starter
✅ CHECKLIST_INSEGNANTE.md            # Guida per condurre il corso
```

---

## 🏗️ **Codice Applicazione**

### 📱 **Frontend React** (`src/`)
```
src/
├── 📄 App.js                    # Componente principale + routing
├── 📄 index.js                  # Entry point React
├── 📁 components/               # Componenti riutilizzabili
│   ├── Layout.js               # Layout principale con navigazione
│   ├── LoginForm.js            # Form di autenticazione
│   ├── ProtectedRoute.js       # Protezione rotte
│   └── ThemeExample.js         # Esempi CSS Variables
├── 📁 contexts/                # State management globale
│   ├── AuthContext.js          # Gestione autenticazione
│   ├── AuthContextAPI.js       # Versione con API reali
│   └── ThemeContext.js         # Gestione temi dark/light
├── 📁 pages/                   # Pagine dell'applicazione
│   ├── Dashboard.js            # Dashboard principale studente
│   └── Settings.js             # Pagina impostazioni
├── 📁 services/                # Comunicazione con backend
│   └── api.js                  # HTTP service per API calls
└── 📁 styles/                  # CSS e theming
    ├── components.css          # Stili componenti
    └── themes.css              # CSS Variables per temi
```

### 🗄️ **Backend** (Root)
```
🗄️ db.json                      # Database JSON mock
⚙️ server.js                    # Server Express personalizzato
📦 package.json                 # Dipendenze e script npm
```

### 📝 **File Statici**
```
public/
└── 📄 index.html               # Template HTML principale
```

---

## 🎯 **Approccio "Learning by Building"**

### 🔴 **File che gli Studenti Implementano da Zero**
Gli studenti ricevono questi file quasi vuoti con commenti `🎯 TASK`:

```
🔴 src/App.js                   # Routing e Provider setup
🔴 src/contexts/AuthContext.js  # Sistema autenticazione
🔴 src/contexts/ThemeContext.js # Sistema theming
🔴 src/components/LoginForm.js  # Form con Material-UI
🔴 src/components/ProtectedRoute.js # Protezione rotte
🔴 src/components/Layout.js     # Layout e navigazione
🔴 src/pages/Dashboard.js       # Dashboard con statistiche
🔴 src/pages/Settings.js        # Pagina impostazioni
```

### ✅ **File già Forniti**
Questi file sono già completi per permettere agli studenti di concentrarsi sui concetti React:

```
✅ src/services/api.js          # HTTP service completo
✅ src/styles/themes.css        # CSS Variables per temi
✅ src/styles/components.css    # Stili base
✅ db.json                      # Dati mock
✅ server.js                    # Server backend
✅ package.json                 # Dipendenze
```

---

## 📅 **Progressione Implementazione**

### **🚀 GIORNO 1** - Fondamenta React
```
Step 1: 📄 Primo componente (Benvenuto.js)
Step 2: 🎯 AuthContext da zero
Step 3: 📝 LoginForm con useState
Step 4: 🛡️ ProtectedRoute
Step 5: 🛣️ Routing in App.js
```

### **🚀 GIORNO 2** - Funzionalità Avanzate
```
Step 6: 🎨 ThemeContext con CSS Variables
Step 7: 🏗️ Layout con navigazione
Step 8: 📊 Dashboard completa
Step 9: ⚙️ Settings con toggle tema
Step 10: 🔗 Integrazione finale
```

---

## 🛠️ **Comandi di Sviluppo**

### **Setup Iniziale**
```bash
npm install                     # Installa dipendenze
```

### **Sviluppo**
```bash
npm run dev                     # Frontend + Backend insieme
npm start                       # Solo frontend (porta 3000)
npm run server                  # Solo backend (porta 3001)
```

### **Accesso Applicazione**
```
🌐 Frontend: http://localhost:3000
🔌 Backend:  http://localhost:3001
🔐 Login:    studente / password
```

---

## 📊 **Tecnologie e Concetti**

### **🎯 Concetti React Insegnati**
- ⚛️ **Componenti Funzionali** - Building blocks dell'app
- 🎣 **Hooks** - useState, useEffect, useContext
- 🌐 **Context API** - State management globale
- 🛣️ **React Router** - Navigazione SPA
- 📝 **Form Controllati** - Gestione input utente
- 🎨 **CSS Variables** - Theming dinamico

### **🛠️ Stack Tecnologico**
- **Frontend**: React 18 + Material-UI + React Router
- **Backend**: Node.js + Express + JSON Server
- **Styling**: CSS Variables + Material-UI
- **State**: Context API (no Redux per semplicità)

---

## 🎓 **Obiettivi di Apprendimento**

### **✅ Fine Corso gli Studenti Sanno**
1. **Creare componenti React** funzionali e riutilizzabili
2. **Gestire stato locale e globale** con useState e Context API
3. **Implementare routing** con React Router e rotte protette
4. **Fare chiamate API** con fetch e gestire async/await
5. **Applicare theming dinamico** con CSS Variables
6. **Costruire UI responsive** con Material-UI Grid
7. **Debuggare applicazioni React** con DevTools

### **🏆 Risultato Finale**
Un'**applicazione web completa e funzionante** che include:
- Sistema di autenticazione
- Dashboard interattiva
- Navigazione multi-pagina
- Theming dark/light
- Integrazione API
- Design responsive

---

## 🔄 **Flusso di Lavoro Tipico**

### **Per l'Insegnante**
1. **Preparazione**: Seguire `SETUP_PROGETTO_STARTER.md`
2. **Conduzione**: Usare `CHECKLIST_INSEGNANTE.md`
3. **Supporto**: Riferimento `CHEAT_SHEET_REACT.md`

### **Per lo Studente**
1. **Orientamento**: Leggere `README_CORSO.md`
2. **Pianificazione**: Seguire `GUIDA_APPRENDIMENTO_2_GIORNI.md`
3. **Implementazione**: Usare `GUIDA_IMPLEMENTAZIONE_STEP_BY_STEP.md`
4. **Approfondimento**: Completare `ESERCIZI_PRATICI.md`

---

## 🎯 **Vantaggi di Questa Struttura**

### ✅ **Per l'Apprendimento**
- **Hands-on**: Ogni studente scrive ogni riga di codice
- **Progressivo**: Difficoltà crescente graduale
- **Pratico**: Lavorano su un progetto reale
- **Guidato**: Istruzioni step-by-step dettagliate

### ✅ **Per l'Insegnamento**
- **Strutturato**: Ogni step è pianificato e verificabile
- **Flessibile**: Adattabile al ritmo della classe
- **Completo**: Tutto il materiale necessario incluso
- **Scalabile**: Facilmente estendibile con nuove funzionalità

### ✅ **Per il Progetto**
- **Modulare**: Ogni componente ha responsabilità chiare
- **Manutenibile**: Codice ben organizzato e commentato
- **Estendibile**: Facile aggiungere nuove funzionalità
- **Educativo**: Struttura che insegna best practices

---

**🚀 Questa struttura garantisce un'esperienza di apprendimento coinvolgente e produttiva per tutti gli studenti!**
