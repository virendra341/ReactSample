import React, { Fragment, PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link} from 'react-router'
import { Button, FormGroup, Input, FormFeedback,Card,CardHeader, CardFooter, CardBody,
    CardTitle} from 'reactstrap'
   
const validate = values => {
    const errors = {}
    const requiredFields = [
        'emailId',
        'password'
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


class Login extends PureComponent {

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
                
                <Card className="col-sm-3 pd0">
                    <CardHeader>
                        <div className="sb-login-logo">
                            <img src="assets/images/secberus-logo.png" />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <CardTitle>SIGN IN WITH SECBERUS</CardTitle>
                        <form onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <Field component={renderTextField} name="emailId" type="text" placeholder="Email Id" className="ABC" />
                            <Field component={renderTextField} name="password" type="password" placeholder="Password" className="ABC" />
                            <FormGroup>
                                <a href="#">Forgot Password</a>
                            </FormGroup>
                            <div>
                                <Button className="btn-green mrT10" disabled={!valid}>Sign in</Button>{' '}
                            </div>
                        </form>
                    </CardBody>
                    <CardFooter>
                        <p>Not Registered yet ?</p>
                        <Link className="btn btn-green-boder mrT10" to="/sign-up">Register</Link>
                    </CardFooter>
                </Card>
                
               
            ]
        )
    }
}


module.exports = reduxForm({
    form: 'login',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(Login);
