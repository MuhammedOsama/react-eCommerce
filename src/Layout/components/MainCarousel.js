import React from 'react';
import { Carousel } from 'react-bootstrap';

export default () => {

    const items = [
        {image: "./master-slide-02.jpg", alter: "First Slide", iddetails:"collection-1", details: "Woman Collection 2020", idheader: "new-arrival-1", header: "New Arrivals", idbtn: "caption-btn-1", btn: "Shop Now"},
        {image: "./master-slide-03.jpg", alter: "Second Slide", iddetails:"collection-2", details: "Woman Collection 2020", idheader: "new-arrival-2", header: "New Arrivals", idbtn: "caption-btn-2", btn: "Shop Now"},
        {image: "./master-slide-04.jpg", alter: "Third Slide", iddetails:"collection-3", details: "Woman Collection 2020", idheader: "new-arrival-3", header: "New Arrivals", idbtn: "caption-btn-3", btn: "Shop Now"}
    ]

    return(
        <div id="main-carousel">
            <Carousel className="carousel" fade={true}>
                        {items.map((item, id) => {
                            return(
                                <Carousel.Item>
                                    <img className="d-block w-100" src={item.image} alt={item.alter} />
                                        <div key={id}>
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