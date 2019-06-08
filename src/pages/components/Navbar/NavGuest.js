import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavbarBrand,
  Collapse,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap';

export default class NavHome extends Component {
  constructor() {
    super();

    this.state = {
      browseOpen: false
    }

    this.toggleBrowse = this.toggleBrowse.bind(this)
    this.signOut = this.signOut.bind(this);
  }

  toggleBrowse() {
    this.setState({
      browseOpen: !this.state.browseOpen
    })
  }

  signOut() {
    //TODO:firebase.doSignOut()
    window.location.href = '/';
  }

  render() {
    return(
      <div>
        <Navbar color="light" light expand="md" >
          <NavbarBrand href="/">Opencourse</NavbarBrand>
          <NavbarToggler onClick={this.toggleBrowse} />
          <Collapse isOpen={this.state.browseOpen} navbar>
            <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Browse
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <i className="fas fa-list"></i> Categories
                </DropdownItem>
                <DropdownItem>
                  <i className="fas fa-tags"></i> Tags
                </DropdownItem>
                <DropdownItem href="/courses">
                  <i className="fas fa-arrow-up"></i> Courses
                </DropdownItem>
              </DropdownMenu>


            </UncontrolledDropdown>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/hello">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Login">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}