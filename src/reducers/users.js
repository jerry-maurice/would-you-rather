import {RECEIVE_USERS, REGISTER_USERS} from '../actions/users'

export default function users(state={}, action){
    switch (action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case REGISTER_USERS:
            return{
                ...state,
                [action.user.id]:action.id
            }
        default:
            return state
    }
}