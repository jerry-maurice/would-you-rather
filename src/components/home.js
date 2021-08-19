import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import {setAuthedUser} from '../actions/authedUser'
import { withAuth0 } from '@auth0/auth0-react';
import Question from './Questions'
import {handleRegisterUser} from '../actions/users'

const useStyles = theme =>({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
  });
  

class Home extends Component{
    state = {
        answered:false
    }
    handleAnsweredQuestion = (value) =>{
        this.setState((state)=>({
            answered:value
        }))
    }
    handleUserAccount(user){
        const { userIds, dispatch, isAuthenticated } = this.props
        const result = userIds.filter((u) =>{
            return u.indexOf(user.nickname) > -1
        }) 
        console.log(userIds, user)
        
        if(!result){
            const { user } = this.props.auth0;
            const { dispatch } = this.props

            dispatch(handleRegisterUser(user))
        }
        dispatch(setAuthedUser(user.nickname))
    }
    render(){
        const { answered } = this.state
        const {questions, authedUser, questionId} = this.props
        const { isAuthenticated, user } = this.props.auth0;

        const filteredQuestions = questionId.filter((q) =>{
            const verify = (
                questions[q].optionOne.votes.indexOf(authedUser) > -1 ||
                questions[q].optionTwo.votes.indexOf(authedUser) > -1
            )
            return answered ? verify : !verify
        })
        
        const sortedQuestions = filteredQuestions.sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
        return(
            <div> 
                {isAuthenticated &&
                    this.handleUserAccount(user)
                }
                <div className='sub-nav'>
                    <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                        <Button onClick={(e) => this.handleAnsweredQuestion(false)}>Unanswered Question</Button>
                        <Button onClick={(e) => this.handleAnsweredQuestion(true)}>Answered Question</Button>
                    </ButtonGroup>
                </div>
                <div>
                {sortedQuestions.map((id)=>(
                    <div key={id}>
                        <Question id={id}/>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}


function mapStateToProps({questions, authedUser, users}){
    return{
        authedUser,
        users,
        questions,
        userIds:Object.keys(users),
        questionId: Object.keys(questions)
        .sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(withAuth0(Home),withStyles(useStyles))