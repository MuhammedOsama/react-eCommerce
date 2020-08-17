import React, { useState, useRef, useEffect } from 'react';

const CountDown = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHrs, setTimerHrs] = useState('00');
    const [timerMins, setTimerMins] = useState('00');
    const [timerSecs, setTimerSecs] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('Dec 31 2020 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const Hrs = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const Mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const Secs = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                clearInterval(interval.Current);
            } else {
                setTimerDays(Days);
                setTimerHrs(Hrs);
                setTimerMins(Mins);
                setTimerSecs(Secs);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.Current);
        };
    });

    return(
        <div id="count">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="hov-img pos-relative">
                            <img src="./banner-08.jpg" alt="Beauty"/>
                            <div className="carousel-caption beauty">
                                <h3>The Beauty</h3>
                                <h1>LookBook</h1>
                                <span>View Collection</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="hov-img pos-relative">
                            <img src="./shop-item-09.jpg" alt="Glass"/>
                            <div className="carousel-caption glass">
                                <label>Gafas sol Hawkers one</label>
                                <span><del>$29.50</del> $15.90</span>
                                <div className="timer">
                                    <div className="count">
                                        <section>
                                            <p className="num">{timerDays}</p>
                                            <p><small>Days</small></p>
                                        </section>
                                        <section>
                                            <p className="num">{timerHrs}</p>
                                            <p><small>Hrs</small></p>
                                        </section>
                                        <section>
                                            <p className="num">{timerMins}</p>
                                            <p><small>Mins</small></p>
                                        </section>
                                        <section>
                                            <p className="num">{timerSecs}</p>
                                            <p><small>Secs</small></p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountDown;