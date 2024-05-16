import { Container } from './styles'


import favicon from '../../assets/icon.png'
import linkedin from '../../assets/linkedin_3665214.png'
import githubIcon from '../../assets/git-external.png'
import indeed from '../../assets/indeed white.png'
import naukri from '../../assets/nakuri.png'
import behance from '../../assets/behance_3665240.png'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="#" className="logo">
        <span>Thanks  for</span>
        <span> visiting my site</span>
      </a>
      <div>
        <p>
          With Regards <img src={favicon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

      <div className="social-media">
      <a
          href="https://www.behance.net/rajapandian27"
          target="_blank"
          rel="noreferrer"
        >
          <img src={behance} alt="behance" />
        </a>  
        <a
          href="https://www.linkedin.com/in/rajapandian1811/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Rajapandi-2713"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://profile.indeed.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={indeed} alt="Whatsapp" />
        </a>
        <a
          href="https://www.naukri.com/mnjuser/profile?id=&altresid"
          target="_blank"
          rel="noreferrer"
        >
          <img src={naukri} alt="telegram" />
        </a>
        
     
      </div>
    </Container>
  )
}
