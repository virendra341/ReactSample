import { hashHistory } from 'react-router'

import * as types from '../constants/ActionTypes'
import initialState from './initialState'

export default function userReducer(state = initialState.loginUser, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
        hashHistory.push(`/app/dashboard`)
            return {
                loggedIn: true,
                user: action.loginUser
            };
        default:
            return state;
    }
}
