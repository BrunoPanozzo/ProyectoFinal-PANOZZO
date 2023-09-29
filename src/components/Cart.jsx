import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import '../styles/cart.css'
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, clearCart, totalItems, totalMonto } = useContext(CartContext)

    const cantidadArticulosComprados = totalItems()
    
    if (cantidadArticulosComprados === 0)
        return (
            <>
                <h1 className="titulo-importante">No existen productos en el carrito.</h1>
                <Link to="/" className="btn btn-secondary text-decoration text-center btn-ver-detalle">Volver a la Tienda</Link>
            </>
        )

    return (
        <div>
            <h1 className="titulo-importante">Productos Comprados</h1>
            <div className="cart-list">
                {cart.map(producto => (
                    <CartItem key={producto.id} producto={producto} />
                ))}
            </div>
            <p className="cart-resumen-compra">Ud. compró un total de {cantidadArticulosComprados} artículos por un monto total de $ {totalMonto()}</p>
            <button onClick={() => clearCart()}>Vaciar carrito</button> 
        </div>
    )
}

export default Cart