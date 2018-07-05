import React, { Fragment, PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link} from 'react-router'
import { Button, FormGroup, Input,Label, FormFeedback,Card,CardHeader, CardFooter, CardBody,
    CardTitle,Col,Row} from 'reactstrap'
   
const validate = values => {
    const errors = {}
    const requiredFields = [
        'fullname',
        'cname',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'This field is required'
        }
    })
    if (
        values.emailId &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailId)
    ) {
        errors.emailId = 'Invalid email address'
    }
    return errors
}

const renderTextField = ({
    input,
    label,
    name,
    meta: { touched, error },
    ...custom
}) => (
        <Fragment>
            <FormGroup>
                <Input
                    invalid={touched && error}
                    {...input}
                    {...custom}
                />
                {error && <FormFeedback>{error}</FormFeedback>}
            </FormGroup>
        </Fragment>
    )


class SignUp extends PureComponent {

    componentWillMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
    }
    render() {
        const { handleSubmit, valid } = this.props;
        console.log('Props ', this.props);

        return (
            [
                
                <Card className="col-sm-3 pd0 sb-card-sigup">
                    <CardHeader>
                        <div className="sb-login-logo">
                            <img src="assets/images/secberus-logo.png" />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <CardTitle>REGISTER IN WITH SECBERUS</CardTitle>
                        <form onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Row>
                            <Col sm="12">    
                            <Field component={renderTextField} name="fullname" type="text" placeholder="Full Name"/>
                            </Col>
                            </Row>
                            <Row>
                            <Col sm="12">
                            <Field component={renderTextField} name="cname" type="text" placeholder="Company Name"/>
                            </Col>
                            </Row>
                            <Row>
                            <Col sm="6">
                                <Field component={renderTextField} name="country" type="text" placeholder="country"/>
                            </Col>
                            <Col sm="6">
                                <Field component={renderTextField} name="state" type="text" placeholder="state"/>
                            </Col>
                            </Row>
                            <Row>
                            <Col sm="3">
                                <Field component={renderTextField} name="countryCode" type="text" placeholder="+ 91"/>
                            </Col>
                            <Col sm="9">
                                <Field component={renderTextField} name="contactNumber" type="text" placeholder="Contact Number"/>
                            </Col>
                            </Row>
                            <Row>
                            <Col sm="12">    
                            <Field component={renderTextField} name="emailId" type="text" placeholder="Email Id"/>
                            </Col>
                            </Row>
                            <Row>
                            <Col sm="12">
                            <Field component={renderTextField} name="password" type="text" placeholder="Password"/>
                            </Col>
                            </Row>
                            <FormGroup>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                       I am agree with of
                                    </Label>
                                    {' '}
                                <a href="#">Service agreement</a>
                            </FormGroup>
                            <div>
                                <Button className="btn-green" disabled={!valid}>Register</Button>{' '}
                            </div>
                        </form>
                    </CardBody>
                    <CardFooter>
                        <p>Already Registered ?</p>
                        <Link className="btn btn-green-boder mrT10" to="/login">Sign In</Link>
                    </CardFooter>
                </Card>
                
               
            ]
        )
    }
}


module.exports = reduxForm({
    form: 'signup',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(SignUp);
