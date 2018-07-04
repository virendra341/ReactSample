import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header/Header'
// import 'styles/bootstrap.scss';
// // custom
// import 'styles/layout.scss';
// import 'styles/theme.scss';
// import 'styles/ui.scss';
import 'style/app.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col>Hello React</Col>
          </Row>
          <Row>
            {this.props.children}
          </Row>
        </Container>
      </div>
    );
  }
}

module.exports = App;
