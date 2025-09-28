/**
 * 🎯 TASK: Implementa il Context per l'autenticazione
 * 
 * Dovrai creare:
 * 1. Il Context con createContext()
 * 2. Il custom hook useAuth()
 * 3. Il Provider component AuthProvider
 * 4. Le funzioni login() e logout()
 * 5. La persistenza con localStorage
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

// 🎯 TASK 1: Crea il Context
// const AuthContext = createContext();

// 🎯 TASK 2: Implementa il custom hook
export const useAuth = () => {
  // 🎯 TASK: Usa useContext per ottenere il context
  // 🎯 TASK: Aggiungi controllo errore se usato fuori dal Provider
  
  throw new Error('useAuth non ancora implementato - Segui la guida step-by-step!');
};

// 🎯 TASK 3: Implementa il Provider
export const AuthProvider = ({ children }) => {
  // 🎯 TASK: Aggiungi state per user e loading
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  // 🎯 TASK: useEffect per caricare utente salvato
  // useEffect(() => {
  //   // Carica da localStorage
  // }, []);

  // 🎯 TASK: Implementa funzione login
  const login = (username, password) => {
    // 🎯 TASK: Logica di login
    // Credenziali demo: studente/password
    // Salva in localStorage se successo
    
    console.log('Login non ancora implementato - Segui la guida step-by-step!');
    return { success: false, error: 'Da implementare' };
  };

  // 🎯 TASK: Implementa funzione logout
  const logout = () => {
    // 🎯 TASK: Pulisci state e localStorage
    console.log('Logout non ancora implementato - Segui la guida step-by-step!');
  };

  // 🎯 TASK: Crea l'oggetto value
  // const value = {
  //   user,
  //   login,
  //   logout,
  //   loading,
  //   isAuthenticated: !!user
  // };

  // 🎯 TASK: Return del Provider
  return (
    <div>
      {/* 🎯 TASK: Sostituisci con AuthContext.Provider */}
      <p style={{ padding: '20px', color: 'orange' }}>
        ⚠️ AuthProvider non ancora implementato - Segui la guida step-by-step!
      </p>
      {children}
    </div>
  );
};