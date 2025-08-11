import './App.css';
import Navbar from './componentes/Navbar';
import { useRef } from 'react';

function App() {
  const inicioRef = useRef(null);
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
      <section ref={inicioRef} className="section inicio">
        <header className="inicio-header">
          <div className="inicio-contenido animate-fadeIn text-center">
            <h1 className="text-5xl font-extrabold mb-4">
              Hola, soy <span className="nombre-destacado">Jose Castillo</span>
            </h1>
            <h2 className="subtitulo text-2xl font-semibold mb-6 tracking-wide uppercase">Fullstack Developer</h2>
            <p className="descripcion max-w-xl mx-auto text-lg mb-8">
              Apasionado por construir soluciones web modernas con estilo y eficiencia.
            </p>
          </div>
        </header>
      </section>

      {/* HISTORIA */}
      <section ref={historiaRef} className="section historia max-w-4xl mx-auto px-8 py-16 rounded-xl shadow-lg animate-fadeInUp">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-red-600 inline-block pb-2">
          Mi Historia
        </h2>
        <p className="mb-4 leading-relaxed text-lg">
          Hace poco más de <span className="text-red-600 font-semibold">2 años</span> decidí dar mis primeros pasos en el desarrollo web. Comencé aprendiendo lo básico: <strong>HTML</strong>, <strong>CSS</strong> y <strong>JavaScript</strong>, herramientas que me abrieron la puerta a la programación.
        </p>
        <p className="mb-4 leading-relaxed text-lg">
          Luego amplié mis conocimientos dominando tecnologías como <strong>Django</strong>, <strong>React</strong>, <strong>Python</strong>, <strong>MySQL</strong> y <strong>Firebase</strong>, que me permiten construir soluciones modernas y robustas.
        </p>
        <p className="mb-6 leading-relaxed text-lg">
          Me siento orgulloso de mi último proyecto en <span className="text-red-600 font-semibold">Django</span>, que refleja mi pasión por crear aplicaciones eficientes y funcionales.
        </p>
        <p className="italic text-red-500 text-lg">
          “Programar no es solo escribir código, es construir ideas que pueden cambiar el mundo.”
        </p>
      </section>

      {/* TECNOLOGÍAS */}
      <section ref={tecnologiasRef} className="section tecnologias max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center uppercase tracking-wider">Tecnologías</h2>

        <div className="technologies-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* FRONTEND */}
          <div className="tech-card text-center">
            <h3 className="text-2xl font-semibold mb-4 text-red-600">Frontend</h3>
            <div className="tech-grid grid grid-cols-2 gap-4 justify-center">
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/html.png" alt="HTML" className="w-16 mb-2"/>
                <span>HTML</span>
              </div>
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/css.png" alt="CSS" className="w-16 mb-2"/>
                <span>CSS</span>
              </div>
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/javascript.png" alt="JavaScript" className="w-16 mb-2"/>
                <span>JavaScript</span>
              </div>
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/react.png" alt="React" className="w-16 mb-2"/>
                <span>ReactJS</span>
              </div>
            </div>
          </div>

          {/* BACKEND */}
          <div className="tech-card text-center">
            <h3 className="text-2xl font-semibold mb-4 text-red-600">Backend</h3>
            <div className="tech-grid grid grid-cols-2 gap-4 justify-center">
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/python.jpg" alt="Python" className="w-16 mb-2"/>
                <span>Python</span>
              </div>
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/nodejs.jpg" alt="Node.js" className="w-16 mb-2"/>
                <span>NodeJS</span>
              </div>
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/django.jpg" alt="Django" className="w-16 mb-2"/>
                <span>Django</span>
              </div>
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/mysql.jpg" alt="MySQL" className="w-16 mb-2"/>
                <span>MySQL</span>
              </div>
            </div>
          </div>

          {/* APRENDIENDO */}
          <div className="tech-card text-center">
            <h3 className="text-2xl font-semibold mb-4 text-red-600">Aprendiendo</h3>
            <div className="tech-grid grid grid-cols-2 gap-4 justify-center">
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/php.jpg" alt="PHP" className="w-16 mb-2"/>
                <span>PHP</span>
              </div>
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/laravel.png" alt="Laravel" className="w-16 mb-2"/>
                <span>Laravel</span>
              </div>
            </div>
          </div>

          {/* HERRAMIENTAS */}
          <div className="tech-card text-center">
            <h3 className="text-2xl font-semibold mb-4 text-red-600">Herramientas</h3>
            <div className="tech-grid grid grid-cols-2 gap-4 justify-center">
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/git.jpg" alt="Git" className="w-16 mb-2"/>
                <span>Git</span>
              </div>
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/github.jpg" alt="GitHub" className="w-16 mb-2"/>
                <span>GitHub</span>
              </div>
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/vscode.jpg" alt="VSCode" className="w-16 mb-2"/>
                <span>VSCode</span>
              </div>
              <div className="tech-item flex flex-col items-center">
                <img src="/logos/npm.jpg" alt="npm" className="w-16 mb-2"/>
                <span>npm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section ref={contactoRef} className="section contacto max-w-4xl mx-auto px-8 py-16 rounded-xl shadow-lg animate-fadeInUp text-center">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-red-600 inline-block pb-2">
          Contacto
        </h2>
        <p className="text-lg mb-2">
          📧 <a href="mailto:jacvpa33@gmail.com" className="text-red-600 hover:underline">jacvpa33@gmail.com</a>
        </p>
        <p className="text-lg">
          💻 <a href="https://github.com/Jacv33C" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">github.com/Jacv33C</a>
        </p>
      </section>
    </div>
  );
}

export default App;
