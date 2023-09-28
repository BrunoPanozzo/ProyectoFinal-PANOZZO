import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { totalItems } = useContext(CartContext)

    return (
        <div>
            {/* <button type="button" className="btn btn-ligth position-relative" width="20" height="20"> */}
                <Link to={"/cart/"}>
                    <img src={"../img/NavBar/carrito.png"} alt="Logo de carrito de compras" width="50" height="50" />
                    <span id="cantidadProductos" className="position-absolute translate-middle badge rounded-pill bg-danger">{totalItems()}</span>
                </Link>
            {/* </button> */}
        </div>
    )

}

export default CartWidget