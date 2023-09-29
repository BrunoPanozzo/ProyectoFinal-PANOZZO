import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

export function App() {

   return (
      <div>
         <CartProvider>
            <BrowserRouter>
               <NavBar />
               <Routes>
                  <Route exact path="/" element={<ItemListContainer />} />
                  <Route exact path="/category/:nombreCategoria" element={<ItemListContainer />} />
                  <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path="/checkout" element={<Checkout />} />
                  <Route path="*" element={<h1>404 NOT FOUND</h1>} />
               </Routes>
            </BrowserRouter>
         </CartProvider>
      </div>
   )
}

export default App;
