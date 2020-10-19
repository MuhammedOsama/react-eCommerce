import React from 'react';

export default () => {
    return(
        <div id="categories">
            <div className="container">
            <div className="row text-center">
                    <div className="col-lg-4 col-12">
                        <div className="block1 hov-img-zoom pos-relative">
                            <img className="banner" src="./banner-02.jpg" alt="Dresses"/>
                            <button className="desc">Dresses</button>
                        </div>
                        <div className="block1 hov-img-zoom pos-relative">
                            <img className="banner" src="./banner-05.jpg" alt="Glasses"/>
                            <button className="desc">SunGlasses</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="block1 hov-img-zoom pos-relative">
                            <img className="banner" src="./banner-03.jpg" alt="Watches"/>
                            <button className="desc">Watches</button>
                        </div>
                        <div className="block1 hov-img-zoom pos-relative">
                            <img className="banner" src="./banner-07.jpg" alt="FooterWear"/>
                            <button className="desc">FooterWear</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="block1 hov-img-zoom pos-relative">
                            <img className="banner" src="./banner-04.jpg" alt="Bags"/>
                            <button className="desc">Bags</button>
                        </div>
                        <div className="block1 hov-img-zoom pos-relative">
                            <img className="bgsignup" src="./bg-01.jpg" alt="Sign Up"/>
                            <h1 className="h1">Sign Up & Get 20% Off</h1>
                            <p className="des">Be the first to know about the latest fashion news and get exclu-sive offers</p>
                            <button className="signup">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}