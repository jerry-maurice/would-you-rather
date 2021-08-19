import React, {Component} from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import '../styles/Card.css'


class Question extends Component{
    render(){
        const {question} = this.props
        if(question === null){
            return <p>This question doesn't exist</p>
        }
        return(
            <div className='card-template-question'>
                <div className='card-header'>
                    {question.name}
                </div>
                <div className='card-question'>
                    <div>
                        <img src={question.avatar} alt='avatar'></img>
                    </div>
                    <div>
                        <h3>Would you Rather</h3>
                        <p>...{question.optionOne.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}



function mapStateToProps({authedUser, users, questions}, {id}){
    const question = questions[id]

    return{
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    }
}
export default connect(mapStateToProps)(Question)