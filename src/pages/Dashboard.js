/**
 * 🎯 TASK: Implementa la dashboard principale
 * 
 * Dovrai:
 * 1. Creare dati mock per voti e compiti
 * 2. Implementare componente StatCard riutilizzabile
 * 3. Creare grid responsive per le statistiche
 * 4. Renderizzare liste di voti e compiti con map()
 * 5. Aggiungere logica per colori condizionali
 */

import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  Grade as GradeIcon,
  Schedule as ScheduleIcon,
  Announcement as AnnouncementIcon
} from '@mui/icons-material';

const Dashboard = () => {
  // 🎯 TASK: Crea dati mock
  const mockData = {
    voti: [
      // 🎯 TASK: Aggiungi array di voti con materia, voto, data
      // Esempio: { materia: 'Matematica', voto: 8, data: '2024-01-15' }
    ],
    compiti: [
      // 🎯 TASK: Aggiungi array di compiti con materia, descrizione, scadenza
      // Esempio: { materia: 'Inglese', descrizione: 'Esercizi pagina 45-47', scadenza: '2024-01-20' }
    ]
  };

  // 🎯 TASK: Componente StatCard riutilizzabile
  const StatCard = ({ title, value, icon, color = 'primary' }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        {/* 🎯 TASK: Implementa layout della card */}
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography color="textSecondary" gutterBottom>
            🎯 TASK: {title}
          </Typography>
          <Typography variant="h4" component="div">
            {value}
          </Typography>
          <Typography variant="body2">
            Implementa il layout completo!
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  // 🎯 TASK: Calcola media voti
  // const mediaVoti = mockData.voti.reduce(...) / mockData.voti.length;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Studente
      </Typography>
      
      {/* Messaggio informativo */}
      <Box sx={{ mb: 3, p: 2, backgroundColor: '#f3e5f5', borderRadius: 2 }}>
        <Typography variant="body1" color="primary">
          🎯 <strong>TASK Dashboard:</strong> Segui la guida step-by-step per implementare:
        </Typography>
        <ul>
          <li>Dati mock per voti e compiti</li>
          <li>Componente StatCard riutilizzabile</li>
          <li>Grid responsive per statistiche</li>
          <li>Liste dinamiche con map()</li>
        </ul>
      </Box>
      
      {/* 🎯 TASK: Grid delle statistiche */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Media Voti"
            value="🎯 TASK"
            icon={<GradeIcon sx={{ fontSize: 40 }} />}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Compiti"
            value="🎯 TASK"
            icon={<AssignmentIcon sx={{ fontSize: 40 }} />}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Ore Presenza"
            value="🎯 TASK"
            icon={<ScheduleIcon sx={{ fontSize: 40 }} />}
            color="info"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Comunicazioni"
            value="🎯 TASK"
            icon={<AnnouncementIcon sx={{ fontSize: 40 }} />}
            color="error"
          />
        </Grid>
      </Grid>

      {/* 🎯 TASK: Sezione voti e compiti */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Ultimi Voti
              </Typography>
              {/* 🎯 TASK: Map per renderizzare voti */}
              <Box sx={{ p: 2, backgroundColor: '#fff3e0', borderRadius: 1 }}>
                <Typography variant="body2">
                  🎯 TASK: Implementa lista voti con map()
                </Typography>
                <Typography variant="caption">
                  Usa mockData.voti.map() per renderizzare i voti
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Compiti in Scadenza
              </Typography>
              {/* 🎯 TASK: Map per renderizzare compiti */}
              <Box sx={{ p: 2, backgroundColor: '#fff3e0', borderRadius: 1 }}>
                <Typography variant="body2">
                  🎯 TASK: Implementa lista compiti con map()
                </Typography>
                <Typography variant="caption">
                  Usa mockData.compiti.map() per renderizzare i compiti
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;