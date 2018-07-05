
import React, { PureComponent } from 'react'
import { Container, Row} from 'reactstrap';
import SignUp from './SignUp'
import LoginBackground from 'components/LoginBackground'
class SignUpPage extends PureComponent {

    render() {
        return (
            [   
                <div className="section-login">
                    <Container fluid>
                        <Row>
                            <LoginBackground></LoginBackground>,
                            <SignUp></SignUp>
                        </Row>
                    </Container>
                </div>
            ]
        )
    }
}
module.exports = SignUpPage;