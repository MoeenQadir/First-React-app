import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Link} from "react-router-dom";
import '../style/Header.css'

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className={"mybar container-fluid"}>
            <Navbar.Brand className={"ms-5 fw-bold text-light logo"}>Moon Khan</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav className={"me-5 nav-items text-light"}>
                    <Nav.Link className={"text-light m-1"} as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link className={"text-light m-1"} eventKey={2} as={Link} to={"/About"}>
                        About
                    </Nav.Link>
                    <Nav.Link className={"text-light m-1"} as={Link} to={"/Work"}>Work</Nav.Link>
                    <Nav.Link className={"text-light m-1"} eventKey={2} as={Link} to="/Blog">
                        Blog
                    </Nav.Link>
                    <Nav.Link className={"text-light m-1"} eventKey={2} as={Link} to={"/Contact"}>
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;