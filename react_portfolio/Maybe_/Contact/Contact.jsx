import "./Contact.scss"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="./Assets/Collaborate.png" alt="" />
      </div>
      <div className="right">
        <h2>Let's Collaborate</h2>
        <form >
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="Submit">Send</button>
        </form>
      </div>
      
    </div>
  )
}
