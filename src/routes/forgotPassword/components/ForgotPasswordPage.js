
import React, { PureComponent } from 'react'

import ForgotPassword from './ForgotPassword'
import LoginBackground from 'components/LoginBackground'

class ForgotPasswordPage extends PureComponent {

    render() {
        return (
        
                <div className="section-login">
                    
                            <LoginBackground></LoginBackground>,
                            <ForgotPassword></ForgotPassword>
                     
                </div>
            
        )
    }
}
module.exports = ForgotPasswordPage
;