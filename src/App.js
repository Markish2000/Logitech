import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Controles from './components/controles/Controles';
import Footer from './components/Footer';
import MousePads from './components/mousepads/MousePads';
import NavBar from './components/NavBar';
import RecimadContainer from './components/RecimadContainer';
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


function App() {
  return ( 
<BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<RecimadContainer/>}/>
    <Route path='teclado' element={<Teclado/>}/>
    <Route path='detallesTeclado' element={<ItemDetailContainerTeclado/>}/>
    <Route path='mousepads' element={<MousePads/>}/>
    <Route path='detallesmousepads/:id' element={<ItemDetailContainerMousePads/>}/>
    <Route path='volantes' element={<Volantes/>}/>
    <Route panth='detallesVolantes' element={<ItemDetailContainerVolantes/>}/>
    <Route path='controles' element={<Controles/>}/>
    <Route path='detallescontroles/:id' element={<ItemDetailContainerControles/>}/>
    <Route path='audio' element={<Audio/>}/>
    <Route path='detallesAudio' element={<ItemDetailContainerAudio/>}/>
    <Route path='simuladoresDeVuelo' element={<SimuladoresDeVuelo/>}/>
    <Route path='detallesSimuladoresDeVuelo' element={<ItemDetailContainerSimuladorDeVuelo/>}/>
  </Routes>
  <Footer/>
</BrowserRouter>
  );
}

export default App;