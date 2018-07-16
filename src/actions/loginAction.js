/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 11:40:03 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-16 17:12:35
 */
import * as types from '../constants/ActionTypes'
import LoginService from '../api/LoginService'

/**
 * Action used for authenticate user
 * @param {*} loginPayload 
 */
export function login(loginPayload) {
  return function (dispatch) {
    return LoginService.authenticate(loginPayload).then(response => {
      if (response.error) {
        return response.errorMessage;
      }
      else {
        dispatch(loginSuccess(response.user));
        return response;
      }
    }).catch(error => {
      return error.data.items.non_field_errors[0];
    });
  };
}

/**
 * Action used after login success 
 * @param {*} responseLogin 
 */
export function loginSuccess(loginUser) {
  return { type: types.LOGIN_SUCCESS, loginUser };
}