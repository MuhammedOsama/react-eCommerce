import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return(
            <div className={"cart-dropdown " + this.props.cartClass}>
                <ul className="cart-product">
                    <li className="cart-items">
                        <div className="item-img">
                            <img src="./item-cart-01.jpg" alt="Shirt"/>
                        </div>
                        <div className="item-txt">
                            <a href="/" className="item-name">White Shirt With Pleat Detail Back</a>
                            <span className="item-info">1 × $19.00</span>
                        </div>
                    </li>
                    <li className="cart-items">
                        <div className="item-img">
                            <img src="./item-cart-02.jpg" alt="Converse"/>
                        </div>
                        <div className="item-txt">
                            <a href="/" className="item-name">Converse All Star Hi Black Canvas</a>
                            <span className="item-info">1 × $39.00</span>
                        </div>
                    </li>
                    <li className="cart-items">
                        <div className="item-img">
                            <img src="./item-cart-03.jpg" alt="Nixon"/>
                        </div>
                        <div className="item-txt">
                            <a href="/" className="item-name">Nixon Porter Leather Watch In Tan</a>
                            <span className="item-info">1 × $17.00</span>
                        </div>
                    </li>
                </ul>
                <div className="cart-total">Total: $75.00</div>
                <div className="cart-btn">
                        <div className="wrap-btn">
                            <a href="/" className="view-btn">View Cart</a>
                        </div>
                        <div className="wrap-btn">
                            <a href="/" className="check-btn">Check Out</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Cart;