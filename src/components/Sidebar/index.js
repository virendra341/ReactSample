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
                        <NavLink href="#" activeclassName='active'>
                            <i class="fa fa-tachometer" aria-hidden="true"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" >
                        <i class="fa fa-ticket" aria-hidden="true"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" >
                        <i class="fa fa-file-text-o" aria-hidden="true"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                        <i class="fa fa-cubes" aria-hidden="true"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                        <i class="fa fa-tachometer" aria-hidden="true"></i>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
module.exports = SideBar;