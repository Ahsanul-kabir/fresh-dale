import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">FreshDale</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className='p-2' to="/">Home</Link>
            <Link className='p-2' to="/orders">Orders</Link>
            <Link className='p-2' to="/admin">Admin</Link>
            <Link className='p-2' to="/details">Details</Link>
            <Link className='p-2' style={{border:'1px solid orange', backgroundColor:"black"}} to="/login">{loggedInUser.name || 'Login'}</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
};

export default Header;