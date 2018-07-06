import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

import { renderTextField } from 'reduxFormComponent'

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



class ForgotPassword extends PureComponent {

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
            <form onSubmit={handleSubmit((values) => this.showResults(values))}>
                <Field component={renderTextField} name="emailId" type="text" placeholder="Email" />
                <div>
                    {/* <Button className="btn-green mrT10" disabled={!valid}>Password Reset</Button> */}
                    <Link className="btn btn-green mrT20" to="/forgot-password-email">Password Reset</Link>
                </div>
            </form>

        )
    }
}


module.exports = reduxForm({
    form: 'forgotpassword',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(ForgotPassword);
