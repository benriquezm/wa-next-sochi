import Image from "next/image";

import WCCounter from "@/components/wc-counter/wc-counter";
import WCCarouselMulticontent from "@/components/wc-carousel-multicontent/wc-carousel-multicontent";
import WCImage from "@/components/wc-image/wc-image";

const Home = () => {
  return(
    <main>
      <header className="wrapper-header">
        <WCImage
          attrAlt="Sochi.Ru"
          hasLink={false}
          imageHeight={50}
          imageUrl="logo-sochi.png"
          imageWidth={120}
          linkUrl=""
          styleForComponent="wrapper-header-logo"
        />
        <WCImage
          attrAlt="Claro Sports"
          hasLink={false}
          imageHeight={50}
          imageUrl="logo-claro-sports.png"
          imageWidth={120}
          linkUrl=""
          styleForComponent="wrapper-header-logo"
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
          attrAlt="Sochi.Ru"
          hasLink={false}
          imageHeight={60}
          imageUrl="logo-sochi-color.png"
          imageWidth={140}
          linkUrl=""
          styleForComponent="wrapper-footer-logo"
        />
        <div className="wrapper-social-media">
          <WCImage
            attrAlt="Red Social Instagram"
            hasLink={true}
            imageHeight={40}
            imageUrl="icon-instagram.png"
            imageWidth={40}
            linkUrl="#"
            styleForComponent="wrapper-video"
          />
          <WCImage
            attrAlt="Red Social X"
            hasLink={true}
            imageHeight={40}
            imageUrl="icon-x.png"
            imageWidth={40}
            linkUrl="#"
            styleForComponent="wrapper-video"
          />
          <WCImage
            attrAlt="Red Social Facebook"
            hasLink={true}
            imageHeight={40}
            imageUrl="icon-facebook.png"
            imageWidth={40}
            linkUrl="#"
            styleForComponent="wrapper-video"
          />
          <WCImage
            attrAlt="Red Social YouTube"
            hasLink={true}
            imageHeight={40}
            imageUrl="icon-youtube.png"
            imageWidth={40}
            linkUrl="#"
            styleForComponent="wrapper-video"
          />
        </div>
      </footer>
    </main>
  );
};

export default Home;
