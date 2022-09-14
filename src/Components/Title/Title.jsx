import estilos from "./Title.module.css";
import { IoLogoReact, IoLogoNodejs, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { SiRedux, SiJavascript, SiPostgresql } from "react-icons/si";
import { useState } from "react";
import Slider from "../Slider/Slider";
// import img from "../../Assets/ManchasPintura/ManchaPintura1.png"

function Title() {
    return (
        <div id={estilos.HomeContainer}  name="Home">
            <div id={estilos.contenedorTitulo}>
                <h1 id={estilos.titulo}>
                    Alan Acevedo
                </h1>
            </div>
            <div id={estilos.contenedorLinea}>
                <img
                    id={estilos.linea}
                    src={require("../../Assets/ManchasPintura/linea.png")} />
            </div>
            <div id={estilos.contenedorSubTitulo}>
                <h1 id={estilos.subTitulo}>
                    Fullstack Developer
                </h1>
            </div>
        </div>
    );
}

export default Title;


