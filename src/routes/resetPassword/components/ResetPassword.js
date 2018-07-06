import React, { PureComponent } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'

import { renderTextField } from 'reduxFormComponent'

const validate = values => {
    const errors = {}
    const requiredFields = [
        'password',
        'cpassword'
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


class ResetPassword extends PureComponent {

    componentWillMount() {
        this.props.reset();
    }

    showResults = (values) => {
        console.log(values);
    }
    render() {
        const { handleSubmit, valid } = this.props;
        // console.log('Props ', this.props);

        return (
            <form onSubmit={handleSubmit((values) => this.showResults(values))}>
                <Field component={renderTextField} name="password" type="password" placeholder="Password" />
                <Field component={renderTextField} name="cpassword" type="password" placeholder="Confirm Password" />
                <div>
                    {/* <Button className="btn-green mrT20" disabled={!valid}>Save</Button> */}
                    <Link className="btn btn-green mrT20" to="/Login">Save</Link>
                </div>
            </form>

        )
    }
}


module.exports = reduxForm({
    form: 'resetpassword',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(ResetPassword);
