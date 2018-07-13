/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 14:08:14 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-11 14:10:05
 * @Description :-  Used for interact with server for login related operation
 */
import request from './request'

function forgotPasswordService(data) {
  return request({
    url: 'forgotpassword',
    method: 'POST',
    data
  });
}

function resetPasswordService(data) {
  return request({
    url: 'resetpassword',
    method: 'POST',
    data
  });
}

const ForgotPasswordService = {
  forgotPasswordService,
  resetPasswordService
}

export default ForgotPasswordService;



