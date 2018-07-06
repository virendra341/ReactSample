import React, {  PureComponent } from 'react'
import { reduxForm } from 'redux-form'
import { Link} from 'react-router'

   
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
           <form onSubmit={handleSubmit((values) => this.showResults(values))}>
                            <div>
                                {/* <Button className="btn-green mrT20" disabled={!valid}>Done</Button>{' '} */}
                                <Link className="btn btn-green mrT20" to="">Resent</Link>
                            </div>
                        </form>
        )
    }
}


module.exports = reduxForm({
    form: 'signupsuccess',
    validate,
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(SignupSuccess);
