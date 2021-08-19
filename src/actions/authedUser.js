export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const ADD_AUTHED_USER = 'ADD_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
} 
