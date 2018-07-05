import React, { PureComponent } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
class SideBar extends PureComponent {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <div>
                <Nav className="app-sidebar" vertical>
                    <section className="sidebar-header">
                    </section>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
module.exports = SideBar;