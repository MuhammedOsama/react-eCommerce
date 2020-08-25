import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class BlogPage extends Component {
    render() {
        return(
            <div id="blogpage">
                <div className="cover">
                    <h2>Blog</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="pos-relative hov-img-zoom">
                                <img src="./blog-04.jpg" alt="Blog-1"/>
                            </div>
                            <label className="date-1" htmlFor="/">28 DEC, 2020</label>
                            <a href="/">Black Friday Guide: Best Sales & Discount Codes</a>
                            <span>By Admin | Cooking, Food | 8 Comments</span>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                        
                            <div className="pos-relative hov-img-zoom">
                                <img src="./blog-05.jpg" alt="Blog-2"/>
                            </div>
                            <label className="date-2" htmlFor="/">26 DEC, 2020</label>
                            <a href="/">The White Sneakers Nearly Every Fashion Girls Own</a>
                            <span>By Admin | Fashion, Life style | 8 Comments</span>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                  
                            <div className="pos-relative hov-img-zoom">
                                <img src="./blog-08.jpg" alt="Blog-3"/>
                            </div>
                            <label className="date-3" htmlFor="/">22 DEC, 2020</label>
                            <a href="/">Black Friday Guide: Best Sales & Discount Codes</a>
                            <span>By Admin | Cooking, Food | 8 Comments</span>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                 
                            <div className="pos-relative hov-img-zoom">
                                <img src="./blog-02.jpg" alt="Blog-4"/>
                            </div>
                            <label className="date-4" htmlFor="/">18 DEC, 2020</label>
                            <a href="/">Black Friday Guide: Best Sales & Discount Codes</a>
                            <span>By Admin | Cooking, Food | 8 Comments</span>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                       
                            <div className="pos-relative hov-img-zoom">
                                <img src="./blog-03.jpg" alt="Blog-5"/>
                            </div>
                            <label className="date-5" htmlFor="/">16 DEC, 2020</label>
                            <a href="/">Black Friday Guide: Best Sales & Discount Codes</a>
                            <span>By Admin | Cooking, Food | 8 Comments</span>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <button className="btn-1">1</button>
                            <button>2</button>
                        </div>
                        <div className="col-lg-4 col-12">
                            <input type="text" placeholder="Search" />
                            <h5>Categories</h5>
                            <div className="dropdown-divider"></div>
                            <p className="desc">Fashion</p>
                            <div className="dropdown-divider"></div>
                            <p className="desc">Beauty</p>
                            <div className="dropdown-divider"></div>
                            <p className="desc">Street Style</p>
                            <div className="dropdown-divider"></div>
                            <p className="desc">Life Style</p>
                            <div className="dropdown-divider"></div>
                            <p className="desc">DIY & Crafts</p>
                            <div className="dropdown-divider"></div>
                            <h4>Featured Products</h4>
                            <div className="flex">
                                <img src="./item-16.jpg" alt="Products-1" />
                                <p>
                                    <span>White Shirt With Pleat Detail Back</span>
                                    <label htmlFor="/">$19.00</label>
                                </p>
                            </div>
                            <div className="flex">
                                <img src="./item-17.jpg" alt="Products-1" />
                                <p>
                                    <span>Converse All Star Hi Black Canvas</span>
                                    <label htmlFor="/">$39.00</label>
                                </p>
                            </div>
                            <div className="flex">
                                <img src="./item-08.jpg" alt="Products-1" />
                                <p>
                                    <span>Nixon Porter Leather Watch In Tan</span>
                                    <label htmlFor="/">$17.00</label>
                                </p>
                            </div>
                            <div className="flex">
                                <img src="./item-03.jpg" alt="Products-1" />
                                <p>
                                    <span>Denim jacket blue</span>
                                    <label htmlFor="/">$39.00</label>
                                </p>
                            </div>
                            <div className="flex">
                                <img src="./item-05.jpg" alt="Products-1" />
                                <p>
                                    <span>Nixon Porter Leather Watch In Tan</span>
                                    <label htmlFor="/">$17.00</label>
                                </p>
                            </div>
                            <div className="archive">
                                <h3>Archive</h3>
                                <div className="seasons">
                                    <p>
                                        <a href="/">July 2020</a>
                                        <span>(9)</span>
                                    </p>
                                    <p>
                                        <a href="/">June 2020</a>
                                        <span>(39)</span>
                                    </p>
                                    <p>
                                        <a href="/">May 2020</a>
                                        <span>(29)</span>
                                    </p>
                                    <p>
                                        <a href="/">April 2020</a>
                                        <span>(35)</span>
                                    </p>
                                    <p>
                                        <a href="/">March 2020</a>
                                        <span>(22)</span>
                                    </p>
                                    <p>
                                        <a href="/">February 2020</a>
                                        <span>(32)</span>
                                    </p>
                                    <p>
                                        <a href="/">January 2020</a>
                                        <span>(21)</span>
                                    </p>
                                    <p>
                                        <a href="/">December 2020</a>
                                        <span>(26)</span>
                                    </p>
                                </div>
                            </div>
                            <div className="tags">
                                <h2>Tags</h2>
                                <div className="btn">
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
            </div>
        );
    }
}

export default BlogPage;