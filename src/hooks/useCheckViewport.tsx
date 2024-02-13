"use client";

import {useEffect, useState} from "react";

const useCheckViewport  = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            console.log("Estás usando un dispositivo móvil!!");
            setIsMobile(true);
        } else {
            console.log("No estás usando un móvil");
            setIsMobile(false);
        }
    }, []);

    return isMobile;
}

export default useCheckViewport;
