import React, {useEffect, useState} from 'react';
import { Image, Dropdown, Container } from 'react-bootstrap';
import firebase from "../firebase/Config";

export default () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadCart();
    }, [])

    const loadCart = () => {
        firebase.database().ref("cart").once('value').then(response => {
            let products = [];
            response.forEach(item => {
                products.push(item.val());
            });
            setItems(products);
        }).catch((err) => console.log(err));
    }

    const updateQuantity = (product, quantity) => {
        firebase.database().ref('cart/'+product.id).set({product, quantity}).then(() => loadCart()).catch(err => console.log(err));
    }

    return(
        <div id="cart-products">
            <div className="cover">
                <h2>Cart</h2>
            </div>
            <Container>
                <div className="table">
                    <table>
                        <thead>
                            <td> </td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                        </thead>
                        {items?.map(item => <tr key={item.product.id} className="table-row">
                            <th className="img"><Image src={item.product.image} /></th>
                            <th><h6>{item.product.desc}</h6></th>
                            <th><label htmlFor="#">{item.product.span}</label></th>
                            <th>
                                <div className="quantity">
                                    <button onClick={() => updateQuantity(item.product, item.quantity === 1 ? 1 : item.quantity - 1)}>-
                                    </button>
                                    <button className="counter">{item.quantity}</button>
                                    <button onClick={() => updateQuantity(item.product, item.quantity + 1)}>+
                                    </button>
                                </div>
                            </th>
                            <th><label htmlFor="#" className="price">{(item.quantity * parseFloat(item.product.span.replace('$',''))).toFixed(2)}</label></th>
                        </tr>)}
                    </table>
                    <div className="table-footer">
                        <div className="main-table-footer">
                            <input type="text" placeholder="Coupon Code" />
                            <button>Apply Coupon</button>
                            <button className="cart-update-btn">Update Cart</button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="container">
                <div className="row">
                    <div className="col-8 d-md-block d-none"></div>
                    <div className="col-lg-4 col-12 inner-cart">
                        <h5>Cart Totals</h5>
                        <div className="total">
                            <span className="name">Subtotal:</span>
                            <span className="salary"> $39.00</span>
                        </div>
                        <div className="shipping">
                            <div className="main-shipping">
                                <div className="name">Shipping:</div>
                                <div className="details">There are no shipping methods available. Please double check your address, or contact us if you need any help.</div>
                            </div>
                            <div className="calc">
                                <span>Calculate Shipping</span>
                                <div className="select">
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Select a country...
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item className="items active" href="#/action-2">Select a country...</Dropdown.Item>
                                            <Dropdown.Item className="items" href="#/action-2">US</Dropdown.Item>
                                            <Dropdown.Item className="items" href="#/action-3">UK</Dropdown.Item>
                                            <Dropdown.Item className="items" href="#/action-3">Japan</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <input type="text" placeholder="State / Country" />
                                    <input type="text" placeholder="Postcode / Zip" />
                                    <div className="inner-total">
                                    <button className="update">Update Totals</button>
                                        <span className="name">Total:</span>
                                        <span className="salary"> $39.00</span>
                                        <button className="update">Proceed To Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}