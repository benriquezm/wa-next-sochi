import Image from "next/image";

import WCCounter from "@/components/wc-counter/wc-counter";
import WCCarouselMulticontent from "@/components/wc-carousel-multicontent/wc-carousel-multicontent";
import WCImage from "@/components/wc-image/wc-image";

const Home = () => {
  return(
    <main>
      <header className="wrapper-header">
        <WCImage
          styleForComponent="wrapper-header-logo"
          imageUrl="logo-sochi.png"
          imageWidth={120}
          imageHeight={50}
          attrAlt="Sochi.Ru"
        />
        <WCImage
          styleForComponent="wrapper-header-logo"
          imageUrl="logo-claro-sports.png"
          imageWidth={120}
          imageHeight={50}
          attrAlt="Claro Sports"
        />
      </header>
      <section className="wrapper-high-impact">
        <WCCounter />
        <div className="wrapper-video wrapper-videoplayer">
          {/**
           * <Image
            src="/esqui-alpino.jpg"
            width={640}
            height={480}
            alt="Ski Alpino"
          />
           */}
          <iframe id="wc-videoplayer" className="iframe-videoplayer" width="640" height="480" src="https://www.youtube.com/embed/d2pR0bxIPDA?autoplay=1&mute=1"></iframe>
        </div>
      </section>
      <WCCarouselMulticontent />
      <footer className="wrapper-footer">
        <div className="wrapper-links">
          <a href="#">Aviso de privacidad</a>
          <span> / </span>
          <a href="#">Contacto</a>
        </div>
        <WCImage
          styleForComponent="wrapper-footer-logo"
          imageUrl="logo-sochi-color.png"
          imageWidth={140}
          imageHeight={60}
          attrAlt="Sochi.Ru"
        />
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
