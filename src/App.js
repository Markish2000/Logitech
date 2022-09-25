import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/headerAndFooter/Footer';
import NavBar from './components/headerAndFooter/NavBar';
import LogitechContainer from './components/LogitechContainer';
import {ProductContextProvider} from './context/ProductContext'
import Cart from './components/shop/Cart';
import Category from './components/Category';
import ItemDetail from './components/shop/ItemDetail';

function App() {
  return ( 
    <ProductContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<LogitechContainer/>}/>
          <Route path=':id' element={<Category/>}/>
          <Route path=':id/:id' element={<ItemDetail/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ProductContextProvider>
  );
};

export default App;