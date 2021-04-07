import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Fresh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className='p-2' style={{listStyle:'none'}} to="/">Home</Link>
            <Link className='p-2' style={{listStyle:'none'}} to="/orders">Orders</Link>
            <Link className='p-2' style={{listStyle:'none'}} to="/admin">Admin</Link>
            <Link className='p-2' style={{listStyle:'none'}} to="/details">Details</Link>
            <Link className='p-2' style={{listStyle:'none'}} to="/login">{loggedInUser.name || 'Login'}</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
};

export default Header;