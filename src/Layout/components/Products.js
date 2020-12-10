import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Container from 'react-bootstrap/Container';
import firebase from "./firebase/Config";

export default () => {


    const [items, setItems] = useState([]);

    const state = { galleryItems: [4], currentIndex: 0};

    const responsive = {
        0: {items: 1},
        576: {items: 2},
        768: {items: 3},
        1024: {items: 4}
    }


    const {galleryItems, currentIndex} = state;

    useEffect(() => {

        firebase.database().ref("Products").once('value').then(response => {
            let products = [];
            response.forEach(item => {
                products.push(item.val());
            });
            setItems(products);
        }).catch((err) => console.log(err));

    }, [items]);

    const handleAddToCart = (product, quantity= 1) => {
        firebase.database().ref('cart/'+product.id).set({product, quantity}).catch(err => console.log(err));
    }

    return (
        <div id="products">
            <div className="header">
                <h2>Featured Products</h2>
            </div>
            <Container className="p-0">
                <AliceCarousel
                    items={galleryItems}
                    responsive={responsive}
                    autoPlayInterval={1000}
                    fadeOutAnimation={false}
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    touchTrackingEnabled={true}
                    mouseTrackingEnabled={true}
                    slideToIndex={currentIndex}
                >
                    {items.map((item, id) => {
                        return(
                            <div key={id} className="feature">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src={item.image} alt={item.alter} />
                                    <a href="/" className="cart-btn" onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(item);
                                    }} >
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
            </Container>
        </div>
    );
}