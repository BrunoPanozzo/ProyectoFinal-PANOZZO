import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from "./ItemDetail"
import Loading from './Loading'
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = ()  => {       

    function cargarProducto(idProducto) {
        const db = getFirestore();
        const producto = doc(db, "productos", idProducto)
        return getDoc(producto)
    }

    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        cargarProducto(id)
            .then((prod) => {
                if (prod.exists)
                    setProducto({id:prod.id, ...prod.data()})
            })
            .finally(() => {                
                setLoading(false)
            });
    }, [id])

    if (loading) {
        return (
            <Loading texto={"Cargando producto seleccionado..."}/>
        )
    }

    return (
        <div className="item-detail-container">
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer