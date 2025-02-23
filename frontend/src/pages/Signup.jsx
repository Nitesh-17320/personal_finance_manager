import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container maxWidth="xs" sx={{ mt: 8 }}>
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" gutterBottom align="center" fontWeight="bold">
            Sign Up
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Sign Up
            </Button>
            <Typography variant="body2" align="center">
              Already have an account? <a href="/login" style={{ textDecoration: 'none', color: '#1976d2' }}>Login</a>
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

export default Signup;
