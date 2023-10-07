import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemList from "./ItemList"
import Loading from './Loading'
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {    

    function cargarProductos(nombreCategoria) {
        const db = getFirestore();
        const coleccionProductos = collection(db, "productos")
        const q = nombreCategoria ? query(coleccionProductos, where("categoría", "==", nombreCategoria)) : coleccionProductos
        return getDocs(q)
    }

    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [loading, setLoading] = useState(true)
    const { nombreCategoria } = useParams()

    useEffect(() => {
        setLoading(true)        
        cargarProductos(nombreCategoria)        
            .then((data) => {
                if (data.size === 0)
                    return (<h1>No hay productos en la tienda</h1>)
                else
                    setProductosFiltrados(data.docs.map(producto => ({id: producto.id, ...producto.data()})))
            })
            .finally(() => {
                setLoading(false)
            });
    }, [nombreCategoria])
    
    if (loading) {
        return (
            !nombreCategoria ? <Loading texto={"Cargando productos..."} /> : <Loading texto={`Cargando productos de la categría ${nombreCategoria}...`} />
        )
    }

    return (
        <div className="item-list-container">
            <ItemList productosAMostrar={productosFiltrados} />
        </div>
    )
}

export default ItemListContainer