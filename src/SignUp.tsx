import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';


const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
      try {
        const response = await axios.post(
          'https://yoonsik.shop/users/signup',
          {
            email: email,
            password: password,
          },
          {
            headers: {
              'Content-Type': 'application/json', // content-type 헤더 추가
            },
          }
        );
        console.log(response.data.message);
        alert('회원가입을 환영합니다!');
        // navigate("/login");
      } catch (error) {
        console.log('회원가입 실패');
        console.log('Error:', error.message);
      }
    };
    
  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 400}}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            SignUp
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleSignup}
          >
            SignUp
          </Button>
          
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SignupForm;
