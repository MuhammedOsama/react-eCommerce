import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase/Config';

export default (props) => {


    const [items, setItems] = useState([]);

    useEffect(() => {

        firebase.database().ref('cart').once('value').then(response => {
            let cart = [];
            response.forEach(item => {
                cart.push(item.val());
            });
            setItems(cart);
        }).catch((err) => console.log(err));

    }, []);
    console.log(items);
  
    return <div className={"cart-dropdown"} onClick={() => props.handleCartVisibility(true)}>
        <ul className="cart-product">
            {items.map((item, id) => {
                return(
                    <div key={id}>
                        <li className="cart-items">
                            <div className="item-img">
                                <img src={item.product.image} alt={item.alter}/>
                            </div>
                            <div className="item-txt">
                                <a href="/" className="item-name">{item.product.desc}</a>
                                <span className="item-info">{item.quantity} × {item.product.span}</span>
                            </div>
                        </li>
                    </div>
                )
            })}
        </ul>
        <div className="cart-total">Total: $75.00</div>
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