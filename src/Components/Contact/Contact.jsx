import estilos from "./Contact.module.css";

function Contact() {
    return (
        <div id={estilos.HomeContainer}  name="Contacto">
            <div id={estilos.contenedorLinea1}>
                <img
                    id={estilos.linea1}
                    src={require("../../Assets/ManchasPintura/linea.png")} />
            </div>
            <div id={estilos.contenedorTitulo}>
                <h1 id={estilos.titulo}>
                    Contacto
                </h1>
            </div>
            <div id={estilos.contenedorTexto}>
                <p className={estilos.textoContacto}>Mail:{" "}
                    <a href="mailto:alanacevedo2001@hotmail.com" className={estilos.linkContacto} target="blank"> alanacevedo2001@hotmail.com</a>
                </p>
                <p className={estilos.textoContacto} >LinkedIn: {" "}
                    <a href="https://www.linkedin.com/in/alan-acevedo-developer/" className={estilos.linkContacto} target="blank">in/alan-acevedo-developer</a>
                </p>
                <p className={estilos.textoContacto}>GitHub:{" "}
                    <a href="https://github.com/AlanAcevedo12" className={estilos.linkContacto} target="blank">AlanAcevedo12</a>
                </p>
                <p className={estilos.textoContacto}>WhatsApp:{" "}
                    <a href="https://wa.link/xtlh0t" className={estilos.linkContacto} target="blank">Escribime...</a>
                </p>
            </div>
            <div id={estilos.contenedorLinea}>
                <img
                    id={estilos.linea}
                    src={require("../../Assets/ManchasPintura/linea.png")} />
            </div>
        </div>
    );
}

export default Contact;


