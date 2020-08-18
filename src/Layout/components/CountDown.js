import React, { useState, useRef, useEffect } from 'react';

const CountDown = () => {

    const items = [
        {image: "./banner-08.jpg", alter: "Beauty", header: "The Beauty", details: "LookBook", span: "View Collection"}
    ]

    const count = [
        {image: "./shop-item-09.jpg", alter: "Glass", details: "Gafas sol Hawkers one", del:"$29.50", price: "$15.90"}
    ]

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
                        {items.map((item, id) => {
                            return(
                                <div key={id} className="hov-img pos-relative">
                                    <img src={item.image} alt={item.alter} />
                                    <div className="carousel-caption beauty">
                                        <h3>{item.header}</h3>
                                        <h1>{item.details}</h1>
                                        <span>{item.span}</span>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className="col-lg-6 col-12">
                        {count.map((item, id) => {
                            return(
                                <div key={id} className="hov-img pos-relative">
                                    <img src={item.image} alt={item.alter} />
                                    <div className="carousel-caption glass">
                                        <label>{item.details}</label>
                                        <span><del>{item.del}</del> {item.price}</span>
                                        <div className="timer">
                                            <div className="count">
                                                <section>
                                                    <p className="num">{timerDays}<br /><small>Days</small></p>
                                                </section>
                                                <section>
                                                    <p className="num">{timerHrs}<br /><small>Hrs</small></p>
                                                </section>
                                                <section>
                                                    <p className="num">{timerMins}<br /><small>Mins</small></p>
                                                </section>
                                                <section>
                                                    <p className="num">{timerSecs}<br /><small>Secs</small></p>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountDown;