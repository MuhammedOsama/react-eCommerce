import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "../firebase/Config";

export default () => {

    const [items, setItems] = useState([]);
    const [lists, setListsItems] = useState([]);
    const [products, setProductsItems] = useState([]);
    const [dates, setDatesItems] = useState([]);

    useEffect(() => {

        firebase.database().ref('BlogPage').once('value').then(response => {
           let blogPage = [];
           response.forEach(item => {
               blogPage.push(item.val());
           });
           setItems(blogPage);
        }).catch((err) => console.log(err));

        firebase.database().ref('ListsBlog').once('value').then(response => {
            let listsBlogPage = [];
            response.forEach(item => {
                listsBlogPage.push(item.val());
            });
            setListsItems(listsBlogPage);
        }).catch((err) => console.log(err));

        firebase.database().ref('ProductsBlog').once('value').then(response => {
            let productsBlogPage = [];
            response.forEach(item => {
                productsBlogPage.push(item.val());
            });
            setProductsItems(productsBlogPage);
        }).catch((err) => console.log(err));

        firebase.database().ref('DatesBlog').once('value').then(response => {
            let datesBlogPage = [];
            response.forEach(item => {
                datesBlogPage.push(item.val());
            });
            setDatesItems(datesBlogPage);
        }).catch((err) => console.log(err));

    }, [items, lists, products, dates]);

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