import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Container from 'react-bootstrap/Container';
// import firebase from "./firebase/Config";

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsProduct: []
        }
    }


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
        const {galleryItems, currentIndex} = this.state;
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
                        touchTrackingEnabled={true}
                        mouseTrackingEnabled={true}
                        slideToIndex={currentIndex}
                        onSlideChanged={this.onSlideChange}
                    >
                        {this.state.itemsProduct.map((item, id) => {
                            return(
                                <div key={id} className="feature">
                                    <div className="feature-img new-product">
                                        <div className="icon">
                                            <i className="far fa-heart"></i>
                                            <i className="fas fa-heart"></i>
                                        </div>
                                        <img className="w-100" src={item.image} alt={item.alter} />
                                        <a href="/" className="cart-btn">
                                            {item.link}
                                        </a>
                                    </div>
                                    <div className="description">
                                        <a className="desc" href="/">{item.desc}</a>
                                        <div>
                                            <span className={item.color}><del>{item.del}</del>{item.span}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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
