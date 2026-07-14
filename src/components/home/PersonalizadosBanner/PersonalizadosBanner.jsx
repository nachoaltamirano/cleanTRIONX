import { Link } from "react-router-dom";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import "./PersonalizadosBanner.css";

const PersonalizadosBanner = () => {
  const benefits = [
    "Diseño exclusivo con tu marca y colores",
    "Cortes adaptados a la disciplina y tipo de carrera",
    "Tejidos técnicos con control de humedad y compresión",
    "Producción limitada para equipos y staff",
  ];

  const tags = [
    "Fit Elite",
    "Tela Hidrofóbica",
    "Etiqueta Personal",
    "Cargo Mínimo 8 unidades",
  ];

  return (
    <section className="personalizados-banner">

      <div className="personalizados-overlay" />

      <div className="personalizados-container">

        <div className="personalizados-content">

          <div className="premium-badge">
            <Sparkles size={16} />
            Servicio Premium
          </div>


          <h2>
            Personalizados TRIONX
          </h2>


          <p>
            Diseñamos tu indumentaria técnica a medida: equipamiento para
            triatlón con identidad propia, cortes de alta performance y
            acabados premium.
          </p>


          <div className="benefits-grid">

            {benefits.map((item) => (
              <div
                className="benefit-card"
                key={item}
              >
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}

          </div>


          <div className="personalizados-actions">

            <Link
              to="/tienda/personalizados"
              className="personalizados-button"
            >
              Solicitar diseño a medida
              <ArrowRight size={16} />
            </Link>


            <span>
              Ideal para equipos, clubes y proyectos de alta performance.
            </span>

          </div>


        </div>



        <div className="product-card">

          <div className="premium-label">
            + Premium
          </div>


          <div className="product-inner">

            <img
              src="/placeholder.jpg"
              alt="Producto personalizado TRIONX"
            />


            <div className="product-info">

              <span>
                Producto mock
              </span>


              <h3>
                Kit Triatlón Personalizado
              </h3>


              <p>
                Banda térmica, calza aero, top de natación y mochila a medida
                para tu equipo. Proyecto de fabricación premium con identidad
                de marca.
              </p>



              <div className="product-details">

                <div>
                  <small>
                    Tiempo de entrega
                  </small>

                  <strong>
                    3-4 semanas
                  </strong>
                </div>


                <div>
                  <small>
                    Precio desde
                  </small>

                  <strong>
                    ARS 49.990
                  </strong>
                </div>

              </div>



              <div className="tags">

                {tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>


            </div>

          </div>

        </div>


      </div>


    </section>
  );
};

export default PersonalizadosBanner;