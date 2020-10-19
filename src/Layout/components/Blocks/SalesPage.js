import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

export default () => {

    const [ value, setValue ] = useState(0);

    return(
        <div id="sales">
            <div className="cover">
                <h2>Women</h2>
                <span>New Arrivals Women Collection 2018</span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="categories">
                            <h5>Categories</h5>
                            <div className="desc">
                                <p className="all">All</p>
                                <p>Women</p>
                                <p>Men</p>
                                <p>Kids</p>
                                <p>Accesories</p>
                            </div>
                        </div>
                        <div className="filters">
                            <h5>Filters</h5>
                            <div className="dropdown-divider"></div>
                            <label>Price</label>
                            <RangeSlider
                                value={value}
                                onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                            <div className="salary">
                                <button>Filter</button>
                                <span>Range: $50 - $200</span>
                            </div>
                        </div>
                        <div className="color">
                            <div className="dropdown-divider"></div>
                            <label>Color</label>
                            <button className="btn-1"></button>
                            <button className="btn-2"></button>
                            <button className="btn-3"></button>
                            <button className="btn-4"></button>
                            <button className="btn-5"></button>
                            <button className="btn-6"></button>
                            <button className="btn-7"></button>
                            <input type="text" placeholder="Search Products..." />
                        </div>
                    </div>
                    <div className="col-md-8 col-12">
                        <div className="box">
                            <Dropdown className="dropdown">
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Default Sorting
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item className="items active" href="#/action-1">Default Sorting</Dropdown.Item>
                                    <Dropdown.Item className="items" href="#/action-2">Popularity</Dropdown.Item>
                                    <Dropdown.Item className="items" href="#/action-3">Price: low to high</Dropdown.Item>
                                    <Dropdown.Item className="items" href="#/action-3">Price: high to low</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Price
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item className="items active" href="#/action-1">Price</Dropdown.Item>
                                    <Dropdown.Item className="items" href="#/action-2">$0.00 - $50.00</Dropdown.Item>
                                    <Dropdown.Item className="items" href="#/action-3">$50.00 - $100.00</Dropdown.Item>
                                    <Dropdown.Item className="items" href="#/action-3">$100.00 - $150.00</Dropdown.Item>
                                    <Dropdown.Item className="items" href="#/action-3">$150.00 - $200.00</Dropdown.Item>
                                    <Dropdown.Item className="items" href="#/action-3">$200.00+</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <span>Showing 1 – 12 of 16 results</span>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-02.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Herschel supply co 25I</a>
                                <span>$75.00</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-03.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Denim jacket blue</a>
                                <span>$92.50</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-05.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Coach slim easton black</a>
                                <span>$165.90</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-07.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Frayed denim shorts</a>
                                <span className="diff"><del>$29.50</del> $15.90</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-01.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Herschel supply co 25I</a>
                                <span>$75.00</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-14.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Denim jacket black</a>
                                <span>$92.50</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-06.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Herschel supply co 25I</a>
                                <span>$75.00</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-08.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Denim jacket black</a>
                                <span>$92.50</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-10.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Coach slim easton black</a>
                                <span>$165.90</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-11.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Frayed denim shorts</a>
                                <span className="diff"><del>$29.50</del> $15.90</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-12.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Herschel supply co 25I</a>
                                <span>$75.00</span>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-img new-product">
                                    <div className="icon">
                                        <i className="far fa-heart"></i>
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <img className="w-100" src="./item-15.jpg" alt="Herschel"/>
                                    <a href="/" className="cart-btn">Add To Cart</a>
                                </div>
                                <a href="/">Denim jacket blue</a>
                                <span>$92.50</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}