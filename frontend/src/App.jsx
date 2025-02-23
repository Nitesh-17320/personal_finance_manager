import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h3" gutterBottom>Welcome to Personal Finance Manager</Typography>
        <Button variant="contained" component={Link} to="/dashboard">Go to Dashboard</Button>
      </Container>
    </>
  );
};

export default App;
