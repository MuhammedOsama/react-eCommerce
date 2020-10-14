import React, { Component } from 'react';

class AboutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {image: "./banner-14.jpg", alter: "About", header: "Our Story", desc: "Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.", details: "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while", span: "- Steve Job's"}
            ]
        }
    }

    render() {
        return(
            <div id="about">
                <div className="cover">
                    <h2>About</h2>
                </div>
                <div className="container">
                    {this.state.items.map((item, id) => {
                        return(
                            <div key={id} className="row">
                                <div className="col-md-4 col-12">
                                    <div className="pos-relative hov-img-zoom">
                                        <img src={item.image} alt={item.alter}/>
                                    </div>
                                </div>
                                <div className="col-md-8 col-12">
                                    <h1>{item.header}</h1>
                                    <p>{item.desc}</p>
                                    <p>{item.details}</p>
                                    <span>{item.span}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default AboutPage;