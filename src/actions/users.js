import {saveUser} from '../utils/api'
import { showLoading, hideLoading } from "react-redux-loading-bar"

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REGISTER_USERS = 'REGISTER_USERS'

export function receiveUsers(users){
    return {
        type:RECEIVE_USERS,
        users,
    }
}

export function registerUser(user){
    return {
        type:REGISTER_USERS,
        user,
    }
}

export function handleRegisterUser({nickname, name, picture}){
    return(dispatch)=>{
        console.log(nickname)
        dispatch(showLoading())
        return saveUser({
            nickname,
            name,
            picture
        })
        .then((user)=>dispatch(registerUser(user)))
        .then(()=>dispatch(hideLoading()))
    }
}