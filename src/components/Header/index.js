import React, { PureComponent } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
const navbar = {
    flexDirection: 'row'
}
class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar expand="md" style={navbar} className="main-navbar">
                    <a href="#" className="toggle-bar"><i class="fa fa-bars" aria-hidden="true"></i></a>
                    <NavbarBrand href="/" className="mrL15">
                        <img src="assets/images/secberus-logo.png" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown setActiveFromChild className="user-notification">
                                <DropdownToggle tag="a" className="nav-link">
                                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <span className="fnt-13"><b> Notification</b></span>
                                    <DropdownItem tag="a" href="/blah">
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown setActiveFromChild className="user-profile">
                                <DropdownToggle tag="a" className="nav-link">
                                    <img className="user-img" src="assets/images/user.jpg"/>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">
                                        My Profile
                                    </DropdownItem>
                                    <DropdownItem tag="a" href="/blah">
                                        Sign Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
module.exports = Header;