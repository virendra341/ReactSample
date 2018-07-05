import React, { PureComponent } from 'react'
import { Link, hashHistory } from "react-router"
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import FormInput from 'react-input-validation'


import { validation } from 'utils/formvalidation'
import { handleValidation } from 'utils/handleValidation'
import { signup } from "api/signUpApi"
import SocialLoginComponnet from '../components/socialLogin'
import { TextValidator, ValidatorForm, AutoCompleteValidator } from 'react-material-ui-form-validator'
import { custmFormValidation } from '../../../../../../utils/formValidationRules'
class SignUp extends PureComponent {
  state = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    Cpassword: '',
    logged: false,
    user: {},
    currentProvider: '',
    errorMessage: '',
    isError: false,
    HasErrorClass: "form-group",
    requiredMsg: "",
    errors: {},
    loading: false,
    isValidate: true,
    validateMsg: '',
    confirmPasswordErrorMessage: '',
    invalidData: true,
    isFormValid:false,
  }

  componentWillMount() {
 
    custmFormValidation(this)
  }
  //
  componentWillUpdate(nextProps, nextState) {
  //   ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      
  //     console.log('value on Update',value)
  //     if (value !== nextState.password || nextState.password !== value) {
  //         return false;
  //     }
  //     return true;
  // });
    nextState.invalidData = !(nextState.email && nextState.password && nextState.firstname && nextState.lastname)
 }
  //
  handleChange = (e, param) => {
    let confirmPasswordErrorMessage = '';
    if ((e.target.name === 'Cpassword' && e.target.value !== this.state.password) || (e.target.name === 'password' && this.state.Cpassword.trim().length > 0 && e.target.value !== this.state.Cpassword) && (e.target.name === 'password' && e.target.value !== this.state.Cpassword) ) {
      confirmPasswordErrorMessage = 'Password does not match'
    }
    this.setState({ confirmPasswordErrorMessage })
    var change = {}
    change[param] = e.target.value
    this.setState(change)
  }
  //
  onKeyPressOnInput = event => {
    if (event.charCode == 13) {

      if (this.state.password.trim() !== "" && this.state.email.trim() !== "" && this.state.firstname.trim() !== "" && this.state.lastname.trim() !== "") {

        this.handleSignup(event)
      }
      else {
        this.setState({ errorMsg: "Please enter the all required fields", isError: true })
      }
    }
  }
  //
  handleSignup = (event) => {
 
    if (this.state.password.trim() !== "" && this.state.email.trim() !== "" && this.state.firstname.trim() !== "" && this.state.lastname.trim() !== "") {
      this.submitSignupRequest(this.state.firstname, this.state.lastname, this.state.email, this.state.password)
    }
    else {
      this.setState({
        errorMsg: "Please enter the all required fields",
        HasErrorClass: "form-group has-error",
        isError: true,
        requiredMsg: "This field is required"
      })
    }
  }
  //
  submitSignupRequest(firstname, lastname, email, password) {
  
    let payload = {
      "email": email,
      "firstName": firstname,
      "lastName": lastname,
      "password": password,
      "socialLogin": null
    }
    signup(payload)
      .then((result) => {
        this.setState({ loading: true })
        if (result.error) {
          this.setState({ errorMessage: result.errorMessage.email })
          setTimeout(() => {
            this.setState({ loading: false })
            }, 1500)
          
          
        }else if(result.success === false){
          this.setState({ errorMessage: result.message })
          setTimeout(() => {
            this.setState({ loading: false })
           }, 1500)
          
        }
         else {
          setTimeout(() => {
            this.props.signUpClose()
            hashHistory.push({
              pathname: '/confirm-email',
              state: { emailId: email }
            })
             this.setState({ loading: false })
          }, 2000)
        }

      })
  }
  //
  validatorListener = result => {
    const { childs } = this.refs.form
    let isFormValid = _.filter(childs, o => {
      const value = o.props.value ? o.props.value : o.props.searchText ? o.props.searchText : undefined
      return ( (o.state.validators.toString().includes("isRequired") && !value) ||  !o.state.isValid)
    })
    this.setState({ isFormValid: _.isEmpty(isFormValid) })
  }
  //
  responseGoogle = (response) => {
    
  }

  twitterLogin() {

  }
  handleClose =()=>{
    console.log('Props',this.state.props)
    this.props.signUpClose()
    this.setState({
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      Cpassword: '',
      errorMessage: '',
      confirmPasswordErrorMessage:''
    })
}
  //
  handleOpenLogin =()=>{
    this.props.loginMe()
    this.props.signUpClose()
    this.setState({
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      Cpassword: '',
      errorMessage: '',
      confirmPasswordErrorMessage:''
    })

  }
  //
  render() {
    return (
      <div>
        <Modal id="signupModal" show={this.props.openSignUp} onHide={this.handleClose}
          aria-labelledby="contained-modal-title-lg" enforceFocus={false}>
          <div className="modal-content-inner">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-md-5 bx-signup-image">
                  <div className="bx-verticle-centerAlign-parent">
                    <div className="bx-verticle-centerAlign-helper" style={{ textAlign: "center" }}>
                      <img src="assets/images/tag-crowd-signup.png" alt="" style={{ width: "90%", height: "auto" }} />
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <h4>Join <span>BIXEX</span></h4>
                  <p style={{ color: "#a94442", textAlign: "center" }}>{this.state.errorMessage}</p>
                  <div className="bx-signup-form-div">
                    <ValidatorForm className="profilebuilder-form JS-profilebuilder-form"
                      ref="form"
                      id="signup-form"
                      onSubmit={this.handleSubmit}
                      instantValidate={true}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group form-txt-validate-quad">
                            <TextValidator
                              validatorListener={this.validatorListener}
                              className="form-control txt-validate"
                              ref="email"
                              placeholder="Enter Email Address"
                              key={"email"}
                              onChange={(e) => this.handleChange(e, 'email')}
                              onKeyPress={this.onKeyPressOnInput}
                              name={"email"}
                              value={this.state.email}
                              validators={["isRequired", "isEmailVal"]}
                            //  validators={["isRequired", 'matchRegexp:^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$']}
                              errorMessages={['This field is required', 'Email is not valid']} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 name-quad">
                          <div className="form-group form-txt-validate-quad">
                            <TextValidator
                              validatorListener={this.validatorListener}
                              className="form-control txt-validate"
                              ref="firstname"
                              key={"firstname"}
                              placeholder="First Name"
                              onChange={(e) => this.handleChange(e, 'firstname')}
                              onKeyPress={this.onKeyPressOnInput}
                              name={"firstname"}
                              value={this.state.firstname} 
                              validators={["isRequired", 'matchRegexp:^[a-zA-Z]+ ?[a-zA-Z]+$']}
                              errorMessages={['This field is required', 'First Name is not valid']} />
                          </div>
                        </div>
                        <div className="col-md-6 name-quad">
                          <div className="form-group form-txt-validate-quad">
                            <TextValidator
                              validatorListener={this.validatorListener}
                              className="form-control txt-validate"
                              ref="lastname"
                              key={"lastname"}
                              placeholder="Last Name"
                              onChange={(e) => this.handleChange(e, 'lastname')}
                              onKeyPress={this.onKeyPressOnInput}
                              name={"lastname"}
                              value={this.state.lastname}
                              validators={["isRequired", 'matchRegexp:^[a-zA-Z]+ ?[a-zA-Z]+$']}
                              errorMessages={['This field is required', 'Last Name is not valid']} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group form-txt-validate-quad">
                            <TextValidator
                              validatorListener={this.validatorListener}
                              className="form-control pwd-validate"
                              type="password"
                              ref="password"
                              key={"password"}
                              placeholder="Password"
                              onChange={(e) => this.handleChange(e, 'password')}
                              onKeyPress={this.onKeyPressOnInput}
                              name={"password"}
                              value={this.state.password}    
                              validators={["isRequired", 'matchRegexp:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,30})']}
                              errorMessages={['This field is required', 'Passwords must contain at least 8 characters,including uppercase,lowercase letters,special character and numbers']} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group form-txt-validate-quad">
                            <TextValidator
                                validatorListener={this.validatorListener}
                                className="form-control pwd-validate"
                                type="password"
                                ref="Cpassword"
                                key={"Cpassword"}
                                placeholder="Confirm password"
                                onChange={(e) => this.handleChange(e, 'Cpassword')}
                                onKeyPress={this.onKeyPressOnInput}
                                name={"Cpassword"}
                                value={this.state.Cpassword}
                                validators={['isPasswordMatch', 'required']}
                                errorMessages={['password mismatch', 'this field is required']}
                              // validators={["isRequired", 'matchRegexp:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,30})']}
                                errorMessages={['This field is required']} />
                          </div>
                          <span style={{ 'color': 'red' }}>{this.state.confirmPasswordErrorMessage}</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <button type="button" className="create-account-btn" onClick={this.handleSignup} disabled={!this.state.isFormValid || !this.state.Cpassword}>Create Account  {this.state.loading ? <i className="fa fa-spin fa-fw fa-spinner"></i> : ""}</button>
                        </div>
                      </div>

                      <SocialLoginComponnet onCall={'Signup'} />
                      {/* </form> */}
                    </ValidatorForm>

                  </div>
                  <div className="row">

                    <div className="bx-logSign-footer" style={{ width: "100%", textAlign: "center" }}>
                      <p>
                        Already Have An Account? <a style={{ fontWeight: 600, cursor: "pointer" }} onClick={this.handleOpenLogin}  >Login</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    );
  }
}
module.exports = SignUp;
