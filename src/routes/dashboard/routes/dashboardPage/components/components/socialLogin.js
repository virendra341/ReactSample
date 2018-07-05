import React, { PureComponent } from 'react'
import { Link, hashHistory } from "react-router"
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import FormInput from 'react-input-validation'
import GoogleLogin from 'react-google-login'
import SocialButton from '../../../../../../../src/Socilauth/components/socialButton'
import UserCard from '../../../../../../../src/Socilauth/components/userCard'
import { connect } from 'react-redux'

import { validation } from 'utils/formvalidation'
import { handleValidation } from 'utils/handleValidation'
import { signup } from "api/signUpApi"
import { userProfile } from 'actions'
import { authenticate } from 'api/loginAPI'


class SocialLoginComponnet extends PureComponent {
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

        isSignup: this.props.isSignup
    }
    //
    setNodeRef(provider, node) {
        let nodes = {}
        if (node) {
            nodes[provider] = node
        }
    }
    onLoginSuccess = (user) => {
        this.setState({
            logged: true,
            currentProvider: user._provider,
            user
        })
        let data = {
            "username": user._profile.email,
            "password": null,
            "socialLogin": {
                "email": user._profile.email,
                "firstName": user._profile.firstName,
                "lastName": user._profile.lastName,
                "provider": user._provider,
                "providerLoginId": user._profile.id,
                "profilePicUrl": user._profile.profilePicURL
            }
        }
        authenticate(data)
            .then((result) => {
                console.log('Social login Result', result)
                localStorage.setItem('Bixex.token', result.jwt.access)
                localStorage.setItem('Bixex.userId', result.user.id)
                this.props.userProfile(result.user)
                setTimeout(() => {
                    if (result.firstLogin === true) {
                        this.props.loginClose
                        hashHistory.push('/tell-us-about-you')
                    }
                    else {
                        this.props.loginClose
                        hashHistory.push('/app/dashboard/wall')
                    }
                    this.setState({ loading: false })

                }, 2000)
            })
    }
    onLoginFailure = (err) => {
        console.error(err)
        this.setState({
            logged: false,
            currentProvider: '',
            user: {}
        })
    }

    onLogoutSuccess() {
        this.setState({
            logged: false,
            currentProvider: '',
            user: {}
        })
    }

    onLogoutFailure(err) {
        console.error('SDK ERROR', err)
    }
    //
    responseGoogle = (response) => {
        console.log('google RESPONSE', response)
        if (response !== null) {

            let payload = {
                "username": response.profileObj.email,
                "password": null,
                "socialLogin": {
                    "email": response.profileObj.email,
                    "firstName": response.profileObj.givenName,
                    "lastName": response.profileObj.familyName,
                    "provider": "google",
                    "providerLoginId": response.googleId,
                    "profilePicUrl": response.profileObj.imageUrl
                }
            }

            //  console.log('google payload', payload)

            authenticate(payload)
                .then((result) => {
                    if (result.error) {
                        this.setState({ errorMessage: result.errorMessage, isValid: false, loading: false });
                        localStorage.setItem('Bixex.token', '')
                        localStorage.setItem('Bixex.userId', '')
                        this.setState({ isValid: true });
                    } else {
                        this.setState({ isValid: true });
                        localStorage.setItem('Bixex.token', result.jwt.access)
                        localStorage.setItem('Bixex.userId', result.user.id)
                        localStorage.setItem('Bixex.loginUser', JSON.stringify(result.user))
                        this.props.userProfile(result.user)
                        setTimeout(() => {
                            if (result.firstLogin === true) {
                                //console.log(this.props.loginClose)
                                this.props.loginClose
                                hashHistory.push('/tell-us-about-you')
                            }
                            else {
                                this.props.loginClose
                                hashHistory.push('/app/dashboard/wall')
                            }
                            this.setState({ loading: false })

                        }, 2000)
                    }


                })


        }

    }
    //

    //
    render() {
        return (

            <div className="row">
                <div className="col-md-12 or-seprator">
                    <span></span>
                </div>
                <div className="col-md-12" >
                    <ul className="list-inline nav bx-social-login-nav">
                        <li className="bx-google-icon">
                            <GoogleLogin style={{ background: "none!important", color: "inherit", border: "none !important", padding: "0!important", font: "inherit !important", cursor: "pointer", backgroundColor: "transparent", }}
                              clientId={'415756522778-tkeln2t9a6kqppkma7ou30t89j7hsij7.apps.googleusercontent.com'}

                              //  clientId={'778468112090-bbufc7gmhhjnag5k608so4m5j8f350id.apps.googleusercontent.com'}
                                onSuccess={(response) => this.responseGoogle(response)}
                                onFailure={(response) => this.responseGoogle(response)}>
                                <img src="assets/images/social-icons/google-plus.png" alt="Google" />
                            </GoogleLogin>

                        </li>
                        <li className="bx-fb-icon">
                            <SocialButton
                                provider='facebook'
                                appId="2048964158685583"
                                onLoginSuccess={this.onLoginSuccess}
                                onLoginFailure={this.onLoginFailure}
                                onLogoutSuccess={this.onLogoutSuccess}
                                getInstance={this.setNodeRef.bind(this, 'facebook')}
                                key={'facebook'}>
                                <img src="assets/images/social-icons/facebook-icon.png" alt="Facebook" />
                            </SocialButton>
                            {/* <a href="#">
                                                    <img src="assets/images/social-icons/facebook-icon.png" alt="Facebook" />
                                                </a> */}
                        </li>
                        <li className="bx-twitter-icon" style={{ display: "none" }}>
                            <a href="#">
                                <img src="assets/images/social-icons/twitter-icon.png" alt="Twitter" />
                            </a>
                        </li>
                        <li className="bx-linkedin-icon">
                            <SocialButton
                                provider='linkedin'
                              //  appId='7775kne2guetd0'
                              appId='77iwfjhplhy869'
 
                                onLoginSuccess={this.onLoginSuccess}
                                onLoginFailure={this.onLoginFailure}
                                onLogoutSuccess={this.onLogoutSuccess}
                                getInstance={this.setNodeRef.bind(this, 'linkedin')}
                                key={'linkedin'} >
                                <img src="assets/images/social-icons/linkedin-icon.png" alt="Linkedin" />
                            </SocialButton>
                        </li>
                        {/* <li className="bx-insta-icon">
                            <SocialButton
                                autoCleanUri
                                scope='basic'
                                provider='instagram'
                                appId='0fcd18fb78e645fb961c04b70d4e4c75'
                                redirect="http://localhost:8000"
                                onLoginSuccess={this.onLoginSuccess}
                                onLoginFailure={this.onLoginFailure}
                                onLogoutSuccess={this.onLogoutSuccess}
                                getInstance={this.setNodeRef.bind(this, 'instagram')}
                                key={'instagram'}>
                                <img src="assets/images/social-icons/instagram-icon.png" alt="Instagram" />
                            </SocialButton>
                        </li> */}
                    </ul>
                </div>
                {
                    this.props.onCall === 'Signup' ? <div className="col-md-12 text-center" style={{ marginBottom: "1rem" }}>
                        <p>By creating an account with email of Google, you agree to the <br /><strong>Bixex Terms of Service</strong> and <strong>Privacy Notice.</strong></p>
                    </div> : ''
                }
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    userProfile: userDetails => {
        dispatch(userProfile(userDetails))
    }
})

export default connect(null, mapDispatchToProps)(SocialLoginComponnet)
