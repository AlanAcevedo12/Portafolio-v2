import { Link } from "react-router-dom";
import estilos from "./Footer.module.css";

function Footer() {
    return (
      <nav id={estilos.FooterContainer}>
            <span className={estilos.titulo}>Sitio web desarrollado por Alan Acevedo</span>
      </nav>
    );
  }
  
  export default Footer;
  