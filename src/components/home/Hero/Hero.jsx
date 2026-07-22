import { Button } from "../../ui";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <Button to="/tienda">Comprar Ahora</Button>
      </div>
    </section>
  );
};

export default Hero;
