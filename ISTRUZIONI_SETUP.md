# 🚀 Istruzioni Setup - Progetto Studenti

## 📋 Setup Iniziale

### 1. **Installazione Dipendenze**
```bash
# Nella cartella del progetto
npm install
```

### 2. **Avvio Progetto**
```bash
# Avvia frontend + backend insieme
npm run dev
```

### 3. **Verifica Funzionamento**
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001
- **Login Demo**: `studente` / `password`

---

## 🎯 **Cosa Vedrai All'Avvio**

Quando avvii il progetto con `npm run dev`, dovresti vedere:

### ✅ **Pagina di Benvenuto**
- Messaggio "Benvenuto nel Corso React!"
- Link alle guide di apprendimento
- Istruzioni per iniziare

### ⚠️ **Messaggi "TASK"**
Vedrai molti messaggi arancioni che dicono "🎯 TASK: ... non ancora implementato". **Questo è normale!** 

Questi messaggi ti guidano su cosa implementare seguendo la **GUIDA_IMPLEMENTAZIONE_STEP_BY_STEP.md**.

---

## 📚 **Le Tue Guide**

### 🎯 **Guida Principale**
**[GUIDA_IMPLEMENTAZIONE_STEP_BY_STEP.md](./GUIDA_IMPLEMENTAZIONE_STEP_BY_STEP.md)**
- La tua guida pratica principale
- 10 step dettagliati con codice
- Istruzioni passo-dopo-passo

### 📖 **Guide di Supporto**
- **[GUIDA_APPRENDIMENTO_2_GIORNI.md](./GUIDA_APPRENDIMENTO_2_GIORNI.md)** - Piano del corso
- **[CHEAT_SHEET_REACT.md](./CHEAT_SHEET_REACT.md)** - Riferimento rapido
- **[ESERCIZI_PRATICI.md](./ESERCIZI_PRATICI.md)** - Esercizi extra

---

## 🛠️ **Struttura File da Implementare**

### 🔴 **File che Implementerai** (hanno commenti `🎯 TASK`)
```
src/
├── App.js                    # Routing e Provider setup
├── contexts/
│   ├── AuthContext.js        # Sistema autenticazione
│   └── ThemeContext.js       # Sistema theming
├── components/
│   ├── LoginForm.js          # Form di login
│   ├── ProtectedRoute.js     # Protezione rotte
│   └── Layout.js             # Layout e navigazione
└── pages/
    ├── Dashboard.js          # Dashboard principale
    └── Settings.js           # Pagina impostazioni
```

### ✅ **File già Forniti** (non modificare)
```
src/
├── services/api.js           # HTTP service completo
└── styles/                   # CSS e temi
db.json                       # Database mock
server.js                     # Server backend
```

---

## 🎯 **Come Iniziare**

### **Step 1**: Verifica Setup
```bash
npm run dev
# Dovresti vedere la pagina di benvenuto
```

### **Step 2**: Apri la Guida
Apri **[GUIDA_IMPLEMENTAZIONE_STEP_BY_STEP.md](./GUIDA_IMPLEMENTAZIONE_STEP_BY_STEP.md)** e inizia dal **Step 1**.

### **Step 3**: Implementa Passo-Passo
Segui ogni `🎯 TASK` nella guida, vedrai l'app crescere ad ogni step!

---

## 🆘 **Risoluzione Problemi**

### **Errore: "npm command not found"**
```bash
# Installa Node.js da https://nodejs.org
# Poi riprova npm install
```

### **Errore: "Port 3000 already in use"**
```bash
# Killa processi esistenti
killall node
# Oppure usa porta diversa
PORT=3002 npm start
```

### **Errore: "Module not found"**
```bash
# Reinstalla dipendenze
rm -rf node_modules package-lock.json
npm install
```

### **Pagina bianca o errori React**
- Controlla la **Console del browser** (F12)
- Verifica di aver seguito tutti i step della guida
- Assicurati che i file abbiano la sintassi corretta

---

## 💡 **Suggerimenti**

### ✅ **Best Practices**
- **Salva spesso** e testa ad ogni modifica
- **Leggi sempre** i messaggi di errore completi
- **Usa la Console** del browser per debug (F12)
- **Segui l'ordine** degli step nella guida

### 🤝 **Chiedi Aiuto**
- All'insegnante durante il corso
- Ai compagni per confrontare soluzioni
- Controlla il **CHEAT_SHEET_REACT.md** per sintassi

---

**🚀 Sei pronto per iniziare il tuo viaggio in React! Buon coding! 💻✨**
