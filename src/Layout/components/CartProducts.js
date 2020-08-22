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
        this.setState({counter: ++this.state.counter})
    }

    CountDown = () => {
        const {counter} = this.state
        if(counter===1) {
            return;
        } else {
            this.setState({counter: --this.state.counter})
        }
    }

    Up = () => {
        this.setState({count: ++this.state.count})
    }

    Down = () => {
        const {count} = this.state
        if(count===1) {
            return;
        } else {
            this.setState({count: --this.state.count})
        }
    }

    render() {
        return(
            <div id="cart-products">
                <div className="container">
                    <div className="row">
                            <div className="col">
                                <span> </span>
                            </div>
                            <div className="col">
                                <span>Product</span>
                            </div>
                            <div className="col">
                                <span>Price</span>
                            </div>
                            <div className="col">
                                <span>Quantity</span>
                            </div>
                            <div className="col">
                                <span>Total</span>
                            </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="row">
                        <div className="col">
                            <img src="./item-10.jpg" alt="Men Tshirt"/>
                        </div>
                        <div className="col">
                            <p>Men Tshirt</p>
                        </div>
                        <div className="col">
                            <p>$36.00</p>
                        </div>
                        <div className="col">
                            <a href="/" onClick={this.CountUp}>+</a>
                            <label>{this.state.counter}</label>
                            <a href="/" onClick={this.CountDown}>-</a>
                        </div>
                        <div className="col">
                            <p>$36.00</p>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="row">
                        <div className="col">
                            <img src="./item-05.jpg" alt="Mug Adventure"/>
                        </div>
                        <div className="col">
                            <p>Mug Adventure</p>
                        </div>
                        <div className="col">
                            <p>$16.00</p>
                        </div>
                        <div className="col">
                            <a href="/" onClick={this.Up}>+</a>
                            <label>{this.state.count}</label>
                            <a href="/" onClick={this.Down}>-</a>
                        </div>
                        <div className="col">
                            <p>$16.00</p>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" placeholder="Coupon Code" />
                            <button>Apply Coupon</button>
                        </div>
                        <div className="col-md-6">
                            <button className="update">Update Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartProducts;