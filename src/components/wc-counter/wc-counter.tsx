"use client";

import { useEffect, useState } from "react";

const WCCounter = () => {
    //  declare states for remaining
    const [remainingDays, setRemainingDays] = useState<number|string>('00');
    const [remainingHours, setRemainingHours] = useState<number|string>('00');
    const [remainingMinutes, setRemainingMinutes] = useState<number|string>('00');
    const [remainingSeconds, setRemainingSeconds] = useState<number|string>('00');
    //  milliseconds for calculations
    const millisecondsForSeconds = 1000;
    const millisecondsForMinutes = millisecondsForSeconds * 60;
    const millisecondsForHours = millisecondsForMinutes * 60;
    const millisecondsForDays = millisecondsForHours * 24;

    function formatNumber(numberToValidate:any) {
        let formattedNumber = '0';
        if (numberToValidate < 10) {
            formattedNumber = `0${numberToValidate}`;
        } else {
            formattedNumber = numberToValidate;
        }
        return formattedNumber;
    }

    //  method for update counter
    function updateCounter() {
        const endDate = new Date('12/31/2024 0:00 AM');
        const now = new Date();
        //  @ts-ignore
        const duration = endDate - now;
        setRemainingDays(formatNumber(Math.floor(duration / millisecondsForDays)));
        setRemainingHours(formatNumber(Math.floor((duration % millisecondsForDays) / millisecondsForHours)));
        setRemainingMinutes(formatNumber(Math.floor((duration % millisecondsForHours) / millisecondsForMinutes)));
        setRemainingSeconds(formatNumber(Math.floor((duration % millisecondsForMinutes) / millisecondsForSeconds)));
    };

    useEffect(() => {
        //  callback function
        updateCounter();
        const interval = setInterval(updateCounter, millisecondsForSeconds);
        return () => clearInterval(interval);
    }, []);

    return(
        <>
            <span className="counter-header">FALTAN</span>
            <div className="wrapper-counter">
                <div className="counter-circle">
                    <p className="counter-value">{remainingDays}</p>
                    <p className="counter-text">DÍAS</p>
                </div>
                <div className="counter-circle">
                    <p className="counter-value">{remainingHours}</p>
                    <p className="counter-text">HRS</p>
                </div>
                <div className="counter-circle">
                    <p className="counter-value">{remainingMinutes}</p>
                    <p className="counter-text">MIN</p>
                </div>
                <div className="counter-circle">
                    <p className="counter-value">{remainingSeconds}</p>
                    <p className="counter-text">SEG</p>
                </div>
            </div>
        </>
    );
};

export default WCCounter;
