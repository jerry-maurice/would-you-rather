import React, {Component} from 'react'
import { connect } from 'react-redux'


class Question extends Component{
    render(){
        return(

        )
    }
}

function mapStateToProps({authedUser, users, questions}){
    return{
        users
    }
}

export default connect()(Question)