import { showLoading, hideLoading } from "react-redux-loading-bar"
import { saveQuestion } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions){
    return {
        type:RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion({optionOneText, optionTwoText, id}){
    return(dispatch, getState)=>{
        const {authedUser} = getState()
        console.log(optionOneText, authedUser, id)
        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author:authedUser
        })
        .then((question)=>dispatch(addQuestion(question)))
        .then(()=>dispatch(hideLoading()))
    }
}