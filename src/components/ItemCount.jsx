import { useState } from 'react'
import '../styles/itemCount.css'

const ItemCount = ({ stock, cantidadInicial, onAdd }) => {

    //const [stockDisponible, setStockDisponible] = useState(stock);
    const [contador, setContador] = useState(cantidadInicial);

    const incrementarCantidad = () => {
        if (contador < stock)
            setContador(contador + 1)
    }

    const decrementarCantidad = () => {
        if (contador >= 1)
            setContador(contador - 1)
    }

    return (
        <div className="container">
            <div className="counter">
                <button id="btnDecrementar" onClick={decrementarCantidad}>-</button>
                <label id="counter-value">{contador}</label>
                <button id="btnIncrementar" onClick={incrementarCantidad} >+</button>
            </div>
            <button id="agregarAlCarrito" onClick={() => onAdd(contador)}>Comprar Ahora</button>
        </div>
    )
}

export default ItemCount