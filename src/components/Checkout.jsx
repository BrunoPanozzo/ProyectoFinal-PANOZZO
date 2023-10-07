import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Loading from './Loading'
import '../styles/checkout.css'
import { addDoc, collection, getFirestore } from "firebase/firestore"

function Checkout() {

    //constantes globales para validar los campos de la orden

    //declaración de los hooks
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState()
    const [loading, setLoading] = useState()

    const { cart, totalMonto, clearCart } = useContext(CartContext)

    //INICIO sección de validaciones de los datos del formulario de checkout

    //función para validar el nombre, solo permite letras y el caracter de espacio vacío
    function validarEntradaNombre(nombre) {
        if (validarNombre(nombre))         
            setNombre(nombre)
    }

    function validarNombre(nombre) {
        const tagNombre = document.getElementById('nameBuyer');
        if (!/^[a-z A-Z]+$/.test(nombre)) {
            tagNombre.classList.add("datoInvalido")
            tagNombre.classList.remove("datoValido")
            return false
        }
        else {
            tagNombre.classList.add("datoValido")
            tagNombre.classList.remove("datoInvalido")
            return true
        }
    }

    //función para validar el email    
    function validarEntradaEmail(email) {
        if (validarEmail(email)) 
            setEmail(email)
     }

    //expresión regular para validar un email
    const emailCorrecto = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validarEmail(email) {
        const tagEmail = document.getElementById('emailBuyer');
        if (!emailCorrecto(email)) {
            tagEmail.classList.add("datoInvalido")
            tagEmail.classList.remove("datoValido")
            return false
        }
        else {
            tagEmail.classList.add("datoValido")
            tagEmail.classList.remove("datoInvalido")
            return true
        }
    }

    //función para validar el teléfono    
    function validarEntradaTelefono(telefono) {
        if (validarTelefono(telefono)) 
            setTelefono(telefono)
    }

    function validarTelefono(telefono) {
        const tagNumeroTelefono = document.getElementById('phoneBuyer');
        if (isNaN(telefono)) {
            tagNumeroTelefono.classList.add("datoInvalido")
            tagNumeroTelefono.classList.remove("datoValido")
            return false
        }
        else {
            tagNumeroTelefono.classList.add("datoValido")
            tagNumeroTelefono.classList.remove("datoInvalido")
            return true
        }
    }
    //FIN sección de validaciones de los datos del formulario de checkout

    //función que genera el documento ORDEN y lo almacena en el Firestore
    function crearOrden() {
        //si el nombre está vacío, no genero la orden y muestro msje de datos incompletos
        if (nombre.length === 0) {
            Swal.fire({
                title: 'Por favor, ingrese un nombre.',
                icon: 'info',
                confirmButtonColor: '#rgb(53, 53, 218)',
                confirmButtonText: 'Aceptar',
            })
            return false;
        }
        //si el email está vacío, no genero la orden y muestro msje de datos incompletos
        if (email.length === 0) {
            Swal.fire({
                title: 'Por favor, ingrese un correo electrónico.',
                icon: 'info',
                confirmButtonColor: '#rgb(53, 53, 218)',
                confirmButtonText: 'Aceptar',
            })
            return false;
        }
        //si el teléfono está vacío, no genero la orden y muestro msje de datos incompletos
        if (telefono.length === 0) {
            Swal.fire({
                title: 'Por favor, ingrese un número de teléfono.',
                icon: 'info',
                confirmButtonColor: '#rgb(53, 53, 218)',
                confirmButtonText: 'Aceptar',
            })
            return false;
        }

        setLoading(true)

        //si tengo todos los datos completos, estoy en condiciones de generar la orden
        const fecha = new Date()
        //genero el objeto orden para ser guardado en la base de datos
        const orden = {
            buyer: { name: nombre, email: email, phone: telefono },
            items: cart.map(elemento => ({ id: elemento.id, title: elemento.nombre, quantity: elemento.quantity, prize: elemento.precio })),
            total: totalMonto(),
            date: `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`
        };

        //almaceno la orden en la colección de Ordenes de mi base de datos
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

    //muestro un spinner mientras se está generando la orden
    if (loading) {
        return (
            <Loading texto={"Generando orden de compra..."} />
        )
    }

    //si tuve éxito al generar la orden, muestro mensaje de orden confirmada
    if (orderId)
        return <h1 id="msjeOrdenConfirmada">{`Gracias por tu compra. Tu Nro de pedido es ${orderId}`}</h1>

    //formulario de ingreso de datos para poder generar la orden de compra
    return (
        <div className="container my-5">
            <h1 className="titulo-importante">Completar los siguientes datos:</h1>
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
                </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-secondary text-decoration text-center btn-ver-detalle" onClick={crearOrden}>Finalizar Compra</button>
            </div>
        </div>
    )
}

export default Checkout;