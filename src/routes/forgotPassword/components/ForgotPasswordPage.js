
import React, { PureComponent } from 'react'
import { Container, Row} from 'reactstrap';
import ForgotPassword from './ForgotPassword'
import LoginBackground from 'components/LoginBackground'

class ForgotPasswordPage extends PureComponent {

    render() {
        return (
            [   
                <div className="section-login">
                    <Container fluid>
                        <Row>
                            <LoginBackground></LoginBackground>,
                            <ForgotPassword></ForgotPassword>
                        </Row>
                    </Container>
                </div>
            ]
        )
    }
}
module.exports = ForgotPasswordPage
;