
import React, { PureComponent } from 'react'
import { Container, Row} from 'reactstrap';
import Login from './Login'
import LoginBackground from 'components/LoginBackground'

class LoginPage extends PureComponent {

    render() {
        return (
            [   
                <div className="section-login">
                    <Container fluid>
                        <Row>
                            <LoginBackground></LoginBackground>,
                            <Login></Login>
                        </Row>
                    </Container>
                </div>
            ]
        )
    }
}
module.exports = LoginPage;