import estilos from "./About.module.css";

function About() {
    return (
        <div id={estilos.HomeContainer}  name="Perfil">
            <div id={estilos.contenedorLinea1}>
                <img
                    id={estilos.linea1}
                    src={require("../../Assets/ManchasPintura/linea.png")} />
            </div>
            <div id={estilos.contenedorTitulo}> 
                <h1 id={estilos.titulo}>
                    Perfil Personal
                </h1>
            </div>
            <div id={estilos.infoContainer}>
                <div id={estilos.fotoContainer}>
                    <img
                        id={estilos.foto}
                        src={require("../../Assets/foto/foto.png")} />
                </div>
                <div id={estilos.contenedorLinea}>
                    <img
                        id={estilos.linea}
                        src={require("../../Assets/ManchasPintura/linea2.png")} />
                </div>
                <div id={estilos.contenedorTexto}>
                    <h1 id={estilos.texto}>
                        Soy una persona adaptable, con pensamiento creativo y dedicacion,
                        cualidades que me ayudan a destacarme en cada aspecto que me proponga.
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default About;


