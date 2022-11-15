
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";


function NavBar () {
    return (
    <header>    
        <nav className="menu">
        
            <h1>  Informática Alonso</h1>

            <ul>
                <li><a href="index.html"> Inicio</a></li>
                <li><a href="">Catálogo</a></li>
                <li><a href="">Carrito</a></li>
            </ul>

            

        </nav>
        <div className="cart">
                
                <CartWidget/>
                <span>0</span>
            </div>

    </header> );
}

export default NavBar