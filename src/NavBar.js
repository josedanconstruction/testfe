import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Permits and Contractors
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/contractors">Contractors</NavLink>
            <NavLink to="/permits">Permits</NavLink>
            <NavLink to="/add">Add Items</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
