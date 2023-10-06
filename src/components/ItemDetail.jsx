import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import '../styles/itemDetail.css'
import { useState, useContext } from 'react'
import { CartContext } from "../context/CartContext";

function ItemDetail({ producto }) {

    const { addItem } = useContext(CartContext)
    const [stockDisponible, setStockDisponible] = useState(producto.stock)
    const [contador, setContador] = useState(0)

    function onAdd(quantity) {
        setContador(quantity)
        setStockDisponible(stockDisponible - quantity)
        //actualizo mi carrito
        addItem(producto, quantity)
    }

    return (
        <div>
            <h1 className="titulo-importante">Producto Seleccionado</h1>
            <h2 className="item-detail-nombre">{producto.nombre}</h2>
            <div className="item-detail">
                <div className="item-more-detail">
                    <img className="item-detail-img" src={producto.imagen} alt={producto.nombre} />
                    <div>
                        <p className="item-detail-precio">$ {producto.precio.toLocaleString()}</p>
                        <p className="item-detail-stock">Stock Disponible: {stockDisponible}</p>
                        {contador > 0 ? <p className="item-detail-resumen-compra">Ud. ha comprado {contador} artículo/s.</p> : <p></p>}
                        <div id="botonesDecision">
                            {contador > 0 ? <Link to="/" className="btn btn-secondary text-decoration text-center btn-ver-detalle">Elegir más productos</Link> : <div></div>}
                            {contador > 0 ? <Link to="/cart" className="btn btn-secondary text-decoration text-center btn-ver-detalle">Finalizar Compra</Link> : <ItemCount className="item-detail-count" stock={producto.stock} cantidadInicial={contador} onAdd={onAdd} />}
                        </div>
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