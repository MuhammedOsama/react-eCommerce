import React, { Component } from 'react';

class ViewCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {image: "./heading-pages-01.jpg", alter: "Heading", header: "Cart"}
            ]
        }
    }

    render() {
        return(
            <div id="main-carousel">
                {this.state.items.map((item, id) => {
                    return(
                        <section key={id}>
                            <img src={item.image} alt={item.alter}/>
                            <h1>{item.header}</h1>
                        </section>
                    )
                })}
            </div>
        );
    }
}

export default ViewCart;