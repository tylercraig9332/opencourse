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
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Browse
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
