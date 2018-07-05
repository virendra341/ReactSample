
import React, { PureComponent } from 'react'
import { Container, Row} from 'reactstrap';
import ResetPassword from './ResetPassword'
import LoginBackground from 'components/LoginBackground'

class ResetPasswordPage extends PureComponent {

    render() {
        return (
            [   
                <div className="section-login">
                    <Container fluid>
                        <Row>
                            <LoginBackground></LoginBackground>,
                            <ResetPassword></ResetPassword>
                        </Row>
                    </Container>
                </div>
            ]
        )
    }
}
module.exports = ResetPasswordPage
;