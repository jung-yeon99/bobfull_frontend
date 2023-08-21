// import React from 'react';
import { CssBaseline, Container, Typography, Paper } from '@mui/material';
// import LoginForm from './LoginForm';
import SignUpForm from './SignUp';

const App = () => {
  const handleLogin = (username, password) => {
    console.log('Login attempt:', username, password);
  };

  return (
    <CssBaseline>
      <Container maxWidth="xl" align="center" >
        <Paper elevation={3} sx={{ padding: 3, marginTop: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            BOBFULL
          </Typography>
          <SignUpForm onLogin={handleLogin} />
        </Paper>
      </Container>
    </CssBaseline>
  );
};

export default App;
