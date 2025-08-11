import './Navbar.css';

function Navbar({ onInicioClick, onHistoriaClick, onContactoClick }) {
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={onInicioClick}>Inicio</button></li>
        <li><button onClick={onHistoriaClick}>Historia</button></li>
        <li><button onClick={onContactoClick}>Contacto</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
