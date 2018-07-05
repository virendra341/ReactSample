
import React, { PureComponent } from 'react'
import SignUp from './SignUp'
import LoginBackground from 'components/LoginBackground'
class SignUpPage extends PureComponent {

    render() {
        return (
            [
                <LoginBackground></LoginBackground>,
                <SignUp></SignUp>
            ]
        )
    }
}
module.exports = SignUpPage;