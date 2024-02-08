import Image from "next/image";

const Home = () => {
  return(
    <main>
      <header>
        <div>
          <Image
            src="/logo-sochi.png"
            width={140}
            height={60}
            alt="Sochi.Ru"
          />
        </div>
        <div>
          <Image
            src="/logo-claro-sports.png"
            width={140}
            height={60}
            alt="Claro Sports"
          />
        </div>
      </header>
      <section>
        <div>
          <span>FALTAN</span>
          <div>
            <p>00</p>
            <p>DÍAS</p>
          </div>
          <div>
            <p>00</p>
            <p>HRS</p>
          </div>
          <div>
            <p>00</p>
            <p>MIN</p>
          </div>
          <div>
            <p>00</p>
            <p>SEG</p>
          </div>
        </div>
        <div>
          <Image
            src="/esqui-alpino.jpg"
            width={640}
            height={480}
            alt="Ski Alpino"
          />
        </div>
      </section>
      <section>
        <h1>CLARO SPORTS EN SOCHI 2014</h1>
        <div>
          <Image
            src="/team-latam.png"
            width={200}
            height={200}
            alt="Team Latam"
          />
          <p>TEAM LATAM</p>
        </div>
        <div>
          <Image
            src="/travel-meets-fashion.png"
            width={200}
            height={200}
            alt="Travel Meets Fashion"
          />
          <p>TRAVEL MEETS FASHION</p>
        </div>
        <div>
          <Image
            src="/velocidad-riesgo.png"
            width={200}
            height={200}
            alt="Velocidad y Riesgo"
          />
          <p>VELOCIDAD Y RIESGO</p>
        </div>
        <div>
          <Image
            src="/experiencia.png"
            width={200}
            height={200}
            alt="Experiencia Multimedia"
          />
          <p>EXPERIENCIA MULTIMEDIA</p>
        </div>
      </section>
      <footer>
        <div>
          <a href="#">Aviso de privacidad</a>
          <span> / </span>
          <a href="#">Contacto</a>
        </div>
        <div>
          <Image
            src="/logo-sochi-color.png"
            width={140}
            height={60}
            alt="Sochi.Ru"
          />
        </div>
        <div>
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
