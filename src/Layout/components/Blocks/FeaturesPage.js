import React, { Component } from 'react';
import { Image, Dropdown, Container } from 'react-bootstrap';

class CartProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            count: 1
        }
    }

    CountUp = () => {
        const {counter} = this.state;
        this.setState({counter: counter + 1})
    }

    CountDown = () => {
        const {counter} = this.state;
        if(counter === 1) {
            return;
        } else {
            this.setState({counter: counter - 1})
        }
    }

    Up = () => {
        const {count} = this.state;
        this.setState({count: count + 1})
    }

    Down = () => {
        const {count} = this.state;
        if(count === 1) {
            return;
        } else {
            this.setState({count: count - 1})
        }
    }

    render() {
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
                                        <button onClick={this.CountDown}>-</button>
                                        <button className="counter">{this.state.counter}</button>
                                        <button onClick={this.CountUp}>+</button>
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
                                        <button onClick={this.Down}>-</button>
                                        <button className="counter">{this.state.count}</button>
                                        <button onClick={this.Up}>+</button>
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
}

export default CartProducts;