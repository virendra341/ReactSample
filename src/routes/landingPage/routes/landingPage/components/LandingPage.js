import React, { PureComponent } from 'react'
import { hashHistory } from 'react-router'

import APPCONFIG from 'constants/Config'

import LoginSignUpHeader from 'components/LandingPageHeader'
import Footer from 'components/Footer'

class LandingPage extends PureComponent {
  state = { brand: APPCONFIG.brand }

  componentWillMount() {
    if (localStorage.getItem('Bixex.token') != null && localStorage.getItem('Bixex.token') != "" && localStorage.getItem('Bixex.userId') != null && localStorage.getItem('Bixex.userId') != "" && localStorage.getItem('Bixex.firstLogin') != null && localStorage.getItem('Bixex.firstLogin') != "" && !JSON.parse(localStorage.getItem('Bixex.firstLogin'))) {
      hashHistory.push('/app/dashboard')
    }
    else if (localStorage.getItem('Bixex.token') != null && localStorage.getItem('Bixex.token') != "" && localStorage.getItem('Bixex.userId') != null && localStorage.getItem('Bixex.userId') != "" && localStorage.getItem('Bixex.firstLogin') != null && localStorage.getItem('Bixex.firstLogin') != "" && JSON.parse(localStorage.getItem('Bixex.firstLogin'))) {
      hashHistory.push('/tell-us-about-you')
    }
  }

  render() {
    return (
      <div>
        <div className="bx-wrapper">
          <div className="bx-body white-wrapper">
            <LoginSignUpHeader />
            <div className="bx-bixex-intro-quad">
              <div className="container">
                <div className="row">
                  Body
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div >
    );
  }
}
module.exports = LandingPage;