import { hashHistory } from 'react-router'

import * as types from '../constants/ActionTypes'


export default function loginReducer(state = {}, action) {
    switch (action.type) {
        case types.LOAD_LOGIN:
        hashHistory.push(`/login`)
        default:
            return state;
    }
}
