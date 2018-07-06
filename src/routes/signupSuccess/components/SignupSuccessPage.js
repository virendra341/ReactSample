
import React, { PureComponent } from 'react'

import SignupSuccess from './SignupSuccess'
import LoginBackground from 'components/LoginBackground'

class SignupSuccessPage extends PureComponent {

    render() {
        return (
            
                <div className="section-login">
                    
                            <LoginBackground></LoginBackground>,
                            <SignupSuccess></SignupSuccess>
                      
                </div>
            
        )
    }
}
module.exports = SignupSuccessPage
;