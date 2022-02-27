import Topbar from "./Component/Topbar/Topbar";
import Intro from "./Component/Intro/Intro";
import Portfolio from "./Component/Portfolio/Portfolio";


import "./App.scss"
import { useState } from "react";
import Menu from "./Component/Menu/Menu"


function App() {
  const[menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu   menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <Intro/>
        <Portfolio/>
        
       
       
        
      </div>
      

    </div>
  );
}

export default App;
