# 🚀 React Cheat Sheet - Riferimento Rapido
## Guida di Sopravvivenza per Studenti

---

## 📋 Indice Rapido

1. [Setup e Comandi Base](#setup-e-comandi-base)
2. [Componenti React](#componenti-react)
3. [JSX Essentials](#jsx-essentials)
4. [Hooks Fondamentali](#hooks-fondamentali)
5. [Event Handling](#event-handling)
6. [Context API](#context-api)
7. [React Router](#react-router)
8. [API Calls](#api-calls)
9. [CSS e Styling](#css-e-styling)
10. [Debugging](#debugging)
11. [Errori Comuni](#errori-comuni)

---

## 🛠️ Setup e Comandi Base

### Comandi Terminal Essenziali
```bash
# Installare dipendenze
npm install

# Avviare sviluppo
npm start

# Avviare server backend
npm run server

# Avviare entrambi
npm run dev

# Installare nuova libreria
npm install nome-libreria

# Controllare versione Node
node --version
```

### Struttura Progetto
```
src/
├── components/     # Componenti riutilizzabili
├── pages/         # Pagine dell'app
├── contexts/      # Context per stato globale
├── services/      # API calls e servizi
├── styles/        # CSS e temi
├── App.js         # Componente principale
└── index.js       # Entry point
```

---

## ⚛️ Componenti React

### Componente Funzionale Base
```jsx
import React from 'react';

// Componente semplice
const MioComponente = () => {
  return <div>Ciao mondo!</div>;
};

// Con props
const Saluto = ({ nome, età }) => {
  return (
    <div>
      <h1>Ciao {nome}!</h1>
      <p>Hai {età} anni</p>
    </div>
  );
};

// Export
export default MioComponente;
```

### Props e Destructuring
```jsx
// ✅ Buono - con destructuring
const Carta = ({ titolo, contenuto, autore }) => {
  return (
    <div>
      <h2>{titolo}</h2>
      <p>{contenuto}</p>
      <small>di {autore}</small>
    </div>
  );
};

// ❌ Evitare - senza destructuring
const Carta = (props) => {
  return (
    <div>
      <h2>{props.titolo}</h2>
      <p>{props.contenuto}</p>
      <small>di {props.autore}</small>
    </div>
  );
};

// Utilizzo
<Carta 
  titolo="React è fantastico" 
  contenuto="Impara React passo dopo passo"
  autore="Mario Rossi"
/>
```

---

## 🏷️ JSX Essentials

### Sintassi Base
```jsx
// Elementi JSX
const elemento = <h1>Titolo</h1>;

// Con variabili
const nome = "Mario";
const saluto = <h1>Ciao {nome}!</h1>;

// Con espressioni
const numero = 5;
const risultato = <p>5 + 3 = {5 + 3}</p>;

// Attributi
const immagine = <img src="foto.jpg" alt="Descrizione" />;
const bottone = <button className="btn-primary">Clicca</button>;
```

### Rendering Condizionale
```jsx
// Con operatore ternario
const Messaggio = ({ isLogged }) => (
  <div>
    {isLogged ? <p>Benvenuto!</p> : <p>Effettua il login</p>}
  </div>
);

// Con && operator
const Notifica = ({ hasNotifications, count }) => (
  <div>
    {hasNotifications && <span>Hai {count} notifiche</span>}
  </div>
);

// Con if/else (fuori dal JSX)
const Status = ({ user }) => {
  if (!user) {
    return <p>Caricamento...</p>;
  }
  
  if (user.role === 'admin') {
    return <p>Benvenuto Admin!</p>;
  }
  
  return <p>Benvenuto {user.name}!</p>;
};
```

### Liste e Keys
```jsx
// Rendering lista
const ListaStudenti = ({ studenti }) => (
  <ul>
    {studenti.map(studente => (
      <li key={studente.id}>
        {studente.nome} - {studente.classe}
      </li>
    ))}
  </ul>
);

// Con componenti
const GrigliaVoti = ({ voti }) => (
  <div className="griglia">
    {voti.map(voto => (
      <CartaVoto 
        key={voto.id} 
        materia={voto.materia}
        valore={voto.valore}
        data={voto.data}
      />
    ))}
  </div>
);
```

---

## 🎣 Hooks Fondamentali

### useState - Gestione Stato
```jsx
import React, { useState } from 'react';

const Contatore = () => {
  // Stato semplice
  const [count, setCount] = useState(0);
  
  // Stato oggetto
  const [user, setUser] = useState({
    nome: '',
    email: '',
    età: 0
  });
  
  // Stato array
  const [items, setItems] = useState([]);
  
  // Aggiornare stato
  const incrementa = () => setCount(count + 1);
  
  // Aggiornare oggetto (immutabile)
  const updateUser = (newName) => {
    setUser({
      ...user,           // Mantieni gli altri valori
      nome: newName      // Aggiorna solo nome
    });
  };
  
  // Aggiungere a array
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };
  
  // Rimuovere da array
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementa}>+1</button>
    </div>
  );
};
```

### useEffect - Side Effects
```jsx
import React, { useState, useEffect } from 'react';

const ComponenteConEffetti = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  
  // Esegui solo al mount (componentDidMount)
  useEffect(() => {
    console.log('Componente montato');
    fetchData();
  }, []); // Array vuoto = solo al mount
  
  // Esegui quando cambia count
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Dipende da count
  
  // Esegui ad ogni render (evitare!)
  useEffect(() => {
    console.log('Ogni render');
  }); // Nessun array = ogni render
  
  // Con cleanup (componentWillUnmount)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
    
    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log('Timer pulito');
    };
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Errore:', error);
    }
  };
  
  return <div>Dati: {JSON.stringify(data)}</div>;
};
```

---

## 🎯 Event Handling

### Eventi Base
```jsx
const FormEsempio = () => {
  const [input, setInput] = useState('');
  
  // Click handler
  const handleClick = () => {
    alert('Bottone cliccato!');
  };
  
  // Change handler
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  
  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene reload pagina
    console.log('Form inviato:', input);
  };
  
  // Key press handler
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter premuto');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Scrivi qualcosa..."
      />
      <button type="submit">Invia</button>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </form>
  );
};
```

### Form Controllati
```jsx
const FormCompleto = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: '',
    accetto: false,
    categoria: 'studente'
  });
  
  // Handler generico per tutti i campi
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dati form:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Input text */}
      <input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        placeholder="Nome"
      />
      
      {/* Input email */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      
      {/* Input password */}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      
      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          name="accetto"
          checked={formData.accetto}
          onChange={handleChange}
        />
        Accetto i termini
      </label>
      
      {/* Select */}
      <select
        name="categoria"
        value={formData.categoria}
        onChange={handleChange}
      >
        <option value="studente">Studente</option>
        <option value="docente">Docente</option>
        <option value="genitore">Genitore</option>
      </select>
      
      <button type="submit">Registrati</button>
    </form>
  );
};
```

---

## 🌐 Context API

### Creare Context
```jsx
// contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// 1. Creare il Context
const AuthContext = createContext();

// 2. Custom Hook per usare il Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve essere usato dentro AuthProvider');
  }
  return context;
};

// 3. Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const login = async (username, password) => {
    setLoading(true);
    try {
      // Logica di login
      const userData = await apiLogin(username, password);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Usare Context
```jsx
// App.js - Wrappare con Provider
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Le tue rotte */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// Componente che usa il Context
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Non loggato</div>;
  }
  
  return (
    <header>
      <span>Benvenuto, {user.name}!</span>
      <button onClick={logout}>Logout</button>
    </header>
  );
};
```

---

## 🛣️ React Router

### Setup Base
```jsx
// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotta pubblica */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Rotte protette */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        {/* Rotta con parametri */}
        <Route path="/studente/:id" element={<StudenteDetail />} />
        
        {/* Rotte annidate */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<UsersList />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
        {/* Redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
```

### Navigazione
```jsx
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

const NavigationExample = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Parametri URL
  const location = useLocation(); // Info sulla location corrente
  
  // Navigazione programmatica
  const goToDashboard = () => {
    navigate('/dashboard');
  };
  
  const goBack = () => {
    navigate(-1); // Torna indietro
  };
  
  return (
    <div>
      {/* Link dichiarativi */}
      <Link to="/dashboard">Dashboard</Link>
      <Link to={`/studente/${id}`}>Dettaglio Studente</Link>
      
      {/* Bottoni con navigazione */}
      <button onClick={goToDashboard}>Vai alla Dashboard</button>
      <button onClick={goBack}>Indietro</button>
      
      <p>Pagina corrente: {location.pathname}</p>
      <p>Parametro ID: {id}</p>
    </div>
  );
};
```

### Protected Routes
```jsx
// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Caricamento...</div>;
  }
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
```

---

## 🌐 API Calls

### Fetch Base
```jsx
// GET request
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

// POST request
const postData = async (newData) => {
  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Post error:', error);
    throw error;
  }
};
```

### Custom Hook per API
```jsx
// hooks/useApi.js
import { useState, useEffect } from 'react';

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  const refetch = () => {
    fetchData();
  };
  
  return { data, loading, error, refetch };
};

// Utilizzo
const ComponenteConDati = () => {
  const { data, loading, error, refetch } = useApi('/api/studenti');
  
  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>Errore: {error}</div>;
  
  return (
    <div>
      <button onClick={refetch}>Ricarica</button>
      <ul>
        {data?.map(studente => (
          <li key={studente.id}>{studente.nome}</li>
        ))}
      </ul>
    </div>
  );
};
```

---

## 🎨 CSS e Styling

### CSS Modules
```jsx
// Button.module.css
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}

// Button.js
import styles from './Button.module.css';

const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

### CSS Variables (Custom Properties)
```css
/* themes.css */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --background-color: #ffffff;
  --text-color: #212529;
  --border-radius: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}

[data-theme="dark"] {
  --primary-color: #0d6efd;
  --background-color: #212529;
  --text-color: #ffffff;
}

/* Utilizzo */
.card {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  border: 1px solid var(--primary-color);
}
```

### Styled Components (se installato)
```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${props => props.size === 'large' ? '12px 24px' : '8px 16px'};
  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Utilizzo
<StyledButton primary size="large">
  Click me
</StyledButton>
```

---

## 🐛 Debugging

### Console e DevTools
```jsx
const ComponenteDebug = () => {
  const [state, setState] = useState({ count: 0, name: 'Test' });
  
  // Console logging
  console.log('Render componente', { state });
  console.table(state); // Tabella per oggetti
  console.group('Debug Info');
  console.log('Count:', state.count);
  console.log('Name:', state.name);
  console.groupEnd();
  
  // Debugger breakpoint
  debugger; // Ferma l'esecuzione qui
  
  return (
    <div>
      {/* Debug info nel JSX */}
      {process.env.NODE_ENV === 'development' && (
        <pre>{JSON.stringify(state, null, 2)}</pre>
      )}
    </div>
  );
};
```

### React DevTools
```jsx
// Aggiungere displayName per debugging
const MioComponente = () => {
  // ...
};
MioComponente.displayName = 'MioComponente';

// Usare React.memo per performance debugging
const ComponentePesante = React.memo(({ data }) => {
  console.log('ComponentePesante re-rendered');
  return <div>{data}</div>;
});
```

### Error Boundaries
```jsx
// ErrorBoundary.js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Qualcosa è andato storto!</h2>
          <details>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// Utilizzo
<ErrorBoundary>
  <ComponenteChePuoRompere />
</ErrorBoundary>
```

---

## ⚠️ Errori Comuni

### 1. Key mancanti nelle liste
```jsx
// ❌ Sbagliato
{items.map(item => <li>{item.name}</li>)}

// ✅ Corretto
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

### 2. Mutazione diretta dello state
```jsx
// ❌ Sbagliato
const addItem = () => {
  items.push(newItem); // Muta direttamente
  setItems(items);
};

// ✅ Corretto
const addItem = () => {
  setItems([...items, newItem]); // Crea nuovo array
};
```

### 3. Dimenticare dipendenze in useEffect
```jsx
// ❌ Sbagliato - count non è nelle dipendenze
useEffect(() => {
  console.log(count);
}, []); // count potrebbe essere stale

// ✅ Corretto
useEffect(() => {
  console.log(count);
}, [count]); // count nelle dipendenze
```

### 4. Event handler inline che causano re-render
```jsx
// ❌ Sbagliato - crea nuova funzione ad ogni render
{items.map(item => (
  <button key={item.id} onClick={() => deleteItem(item.id)}>
    Delete
  </button>
))}

// ✅ Corretto - usa useCallback o sposta la logica
const handleDelete = useCallback((id) => {
  deleteItem(id);
}, [deleteItem]);

{items.map(item => (
  <ItemComponent 
    key={item.id} 
    item={item} 
    onDelete={handleDelete}
  />
))}
```

### 5. Dimenticare preventDefault nei form
```jsx
// ❌ Sbagliato - la pagina si ricarica
const handleSubmit = () => {
  console.log('Form submitted');
};

// ✅ Corretto
const handleSubmit = (e) => {
  e.preventDefault(); // Previene il reload
  console.log('Form submitted');
};
```

### 6. Confronti di oggetti in useEffect
```jsx
// ❌ Sbagliato - oggetto ricreato ad ogni render
const [user, setUser] = useState({ name: 'Mario', age: 25 });

useEffect(() => {
  fetchUserData();
}, [user]); // user è sempre "diverso"

// ✅ Corretto - dipendi da proprietà specifiche
useEffect(() => {
  fetchUserData();
}, [user.name, user.age]); // Dipendi da valori primitivi
```

---

## 🎯 Best Practices

### Organizzazione Componenti
```jsx
// ✅ Struttura componente ben organizzata
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Per type checking

const MioComponente = ({ 
  prop1, 
  prop2, 
  onAction,
  className = '',
  ...restProps 
}) => {
  // 1. Hooks all'inizio
  const [state, setState] = useState(initialState);
  
  // 2. useEffect dopo useState
  useEffect(() => {
    // Side effects
  }, []);
  
  // 3. Funzioni helper
  const handleClick = () => {
    // Logica
    onAction?.(data);
  };
  
  // 4. Early returns per condizioni
  if (!prop1) {
    return <div>Loading...</div>;
  }
  
  // 5. Render principale
  return (
    <div className={`mio-componente ${className}`} {...restProps}>
      {/* JSX */}
    </div>
  );
};

// 6. PropTypes per documentazione
MioComponente.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
  onAction: PropTypes.func,
  className: PropTypes.string
};

// 7. Default props se necessario
MioComponente.defaultProps = {
  prop2: 0,
  className: ''
};

export default MioComponente;
```

### Performance Tips
```jsx
// 1. React.memo per componenti puri
const ComponentePuro = React.memo(({ data }) => {
  return <div>{data.name}</div>;
});

// 2. useCallback per funzioni
const ComponenteParent = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Funzione stabile
  
  return <ComponenteFiglio onClick={handleClick} />;
};

// 3. useMemo per calcoli costosi
const ComponenteConCalcoli = ({ items }) => {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);
  
  return <div>Total: {expensiveValue}</div>;
};
```

---

## 📚 Risorse Utili

### Documentazione Ufficiale
- [React Docs](https://react.dev) - Documentazione ufficiale
- [React Router](https://reactrouter.com) - Routing
- [Create React App](https://create-react-app.dev) - Setup progetto

### Strumenti Sviluppo
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Extension browser
- [VS Code Extensions](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - Snippets React

### Community e Aiuto
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs) - Q&A
- [Reddit r/reactjs](https://reddit.com/r/reactjs) - Community
- [Discord Reactiflux](https://discord.gg/reactiflux) - Chat community

---

**Tieni questo cheat sheet sempre a portata di mano! 📖**

*Ricorda: la pratica rende perfetti. Non aver paura di sperimentare!* 🚀
