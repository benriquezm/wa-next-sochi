"use client";

import Image from "next/image";

import useCheckViewport from "@/hooks/useCheckViewport";

const handlerVideoClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    //  send video selected to wc-videoplayer component
    const videoplayer:any = document.getElementById("wc-videoplayer");
	videoplayer.setAttribute("src", e.currentTarget.href);
    
};

const WCCarouselMulticontent = () => {
    const isMobile = useCheckViewport();
    
    return(
        <section className="carousel-multicontent">
            <h1 className="carousel-header">CLARO SPORTS EN SOCHI 2014</h1>
            <div className={isMobile ? "wrapper-carousel-mobile" : "wrapper-carousel"}>
                <div className={isMobile ? "wrapper-video-mobile" : "wrapper-video"}>
                    <a href="https://www.youtube.com/embed/Dmf62scsWr8?autoplay=1&mute=1" onClick={handlerVideoClick}>
                        <Image
                            src="team-latam.png"
                            width={200}
                            height={200}
                            alt="Team Latam"
                        />
                    </a>
                    <p>TEAM LATAM</p>
                </div>
                <div className={isMobile ? "wrapper-video-mobile" : "wrapper-video"}>
                    <a href="https://www.youtube.com/embed/m5QgmCGoTmU?autoplay=1&mute=1" onClick={handlerVideoClick}>
                    <Image
                        src="travel-meets-fashion.png"
                        width={200}
                        height={200}
                        alt="Travel Meets Fashion"
                    />
                    </a>
                    <p>TRAVEL MEETS FASHION</p>
                </div>
                <div className={isMobile ? "wrapper-video-mobile" : "wrapper-video"}>
                    <a href="https://www.youtube.com/embed/Xl-J44YnRtw?autoplay=1&mute=1" onClick={handlerVideoClick}>
                        <Image
                            src="velocidad-riesgo.png"
                            width={200}
                            height={200}
                            alt="Velocidad y Riesgo"
                        />
                    </a>
                    <p>VELOCIDAD Y RIESGO</p>
                </div>
                <div className={isMobile ? "wrapper-video-mobile" : "wrapper-video"}>
                    <a href="https://www.youtube.com/embed/UmIYanq5gH8?autoplay=1&mute=1" onClick={handlerVideoClick}>
                        <Image
                            src="experiencia.png"
                            width={200}
                            height={200}
                            alt="Experiencia Multimedia"
                        />
                    </a>
                    <p>EXPERIENCIA MULTIMEDIA</p>
                </div>
            </div>
        </section>
    );    
};

export default WCCarouselMulticontent;
