
import React, { PureComponent } from 'react'
import { Container, Row} from 'reactstrap';
import SignupSuccess from './SignupSuccess'
import LoginBackground from 'components/LoginBackground'

class SignupSuccessPage extends PureComponent {

    render() {
        return (
            [   
                <div className="section-login">
                    <Container fluid>
                        <Row>
                            <LoginBackground></LoginBackground>,
                            <SignupSuccess></SignupSuccess>
                        </Row>
                    </Container>
                </div>
            ]
        )
    }
}
module.exports = SignupSuccessPage
;