import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText

} from 'reactstrap';
import Button from 'reactstrap/lib/Button';
import { Link } from 'react-router-dom';

const NavbarComponent = (props) => {
  console.log("Nav", props)
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" light expand="md">
        <Link to='/'>
          <NavbarBrand >Job Portal</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Info</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact Us</NavLink>
            </NavItem>
          </Nav>
          {(props.location.pathname === '/register' || props.location.pathname === '/') && <Link to='./login'>
            <Button className='custom-button'>
              Log In </Button>
          </Link>}
          {(props.location.pathname === '/login' || props.location.pathname === '/') && <Link to='./register'>
            <Button className='custom-button'>
              Sign Up </Button>

          </Link>}
          {props.location.pathname === '/profile' &&
            <NavbarText>{props.location.state.response}</NavbarText>
          }
          {props.location.pathname === '/profile' &&
            <NavbarText style={{margin:'3px'}}>
              <Link to='/'>
                <Button className='custom-button'>
                  Log Out </Button>
              </Link>
            </NavbarText>

          }

        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavbarComponent;
