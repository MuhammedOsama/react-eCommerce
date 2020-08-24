import React, { Component } from 'react';

class CartProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            count: 1
        }
    }

    CountUp = () => {
        const {counter} = this.state
        this.setState({counter: counter + 1})
    }

    CountDown = () => {
        const {counter} = this.state
        if(counter===1) {
            return;
        } else {
            this.setState({counter: counter - 1})
        }
    }

    Up = () => {
        const {count} = this.state
        this.setState({count: count + 1})
    }

    Down = () => {
        const {count} = this.state
        if(count===1) {
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
                <div className="container">
                    <div className="row">
                        <table className="table-cart">
                            <tbody>
                                <tr className="table-head">
                                    <td className="column-1"></td>
                                    <td className="column-2">Products</td>
                                    <td className="column-3">Price</td>
                                    <td className="column-4">Quantity</td>
                                    <td className="column-5">Total</td>
                                </tr>
                                <tr className="table-row">
                                    <th className="column-1"> 
                                        <div className="cart-img-1"></div>
                                    </th>
                                    <th className="column-2">Men T-shirt</th>
                                    <th className="column-3">$36.00</th>
                                    <th className="column-4">
                                        <div className="quantity">
                                            <span className="sign-1" onClick={this.CountDown}> - </span>
                                            <span> {this.state.counter} </span>
                                            <span className="sign-2" onClick={this.CountUp}> + </span>
                                        </div>
                                    </th>
                                    <th className="column-5">$36.00</th>
                                </tr>
                                <tr className="table-row">
                                    <th className="column-1"> 
                                        <div className="cart-img-2"></div>
                                    </th>
                                    <th className="column-2">Mug Adventure</th>
                                    <th className="column-3">$16.00</th>
                                    <th className="column-4">
                                        <div className="quantity">
                                            <span className="sign-1" onClick={this.Down}> - </span>
                                            <span> {this.state.count} </span>
                                            <span className="sign-2" onClick={this.Up}> + </span>
                                        </div>
                                    </th>
                                    <th className="column-5">%16.00</th>
                                </tr>
                                <tr className="table-footer">
                                    <th className="column-1">
                                        <input type="text" placeholder="Coupon Code" />
                                    </th>
                                    <th className="column-2">
                                        <button>Apply Code</button>
                                    </th>
                                    <th className="column-3"></th>
                                    <th className="column-4"></th>
                                    <th className="column-5">
                                        <button>Update Cart</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
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
                                        <ul>
                                            <li>Select a country...</li>
                                            <li className="country">US</li>
                                            <li className="country">UK</li>
                                            <li className="country">Japan</li>
                                        </ul>
                                        <input type="text" placeholder="State / Country" />
                                        <input type="text" placeholder="Postcode / Zip" />
                                        <button>Update Totals</button>
                                        <div className="inner-total">
                                            <span className="name">Total:</span>
                                            <span className="salary"> $39.00</span>
                                            <button>Proceed To Checkout</button>
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