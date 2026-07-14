import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";
import "./VideoBoxesSection.css";

const VideoBoxesSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="video-boxes-section">

      {/* VIDEO */}
      <div className="video-box video-main">

        <video
          ref={videoRef}
          src="/videos/promo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
        />

        <button
          onClick={toggleAudio}
          className="audio-button"
          aria-label={isMuted ? "Activar audio" : "Desactivar audio"}
        >
          {isMuted ? (
            <VolumeX size={24} />
          ) : (
            <Volume2 size={24} />
          )}
        </button>

      </div>


      {/* CATEGORIA */}
      <Link to="/tienda" className="image-box">

        <div
          className="image-background category-image"
        />

        <div className="image-overlay">

          <h3>
            Categoría
          </h3>

          <button>
            Ver Más
          </button>

        </div>

      </Link>


      {/* PROMOCIONES */}
      <Link to="/tienda" className="image-box">

        <div
          className="image-background promo-image"
        />

        <div className="image-overlay">

          <h3>
            Promociones
          </h3>

          <button>
            Ver Más
          </button>

        </div>

      </Link>

    </section>
  );
};

export default VideoBoxesSection;