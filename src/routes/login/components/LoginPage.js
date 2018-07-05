
import React, { PureComponent } from 'react'
import Login from './Login'
import LoginBackground from 'components/LoginBackground'
class LoginPage extends PureComponent {

    render() {
        return (
            [
                <LoginBackground></LoginBackground>,
                <Login></Login>
            ]
        )
    }
}
module.exports = LoginPage;