function Checkout() {

    return (
        <div>
            <form method="get" enctype="text/plain" className="formularioContacto ">
                <div className="formularioContacto__dato formularioContacto__obligatorio">
                    <label for="nombre" class="formularioContacto__dato--lblForm">Nombre</label>
                    <input class="formularioContacto__dato--inputForm" name="nombre" type="text" required />
                </div>
                <div className="formularioContacto__dato formularioContacto__obligatorio">
                    <label for="mail" class="formularioContacto__dato--lblForm">Email</label>
                    <input class="formularioContacto__dato--inputForm" name="mail" type="mail" required />
                </div>
                <div className="formularioContacto__dato formularioContacto__obligatorio">
                    <label for="tel" class="formularioContacto__dato--lblForm">Teléfono</label>
                    <input className="formularioContacto__dato--inputForm" name="tel" type="number" placeholder="* opcional" required />
                </div>
            </form>
        </div>
    )

}

export default Checkout;