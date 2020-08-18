import React, { Component } from 'react';

class Categories extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         items: [
    //             {image: "./banner-02.jpg", alter: "Dresses", style: "desc", btn: "Dresses"},
    //             {image: "./banner-03.jpg", alter: "Watches", style: "desc", btn: "Watches"},
    //             {image: "./banner-04.jpg", alter: "Bags", style: "desc", btn: "Bags"},
    //             {image: "./banner-05.jpg", alter: "Glasses", style: "desc", btn: "SunGlasses"},
    //             {image: "./banner-07.jpg", alter: "FooterWear", style: "desc", btn: "FooterWear"},
    //             {image: "./bg-01.jpg", alter: "Sign Up", header: "Sign Up & Get 20% Off", details: "Be the first to know about the latest fashion news and get exclu-sive offers", style: "signup", btn: "Sign Up"}
    //         ]
    //     }
    // }

    render() {
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
}

export default Categories;