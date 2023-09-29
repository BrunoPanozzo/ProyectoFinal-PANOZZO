import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from "firebase/firestore"

function Checkout() {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState()

    const { cart, totalItems } = useContext(CartContext)

    function crearOrden() {
        const orden = {
            buyer: { name: nombre, email: email, phone: telefono },
            items: { cart },
            total: totalItems()
        };

        const db = getFirestore()
        const coleccionOrdenes = collection(db, "ordenes")
        addDoc(coleccionOrdenes, orden)
            .then(({id}) => setOrderId(id))
            .catch()
    }

    if (orderId)
        return <h1>{`Gracias por tu compra. Tu Nro de pedido es ${orderId}`}</h1>

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className="formularioContacto ">
                <label>Nombre
                <input class="form__dato--inputForm" value={nombre} onChange={e => setNombre(e.target.value)} type="text" />
                </label>
                <label>Email
                <input class="form__dato--inputForm" value={email} onChange={e => setEmail(e.target.value)} type="text" />
                </label>
                <label>Teléfono
                <input class="form__dato--inputForm" value={telefono} onChange={e => setTelefono(e.target.value)} type="number" />
                </label>
            </form>
            <button onClick={crearOrden}>Finalizar Compra</button>
        </div>
    )

}

export default Checkout;