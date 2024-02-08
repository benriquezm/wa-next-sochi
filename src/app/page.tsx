import Image from "next/image";

const Home = () => {
  return(
    <main>
      <header className="wrapper-header">
        <div className="wrapper-header-logo">
          <Image
            src="/logo-sochi.png"
            width={120}
            height={50}
            alt="Sochi.Ru"
          />
        </div>
        <div className="wrapper-header-logo">
          <Image
            src="/logo-claro-sports.png"
            width={120}
            height={50}
            alt="Claro Sports"
          />
        </div>
      </header>
      <section className="wrapper-high-impact">
        <span className="counter-header">FALTAN</span>
        <div className="wrapper-counter">
          <div className="counter-circle">
            <p className="counter-value">00</p>
            <p className="counter-text">DÍAS</p>
          </div>
          <div className="counter-circle">
            <p className="counter-value">00</p>
            <p className="counter-text">HRS</p>
          </div>
          <div className="counter-circle">
            <p className="counter-value">00</p>
            <p className="counter-text">MIN</p>
          </div>
          <div className="counter-circle">
            <p className="counter-value">00</p>
            <p className="counter-text">SEG</p>
          </div>
        </div>
        <div className="wrapper-video">
          <Image
            src="/esqui-alpino.jpg"
            width={640}
            height={480}
            alt="Ski Alpino"
          />
        </div>
      </section>
      <section className="carousel-multicontent">
        <h1 className="carousel-header">CLARO SPORTS EN SOCHI 2014</h1>
        <div className="wrapper-carousel">
          <div className="wrapper-video">
            <Image
              src="/team-latam.png"
              width={200}
              height={200}
              alt="Team Latam"
            />
            <p>TEAM LATAM</p>
          </div>
          <div className="wrapper-video">
            <Image
              src="/travel-meets-fashion.png"
              width={200}
              height={200}
              alt="Travel Meets Fashion"
            />
            <p>TRAVEL MEETS FASHION</p>
          </div>
          <div className="wrapper-video">
            <Image
              src="/velocidad-riesgo.png"
              width={200}
              height={200}
              alt="Velocidad y Riesgo"
            />
            <p>VELOCIDAD Y RIESGO</p>
          </div>
          <div className="wrapper-video">
            <Image
              src="/experiencia.png"
              width={200}
              height={200}
              alt="Experiencia Multimedia"
            />
            <p>EXPERIENCIA MULTIMEDIA</p>
          </div>
        </div>
      </section>
      <footer className="wrapper-footer">
        <div className="wrapper-links">
          <a href="#">Aviso de privacidad</a>
          <span> / </span>
          <a href="#">Contacto</a>
        </div>
        <div className="wrapper-footer-logo">
          <Image
            src="/logo-sochi-color.png"
            width={140}
            height={60}
            alt="Sochi.Ru"
          />
        </div>
        <div className="wrapper-social-media">
          <a href="#">Instangram</a>
          <a href="#">X</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
