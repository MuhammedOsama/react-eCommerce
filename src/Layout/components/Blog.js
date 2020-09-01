import React, { Component } from 'react';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {image: "./blog-01.jpg", alter: "Black Friday", link: "Black Friday Guide: Best Sales & Discount Codes", desc: "By Nancy Ward on July 22, 2017", details: "Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames"},
                {image: "./blog-02.jpg", alter: "Black Friday", link: "The White Sneakers Nearly Every Fashion Girls Own", desc: "By Nancy Ward on July 18, 2017", details: "Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame"},
                {image: "./blog-03.jpg", alter: "Black Friday", link: "New York SS 2018 Street Style: Annina Mislin", desc: "By Nancy Ward on July 2, 2017", details: "Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc"}
            ]
        }
    }

    render() {
        return(
            <div id="blog">
                <h2>Our Blog</h2>
                <div className="container">
                    <div className="row">
                        {this.state.items.map((item, id) => {
                            return(
                                <div key={id} className="col-md-4 col-12">
                                    <div className="pos-relative hov-img-zoom">
                                        <img src={item.image} alt={item.alter} />
                                    </div>
                                    <a href="/">{item.link}</a>
                                    <span>{item.desc}</span>
                                    <p>{item.details}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;