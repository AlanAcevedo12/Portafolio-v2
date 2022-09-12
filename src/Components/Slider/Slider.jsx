import estilos from "./Slider.module.css";
import { useState } from "react";

function Slider() {
  const [page, setPage] = useState(0);
  // const botonesSlider = (<><button onClick={buttonsHandler} name="prev">Prev</button>
  //                           <button onClick={buttonsHandler} name="next">Next</button></>);
  const info = [
    {
      title: "Dog Breeds App",
      description: "Proyecto Individual de la cursada del bootcamp de Henry. Rol: Fullstack. Tecnologias:"+
      " Frontend: React.js, Redux, CSS Modules. Backend: NodeJS, Express, Sequelize y PostgreSQL.",
      about:"El proyecto muestra una lista de más de 200 razas de perros, la cual se encuentra paginada y con diversas opciones "+
      "de filtrado. Además, el usuario puede crear su propia raza, editarla y eliminarla. ¡El diseño es responsive!",
      url:"https://dog-breeds-app.vercel.app/",
      git:"https://github.com/AlanAcevedo12/Proyecto-Individual---Dogs",
    },
    {
      title: "Pro-Ropa Store",
      description: "Proyecto Grupal de la cursada del bootcamp de Henry. Realizado en grupo de 8 integrandtes."+
      " Tecnologias: Forma de trabajo: SCRUM, Trello. Frontend: React.js, Redux, CSS Modules y styled components. Backend: NodeJS, Express, Sequelize y PostgreSQL."+
      " Rol: Fullstack. Principalmente me necargué de realizar la pasarela de pago y el checkout, agregando un mapa y opciones de envío.",
      about:"El proyecto es un e-commerce de ropa másculina. Incluye un listado de más de 300 productos, paginado y diversos filtros."+
      " Posee carrito de compra, integración con MercadoPago y envío de mails para el seguimiento del pedido. Además, incluye inicio de "+
      "sesión, perfil de administrador, chatbot y modo oscuro.",
      url:"https://pro-ropa-store.vercel.app/",
      git:"https://github.com/AlanAcevedo12/e-commerce-pf",
    },
    {
      title: "App clima",
      description: "Proyecto de la cursada del bootcamp de Henry."+
      " Tecnologias: React.js, CSS Modules y API OpenWeatherApp Rol: Frontend.",
      about:"El proyecto es una aplicación para consultar el clima en diversas ciudades del mundo. Cada ciudad agregada es mostrada en el"+
      " mapa con su clima correspondiente. Además, se puede ver la información detallada presionando en la tarjeta. ¡El diseño es responsive!",
      url:"https://app-clima-alanacevedo.vercel.app/",
      git:"https://github.com/AlanAcevedo12/AppClima",
    }
  ]
  
  const [slider, setSlider] = useState([
    (<div id={estilos.henryDogsImg} className={estilos.capturaProyectos}/>),
    (<div id={estilos.proRopaImg} className={estilos.capturaProyectos}/>),
    (<div id={estilos.appClima} className={estilos.capturaProyectos}/>),
  ]);
  
  function nextHandler(e){
    e.preventDefault();
    console.log(page);
    if(page + 1 === slider.length) return setPage(0);
    if(e.target.name === "next") setPage(page + 1);
  }

  function prevHandler(e){
    e.preventDefault();
    console.log(page);
    if(page === 0) setPage(slider.length-1);
    else setPage(page - 1);
  }

  return (<>
    <div id={estilos.slider}>
        {slider[page]}
        <button onClick={prevHandler} name="prev" id={estilos.prev} className={estilos.botones}></button>
        <button onClick={nextHandler} name="next" id={estilos.next} className={estilos.botones}></button>
    </div>
    <div id={estilos.infoContainer}>
      <h1 className={estilos.tituloInfo}>{info[page].title}</h1>
      <p className={estilos.textoInfo}>{info[page].description}</p>
      <p className={estilos.textoInfo}>{info[page].about}</p>
      <p className={estilos.textoContacto}>Deploy:{" "}
        <a href={info[page].url} className={estilos.linkContacto} target="blank">{info[page].title}</a>
      </p>
      <p className={estilos.textoContacto}>
        <a href={info[page].git} className={estilos.linkContacto} target="blank">Repositorio</a>
      </p>
    </div>
    </>
  );
}

export default Slider;
