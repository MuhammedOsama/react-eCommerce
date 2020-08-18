import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return(
            <div id="footer">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h3>Get in touch</h3>
                            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="/"><i className="fab fa-pinterest-p"></i></a>
                            <a href="/"><i className="fab fa-snapchat-ghost"></i></a>
                            <a href="/"><i className="fab fa-youtube"></i></a>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <h3>Categories</h3>
                            <a href="/" className="info">Men</a>
                            <a href="/" className="info">Women</a>
                            <a href="/" className="info">Dresses</a>
                            <a href="/" className="info">Sunglasses</a>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <h3>Links</h3>
                            <a href="/" className="info">Search</a>
                            <a href="/" className="info">About Us</a>
                            <a href="/" className="info">Contact Us</a>
                            <a href="/" className="info">Returns</a>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <h3>Help</h3>
                            <a href="/" className="info">Track Order</a>
                            <a href="/" className="info">Returns</a>
                            <a href="/" className="info">Shopping</a>
                            <a href="/" className="info">FAQs</a>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <h3>Newsletter</h3>
                            <input type="text" placeholder="email@example.com"/>
                            <button>Subscribe</button>
                        </div>

                    </div>
                    <div className="copyright">
                        <div className="pic">
                            <img src="./paypal.png" alt="PayPal"/>
                            <img src="./visa.png" alt="Visa"/>
                            <img src="./mastercard.png" alt="MasterCard"/>
                            <img src="./express.png" alt="Express"/>
                            <img src="./discover.png" alt="Discover"/>
                        </div>
                        <label>Copyright &copy;2020 Colorlib. All rights reserved.</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;