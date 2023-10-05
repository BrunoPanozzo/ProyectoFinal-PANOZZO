import { Link } from "react-router-dom";
import '../styles/item.css'

function Item({ producto }) {

    return (
        <div className="card text-bg-light mb-3 item">
            <div className="card-header">{producto.categoría}</div>
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <Link to={"/item/" + producto.id}>
                    <img src={producto.imagen} alt={producto.nombre} width="270" />
                </Link>
            </div>
            <p className="card-text item-precio">$ {producto.precio.toLocaleString()}</p>
            <Link to={`/item/${producto.id}`} className="btn btn-secondary text-decoration text-center btn-ver-detalle">
                Ver detalle
            </Link>
        </div>
    );
}

export default Item;