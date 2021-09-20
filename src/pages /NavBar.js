import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(){
    super();
    this.state ={
      collapsed : true
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render(){
    let collapsed = this.state.collapsed
    return(
     <div>
    <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Bikers Hub</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="ml-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav vertical>
            <NavItem>
              <NavLink to="/sign-in" >Signout</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
     </div>
    )
  }
}


export default NavBar
  