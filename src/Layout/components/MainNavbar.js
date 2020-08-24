import React, { Component } from 'react';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './Blocks/Cart';

class MainNavbar extends Component {

    render() {
        return (
            <div>
                <Navbar id="navbar" collapseOnSelect expand="lg" fixed="top">
                    <a href="/" className="logo"><img src="./logo.png" alt="Logo"/></a>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Dropdown className="links">
                                <Dropdown.Toggle className="dropdownmenu"><Link className="links">Home</Link></Dropdown.Toggle>
                                <Dropdown.Menu className="dropdownitem">
                                    <Dropdown.Item className="homepage" href="/action-1">HomePage V1</Dropdown.Item>
                                    <Dropdown.Item className="homepage" href="/action-2">HomePage V2</Dropdown.Item>
                                    <Dropdown.Item className="homepage" href="/action-3">HomePage V3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Link className="links" to="">Shop</Link>
                            <Link className="links sale" to="">Sale</Link>
                            <Link className="links" to="/featuresPage">Features</Link>
                            <Link className="links" to="">Blog</Link>
                            <Link className="links" to="/aboutPage">About</Link>
                            <Link className="links" to="/contactPage">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                        <Nav className="icons">
                            <button href="/" className="icon"><img src="./icon-header-01.png" alt="Icon"/></button>
                            <span className="cart-line"></span>

                            <button className="icon1">
                                <img src="./icon-header-02.png" alt="Icon" />
                                <label className="cart-badge">0</label>
                                <Cart cartClass={"cart-visible"} />
                            </button>
                        </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Navbar>
            </div>
        );
    }
}

export default MainNavbar;