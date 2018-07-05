import React, { PureComponent } from 'react'; 
import Header from 'components/Header' 

class DashboardPageApp extends PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <div className="main-app-container">
      <Header/>
        <section id="page-container" className="app-page-container">
         
          <div className="app-content-wrapper">
            <div className="full-height">
              {children}
            </div> 
          </div>
        </section> 
      </div>
    );
  }
}

module.exports = DashboardPageApp;
