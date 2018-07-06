import React, { PureComponent } from 'react'
import {Container,Row, Col} from 'reactstrap';
class DashboardPage extends PureComponent {

  render() {
    return ( 
      <div className="sb-wrapper"> 
        <Container fluid>
         <Row>
           <Col xs='6'>
              <h5 className="main-heading">Dashboard</h5>
           </Col>
           <Col xs='6' className="text-right">
              <span className="text-gray">Last Updated:11:00am 
                <a href="#" className="mrL10">
                <i class="fa fa-repeat" aria-hidden="true"></i>
                </a>
              </span>
            
           </Col>
         </Row>
         <Row>
           <Col sm='6'>
              
           </Col>
           <Col sm='6'>
           </Col>
         </Row>
         </Container>
      </div >
    );
  }
}
module.exports = DashboardPage;