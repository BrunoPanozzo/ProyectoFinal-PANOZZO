import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import '../styles/cart.css'

const Cart = () => {

    const { cart, clearCart, totalItems, totalMonto } = useContext(CartContext)    

    const cantidadArticulosComprados = totalItems()

    if (cantidadArticulosComprados == 0)
        return <h1 className="titulo-importante">No existen productos en el carrito.</h1>

    return (
        <div>
            <h1 className="titulo-importante">Productos Comprados</h1>
            <div className="cart-list">
                {cart.map(producto => (
                    <CartItem key={producto.id} producto={producto} />
                ))}
            </div>
            <p className="cart-resumen-compra">Ud. compró un total de {cantidadArticulosComprados} artículos por un monto total de {totalMonto()}</p>
        </div>
    )
}

export default Cart