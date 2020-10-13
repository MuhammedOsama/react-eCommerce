import React, { Component } from 'react';
import { Nav, Navbar, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './Blocks/Cart';

class MainNavbar extends Component {

    render() {
        return (
            <div id="header">
                <Navbar bg="white" expand="lg" fixed="top">
                <Navbar.Brand href="#home"><img src="./logo.png" alt="Logo" className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto links">
                            <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link href="/"><Link to="/sale-page">Shop</Link></Nav.Link>
                            <Nav.Link href="/"><Link to="/sale-page" className="sale">Sale</Link></Nav.Link>
                            <Nav.Link href="/"><Link to="/features-page">Features</Link></Nav.Link>
                            <Nav.Link href="/"><Link to="/blog-page">Blog</Link></Nav.Link>
                            <Nav.Link href="/"><Link to="/about-page">About</Link></Nav.Link>
                            <Nav.Link href="/"><Link to="/contact-page">Contact</Link></Nav.Link>
                        </Nav>
                        <Form inline>
                            <div className="inner-sales">
                                <img src="./icon-header-01.png" alt="Icon" className="icon-personal" />
                                <span className="divider"></span>
                                <img src="./icon-header-02.png" alt="Icon" className="icon-bag" />
                                <label htmlFor="/" className="cart-badge">0</label>
                                <Cart cartClass={"cart-visible"} />
                            </div>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MainNavbar;