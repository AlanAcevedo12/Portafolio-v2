import estilos from "./Home.module.css";
import Title from "../../Components/Title/Title";
import About from "../../Components/About/About";
import Technologies from "../../Components/Technologies/Technologies";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import NavBar from "../../Components/NavBar/NavBar";
import { useState } from "react";
// import img from "../../Assets/ManchasPintura/ManchaPintura1.png"

function Home() {
  document.title = "Portafolio - Alan Acevedo";
  const [dark, setDark] = useState(false);

  function darkModeHandler(){
    if(dark)  setDark(false);
    if(!dark) setDark(true); 
  }

  return (
    <div id={dark === false ? estilos.HomeContainer : estilos.HomeContainerDark}>
      <div>
        <img
          id={estilos.mancha}
          src={require("../../Assets/ManchasPintura/ManchaPintura1.png")} />
      </div>
      <div style={{ position: "fixed", width:"100%", display: "flex", justifyContent: "flex-end", zIndex: 5 }}>
        <NavBar />
      </div>
      <div style={{ width: "100%", /*backgroundColor: "red",*/ position: "absolute" }}>
        <img
          id={estilos.mancha2}
          src={require("../../Assets/ManchasPintura/ManchaPintura2.png")} />
      </div>
      <Title />
      <About/>
      <Technologies />
      <Projects />
      <Contact />
      {
        dark === false ? <img src={require("../../Assets/ManchasPintura/400ppi/dark.png")} id={estilos.switch} onClick={darkModeHandler}/>
        :
        <img src={require("../../Assets/ManchasPintura/400ppi/light.png")} id={estilos.switch} onClick={darkModeHandler}/>
      }
    </div>
  );
}

export default Home;
