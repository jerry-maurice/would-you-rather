import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {handleRegisterUser} from '../actions/users'
import '../styles/Login.css'
import '../styles/Color.css'
import { withAuth0 } from '@auth0/auth0-react';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Home from './home'


  
class Login extends Component{
    handleUserLogin = () =>{
        const { loginWithRedirect} = this.props.auth0;

        loginWithRedirect();
    }
    handleNewUser = (user) =>{
        const { userIds, dispatch } = this.props
        const result = userIds.filter((u) =>{
            return u.indexOf(user.nickname) > -1
        }) 
        
        if(!result){
            const { user } = this.props.auth0;
            const { dispatch } = this.props

            dispatch(handleRegisterUser(user))
        }
    }
    componentDidUpdate(){
        const {isAuthenticated} = this.props.auth0
        if(isAuthenticated){
            const {user } = this.props.auth0;
            this.props.dispatch(setAuthedUser(user.nickname))
        }
        
    }
    
    render(){
        const { isAuthenticated, logout, user } = this.props.auth0;
        
        return(
            <div>
                {!isAuthenticated &&
                <div id='login'>
                    <div className='title-text'>
                        <p className="big-text-title color-red">Would</p>
                        <p className="big-text-title color-orange">You</p>
                        <p className="big-text-title color-yellow">Rather</p>
                    </div>
                    {!isAuthenticated &&
                        <Button className='center' onClick={this.handleUserLogin} variant="contained" color="secondary">
                            Login
                        </Button>
                    }
                </div>
                }  
                {isAuthenticated &&
                    this.handleNewUser(user)
                }
                {isAuthenticated &&
                    <Home userId={user.id} />
                }
            </div>
        )
    }
}

function mapStateToProps({users}){
    return {
        userIds:Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(withAuth0(Login))