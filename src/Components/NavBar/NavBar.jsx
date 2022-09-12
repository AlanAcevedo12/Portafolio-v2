import { Link } from "react-router-dom";
import estilos from "./NavBar.module.css";

function NavBar() {
    return (
      <nav id={estilos.NavContainer}>
        <div className={estilos.contenedorTitulo}>
          <a href="#home" className={estilos.a}>
            <h1 className={estilos.tituloNav}>Home</h1>
          </a>
        </div>
        <div className={estilos.contenedorTitulo}>
          <a href="#proyectos" className={estilos.a}>
            <h1 className={estilos.tituloNav}>Proyectos</h1>
          </a>
        </div>
        <div className={estilos.contenedorTitulo}>
          <a href="#contacto" className={estilos.a}>
            <h1 className={estilos.tituloNav}>Contacto</h1>
          </a>
        </div>
      </nav>
    );
  }
  
  export default NavBar;
  