import React, { PureComponent } from 'react'

const navbar={
flexDirection:'row'
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
               Header
            </div>
        );
    }
}
module.exports = Header;