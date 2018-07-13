import { hashHistory } from 'react-router'

import * as types from '../constants/ActionTypes'
import initialState from './initialState'

export function forgotPasswordReducer(state = {}, action) {
    switch (action.type) {
        case types.FORGOT_PASSWORD_SUCCESS:
        hashHistory.push(`/forgot-password-email`)
        default:
            return state;
    }
}

export function resetPasswordReducer(state ={}, action) {
    switch (action.type) {
        case types.RESET_PASSWORD_SUCCESS:
        hashHistory.push(`/login`)
        default:
            return state;
    }
}
