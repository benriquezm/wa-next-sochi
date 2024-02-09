import Image from "next/image";

import WCCounter from "@/components/wc-counter/wc-counter";
import WCCarouselMulticontent from "@/components/wc-carousel-multicontent/wc-carousel-multicontent";

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
        <WCCounter />
        <div className="wrapper-video">
          {/**
           * <Image
            src="/esqui-alpino.jpg"
            width={640}
            height={480}
            alt="Ski Alpino"
          />
           */}
          {/**
           * <video id="wc-videoplayer" controls poster="/esqui-alpino.jpg" width="640" height="480" autoPlay>
            <source id="videoplayer-mp4" src="https://fredrickjaxx.is/_assets/video/blossoms.mp4" type="video/mp4" />
            <source id="videoplayer-webm" src="https://fredrickjaxx.is/_assets/video/blossoms.Webm" type="video/webm" />
          </video>
           */}
          <iframe id="wc-videoplayer" width="640" height="480" src="https://www.youtube.com/embed/d2pR0bxIPDA?autoplay=1&mute=1"></iframe>
        </div>
      </section>
      <WCCarouselMulticontent />
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
