"use client";

import {useEffect, useState} from "react";

const useCheckViewport  = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            const widthWindowInsideResize = window.innerWidth;
            if (widthWindowInsideResize <= 768) {
                setIsMobile(true);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (isMobile);
}

export default useCheckViewport;
