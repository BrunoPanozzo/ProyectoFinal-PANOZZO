import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../styles/cartItem.css'

const CartItem = ({ producto }) => {

    const { removeItem } = useContext(CartContext)

    return (        
        <div className="container text-center prod">
            <div className="row">
                <div className="col">
                    <img src={producto.imagen} className="img-fluid float-start rounded-start" alt={producto.nombre} />
                </div>
                <div className="col-6">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text item-precio">Cantidad: {producto.quantity}</p>
                    <p className="card-text item-precio">Precio por Unidad = $ {producto.precio.toLocaleString()}</p>
                    <p className="card-text item-precio">Subtotal = $ {(producto.quantity * producto.precio).toLocaleString()}</p>
                </div>
                <div className="col align-self-center">
                    <button type="button" onClick={() => removeItem(producto.id)} className="btn btn-warning text-decoration text-center btn-eliminarItem">
                        <p className="card-title">Cancelar compra</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem