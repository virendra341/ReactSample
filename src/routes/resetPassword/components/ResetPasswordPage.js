
import React, { PureComponent } from 'react'

import ResetPassword from './ResetPassword'
import LoginBackground from 'components/LoginBackground'

class ResetPasswordPage extends PureComponent {

    render() {
        return (
            
                <div className="section-login">
                   
                            <LoginBackground></LoginBackground>,
                            <ResetPassword></ResetPassword>
                </div>
            
        )
    }
}
module.exports = ResetPasswordPage
;