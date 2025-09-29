/**
 * 🔐 LoginForm - TODO: Implementare form con useState e API
 */

import React from 'react';
import { Container, Typography } from '@mui/material';
// TODO: Importare useState da 'react' - https://react.dev/reference/react/useState
// TODO: Importare Paper, TextField, Button, Alert da '@mui/material'
// TODO: Importare login e getErrorMessage da '../services/api'

const LoginForm = ({ onLoginSuccess }) => {
  // TODO: const [formData, setFormData] = useState({ username: '', password: '' });
  // TODO: const [error, setError] = useState('');

  const handleInputChange = (e) => {
    // TODO: setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Chiamare login(formData.username, formData.password)
    // TODO: Se successo -> onLoginSuccess(result.user)
    // TODO: Se errore -> setError(messaggio)
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>🔐 Login</Typography>
      {/* TODO: Implementare form con TextField username/password e Button */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        Test: studente / password
      </Typography>
    </Container>
  );
};

export default LoginForm;
