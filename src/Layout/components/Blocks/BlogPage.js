import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "../firebase/Config";

export default () => {

    const lists = [
        {className: "desc", details: "Fashion", class: "dropdown-divider"},
        {className: "desc", details: "Beauty", class: "dropdown-divider"},
        {className: "desc", details: "Street Style", class: "dropdown-divider"},
        {className: "desc", details: "Life Style", class: "dropdown-divider"},
        {className: "desc", details: "DIY & Crafts", class: "dropdown-divider"}
    ]

    const products = [
        {image: "./item-16.jpg", alter: "Product-1", desc: "White Shirt With Pleat Detail Back", price: "$19.00"},
        {image: "./item-17.jpg", alter: "Product-2", desc: "Converse All Star Hi Black Canvas", price: "$39.00"},
        {image: "./item-08.jpg", alter: "Product-3", desc: "Nixon Porter Leather Watch In Tan", price: "$17.00"},
        {image: "./item-03.jpg", alter: "Product-4", desc: "Denim jacket blue", price: "$39.00"},
        {image: "./item-05.jpg", alter: "Product-5", desc: "Nixon Porter Leather Watch In Tan", price: "$17.00"}
    ]

    const dates = [
        {class: "link", link: "July 2020", num: "(9)"},
        {class: "link", link: "June 2020", num: "(39)"},
        {class: "link", link: "May 2020", num: "(29)"},
        {class: "link", link: "April 2020", num: "(35)"},
        {class: "link", link: "March 2020", num: "(22)"},
        {class: "link", link: "February 2020", num: "(32)"},
        {class: "link", link: "January 2020", num: "(21)"},
        {class: "link", link: "December 2020", num: "(26)"}
    ]

    const [items, setItems] = useState([]);

    useEffect(() => {

        firebase.database().ref('BlogPage').once('value').then(response => {
           let blogPage = [];
           response.forEach(item => {
               blogPage.push(item.val());
           });
           setItems(blogPage);
        }).catch((err) => console.log(err));

    }, [items]);

    return(
        <div id="blog-page">
            <div className="cover">
                <h2>Blog</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        {items.map((item, id) => {
                            return(
                                <div key={id}>
                                    <div className="pos-relative hov-img-zoom">
                                        <img src={item.image} alt={item.alter} />
                                    </div>
                                    <label className={item.class} htmlFor="/">{item.date}</label>
                                    <a href="/">{item.link}</a>
                                    <span>{item.details}</span>
                                    <p>{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-lg-4 col-12">
                        <input type="text" placeholder="Search" />
                        <h5>Categories</h5>
                        <div className="dropdown-divider"></div>
                            {lists.map((item, id) => {
                                return(
                                    <div key={id}>
                                        <p className={item.className}>{item.details}</p>
                                        <div className={item.class}></div>
                                    </div>
                                );
                            })}
                        <h4>Featured Products</h4>
                            {products.map((item, id) => {
                                return(
                                    <div key={id} className="flex">
                                        <img src={item.image} alt={item.alter} />
                                        <p>
                                            <span>{item.desc}</span>
                                            <label htmlFor="/">{item.price}</label>
                                        </p>
                                    </div>
                                );
                            })}
                        <div className="archive">
                            <h3>Archive</h3>
                            <div className="seasons">
                                {dates.map((item, id) => {
                                    return(
                                        <div key={id}>
                                            <p>
                                                <a className={item.class} href="/">{item.link}</a>
                                                <span>{item.num}</span>
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="tags">
                            <h2>Tags</h2>
                            <Button variant="outline-secondary">Fashion</Button>
                            <Button variant="outline-secondary">Lifestyle</Button>
                            <Button variant="outline-secondary">Denim</Button>
                            <Button variant="outline-secondary">Streetstyle</Button>
                            <Button variant="outline-secondary">Crafts</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}