import "./Portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">

      <div className="left">
        <div className="content">
        <h1>About Me</h1>
      
      <p>I am a web development enthisusat intrestred in creating dynamic and responsive web applications accessible to users across different platforms. I have basic understanding of HTML and CSS,
        I'm currently working on JavaScript and React projects to build my portfolio and further my skills. Reach out to collaborate on any of the projects!
      </p>
        </div>
      </div>
      <div className="right">
        <img className="image" src="./Assets/html-5.png" alt="" />
        <img className="image" src="./Assets/css.png" alt="" />
        
        <img id="small"  className="image" src="./Assets/java-script.png" alt="" />
        
      </div>

      
      
      

      
      
      
      
    </div>
  )
}
