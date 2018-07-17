import React, { PureComponent } from 'react';


class Dashboard extends PureComponent {
    render() {
        const { children, location } = this.props;

        return (
            <div>
                <div className="toolbar">
                </div>
                <div>
                    Main Content
                </div>
            </div>
        );
    }
}

module.exports = Dashboard; 
