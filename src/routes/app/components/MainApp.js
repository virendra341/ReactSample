import React from 'react'


class MainApp extends React.Component {
  render() {
    const { children, location } = this.props;

    return (
      <div className="main-app-container">
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

module.exports = MainApp;
