import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class MainCarousel extends Component {
    render() {
        return(
            <div id="main-carousel">
                <Carousel className="carousel" fade="true">
                    <Carousel.Item>
                        <img className="d-block w-100" src="./master-slide-02.jpg" alt="First slide" />
                        <Carousel.Caption>
                            <p>Woman Collection 2020</p>
                            <h1>New Arrivals</h1>
                            <button>Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="./master-slide-03.jpg" alt="Second slide" />
                        <Carousel.Caption>
                            <p>Woman Collection 2020</p>
                            <h1>New Arrivals</h1>
                            <button>Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="./master-slide-04.jpg" alt="Third slide" />
                        <Carousel.Caption>
                            <p>Woman Collection 2020</p>
                            <h1>New Arrivals</h1>
                            <button>Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default MainCarousel;