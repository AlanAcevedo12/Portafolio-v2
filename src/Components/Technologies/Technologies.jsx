import estilos from "./Technologies.module.css";

function Technologies() {
    return (
        <div id={estilos.HomeContainer} name="Tecnologias">
            <div id={estilos.contenedorLinea1}>
                <img
                    id={estilos.linea1}
                    src={require("../../Assets/ManchasPintura/linea.png")} />
            </div>
            <div id={estilos.contenedorTitulo}>
                <h1 id={estilos.titulo}>
                    Tecnologias
                </h1>
            </div>
            <div id={estilos.contenedorTexto}>
                <h1 id={estilos.texto}>
                    React - React Native
                </h1>
                <h1 id={estilos.texto}>
                    Node
                </h1>
                <h1 id={estilos.texto}>
                    PostgreSQL
                </h1>
                <h1 id={estilos.texto}>
                    HTML5 - CSS3
                </h1>
                <h1 id={estilos.texto}>
                    Javascript
                </h1>
                <h1 id={estilos.texto}>
                    Java
                </h1>
            </div>
            <div id={estilos.contenedorManchas}>
                <div className={estilos.manchas} style={{ marginTop: "1vh", marginLeft: "80%" }}>
                    <img src={require("../../Assets/ManchasPintura/400ppi/Recurso1.png")} className={estilos.imgManchas} />
                </div>
                <div className={estilos.manchas} style={{ marginTop: "5vh", marginLeft: "20%" }}>
                    <img src={require("../../Assets/ManchasPintura/400ppi/Recurso2.png")} className={estilos.imgManchas} />
                </div>
                <div className={estilos.manchas} style={{ marginTop: "25vh", marginLeft: "80%" }}>
                    <img src={require("../../Assets/ManchasPintura/400ppi/Recurso3.png")} className={estilos.imgManchas} />
                </div>
                <div className={estilos.manchas} style={{ marginTop: "40vh", marginLeft: "10%" }}>
                    <img src={require("../../Assets/ManchasPintura/400ppi/Recurso4.png")} className={estilos.imgManchas} />
                </div>
                <div className={estilos.manchas} style={{ marginTop: "20vh", marginLeft: "60%" }}>
                    <img src={require("../../Assets/ManchasPintura/400ppi/Recurso5.png")} className={estilos.imgManchas} />
                </div>
                <div className={estilos.manchas} style={{ marginTop: "0%", marginLeft: "2%" }}>
                    <img src={require("../../Assets/ManchasPintura/400ppi/Recurso6.png")} className={estilos.imgManchas} />
                </div>
            </div>
        </div>
    );
}

export default Technologies;


