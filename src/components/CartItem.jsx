import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../styles/cartItem.css'

const CartItem = ({ producto }) => {

    const { removeItem } = useContext(CartContext)

    return (
        // <div className="item card text-bg-light mb-3">
        //     <div className="row g-0">
        //         <div className="col-md-8">
        //             <img src={producto.imagen} className="img-fluid float-start rounded-start" alt={producto.nombre} width="270" />
        //         </div>
        //         <div class="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title">{producto.nombre}</h5>
        //                 <p className="card-text item-precio">{producto.quantity}</p>
        //                 <p className="card-text item-precio">Precio por Unidad = $ {producto.precio.toLocaleString()}</p>
        //                 <p className="card-text item-precio">Subtotal = $ {(producto.quantity * producto.precio).toLocaleString()}</p>
        //                 <button type="button" onClick={() => removeItem(producto.id)} className="btn btn-ligth position-relative" width="20" height="20">
        //                     <img src={"../img/NavBar/carrito.png"} alt="Eliminar compra" width="50" height="50" />
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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
                        {/* <img src={"../img/NavBar/carrito.png"} alt="Eliminar compra" width="50" height="50" /> */}
                        <p className="card-title">Cancelar compra</p>
                    </button>
                </div>
            </div>
        </div>
    );


}

export default CartItem