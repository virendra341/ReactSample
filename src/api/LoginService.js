/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 14:08:14 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-13 09:37:26
 * @Description :-  Used for interact with server for login related operation
 */
import request from './request'

function authenticate(data) {
    return request({
      url:    'api-token-auth/',
      method: 'POST',
      data
    });
  }

  const LoginService = {
      authenticate
  }

  export default LoginService;



  