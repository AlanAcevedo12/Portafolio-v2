import estilos from "./Projects.module.css";

function Projects() {
    return (
        <div id={estilos.HomeContainer} name="Proyectos">
            <div id={estilos.contenedorLinea1}>
                <img
                    id={estilos.linea1}
                    src={require("../../Assets/ManchasPintura/linea.png")} />
            </div>
            <div id={estilos.contenedorTitulo}>
                <h1 id={estilos.titulo}>
                    Proyectos
                </h1>
            </div>

            <div id={estilos.infoContainer}> {/* DOG BREEDS APP */}
                <div id={estilos.fotoContainer} onClick={() => { window.open("https://pro-ropa-store.vercel.app/", "_blank") }}>
                    <img
                        id={estilos.foto}
                        src={require("../../Assets/pro-ropa.png")} />
                </div>
                <div id={estilos.contenedorLinea}>
                    <img
                        id={estilos.linea}
                        src={require("../../Assets/ManchasPintura/linea2.png")} />
                </div>
                <div id={estilos.contenedorTexto}>
                <h1 id={estilos.texto} style={{fontSize: "1.8rem"}}>Pro Ropa Store</h1>
                    <h1 id={estilos.texto}>
                        Formé parte de un grupo de 7 integrantes, en el cuál desarrollamos un
                        E-commerce de venta de ropa. Fui encargado de realizar el FrontEnd y
                        todo lo relacionado al proceso de pago, tanto estilos como integración
                        con la pasarela. El E-commerce posee carrito de compras, integración
                        con MercadoPago, registro, inicio de sesión, panel de administrador y
                        envío automático de emails.
                        Tecnologías: React, Redux, Node y PostgreSQL.
                    </h1>
                </div>
            </div>

            <div id={estilos.infoContainer} > {/* PRO ROPA STORE */}
                <div id={estilos.fotoContainer} onClick={() => { window.open("https://dog-breeds-app.vercel.app/", "_blank") }}>
                    <img
                        id={estilos.foto}
                        src={require("../../Assets/henry-dogs.png")} />
                </div>
                <div id={estilos.contenedorLinea}>
                    <img
                        id={estilos.linea}
                        src={require("../../Assets/ManchasPintura/linea2.png")}
                        style={{ rotate: "180deg" }} />
                </div>
                <div id={estilos.contenedorTexto}>
                <h1 id={estilos.texto} style={{fontSize: "1.8rem"}}>Dog Breeds</h1>
                    <h1 id={estilos.texto}>
                        Realicé un sitio web sobre razas de perros. En la misma se pueden
                        listar las razas predefinidas, realizar diversos filtros y ordenamientos,
                        buscar, agregar nuevas, editarlas y borrarlas.
                        Fui encargado de realizar tanto el FrontEnd como el BackEnd.
                        Tecnologías: React, Redux, Node.js y PostgreSQL.
                    </h1>
                </div>
            </div>

            <div id={estilos.infoContainer} > {/* ALBUM TRACKER */}
                <div id={estilos.fotoContainer} onClick={() => { window.open("https://mega.nz/file/V9EDzCYS#lg-pcWfLk9yNUiUESPNBW0jnoXCcyAkA6A7Z3hlXLWQ", "_blank") }}>
                    <img
                        id={estilos.foto}
                        src={require("../../Assets/album-tracker.jpg")} />
                </div>
                <div id={estilos.contenedorLinea}>
                    <img
                        id={estilos.linea}
                        src={require("../../Assets/ManchasPintura/linea2.png")}
                        style={{ rotate: "0deg" }} />
                </div>
                <div id={estilos.contenedorTexto}>
                <h1 id={estilos.texto} style={{fontSize: "1.8rem"}}>Album Tracker</h1>
                    <h1 id={estilos.texto}>
                        Aplicación para android en la cual se puede realizar el seguimiento del
                        álbum de figuritas (cromos) de Qatar 2022. Posee todas las figuritas con su número y nombre correspondiente.
                        Se puede marcar y/o desmarcar las figuritas que ya tenés y también agregarlas a la pila de repetidas.
                        Tecnologías: React Native, Redux y Expo.
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Projects;


