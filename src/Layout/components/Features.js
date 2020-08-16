import React, { Component } from 'react';

class Features extends Component {
    render() {
        return(
            <div id="features">
                <div className="header">
                    <h2>@ Follow Us On Instagram</h2>
                </div>
                <div className="grid-container">

                    <div className="grid-item">
                        <img src="./gallery-03.jpg" alt="Bag" />
                        <div className="features-img new-features">
                            <span className="icon">
                                <i className="far fa-heart"> 39</i>
                            </span>
                            <p>Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.</p>
                            <span>Photo by @nancyward</span>
                        </div>
                    </div>
                    
                    <div className="grid-item">
                        <img src="./gallery-07.jpg" alt="Girl" />
                        <div className="features-img new-features">
                            <span className="icon">
                                <i className="far fa-heart"> 39</i>
                            </span>
                            <p>Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.</p>
                            <span>Photo by @nancyward</span>
                        </div>
                    </div>

                    <div className="grid-item">
                        <img src="./gallery-09.jpg" alt="Set" />
                        <div className="features-img new-features">
                            <span className="icon">
                                <i className="far fa-heart"> 39</i>
                            </span>
                            <p>Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.</p>
                            <span>Photo by @nancyward</span>
                        </div>
                    </div>

                    <div className="grid-item">
                        <img src="./gallery-13.jpg" alt="Jump" />
                        <div className="features-img new-features">
                            <span className="icon">
                                <i className="far fa-heart"> 39</i>
                            </span>
                            <p>Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.</p>
                            <span>Photo by @nancyward</span>
                        </div>
                    </div>

                    <div className="grid-item">
                        <img src="./gallery-15.jpg" alt="Shoes" />
                        <div className="features-img new-features">
                            <span className="icon">
                                <i className="far fa-heart"> 39</i>
                            </span>
                            <p>Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget metus elit.</p>
                            <span>Photo by @nancyward</span>
                        </div>
                    </div>

                </div>
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-4 col-12 details">
                            <h4>Free Delivery Worldwide</h4>
                            <p className="info">Click here for more info</p>
                        </div>
                        <div className="col-md-4 col-12 details">
                            <h4>30 Days Return</h4>
                            <p>Simply return it within 30 days for an exchange.</p>
                        </div>
                        <div className="col-md-4 col-12 details">
                            <h4>Store Opening</h4>
                            <p>Shop open from Monday to Sunday</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;