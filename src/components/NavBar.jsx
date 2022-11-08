import CartWidget from "./CartWidget";

function NavBar () {
    return (
   
    <nav>
        
        <h1>  Informática Alonso</h1>

        <ul>
            <li><CartWidget></CartWidget> <a href="index.html"> Inicio</a></li>
            <li><a href="">Catálogo</a></li>
            <li><a href="">Carrito</a></li>
        </ul>
    </nav>);
}

export default NavBar