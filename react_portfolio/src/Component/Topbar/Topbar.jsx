
import  "./Topbar.scss"
import {Mail, GitHub} from "@material-ui/icons"



export default function Topbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar  " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">  agwa..  </a>
          <div className="itemContainer">
            <GitHub className="icon"/>
            <a href="https://github.com/Agw-a" ><span> Agw-a </span></a>
             
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <a className="mail" href="mailto:lizagwa7@gmail.com"><span>lizagwa7@gmail.com </span></a>

             
          </div>
        </div>
        
        <div className="right">
          <div className="humberger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
