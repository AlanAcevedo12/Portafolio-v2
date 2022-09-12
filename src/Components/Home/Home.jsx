import estilos from "./Home.module.css";
import {IoLogoReact, IoLogoNodejs, IoLogoHtml5, IoLogoCss3} from "react-icons/io5";
import {SiRedux, SiJavascript, SiPostgresql} from "react-icons/si";
import { useState } from "react";
import Slider from "../Slider/Slider";

function Home() {
  document.title = "Portafolio - Alan Acevedo";
  return (
    <>
      {/* <div style={{height:"5rem"}}/> */}
      <div id={estilos.HomeContainer}>
      <span id="home" />
        <div id={estilos.fondo}><div id={estilos.borroso}></div></div>
        <div id={estilos.contenedorFoto}>
          <div id={estilos.foto}/>
        </div>
        <h1 id={estilos.tituloHome}>Alan Acevedo</h1>
        <h3 id={estilos.tituloHome}>Desarrollador Web Fullstack</h3>
        <div id={estilos.infoContainer}>
          <h1 className={estilos.tituloInfo}>¿Quien soy?</h1>
          <p className={estilos.textoInfo}>¡Hola! Soy Alan, un joven programador de 21 años. 
            Comencé a programar a la edad de 15 en la escuela secundaria y desde entonces es algo que realmente me apasiona.
            A los 18 me gradué de técnico en informática y decidí ampliar mis conocimientos de programación en la UTN certificándome 
            en diversos cursos y luego realizando el bootcamp de soyHenry sobre programación Web FullStack.</p>
          <h1 className={estilos.tituloInfo}>¿En que tecnologías me destaco?</h1>
          <p className={estilos.textoInfo}>Si bien entre lo aprendido en la escuela, cursos y bootcamp hay un poco de diversidad,
            principalmente me destaco en: React.js, Redux, Node.js, Javascript, HTML, CSS y SQL.
          <br />
            Por otro lado, también tengo algunos conocimientos, quizá menos destacables,
             en: Java, Spring Framework, Python 3.1, C# y Android Studio. 
          </p>
        </div>
        <hr />
        <div id={estilos.contenedorTecnologias}>
          <IoLogoReact size="4rem" className={estilos.logos}/>
          <SiRedux size="4rem" className={estilos.logos}/>
          <IoLogoNodejs size="4rem" className={estilos.logos}/>
          <IoLogoHtml5 size="4rem" className={estilos.logos}/>
          <IoLogoCss3 size="4rem" className={estilos.logos}/>
          <SiJavascript size="4rem" className={estilos.logos}/>
          <SiPostgresql size="4rem" className={estilos.logos}/>
        </div>
        <span id="proyectos" />
        <h1 className={estilos.tituloInfo} id={estilos.tituloProyectos}>Mis proyectos</h1>
        <div id={estilos.proyectosContainer}>
          <Slider />
        </div>
        <span id="contacto" />
        <div id={estilos.infoContainer}>
          <h1 className={estilos.tituloInfo}>Contacto</h1>
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
        <br />
      </div>
    </>
  );
}

export default Home;
