import '../styles/itemList.css'
import Item from './Item'

function ItemList({ productosAMostrar }) {

    return (
        <div>
            <h1 className="titulo-importante">Productos Seleccionados</h1>
            <div className="item-list">
                {productosAMostrar.map((producto) => (
                    <Item key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
}

export default ItemList;