import { Link } from "react-router-dom";
import estilos from "./NavBar.module.css";

function NavBar() {

  function onPressHandler(e) {
    let element;
    element = document.querySelector(`[name=${e.target.innerHTML}]`);

    element.scrollIntoView({
      blok: "start",
      behavior: "smooth",
    });
  }

  return (
    <nav id={estilos.NavContainer}>
      <img id={estilos.imagen}
        src={require("../../Assets/ManchasPintura/nav.png")} />
      <div id={estilos.contenedorSubTitulo}>
        <h1 id={estilos.subTitulo} onClick={onPressHandler} name="NavPerfil">
          Perfil
        </h1>
        <h1 id={estilos.subTitulo} onClick={onPressHandler} name="NavTecnologias">
          Tecnologias
        </h1>
        <h1 id={estilos.subTitulo} onClick={onPressHandler} name="NavProyectos">
          Proyectos
        </h1>
        <h1 id={estilos.subTitulo} onClick={onPressHandler} name="NavContacto">
          Contacto
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
