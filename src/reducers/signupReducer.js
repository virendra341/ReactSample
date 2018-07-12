import { hashHistory } from 'react-router'

import * as types from '../constants/ActionTypes'
import initialState from './initialState'

export default function signupReducer(state = initialState.signupUser, action) {
    switch (action.type) {
        case types.SIGNUP_SUCCESS:
        hashHistory.push(`/welcome`)
            // return {
            //     signUp: true,
            //     user: action.signupUser
            // };
        default:
            return state;
    }
}
