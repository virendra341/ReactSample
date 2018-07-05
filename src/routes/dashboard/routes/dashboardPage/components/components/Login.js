import React, { PureComponent } from 'react'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import { Link, hashHistory } from "react-router"
import { cloneDeep } from 'lodash'
import { find } from 'lodash'
import { connect } from 'react-redux'

import { validation } from 'utils/formvalidation'
import { userProfile } from 'actions'
import { authenticate } from '../../../../../../api/loginAPI'
import SocialLoginComponnet from '../components/socialLogin'
import { loginUserProfile } from '../../../../../../api/profileAPI'


class Login extends PureComponent {
    state = {
        isValid: true,
        errorMessage: '',
        email: '',
        password: '',
        errorMessage: '',
        loading: false,
        invalidData: true,
        HasErrorClass: "form-group",
        isValidMsessage: [{ Error: '' }]
    }
    //
    componentWillUpdate(nextProps, nextState) {
        nextState.invalidData = !(nextState.email && nextState.password)
    }
    //
    handleChange = (e, param) => {
        var change = {}
        change[param] = e.target.value
        this.setState(change)
    }
    //
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    //
    onKeyPressOnInput = event => {
        if (event.charCode == 13) {
            this.setState({ errorMessage: '' });
            if (this.state.password.trim() !== "" && this.state.email.trim() !== "") {

                this.login(event)
            }
            else {
                this.setState({
                    errorMsg: "Please enter the all required fields", isError: true,
                    HasErrorClass: "form-group has-error",
                    requiredMsg: "This field is required"
                })
            }
        }
    }
    //
    handleBlur = (field) => (evt) => {
        let CopyIsValidMessage = cloneDeep(this.state.isValidMsessage)
        ///console.log('Field', field)
        // console.log('Valueeee', this.state.email)
        let regex1 = '/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/'
    }
    //
    renderError = () => {
        return this.state.isValidMsessage.map((item, index) => {
            // console.log('ERRROR', item.Error)
            return (
                <p>{item.Error}</p>
            )
        })
    }
    //
    login = (event) => {
        if (this.state.password.trim() !== "" && this.state.email.trim() !== "") {

            this.setState({ errorMessage: '' });
            this.loginRequest(this.state.email, this.state.password)
        }
        else {
            this.setState({
                HasErrorClass: "form-group has-error",
                requiredMsg: "This field is required"
            })
        }
    }
    //
    loginRequest = (email, password) => {
        this.setState({ loading: true })
        let data = {}
        data = {
            'username': email,
            'password': password,
        }
        authenticate(data)
            .then((result) => {
                console.log('RESULT*******************',result)
                if (result.error) {
                    this.setState({ errorMessage: result.errorMessage, isValid: false, loading: false });
                    localStorage.setItem('Bixex.token', '')
                    localStorage.setItem('Bixex.userId', '')
                    localStorage.setItem('Bixex.userName', '')
                    
                    this.setState({ isValid: true });
                }
                else if (result.success === false) {
                    this.setState({ errorMessage: result.message })
                }
                else {
                    this.setState({ isValid: true });
                    localStorage.setItem('Bixex.token', result.jwt.access)
                    localStorage.setItem('Bixex.userId', result.user.id)
                    localStorage.setItem('Bixex.loginUser', JSON.stringify(result.user))
                    localStorage.setItem('Bixex.userName', data.username)
                    loginUserProfile().
                        then((result) => {
                            console.log('loginUserProfile', result)
                            this.props.userProfile(result)
                        })

                    setTimeout(() => {
                        if (result.firstLogin === true) {
                            //console.log(this.props.loginClose)
                            this.props.loginClose
                            hashHistory.push('/tell-us-about-you')
                        }
                        else if (result.firstLogin === false) {
                            this.props.loginClose
                            hashHistory.push('/app/dashboard/wall')
                        }
                        this.setState({ loading: false })

                    }, 2000)
                }


            })
    }
    //
    handleClose =()=>{
        console.log('Props',this.state.props)
        this.props.loginClose()
        this.setState({
            email:'',
            password:'',
            errorMessage:''
        })
    }
    //
    handleOpenSignup =() =>{
        
        this.props.signUpMe()
        this.props.loginClose()
        this.setState({
            email:'',
            password:'',
            errorMessage:''
        })
    }
    //
    render() {

        return (
            <Modal id="loginModal" show={this.props.openLogin} onHide={this.handleClose}
                aria-labelledby="contained-modal-title-lg" enforceFocus={false} backdrop='static' keyboard={false}>
                <div className="modal-content-inner">
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                        <p style={{ color: "#a94442", textAlign: "center" }}>{this.state.errorMessage}</p>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-12">
                                <form id="login-form">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className={this.state.email == "" ? this.state.HasErrorClass : "form-group"}>
                                                <input type="email" className="form-control" id="email" value={this.state.email} placeholder="Enter Email Address" onChange={(e) => this.handleChange(e, 'email')} onKeyPress={this.onKeyPressOnInput} onBlur={this.handleBlur('email')} />
                                                <span className="text-danger">{this.state.email == "" ? this.state.requiredMsg : ''}</span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className={this.state.password == "" ? this.state.HasErrorClass : "form-group"}>
                                                <input type="Password" className="form-control" id="Password" value={this.state.password} placeholder="Password" onChange={(e) => this.handleChange(e, 'password')} onKeyPress={this.onKeyPressOnInput} />
                                                <span className="text-danger">{this.state.password == "" ? this.state.requiredMsg : ''}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button type="button" disabled={!this.state.isValid || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/.test(this.state.email) === false || !this.state.password} className="login-btn" id="submitButton" onClick={this.login} >Login {this.state.loading ? <i className="fa fa-spin fa-fw fa-spinner"></i> : ""}</button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group text-right">
                                                <Link to="/forgot-password" > Forgot password? </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <SocialLoginComponnet />
                                </form>
                                <div className="row">
                                    <div className="bx-logSign-footer" style={{ width: "100%", textAlign: "center" }}>
                                        <p>
                                            New User? <a style={{ fontWeight: 600, cursor: "pointer" }} onClick={this.handleOpenSignup}>Join Now!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        )
    }
}




const mapDispatchToProps = dispatch => ({
    userProfile: userDetails => {
        dispatch(userProfile(userDetails))
    }
});

export default connect(null, mapDispatchToProps)(Login)
