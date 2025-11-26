import { Outlet, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Container, Box, Button } from '@mui/material';
import { Home, Restaurant, Category, Info } from '@mui/icons-material';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="sticky" 
        sx={{ 
          background: '#0f0f0f',
          borderBottom: '1px solid rgba(255, 107, 53, 0.2)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'center', gap: 2 }}>
          <Button
            component={NavLink}
            to="/"
            startIcon={<Home />}
            sx={{
              color: 'white',
              fontWeight: 500,
              '&.active': {
                color: '#ff6b35',
                borderBottom: '2px solid #ff6b35',
                borderRadius: 0,
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
              },
            }}
          >
            Inicio
          </Button>
          <Button
            component={NavLink}
            to="/meals"
            startIcon={<Restaurant />}
            sx={{
              color: 'white',
              fontWeight: 500,
              '&.active': {
                color: '#ff6b35',
                borderBottom: '2px solid #ff6b35',
                borderRadius: 0,
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
              },
            }}
          >
            Menú de Platos
          </Button>
          <Button
            component={NavLink}
            to="/categories"
            startIcon={<Category />}
            sx={{
              color: 'white',
              fontWeight: 500,
              '&.active': {
                color: '#ff6b35',
                borderBottom: '2px solid #ff6b35',
                borderRadius: 0,
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
              },
            }}
          >
            Categorías
          </Button>
          <Button
            component={NavLink}
            to="/about"
            startIcon={<Info />}
            sx={{
              color: 'white',
              fontWeight: 500,
              '&.active': {
                color: '#ff6b35',
                borderBottom: '2px solid #ff6b35',
                borderRadius: 0,
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
              },
            }}
          >
            Conócenos
          </Button>
        </Toolbar>
      </AppBar>
      
      <Box component="main" sx={{ flex: 1, py: 4, backgroundColor: '#0a0a0a' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;