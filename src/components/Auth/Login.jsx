import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp, useAuth } from './Auth.ts'
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{marginBottom:"0"}}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [values, setValues] = useState({email:'', password:''})
  const [hasAccount, setHasAccount] = useState('')
  const navigate = useNavigate()


  const handleInp = (e) => {
    let obj = {
      ...values,
      [e.target.name]: e.target.value
    }

    setValues(obj)
  }


  return (
    <Box sx={{bgcolor:"#fff3e0",padding:5}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#f57c00' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            {hasAccount ? 'Sign in' : 'Sign up'}  
          </Typography>
          <Box component="form" noValidate >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInp}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInp}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            {hasAccount ? (
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,bgcolor:"#263238",borderColor: 'error.main',fontFamily: 'Monospace',color:"#f57c00"}}
                onClick={()=> signIn(values.email, values.password)}
              >
                Sign In
              </Button>
            ) : (
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor:"#263238",borderColor: 'error.main',fontFamily: 'Monospace',color:"#f57c00"}}
                onClick={()=>signUp(values.email, values.password)}
              >
                Sign Up
              </Button>
            )}

            <Grid container sx={{marginBottom:3}}>
              <Grid item >
                {hasAccount ? (
                  <Link
                    href="#"
                    variant="body2"
                    onClick={() => setHasAccount(!hasAccount)}
                    sx={{color:"#f57c00"}}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                ) : (
                  <Link
                    href="#"
                    variant="body2"
                    onClick={() => setHasAccount(!hasAccount)}
                    sx={{color:"#f57c00"}}
                  >
                    {'Have an account? Sign In'}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
          
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </Box>
  );
}
