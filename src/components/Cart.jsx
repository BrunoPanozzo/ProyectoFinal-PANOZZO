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
            <div className="row">
                <div className="col-9">
                    <h1 className="titulo-importante">Productos Comprados</h1>
                </div>
                <div className="col align-self-center">
                    <button type="button" onClick={() => clearCart()} className="btn btn-danger text-decoration text-center btn-vaciarCArrito">
                        <p className="card-title">Vaciar carrito</p>
                    </button>
                </div>
            </div>
            <div className="cart-list">
                {cart.map(producto => (
                    <CartItem key={producto.id} producto={producto} />
                ))}
            </div>
            <p className="cart-resumen-compra">Ud. compró un total de {cantidadArticulosComprados} artículos por un monto total de $ {totalMonto()}</p>
            <Link to="/checkout" className="btn btn-secondary text-decoration text-center btn-ver-detalle">Confirmar Compra</Link>
        </div>
    )
}

export default Cart