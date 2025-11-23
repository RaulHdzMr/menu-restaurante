import { Outlet, NavLink } from 'react-router-dom';
// import './Layout.css'; 

const Layout = () => {
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'green' : 'blue',
    margin: '0 10px',
    textDecoration: 'none',
  });

  return (
    <>
      <header style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <nav>
          <NavLink to="/" style={navLinkStyle}>
            Inicio
          </NavLink>
          <NavLink to="/meals" style={navLinkStyle}>
            Menú de Platos
          </NavLink>
          <NavLink to="/about" style={navLinkStyle}>
            Acerca de
          </NavLink>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        <Outlet /> 
      </main>
    </>
  );
};

export default Layout;