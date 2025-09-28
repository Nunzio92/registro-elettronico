import React, { useState } from 'react';

const Contatore = () => {
  const [numero, setNumero] = useState(0);
  
  const aumenta = () => {
    setNumero(numero + 1);
  };
  
  const diminuisci = () => {
    setNumero(numero - 1);
  };
  
  const reset = () => {
    setNumero(0);
  };

  return (
    <div style={{ 
      padding: '30px', 
      border: '3px solid #2196F3',
      borderRadius: '15px',
      textAlign: 'center',
      margin: '20px auto',
      maxWidth: '400px',
      backgroundColor: '#f3f8ff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ color: '#2196F3', marginBottom: '20px' }}>
        🔢 Contatore Interattivo
      </h2>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '20px',
        border: '2px solid #e3f2fd'
      }}>
        <span style={{ 
          fontSize: '48px', 
          fontWeight: 'bold',
          color: numero >= 0 ? '#4CAF50' : '#f44336'
        }}>
          {numero}
        </span>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={diminuisci}
          style={{
            padding: '12px 20px',
            fontSize: '18px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ➖ -1
        </button>
        
        <button 
          onClick={reset}
          style={{
            padding: '12px 20px',
            fontSize: '18px',
            backgroundColor: '#757575',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🔄 Reset
        </button>
        
        <button 
          onClick={aumenta}
          style={{
            padding: '12px 20px',
            fontSize: '18px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ➕ +1
        </button>
      </div>
      
      <div style={{ 
        backgroundColor: '#e8f5e8', 
        padding: '15px', 
        borderRadius: '8px',
        border: '1px solid #4CAF50',
        marginTop: '20px'
      }}>
        <p style={{ margin: 0, color: '#2e7d32', fontSize: '14px' }}>
          ✅ <strong>Step 2 Completato!</strong> Ora impariamo il Context API!
        </p>
      </div>
    </div>
  );
};

export default Contatore;
