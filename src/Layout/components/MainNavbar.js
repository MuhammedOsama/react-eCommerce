import React, { useState } from 'react';
import { Nav, Navbar, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './Blocks/Cart';

export default () => {

    const [cartVisibility, setCartVisibility] = useState(false);
    const handleCartVisibility = (status) => {
        setCartVisibility(status);
    }

    return (
        <div id="header">
            <Navbar bg="white" expand="lg" fixed="top">
            <Navbar.Brand as={Link} to="/"><img src="./logo.png" alt="Logo" className="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto links">
                        <Nav.Link href="/"><Link to="/">Home
                            <ul className="dropdown">
                                <li>HomePage V1</li>
                                <li>HomePage V2</li>
                                <li>HomePage V3</li>
                            </ul>
                        </Link></Nav.Link>
                        <Nav.Link as={Link} to="/sale-page">Shop</Nav.Link>
                        <Nav.Link as={Link} to="/sale-page" className="sale">Sale</Nav.Link>
                        <Nav.Link as={Link} to="/features-page">Features</Nav.Link>
                        <Nav.Link as={Link} to="/blog-page">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/about-page">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact-page">Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                        <div className="inner-sales">
                            <img src="./icon-header-01.png" alt="Icon" className="icon-personal" />
                            <span className="divider"></span>
                            <img src="./icon-header-02.png" alt="Icon" className="icon-bag" onClick={() => {
                                cartVisibility ? setCartVisibility(false) : setCartVisibility(true)
                            }} />
                            <label htmlFor="/" className="cart-badge">0</label>
                            {cartVisibility ? <Cart handleCartVisibility={(e) => handleCartVisibility(e)} /> : null}
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}