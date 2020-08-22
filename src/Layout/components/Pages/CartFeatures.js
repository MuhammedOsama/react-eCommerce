import React, { Component } from 'react';
import Navbar from '../Navbar';
import CartView from '../CartView';
import CartProducts from '../CartProducts';
import Footer from '../Footer';

class CartFeatures extends Component{
    render() {
        return(
            <div>
                <Navbar />
                <CartView />
                <CartProducts />
                <Footer />
            </div>
        );
    }
}

export default CartFeatures;