import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xs" sx={{ mt: 8 }}>
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" gutterBottom align="center" fontWeight="bold">
            Login
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
              Login
            </Button>
            <Typography variant="body2" align="center">
              Don't have an account? <a href="/signup" style={{ textDecoration: 'none', color: '#1976d2' }}>Sign up</a>
            </Typography>
            <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }} onClick={() => navigate('/dashboard')}>
              Back to Dashboard
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
