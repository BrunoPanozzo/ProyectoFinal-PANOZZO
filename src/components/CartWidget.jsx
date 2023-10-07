import { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const { totalItems } = useContext(CartContext)

    const cantidadArticulosComprados = totalItems()

    //cuando el CART está vacío
    if (cantidadArticulosComprados === 0)
        return (
            <>
            </>
        )

    //cuando el CART contiene productos
    return (
        <div>
            <Link to={"/cart"}>
                <img src={"../img/NavBar/carrito.png"} alt="Logo carrito de compras" width="50" height="50" />
                <span id="cantidadProductos" className="position-absolute translate-middle badge rounded-pill bg-danger">{cantidadArticulosComprados}</span>
            </Link>
        </div>
    )
}

export default CartWidget