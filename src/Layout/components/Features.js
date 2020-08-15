import React, { Component } from 'react';

class Features extends Component {
    render() {
        return(
            <div id="features">
                <div className="header">
                    <h2>@ Follow Us On Instagram</h2>
                </div>
                <div className="gallery">
                    
                    <div className="features-img new-features">
                        <div className="icon">
                            <i className="far fa-heart"> 39</i>
                        </div>
                        <img src="./gallery-03.jpg" alt="Bag" />
                    </div>
                    
                    <div className="features-img new-features">
                        <div className="icon">
                            <i className="far fa-heart"> 39</i>
                        </div>
                        <img src="./gallery-07.jpg" alt="Girl" />
                    </div>

                    <div className="features-img new-features">
                        <div className="icon">
                            <i className="far fa-heart"> 39</i>
                        </div>
                        <img src="./gallery-09.jpg" alt="Set" />
                    </div>

                    <div className="features-img new-features">
                        <div className="icon">
                            <i className="far fa-heart"> 39</i>
                        </div>
                        <img src="./gallery-13.jpg" alt="Jump" />
                    </div>

                    <div className="features-img new-features">
                        <div className="icon">
                            <i className="far fa-heart"> 39</i>
                        </div>
                        <img src="./gallery-15.jpg" alt="Shoes" />
                    </div>
                    
                </div>
                <div className="worldwide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Free Delivery Worldwide</p>
                                <span>Click here for more info</span>
                            </div>
                            <div className="col-lg-4">
                                <p>30 Days Return</p>
                                <span>Simply return it within 30 days for an exchange.</span>
                            </div>
                            <div className="col-lg-4">
                                <p>Store Opening</p>
                                <span>Shop open from Monday to Sunday</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;