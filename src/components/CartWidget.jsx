import Carrito from "../img/NavBar/carrito.png"

const CartWidget = () => {

    const cantidadProductos = 0;

    return (
        <div>
            <button type="button" className="btn btn-ligth position-relative" width="20" height="20">
                <img src={Carrito} alt="Logo de carrito de compras" width="50" height="50" />
                <span id="cantidadProductos" className="position-absolute translate-middle badge rounded-pill bg-danger">{cantidadProductos}</span>
            </button>
        </div>
    )
    
}

export default CartWidget