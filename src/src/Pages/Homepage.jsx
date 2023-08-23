import './homepage.css';
import profileImage from "../assets/OIG.JPG"
import Authorization from '../Components/Authorization';


const Homepage = () => {

  return (


    <div className="homepage">
     < Authorization/>
      <div className="circle">
        <img src={profileImage} alt="Profile Image" />
      </div>
      <div className="homepage">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Your Name</h1>
          <p className="hero-subtitle">Web Developer | Designer</p>
          <a href="#portfolio" className="cta-button">View Portfolio</a>
        </div>
      </header>

      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio website! I'm a passionate web developer and designer with a focus on creating elegant and user-friendly experiences.
          </p>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-content">
          <h2>Portfolio</h2>
          {/* Add your portfolio projects here */}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>If you'd like to get in touch, feel free to reach out!</p>
          <a href="mailto:your@email.com" className="contact-email">your@email.com</a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>


      

    </div>


  );
};

export default Homepage;
