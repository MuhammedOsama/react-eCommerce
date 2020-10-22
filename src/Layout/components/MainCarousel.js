import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import firebase from "./firebase/Config";

export default () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        // fetch mainCarousel items from firebase.
        firebase.database().ref('MainCarousel').once('value').then(response => {
            let carousel = [];
            response.forEach(item => {
                carousel.push(item.val());
            });
            setItems(carousel);
        }).catch((err) => console.log(err));

    }, [items]);

    return(
        <div id="main-carousel">
            <Carousel className="carousel" fade={true}>
                        {items.map((item, id) => {
                            return(
                                <Carousel.Item key={id}>
                                    <img className="d-block w-100" src={item.image} alt={item.alter} />
                                        <div>
                                            <Carousel.Caption>
                                                <p id={item.iddetails}>{item.details}</p>
                                                <h1 id={item.idheader}>{item.header}</h1>
                                                <button id={item.idbtn}>{item.btn}</button>
                                            </Carousel.Caption>
                                        </div>
                                </Carousel.Item>
                            );
                        })}
            </Carousel>
        </div>
    );
}