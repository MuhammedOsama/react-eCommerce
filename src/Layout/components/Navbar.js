import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class MainNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar id="navbar" collapseOnSelect expand="lg" fixed="top">
                    <a href="#" className="logo"><img src="./logo.png" alt="Logo"/></a>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="links">Home</Nav.Link>
                            <Nav.Link className="links">Shop</Nav.Link>
                            <Nav.Link className="links sale">Sale</Nav.Link>
                            <Nav.Link className="links">Features</Nav.Link>
                            <Nav.Link className="links">Blog</Nav.Link>
                            <Nav.Link className="links">About</Nav.Link>
                            <Nav.Link className="links">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                        <Nav className="icons">
                            <a href="#" className="icon"><img src="./icon-header-01.png" alt="Icon"/></a>
                            <label htmlFor="/">|</label>
                            <a href="#" className="icon1"><img src="./icon-header-02.png" alt="Icon"/>
                                <span className="header-icon">0</span>
                            </a>
                        </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Navbar>
            </div>
        )
    }
}

export default MainNavbar;