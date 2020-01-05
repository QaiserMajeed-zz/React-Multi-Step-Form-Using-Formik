import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import { Link } from 'react-router-dom';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" light expand="md">
        <NavbarBrand href="/">Job Portal</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Info</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Jobs</NavLink>
            </NavItem>
          </Nav>
          <Link to='./login'>
            <Button className='custom-button'>

              Log In </Button>
          </Link>
          <Link to='./register'>
            <Button className='custom-button'>

              Sign Up </Button>
          </Link>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavbarComponent;
