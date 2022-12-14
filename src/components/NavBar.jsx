import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";
import { useContext } from "react";

function NavBar() {
  const miContext = useContext(cartContext);
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
        <Link to="/cart">
        <CartWidget />
        <span>{miContext.itemsInCart()}</span></Link>
      </div>
    </header>
  );
}

export default NavBar;
