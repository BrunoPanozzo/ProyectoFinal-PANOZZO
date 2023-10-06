import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import '../styles/checkout.css'
import Loading from './Loading'

function Checkout() {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState()
    const [loading, setLoading] = useState()

    const { cart, totalMonto, clearCart } = useContext(CartContext)

    const emailValido = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validarNombre(nombre) {
        const nombreTag = document.getElementById('nameBuyer');
        if (!/^[a-z A-Z]+$/.test(nombre)) {
            nombreTag.classList.add("datoInvalido")
            nombreTag.classList.remove("datoValido")
        }
        else {
            nombreTag.classList.add("datoValido")
            nombreTag.classList.remove("datoInvalido")
        }
    }

    function validarEmail(email) {

        const emailTag = document.getElementById('emailBuyer');

        if (!emailValido(email)) {
            emailTag.classList.add("datoInvalido")
            emailTag.classList.remove("datoValido")
        }
        else {
            emailTag.classList.add("datoValido")
            emailTag.classList.remove("datoInvalido")
        }
    }

    function validarTelefono(nroTel) {
        const nroTelTag = document.getElementById('phoneBuyer');
        if (isNaN(nroTel)) {
            nroTelTag.classList.add("datoInvalido")
            nroTelTag.classList.remove("datoValido")
        }
        else {
            nroTelTag.classList.add("datoValido")
            nroTelTag.classList.remove("datoInvalido")
        }
    }

    function crearOrden() {
        if (nombre.length === 0) {
            Swal.fire({
                title: 'Por favor, ingrese su nombre.',
                icon: 'info',
                confirmButtonColor: '#rgb(53, 53, 218)',
                confirmButtonText: 'Aceptar',
            })
            return false;
        }

        if (telefono.length === 0) {
            Swal.fire({
                title: 'Por favor, ingrese un numero de telefono.',
                icon: 'info',
                confirmButtonColor: '#rgb(53, 53, 218)',
                confirmButtonText: 'Aceptar',
            })
            return false;
        }

        if (email.length === 0) {
            Swal.fire({
                title: 'Por favor, ingrese su correo electrónico.',
                icon: 'info',
                confirmButtonColor: '#rgb(53, 53, 218)',
                confirmButtonText: 'Aceptar',
            })
            return false;
        }

        const fecha = new Date()

        const orden = {
            buyer: { name: nombre, email: email, phone: telefono },
            items: cart.map(elemento => ({ id: elemento.id, title: elemento.nombre, quantity: elemento.quantity, prize: elemento.precio })),
            total: totalMonto(),
            date: `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`
        };

        setLoading(true)

        const db = getFirestore()
        const coleccionOrdenes = collection(db, "ordenes")
        addDoc(coleccionOrdenes, orden)
            .then(({ id }) => {
                setOrderId(id)
                clearCart()
            })
            .finally(() => {
                setLoading(false)
            })
    }

    function validarEntradaNombre(name) {
        validarNombre(name);
        setNombre(name);
    }

    function validarEntradaEmail(email) {
        validarEmail(email);
        setEmail(email);
    }

    function validarEntradaTelefono(phone) {
        validarTelefono(phone);
        setTelefono(phone);
    }

    if (orderId)
        return <h1 id="msjeOrdenConfirmada">{`Gracias por tu compra. Tu Nro de pedido es ${orderId}`}</h1>

    if (loading) {
        return (
            <Loading texto={"Generando orden de compra..."} />
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5">
                    <form onSubmit={(e) => e.preventDefault()} className="formularioContacto ">
                        <label className="formularioContacto__dato">Nombre
                            <input required id="nameBuyer" className="formularioContacto__dato--inputForm" value={nombre} onChange={(e) => validarEntradaNombre(e.target.value)} type="text" />
                        </label>

                        <label className="formularioContacto__dato">Email
                            <input required id="emailBuyer" className="formularioContacto__dato--inputForm" value={email} onChange={(e) => validarEntradaEmail(e.target.value)} type="text" />
                        </label>
                        <label className="formularioContacto__dato">Teléfono
                            <input required id="phoneBuyer" className="formularioContacto__dato--inputForm" value={telefono} onChange={(e) => validarEntradaTelefono(e.target.value)} type="text" />
                        </label>
                    </form>
                    <button className="btn btn-secondary text-decoration text-center btn-ver-detalle" onClick={crearOrden}>Finalizar Compra</button>
                </div>
            </div>
        </div>
    )

}

export default Checkout;