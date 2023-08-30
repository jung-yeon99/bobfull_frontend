import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

// interface LoginFormProps {
//   onLogin: (username: string, password: string) => void;
// }

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 400}}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            startIcon={<LockIcon />}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
           
          >
            SignUp
          </Button>
          
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginForm;
