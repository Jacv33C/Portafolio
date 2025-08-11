import './App.css';
import Navbar from './componentes/Navbar';
import { useRef } from 'react';

function App() {
  const inicioRef = useRef(null);
  const experienciaRef = useRef(null);
  const historiaRef = useRef(null);
  const tecnologiasRef = useRef(null);
  const contactoRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar
        onInicioClick={() => scrollToSection(inicioRef)}
        onHistoriaClick={() => scrollToSection(historiaRef)}
        onContactoClick={() => scrollToSection(contactoRef)}
      />

      {/* INICIO */}
<section ref={inicioRef} className="section inicio full-screen">
  <header className="inicio-header">
    <div className="inicio-contenido fade-in">
      <h1>
        Hola, soy <span className="nombre-destacado">Jose Castillo</span>
      </h1>
      <h2 className="subtitulo">Fullstack Developer</h2>
      <p className="descripcion">
        Apasionado por construir soluciones web modernas con Django, React y Firebase.
      </p>
      <a href="#contacto" className="btn-contacto">Contáctame</a>
    </div>
  </header>
</section>





      {/* EXPERIENCIA */}
      <section ref={experienciaRef} className="section experiencia">
        <h2>Experiencia</h2>
        <ul>
          <li>🚀 Desarrollador Frontend en TechNova (2022 - 2023) - React, Tailwind, APIs REST</li>
          <li>🔧 Mantenimiento y mejoras en plataformas internas con Node.js y MongoDB</li>
          <li>🧪 Pruebas automatizadas con Jest y Cypress</li>
          <li>🌐 Freelance: 10+ proyectos entregados con tecnologías modernas</li>
        </ul>
      </section>

      {/* HISTORIA */}
      <section ref={historiaRef} className="section historia">
        <h2>Historia</h2>
        <p>Aquí va un poco sobre mi historia, experiencia y formación.</p>
      </section>

      {/* TECNOLOGÍAS */}
      <section ref={tecnologiasRef} className="section tecnologias">
        <h2>Tecnologías</h2>

        <div className="technologies-container">
          
          {/* FRONTEND */}
          <div className="tech-card">
            <h3>Frontend</h3>
            <div className="tech-grid">
              <div className="tech-item"><img src="/logos/html.png" alt="HTML"/><span>HTML</span></div>
              <div className="tech-item"><img src="/logos/css.png" alt="CSS"/><span>CSS</span></div>
              <div className="tech-item"><img src="/logos/javascript.png" alt="JavaScript"/><span>JavaScript</span></div>
              <div className="tech-item"><img src="/logos/react.png" alt="React"/><span>ReactJS</span></div>
            </div>
          </div>

          {/* BACKEND */}
          <div className="tech-card">
            <h3>Backend</h3>
            <div className="tech-grid">
               <div className="tech-item"><img src="/logos/python.jpg" alt="Python"/><span>Python</span></div>
              <div className="tech-item"><img src="/logos/nodejs.jpg" alt="Node.js"/><span>NodeJS</span></div>
 <div className="tech-item"><img src="/logos/django.jpg" alt="DJANGO"/><span>DJango</span></div>
              <div className="tech-item"><img src="/logos/mysql.jpg" alt="MySQL"/><span>MySQL</span></div>
              
            </div>
          </div>

          {/* APRENDIENDO */}
          <div className="tech-card">
            <h3>Aprendiendo</h3>
            <div className="tech-grid">
              <div className="tech-item"><img src="/logos/php.jpg" alt="PHP"/><span>PHP</span></div>
                           <div className="tech-item"><img src="/logos/laravel.png" alt="Laravel"/><span>Laravel</span></div>
            </div>
          </div>

          {/* HERRAMIENTAS */}
          <div className="tech-card">
            <h3>Herramientas</h3>
            <div className="tech-grid">
              <div className="tech-item"><img src="/logos/git.jpg" alt="Git"/><span>Git</span></div>
              <div className="tech-item"><img src="/logos/github.jpg" alt="GitHub"/><span>GitHub</span></div>
              <div className="tech-item"><img src="/logos/vscode.jpg" alt="VSCode"/><span>VSCode</span></div>
              <div className="tech-item"><img src="/logos/npm.jpg" alt="npm"/><span>npm</span></div>
              
            </div>
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section ref={contactoRef} className="section contacto">
        <h2>Contacto</h2>
        <p>Correo: jacvpa33@gmail.com</p>
        <p>GitHub: https://github.com/Jacv33C </p>
      </section>
    </div>
  );
}

export default App;

