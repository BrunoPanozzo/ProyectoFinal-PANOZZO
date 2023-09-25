import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {

   return (      
     <div>    
         <BrowserRouter>
            <NavBar/>
            <Routes>
               <Route exact path="/" element={<ItemListContainer />} />
               <Route exact path="/category/:nombreCategoria" element={<ItemListContainer />} />
               <Route exact path="/item/:id" element={<ItemDetailContainer />} />
               <Route exact path="/cart" element={<Cart />} />
            </Routes>
         </BrowserRouter>
     </div>
   )
}

export default App;
