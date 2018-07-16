/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 11:40:03 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-16 17:18:13
 */
import * as types from '../constants/ActionTypes'
import SignupService from '../api/SignupService'

/**
 * Action used for authenticate user
 * @param {*} signupPayload 
 */
export function signup(signupPayload) {
  return function (dispatch) {
    return SignupService.registration(signupPayload).then(response => {
      console.log('response......',response)
      if (response.error) {
        return response.errorMessage;
      }
      else {
        dispatch(signupSuccess());
        return response;
      }
    }).catch(error => {
      return error.data.message;
    });
  };
}

/**
 * Action used after login success 
 * @param {*} responseSignup
 */
export function signupSuccess() {
  return { type: types.SIGNUP_SUCCESS };
}