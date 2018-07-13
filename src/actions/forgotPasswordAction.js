/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 11:40:03 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-11 14:16:14
 */
import * as types from '../constants/ActionTypes'
import ForgotPasswordService from '../api/ForgotPasswordService'

/**
 * Action used for authenticate user
 * @param {*} forgotPasswordPayload 
 */
export function forgotPassword(forgotPasswordPayload) {
  return function (dispatch) {
    return ForgotPasswordService.forgotPasswordService(forgotPasswordPayload).then(response => {
      console.log('response......',response)
      if (response.error) {
        return response.errorMessage;
      }
      else {
        dispatch(forgotPasswordSuccess());
        return response;
      }
    }).catch(error => {
      throw (error);
    });
  };
}

/**
 * Action used for authenticate user
 * @param {*} ResetPasswordPayload 
 */

export function resetPassword(ResetPasswordPayload) {
  return function (dispatch) {
    return ForgotPasswordService.resetPasswordService(ResetPasswordPayload).then(response => {
      console.log('response......',response)
      if (response.error) {
        return response.errorMessage;
      }
      else {
        dispatch(responseResetPassword());
        return response;
      }
    }).catch(error => {
      throw (error);
    });
  };
}

/**
 * Action used after login success 
 * @param {*} responseForgotPassword
 */
export function forgotPasswordSuccess() {
  return { type: types.FORGOT_PASSWORD_SUCCESS };
}


/**
 * Action used after login success 
 * @param {*} responseResetPassword
 */
export function resetPasswordSuccess() {
  return { type: types.RESET_PASSWORD_SUCCESS };
}