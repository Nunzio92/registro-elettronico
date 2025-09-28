import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton
} from '@mui/material';
import {
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
  Palette as PaletteIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Registro Elettronico - {user?.username}
          </Typography>
          
          <IconButton
            color="inherit"
            onClick={() => navigate('/dashboard')}
            disabled={location.pathname === '/dashboard'}
          >
            <DashboardIcon />
          </IconButton>
          
          <IconButton
            color="inherit"
            onClick={() => navigate('/settings')}
            disabled={location.pathname === '/settings'}
          >
            <SettingsIcon />
          </IconButton>
          
          <IconButton
            color="inherit"
            onClick={() => navigate('/theme-example')}
            disabled={location.pathname === '/theme-example'}
            title="Esempi CSS Variables"
          >
            <PaletteIcon />
          </IconButton>
          
          <Button
            color="inherit"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
          >
            Esci
          </Button>
        </Toolbar>
      </AppBar>
      
      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
