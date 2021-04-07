import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className='p-2' style={{listStyle:'none'}} to="/">Home</Link>
            <Link className='p-2' style={{listStyle:'none'}} to="/orders">Orders</Link>
            <Link className='p-2' style={{listStyle:'none'}} to="/admin">Admin</Link>
            <Link className='p-2' style={{listStyle:'none'}} to="/details">Details</Link>
            <Link className='p-2' style={{listStyle:'none'}} to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
};

export default Header;