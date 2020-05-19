import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/Cart';

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link href="/products/">Product</Link>
            </NavItem>
            <NavItem>
              <CartContext.Consumer>
                {({cartItems}) => (
                  <Link to="/cart/">Cart ({cartItems.length})</Link>
                )}
              </CartContext.Consumer>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopMenu;
