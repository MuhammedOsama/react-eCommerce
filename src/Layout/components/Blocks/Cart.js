import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase/Config';

export default (props) => {

    const [items, setItems] = useState([]);
    const [cart, setPriceItems] = useState([]);

    useEffect(() => {

        firebase.database().ref('Cart').once('value').then(response => {
            let cart = [];
            response.forEach(item => {
                cart.push(item.val());
            });
            setItems(cart);
        }).catch((err) => console.log(err));

        firebase.database().ref('PriceCart').once('value').then(response => {
            let priceCart = [];
            response.forEach(item => {
                priceCart.push(item.val());
            });
            setPriceItems(priceCart);
        }).catch((err) => console.log(err));

    }, [items, cart]);
  
    return <div className={"cart-dropdown"} onClick={() => props.handleCartVisibility(true)}>
        <ul className="cart-product">
            {items.map((item, id) => {
                return(
                    <div key={id}>
                        <li className="cart-items">
                            <div className="item-img">
                                <img src={item.image} alt={item.alter}/>
                            </div>
                            <div className="item-txt">
                                <a href="/" className="item-name">{item.link}</a>
                                <span className="item-info">{item.price}</span>
                            </div>
                        </li>
                    </div>
                )
            })}
            
        </ul>
        {cart.map((item, id) => {
            return(
                <div key={id} className="cart-total">{item.price}</div>
            )
        })}

        <div className="cart-btn">
                <div className="wrap-btn">
                    <Link to="/features-page" className="view-btn">View Cart</Link>
                </div>
            <div className="wrap-btn">
                <a href="/" className="btn">Check Out</a>
            </div>
        </div>

    </div>
}