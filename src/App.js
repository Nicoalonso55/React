/*import logo from "./logo.svg";*/

import "./index.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContext, CartContextProvider } from "./components/CartContext";
import CartView from "./components/CartView";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Pagina no encontrada</h1>} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
