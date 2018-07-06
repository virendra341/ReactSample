
import React, { PureComponent } from 'react'

import SignUp from './SignUp'
import LoginBackground from 'components/LoginBackground'

class SignUpPage extends PureComponent {

    render() {
        return (
            
                <div className="section-login">
                   
                            <LoginBackground></LoginBackground>,
                            <SignUp></SignUp>
                     
                </div>
            
        )
    }
}
module.exports = SignUpPage;