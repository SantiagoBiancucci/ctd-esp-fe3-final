
import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from './utils/global.context';
import './Styles/Navbar.css';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, handleChangeTheme } = useGlobalState();

  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/Home">Home</Link>
      <Link to="/Favs">Favoritos</Link>
      <Link to="/Contact">Contacto</Link>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme}>Change theme</button>
      <h2>Current Theme: {theme}</h2>
    </nav>
  );
};

export default Navbar;
