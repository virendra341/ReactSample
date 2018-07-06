
import React, { PureComponent } from 'react'

import ForgotPasswordEmail from './ForgotPasswordEmail'
import LoginBackground from 'components/LoginBackground'

class ForgotPasswordEmailPage extends PureComponent {

    render() {
        return (

            <div className="section-login">

                <LoginBackground></LoginBackground>,
                            <ForgotPasswordEmail></ForgotPasswordEmail>

            </div>

        )
    }
}
module.exports = ForgotPasswordEmailPage
    ;