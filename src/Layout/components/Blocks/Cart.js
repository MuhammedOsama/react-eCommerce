import React, { Component } from 'react';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {image: "./item-cart-01.jpg", alter:"Shirt", link: "White Shirt With Pleat Detail Back", price: "1 × $19.00"},
                {image: "./item-cart-02.jpg", alter:"Converse", link: "Converse All Star Hi Black Canvas", price: "1 × $39.00"},
                {image: "./item-cart-03.jpg", alter:"Nixon", link: "Nixon Porter Leather Watch In Tan", price: "1 × $17.00"}
            ],
            cart: [
                {price: "Total: $75.00"}
            ],
            btn: [
                {btn: "View Cart"},
                {btn: "Check Out"}
            ]
        }
    }

    render() {
        return(
            <div className={"cart-dropdown " + this.props.cartClass}>
                <ul className="cart-product">
                    {this.state.items.map((item, id) => {
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
                {this.state.cart.map((item, id) => {
                    return(
                        <div key={id} className="cart-total">{item.price}</div>
                    )
                })}

                <div className="cart-btn">
                    {this.state.btn.map((item, id) => {
                        return(
                            <div key={id} className="wrap-btn">
                                <a href="/" className="view-btn">{item.btn}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Cart;