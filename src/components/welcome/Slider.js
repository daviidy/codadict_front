import React from 'react';
import '../../styles/slider.css';

function Slider() {
  return (
    <section className="container-fluid jumbotron text-center">
      <div id="overlay" />
      <h2 className="fw-bold text-white">
        Trouvez des freelances disponibles
      </h2>
      <button type="button" className="btn bg-oschool text-white fw-bold">
        Démarrer
      </button>
    </section>
  );
}

export default Slider;
