import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Controles from './components/controles/Controles';
import Footer from './components/headerAndFooter/Footer';
import MousePads from './components/mousepads/MousePads';
import NavBar from './components/headerAndFooter/NavBar';
import RecimadContainer from './components/mouse/Mouse';
import Teclado from './components/teclado/Teclado';
import Volantes from './components/volantes/Volantes';
import Audio from './components/audio/Audio';
import SimuladoresDeVuelo from './components/simuladoresDeVuelo/SimuladoresDeVuelo';
import ItemDetailContainerMousePads from './components/mousepads/ItemDetailContainerMousePads';
import ItemDetailContainerControles from './components/controles/ItemDetailContainerControles';
import ItemDetailContainerAudio from './components/audio/ItemDetailContainerAudio';
import ItemDetailContainerVolantes from './components/volantes/ItemDetailContainerVolantes';
import ItemDetailContainerSimuladorDeVuelo from './components/simuladoresDeVuelo/ItemDetailContainerSimuladorDeVuelo';
import ItemDetailContainerTeclado from './components/teclado/ItemDetailContainerTeclado';
import IndexContainer from './components/LogitechContainer';
import ItemDetailContainerMouse from './components/mouse/ItemDetailContainerMouse';
import {ProductContextProvider} from './context/ProductContext'
import Cart from './components/shop/Cart';

function App() {
  return ( 
    <ProductContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<IndexContainer/>}/>
          <Route path='mouse' element={<RecimadContainer/>}/>
          <Route path='mouse/detallesMouse/:id' element={<ItemDetailContainerMouse/>}/>
          <Route path='teclado' element={<Teclado/>}/>
          <Route path='teclado/detallesTeclado/:id' element={<ItemDetailContainerTeclado/>}/>
          <Route path='mousepads' element={<MousePads/>}/>
          <Route path='mousepads/detallesmousepads/:id' element={<ItemDetailContainerMousePads/>}/>
          <Route path='volantes' element={<Volantes/>}/>
          <Route path='volantes/detallesVolantes/:id' element={<ItemDetailContainerVolantes/>}/>
          <Route path='controles' element={<Controles/>}/>
          <Route path='controles/detallescontroles/:id' element={<ItemDetailContainerControles/>}/>
          <Route path='audio' element={<Audio/>}/>
          <Route path='audio/detallesAudio/:id' element={<ItemDetailContainerAudio/>}/>
          <Route path='simuladoresDeVuelo' element={<SimuladoresDeVuelo/>}/>
          <Route path='simuladoresDeVuelo/detallesSimuladoresDeVuelo/:id' element={<ItemDetailContainerSimuladorDeVuelo/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ProductContextProvider>
  );
};

export default App;