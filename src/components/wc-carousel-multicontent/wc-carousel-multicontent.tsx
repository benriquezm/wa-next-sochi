"use client";

import Image from "next/image";

const handlerVideoClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    console.log('The link was clicked.', e.currentTarget.href, ' use this: ', this);
    //  send video selected to wc-videoplayer component
    const videoplayerMp4:any = document.getElementById("videoplayer-mp4"),
	videoplayerWebm:any = document.getElementById("videoplayer-webm"),
	videoplayer:any = document.getElementById("wc-videoplayer"),
	mp4Url = "",
	webmUrl = "";
    console.log('videoplayer: ', videoplayer);
    videoplayerMp4.setAttribute("src", e.currentTarget.href);
	videoplayerWebm.setAttribute("src", e.currentTarget.href);
	videoplayer.load();
	//videoplayer.play();
	videoplayer.poster = "";
    
};

const WCCarouselMulticontent = () => {
    return(
        <section className="carousel-multicontent">
            <h1 className="carousel-header">CLARO SPORTS EN SOCHI 2014</h1>
            <div className="wrapper-carousel">
            <div className="wrapper-video">
                <a href="https://www.youtube.com/embed/Dmf62scsWr8?autoplay=1&mute=1" onClick={handlerVideoClick}>
                    <Image
                        src="/team-latam.png"
                        width={200}
                        height={200}
                        alt="Team Latam"
                    />
                </a>
                <p>TEAM LATAM</p>
            </div>
            <div className="wrapper-video">
                <a href="https://www.youtube.com/embed/m5QgmCGoTmU?autoplay=1&mute=1" onClick={handlerVideoClick}>
                <Image
                    src="/travel-meets-fashion.png"
                    width={200}
                    height={200}
                    alt="Travel Meets Fashion"
                />
                </a>
                <p>TRAVEL MEETS FASHION</p>
            </div>
            <div className="wrapper-video">
                <a href="https://www.youtube.com/embed/m5QgmCGoTmU?autoplay=1&mute=1" onClick={handlerVideoClick}>
                    <Image
                        src="/velocidad-riesgo.png"
                        width={200}
                        height={200}
                        alt="Velocidad y Riesgo"
                    />
                </a>
                <p>VELOCIDAD Y RIESGO</p>
            </div>
            <div className="wrapper-video">
                <a href="https://www.youtube.com/embed/UmIYanq5gH8?autoplay=1&mute=1" onClick={handlerVideoClick}>
                    <Image
                        src="/experiencia.png"
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
