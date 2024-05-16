import { Container } from "./styles";
import emailIcon from "../../assets/mail-ico.png";
import phoneIcon from "../../assets/phone-ico.png"

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p></p>
        <p></p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:rajapandian.p27@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:rajapandian.p27@gmail.com">rajapandian.p27@gmail.com</a>
        </div>
        <div>
        <a href="tel:+916374977131"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+916374977131">(+91) 6374977131</a>
        </div>  
      </div>
    </Container>
  )
}