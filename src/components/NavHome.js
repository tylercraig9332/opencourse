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
  }

  toggleBrowse() {
    this.setState({
      browseOpen: !this.state.browseOpen
    })
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
                  <i className="fas fa-arrow-up"></i> Popular
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Create course
                </DropdownItem>
              </DropdownMenu>


            </UncontrolledDropdown>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
