import React, { PureComponent } from 'react';


class Dashboard extends PureComponent {
    render() {
        const { children, location } = this.props;

        return (
            <div className="row module-row-cont">
              
                    {children}
               
                {/* <div className="col-md-4 module-sidebar">
                    Right Side Menu
                </div> */}
            </div>
        );
    }
}

module.exports = Dashboard; 
