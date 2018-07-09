
import React, { PureComponent } from 'react'

import Welcome from './Welcome'
import LoginBackground from 'components/LoginBackground'

class WelcomePage extends PureComponent {

    render() {
        return (
            
                <div className="section-login">
                    
                            <LoginBackground></LoginBackground>,
                            <Welcome></Welcome>
                      
                </div>
            
        )
    }
}
module.exports = WelcomePage
;