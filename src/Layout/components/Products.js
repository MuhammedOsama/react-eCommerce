import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Container from 'react-bootstrap/Container';

class Products extends Component {
    state = { galleryItems: [4], currentIndex: 0};

    responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 3},
        1024: {items: 4}
    }

    slideTo = (i) => this.setState({ currentIndex: i });
    onSlideChange = (e) => this.setState ({ currentIndex: e.item });
    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });
    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    render() {
        const { galleryItems, currentIndex } = this.state;
        return (
            <div id="products">
                <div className="header">
                    <h2>Featured Products</h2>
                </div>
                <Container className="p-0">
                    <AliceCarousel
                        items={galleryItems}
                        responsive={this.responsive}
                        autoPlayInterval={1000}
                        fadeOutAnimation={false}
                        dotsDisabled={true}
                        buttonsDisabled={true}
                        touchTrackingEnabled={true}
                        mouseTrackingEnabled={true}
                        slideToIndex={currentIndex}
                        onSlideChanged={this.onSlideChange}
                    >
                        <div className="feature">
                            <div className="feature-img new-product">
                                <div className="icon">
                                    <i className="far fa-heart"></i>
                                    <i className="fas fa-heart"></i>
                                </div>
                                <img className="w-100" src="./item-02.jpg" alt="Bags" />
                                <a href="/" className="cart-btn">
                                    Add To Cart
                                </a>
                            </div>
                            <div className="description">
                                <a className="desc" href="/">Herschel Supply Co 25l</a>
                                <div>
                                    <span>$75.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-img new-product">
                                <div className="icon">
                                    <i className="far fa-heart"></i>
                                    <i className="fas fa-heart"></i>
                                </div>
                                <img className="w-100" src="./item-03.jpg" alt="Jacket" />
                                <a href="/" className="cart-btn">
                                    Add To Cart
                                </a>
                            </div>
                            <div className="description">
                                <a className="desc" href="/">Denim jacket blue</a>
                                <div>
                                    <span>$92.50</span>
                                </div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-img new-product">
                                <div className="icon">
                                    <i className="far fa-heart"></i>
                                    <i className="fas fa-heart"></i>
                                </div>
                                <img className="w-100" src="./item-05.jpg" alt="Watch" />
                                <a href="/" className="cart-btn">
                                    Add To Cart
                                </a>
                            </div>
                            <div className="description">
                                <a className="desc" href="/">Coach slim easton black</a>
                                <div>
                                    <span>$165.90</span>
                                </div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-img new-product">
                                <div className="icon">
                                    <i className="far fa-heart"></i>
                                    <i className="fas fa-heart"></i>
                                </div>
                                <img className="w-100" src="./item-07.jpg" alt="Short" />
                                <a href="/" className="cart-btn">
                                    Add To Cart
                                </a>
                            </div>
                            <div className="description">
                                <a className="desc" href="/">Frayed denim Shorts</a>
                                <div>
                                    <span className="diff"><del>29.50</del> $15.90</span>
                                </div>
                            </div>
                        </div>
                    </AliceCarousel>
                    <button className="prev" onClick={() => this.slidePrev()}>
                        <i className="fas fa-angle-left"></i>
                    </button>
                    <button className="next" onClick={() => this.slideNext()}>
                        <i className="fas fa-angle-right"></i>
                    </button>
                </Container>
            </div>
        );
    }
}

export default Products;