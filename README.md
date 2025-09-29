# 🔐 Registro Elettronico - Sistema di Login Semplificato
## Progetto React per Principianti

Implementa un sistema di autenticazione basilare usando React, Material-UI e chiamate API.

---

## 🚀 **Setup Rapido (2 minuti)**

```bash
# 1. Clone del progetto
git clone https://github.com/Nunzio92/registro-elettronico.git
cd registro-elettronico

# 2. Installa dipendenze
npm install

# 3. Avvia il backend (terminale 1)
npm run server

# 4. Avvia l'app React (terminale 2)
npm start

# 5. Apri http://localhost:3000
```

## 📚 **Cosa Imparerai**

- ✅ **useState** per gestione stato locale
- ✅ **Form controllati** con Material-UI
- ✅ **Chiamate API** per autenticazione
- ✅ **Conditional rendering** per mostrare contenuti
- ✅ **Props** e comunicazione tra componenti

## 🎯 **Struttura Progetto**

```
src/
├── App.js              # Componente principale con stato utente
├── components/
│   ├── LoginForm.js    # Form di login
│   └── WelcomePage.js  # Area riservata
└── services/
    └── api.js          # Servizi API (da implementare)
```

## 🧪 **Credenziali di Test**

- **Username:** `studente`
- **Password:** `password`

## 🚀 **Piano di Implementazione**

### **Step 1: API Service - Chiamate Backend (1-2 ore)**
1. Definire [`API_BASE_URL`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) in `api.js`
2. Implementare funzione [`login`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) con fetch POST
3. Implementare [`getErrorMessage`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) per gestione errori
4. Testare con credenziali corrette/sbagliate

### **Step 2: App.js - Gestione Stato (1-2 ore)**
1. Importare [`useState`](https://react.dev/reference/react/useState), `LoginForm`, `WelcomePage`
2. Aggiungere: `const [user, setUser] = useState(null)`
3. Implementare `handleLogin` e `handleLogout`
4. Sostituire `<Welcome />` con [conditional rendering](https://react.dev/learn/conditional-rendering)

### **Step 3: LoginForm - Form Controllato (2-3 ore)**
1. Importare [`useState`](https://react.dev/reference/react/useState), [`Paper`](https://mui.com/material-ui/react-paper/), [`TextField`](https://mui.com/material-ui/react-text-field/), [`Button`](https://mui.com/material-ui/react-button/), [`Alert`](https://mui.com/material-ui/react-alert/)
2. Importare `login`, `getErrorMessage` da `../services/api`
3. Aggiungere stati: `formData`, `error`
4. Implementare [`handleInputChange`](https://react.dev/learn/reacting-to-input-with-state) e `handleSubmit`
5. Creare form JSX con Paper, TextField, Alert e Button

### **Step 4: WelcomePage - Area Riservata (1 ora)**
1. Importare [`Paper`](https://mui.com/material-ui/react-paper/), [`Button`](https://mui.com/material-ui/react-button/), [`Box`](https://mui.com/material-ui/react-box/) da MUI
2. Mostrare `user.nome`, `user.cognome`, `user.classe` con Typography
3. Implementare pulsante logout con Button

### **Step 5: Test Completo (30 min)**
- Login errato → errore
- Login corretto → WelcomePage
- Logout → torna al LoginForm

## 📚 **Documentazione Utile**

### **React:**
- [useState Hook](https://react.dev/reference/react/useState) - Gestione stato locale
- [Form Handling](https://react.dev/learn/reacting-to-input-with-state) - Form controllati
- [Conditional Rendering](https://react.dev/learn/conditional-rendering) - Rendering condizionale
- [Props](https://react.dev/learn/passing-props-to-a-component) - Passaggio dati

### **Material-UI:**
- [TextField](https://mui.com/material-ui/react-text-field/) - Campi input
- [Button](https://mui.com/material-ui/react-button/) - Pulsanti
- [Paper](https://mui.com/material-ui/react-paper/) - Container
- [Alert](https://mui.com/material-ui/react-alert/) - Messaggi errore
- [Typography](https://mui.com/material-ui/react-typography/) - Testo

### **JavaScript/API:**
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - Chiamate HTTP
- [Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) - Chiamate asincrone
- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) - Formato dati
- [Try/Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) - Gestione errori
- [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) - Destrutturazione

## ⏱️ **Tempo Stimato**

**5-7 ore** per principianti (1-2 giorni di lavoro)

- **Step 1 (API):** 1-2 ore
- **Step 2 (App.js):** 1-2 ore  
- **Step 3 (LoginForm):** 2-3 ore
- **Step 4 (WelcomePage):** 1 ora
- **Step 5 (Test):** 30 min
