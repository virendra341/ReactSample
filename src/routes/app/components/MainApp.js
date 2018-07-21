import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
class MainApp extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="main-app-container">
         <Header />
         <br />
        <section id="page-container" className="app-page-container">
            <div className="app-content-wrapper">
              <div className="full-height">
                {children}
              </div> 
            </div>
          </section> 
          <br />
          <Footer />
      </div>
    );
  }
}

module.exports = MainApp;
