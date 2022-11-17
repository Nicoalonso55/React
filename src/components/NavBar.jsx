import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="menu">
        <Link to="/">
          <h1> Informática Alonso</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/smartphones">Smartphones</Link>
          </li>
          
        </ul>
      </nav>
      <div className="cart">
        <CartWidget />
        <span>0</span>
      </div>
    </header>
  );
}

export default NavBar;
