/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 14:08:14 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-11 14:10:05
 * @Description :-  Used for interact with server for login related operation
 */
import request from './request'

function registration(data) {
    return request({
      url:    'users/create/',
      method: 'POST',
      data
    });
  }

  const SignupService = {
      registration
  }

  export default SignupService;



  