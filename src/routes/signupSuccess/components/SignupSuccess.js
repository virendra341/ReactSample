import React, { Fragment, PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link} from 'react-router'
import { Button, FormGroup, Input, FormFeedback,Card,CardHeader, CardBody,
    CardTitle,CardText} from 'reactstrap'
   
const validate = values => {
    const errors = {}
    const requiredFields = [
        'emailId',
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


class SignupSuccess extends PureComponent {

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
                        <CardTitle className="mr0">Sign Up Sucessfully</CardTitle>
                        <CardText className="mrB15 mrT15">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardText>
                        <form onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <div>
                                {/* <Button className="btn-green mrT20" disabled={!valid}>Done</Button>{' '} */}
                                <Link className="btn btn-green mrT20" to="">Resent</Link>
                            </div>
                        </form>
                    </CardBody>
                </Card>
                
               
            ]
        )
    }
}


module.exports = reduxForm({
    form: 'signupsuccess',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(SignupSuccess);
