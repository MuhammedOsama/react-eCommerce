import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {image: "./map.png", alter: "Map"}
            ]
        }
    }

    render() {
        return(
            <div id="contact">
                <div className="cover">
                    <h2>Contact</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.items.map((item, id) => {
                            return(
                                <div key={id} className="col-lg-6 col-12">
                                    <img src={item.image} alt={item.alter} />
                                </div>
                            );
                        })}
                        
                        <div className="col-lg-6 col-12">
                            <h1>Send us your message</h1>
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Phone Number" />
                            <input type="text" placeholder="E-mail Address" />
                            <textarea placeholder="Message"></textarea>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;