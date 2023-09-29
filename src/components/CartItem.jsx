import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({ producto }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="item">
            <div className="card text-bg-light mb-3" style="max-width: 18rem; min-height: 28rem">
                <div className="card-body">
                    <img src={producto.imagen} alt={producto.nombre} width="270" />
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text item-precio">{producto.quantity}</p>
                    <p className="card-text item-precio">Precio por Unidad = $ {producto.precio.toLocaleString()}</p>
                    <p className="card-text item-precio">Subtotal = $ {(producto.quantity * producto.precio).toLocaleString()}</p>
                    <button type="button" onClick={() => removeItem(producto.id)} className="btn btn-ligth position-relative" width="20" height="20">
                        <img src={"../img/NavBar/carrito.png"} alt="Eliminar compra" width="50" height="50" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem