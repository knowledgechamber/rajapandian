import { Container } from "./styles";
import file from "../../assets/project.png"
import behance from '../../assets/behance_3665240.png'
import project from '../../assets/project.png'
import parkease from '../../assets/parkease.png'
import burger from '../../assets/burger.png'
import educational from '../../assets/educational.png'
import bank from '../../assets/bank.png'
import externalLink from "../../assets/git-external.png"
import Designpng from "../../assets/Real estate site.png"
import mobinsta from "../../assets/instamob.png"
import whlap from "../../assets/wh lap.png"
import mobwh from "../../assets/mobwh.png"
import flipkart from "../../assets/flipkart.png"
import portfolio from "../../assets/Portfolio.png"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Systematic Farming</h3>
              <p>
              Website for farmer to give the guidelines & instructions in our local languages about a Systematic Farming, Farming Equipments & Instruments, Natural Fertilizer, Plant Diseases.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>A Website for Farmers.</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://github.com/Rajapandi-2713" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Ai Based Chatbot</h3>
              <p>
              A chatbot system designed to assist students in accessing their internal and semester marks, study materials based on their department, and personal details using their register number.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>A Bot for Educational Institutions.</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://github.com/Rajapandi-2713" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Student Project Portal</h3>
              <p>
               online platform designed to facilitate and enhance collaborative learning experiences for students. This project aims to create a user-friendly and interactive platform that encourages students to work together on various academic projects, fostering teamwork, knowledge sharing, and skill development.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>The Collaborative Learning Project Portal</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        { <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://github.com/Rajapandi-2713" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Blockchain Powered Library Management</h3>
              <p>
              Blockchain-Powered Library Management" revolutionises traditional library systems by harnessing Ethereum smart contracts for transparent and secure book data management.
              </p>
            </div>
            <footer>
              <ul className="tech-list">              
              </ul>
            </footer>
          </div>
        </ScrollAnimation> }

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://github.com/Rajapandi-2713" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Automated Weather Classification Using Transfer learning</h3>
              <p>
              Automated Weather Classification system that utilizes Transfer Learning techniques. The aim of this project was to develop an efficient and accurate system for classifying weather conditions based on images.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li></li>
                <li></li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/KabithaKamatchi" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

       {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
              This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

       {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
              VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://github.com/KabithaKamatchi" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

       {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
              This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>              
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
       

      </div>
<br /><br />

      <h2>Design Projects</h2>
      <p>
        These Projects are Showcased in Behance and the Behance Proproject Url is linked with the Project Title.
      </p>

      <br></br>

      <div className="projects">



      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/rajapandian27" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={mobwh} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Mobile WhatsApp Ui Clone</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/rajapandian27" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={mobinsta} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Mobile Instagram Ui Clone</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/rajapandian27" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={whlap} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Desktop WhatsApp Ui Clone</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/rajapandian27" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={educational} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Educational Site Landing Page</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/rajapandian27" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={portfolio} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Personal Portfolio Design</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/rajapandian27" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={burger} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Food Delivery Application</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/rajapandian27" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={parkease} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Parking Application Ui</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/rajapandian27" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={bank} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Bank Application Ui</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/rajapandian27" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={Designpng} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Real Estate Ui</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="#" target="_blank" rel="noreferrer">
                  <img src={project} alt="Visit site" />
                </a>
              <div className="project-links">
                <a href="https://www.behance.net/rajapandian27" target="_blank" rel="noreferrer">
                  <img src={behance} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              
            <ScrollAnimation className="projectimg" animateIn="fadeInRight" delay={1 * 1000}>
          <img className="proimg" src={flipkart} alt="Ilustração" />
        </ScrollAnimation>

              <h3>Flipkart Ui Clone</h3>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li> Tool Used :</li>
                <li> Figma</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       

      </div>
      
    </Container>

    
  );
}