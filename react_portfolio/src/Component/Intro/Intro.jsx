import "./Intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"



export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay:1500,
      backSpeed:100,
      strings: ["HTML","CSS" ,"JavaScript","React" ],
    })
  },[]);
  

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="./Assets/Banner.png" alt="" />
        </div>
      </div>
      <div className="right">
      <div className="wrapper">
        <h2> Hello, </h2>
        <h1>I'm Elizabeth  Agwa</h1>
        <h3>Web Developer  <span ref={textRef}> </span> </h3>


      </div>
      <a href="#portfolio">
        <img src="./Assets/Down_arrow.png" alt="" />
      </a>

    </div>
      </div>
      
  )
}
