import React from 'react';

export default (props) =>{

    const items = [
        {image: "./item-cart-01.jpg", alter:"Shirt", link: "White Shirt With Pleat Detail Back", price: "1 × $19.00"},
        {image: "./item-cart-02.jpg", alter:"Converse", link: "Converse All Star Hi Black Canvas", price: "1 × $39.00"},
        {image: "./item-cart-03.jpg", alter:"Nixon", link: "Nixon Porter Leather Watch In Tan", price: "1 × $17.00"}
    ]

    const cart = [
        {price: "Total: $75.00"}
    ]
    
    const btn =  [
        {btn: "View Cart"},
        {btn: "Check Out"}
    ]
  
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
            {btn.map((item, id) => {
                return(
                    <div key={id} className="wrap-btn">
                        <a href="/" className="view-btn">{item.btn}</a>
                    </div>
                )
            })}
        </div>
    </div>
}