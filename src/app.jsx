import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
//import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContext } from './context/CartContext'

export function App() {

   return (
      <div>
         <BrowserRouter>
            <CartProvider>
               <NavBar />
               <Routes>
                  <Route exact path="/" element={<ItemListContainer />} />
                  <Route exact path="/category/:nombreCategoria" element={<ItemListContainer />} />
                  <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                  <Route exact path="/cart" element={<div></div>} />
                  <Route path="*" element={<h1>404 NOT FOUND</h1>} />
               </Routes>
            </CartProvider>
         </BrowserRouter>
      </div>
   )
}

export default App;
