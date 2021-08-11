import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import '../styles/Login.css'


class Login extends Component{
    state = {
        userId: null,
    }
    handleAuthedUser = (e) =>{
        const {dispatch} = this.props;
        dispatch(setAuthedUser(e.target.value));
    }
    render(){
        const {users} = this.props;
        return(
            <div>
                <h1 className='title-center'>Login</h1>
                <div id="login">
                    <h3 className="title-center">Select User</h3>
                    <select onChange={this.handleAuthedUser}>
                        <option>Select User</option>
                        {Object.keys(users).map(function(key) {
							return (
								<option value={users[key].id} key={key}>
									{users[key].name}
								</option>
							);
						})}
                    </select>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        users
    }
}
export default connect(mapStateToProps)(Login)