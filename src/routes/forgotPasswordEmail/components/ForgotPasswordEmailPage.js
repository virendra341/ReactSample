
import React, { PureComponent } from 'react'
import { Container, Row} from 'reactstrap';
import ForgotPasswordEmail from './ForgotPasswordEmail'
import LoginBackground from 'components/LoginBackground'

class ForgotPasswordEmailPage extends PureComponent {

    render() {
        return (
            [   
                <div className="section-login">
                    <Container fluid>
                        <Row>
                            <LoginBackground></LoginBackground>,
                            <ForgotPasswordEmail></ForgotPasswordEmail>
                        </Row>
                    </Container>
                </div>
            ]
        )
    }
}
module.exports = ForgotPasswordEmailPage
;