import React from 'react';
import { Button } from 'react-bootstrap';

export default () => {

    const items = [
        {image: "./blog-04.jpg", alter: "Blog-1", class: "date-1", date: "28 DEC, 2020", link: "Black Friday Guide: Best Sales & Discount Codes", details: "By Admin | Cooking, Food | 8 Comments", desc: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"},
        {image: "./blog-05.jpg", alter: "Blog-2", class: "date-2", date: "26 DEC, 2020", link: "The White Sneakers Nearly Every Fashion Girls Own", details: "By Admin | Fashion, Life style | 8 Comments", desc: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"},
        {image: "./blog-08.jpg", alter: "Blog-3", class: "date-3", date: "22 DEC, 2020", link: "Black Friday Guide: Best Sales & Discount Codes", details: "By Admin | Cooking, Food | 8 Comments", desc: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"},
        {image: "./blog-02.jpg", alter: "Blog-4", class: "date-4", date: "18 DEC, 2020", link: "Black Friday Guide: Best Sales & Discount Codes", details: "By Admin | Cooking, Food | 8 Comments", desc: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"},
        {image: "./blog-03.jpg", alter: "Blog-5", class: "date-5", date: "16 DEC, 2020", link: "Black Friday Guide: Best Sales & Discount Codes", details: "By Admin | Cooking, Food | 8 Comments", desc: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius"}
    ]
    const lists = [
        {class: "dropdown-divider", className: "desc", desc: "Fashion"},
        {class: "dropdown-divider", className: "desc", desc: "Beauty"},
        {class: "dropdown-divider", className: "desc", desc: "Street Style"},
        {class: "dropdown-divider", className: "desc", desc: "Life Style"},
        {class: "dropdown-divider", className: "desc", desc: "DIY & Crafts"}
    ]
    const products = [
        {image: "./item-16.jpg", alter: "Product-1", details: "White Shirt With Pleat Detail Back", price: "$19.00"},
        {image: "./item-17.jpg", alter: "Product-2", details: "Converse All Star Hi Black Canvas", price: "$39.00"},
        {image: "./item-08.jpg", alter: "Product-3", details: "Nixon Porter Leather Watch In Tan", price: "$17.00"},
        {image: "./item-03.jpg", alter: "Product-4", details: "Denim jacket blue", price: "$39.00"},
        {image: "./item-05.jpg", alter: "Product-5", details: "Nixon Porter Leather Watch In Tan", price: "$17.00"}
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
                                        <p className={item.className}>{item.desc}</p>
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
                                        <span>{item.details}</span>
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