import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {

    const { cart } = useContext(CartContext)    

    return (
        <div>
            <h1 className="titulo-importante">Productos Comprados</h1>
            <div className="item-list">
                {cart.map(producto => (
                    <CartItem key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    )
}

export default Cart