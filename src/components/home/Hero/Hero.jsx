import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <Link to="/tienda">
          <button className="hero-button">Comprar Ahora</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
