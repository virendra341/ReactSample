
import React, { PureComponent } from 'react'

import Login from './Login'
import LoginBackground from 'components/LoginBackground'

class LoginPage extends PureComponent {

    render() {
        return (
                <div className="section-login">
                    <LoginBackground></LoginBackground>
                    <Login></Login>
                </div>

        )
    }
}
module.exports = LoginPage;