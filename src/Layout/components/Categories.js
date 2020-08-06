import React, { Component } from 'react';

class Categories extends Component {
    render() {
        return(
            <div id="categories">
            <div className="container">
                <div className="row text-center">
                        <div className="col-lg-4 col-12">
                            <div>
                                <img className="banner" src="./banner-02.jpg" alt="First Banner"/>
                                <button className="disc">Dresses</button>
                            </div>
                            <div>
                                <img className="banner" src="./banner-05.jpg" alt="Second Banner"/>
                                <button className="disc">Glasses</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div>
                                <img className="banner" src="./banner-03.jpg" alt="Third Banner"/>
                                <button className="disc">Watches</button>
                            </div>
                            <div>
                                <img className="banner" src="./banner-07.jpg" alt="Forth Banner"/>
                                <button className="disc">FooterWear</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div>
                                <img className="banner" src="./banner-04.jpg" alt="Fifth Banner"/>
                                <button className="disc">Bags</button>
                            </div>
                            <div>
                                <img className="bgsignup" src="./bg-01.jpg" alt="Sixth Banner"/>
                                <h1 className="h1">Sign Up & Get 20% Off</h1>
                                <p className="dis">Be the first to know about the latest fashion news and get exclu-sive offers</p>
                                <button className="signup">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;