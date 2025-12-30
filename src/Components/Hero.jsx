import { Link } from "react-router-dom";
import resume from "../assets/Dhruv Resume.pdf";

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        Hi, I’m <span>Dhruv Buddhabhatti</span>
      </h1>

      <h2>Blockchain & Web Developer</h2>

      <p>
        I build secure, scalable decentralized applications and modern web
        solutions using React, Solidity, Ethers.js, and Metamask.
      </p>

      <div className="hero-buttons">
        <a href={resume} target="_blank">
          View Resume
        </a>
        <Link to="/contact">Contact Me</Link>
      </div>
    </section>
  );
};

export default Hero;
