import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import '../styles/itemDetail.css'
import { useState } from 'react'

function ItemDetail({ producto }) {

    const [stockDisponible, setStockDisponible] = useState(producto.stock);
    const [contador, setContador] = useState(0);

    function onAdd(cantidadElegida) {
        setContador(cantidadElegida)
        setStockDisponible(stockDisponible - cantidadElegida)
    }

    return (
        <div>
            <h1 className="titulo-importante">Producto Seleccionado</h1>
            <h2 className="item-detail-nombre">{producto.nombre}</h2>
            <div className="item-detail">
                <div className="item-more-detail">
                    <img className="item-detail-img" src={producto.imagen} alt={producto.nombre} />
                    <div>
                        <p className="item-detail-precio">${producto.precio}</p>
                        <p className="item-detail-stock">Stock Disponible: {stockDisponible}</p>
                        {contador > 0 ? <p className="item-detail-resumen-compra">Ud. ha comprado {contador} artículo/s.</p> : <p></p>}
                        {contador > 0 ? <Link to="/cart" className="item-detail-finalizar-compra">Finalizar Compra</Link> : <ItemCount className="item-detail-count" stock={producto.stock} cantidadInicial={contador} onAdd={onAdd} />}
                    </div>
                </div>
                <div>
                    <p className="item-detail-descripcion">{producto.descripción}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail   