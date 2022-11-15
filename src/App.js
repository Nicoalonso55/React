import logo from './logo.svg';

import './index.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element= {<ItemListContainer/>} />
      <Route path="/detail/:id" element= {<ItemDetailContainer/>} />
      <Route path="*" element= {<h1>Pagina no encontrada</h1>}/>
    </Routes>
    </BrowserRouter>);
}

export default App;
