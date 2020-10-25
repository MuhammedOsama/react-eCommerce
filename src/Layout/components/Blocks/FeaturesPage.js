import React, { useState } from 'react';
import { Image, Dropdown, Container } from 'react-bootstrap';

export default () => {

    const [counter, setCounter] = useState(1);

    const CounterUp = () => {
        setCounter( counter + 1);
    }

    const CounterDown = () => {
        if(counter === 1) {
            return;
        } else {
        setCounter( counter - 1);
        }
    }


    const [count, setCount] = useState(1);

    const countUp = () => {
        setCount( count + 1);
    }

    const countDown = () => {
        if(count === 1) {
            return;
        } else {
            setCount(count - 1);
        }
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
                            <td></td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                        </thead>
                        <tr className="table-row">
                            <th className="img"><Image src="./item-10.jpg" /></th>
                            <th><h6>Men T-Shirt</h6></th>
                            <th><label htmlFor="#">$36.00</label></th>
                            <th>
                                <div className="quantity">
                                    <button onClick={CounterDown}>-</button>
                                    <button className="counter">{counter}</button>
                                    <button onClick={CounterUp}>+</button>
                                </div>
                            </th>
                            <th><label htmlFor="#" className="price">$36.00</label></th>
                        </tr>
                        <tr className="table-row">
                            <th className="img"><Image src="./item-05.jpg" /></th>
                            <th><h6>Mug Adventure</h6></th>
                            <th><label htmlFor="#">$16.00</label></th>
                            <th>
                                <div className="quantity">
                                    <button onClick={countDown}>-</button>
                                    <button className="counter">{count}</button>
                                    <button onClick={countUp}>+</button>
                                </div>
                            </th>
                            <th><label htmlFor="#" className="price">$16.00</label></th>
                        </tr>
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