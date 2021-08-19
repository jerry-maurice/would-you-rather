import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {handleAddQuestion} from '../actions/questions'

import '../styles/Card.css'



class NewQuestion extends Component{
    state = {
        optionOneText:'',
        optionTwoText:'',
    }
    handleOneChange = (e) =>{
        const text =e.target.value

        this.setState((state)=>({
            optionOneText:text
        }))
    }
    handleTwoChange = (e) =>{
        const text = e.target.value

        this.setState((state)=>({
            optionTwoText:text
        }))
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        
        const {optionOneText, optionTwoText } = this.state
        const { dispatch, id} = this.props

        dispatch(handleAddQuestion(optionOneText, optionTwoText, id))
        console.log(optionOneText)

        this.setState(()=>({
            optionOne:'',
            optionTwo:''
        }))
    }
    render(){
        const {optionOneText, optionTwoText } = this.state

        return(
            <div className='card-template-form'>
                <div className='card-header'>
                    Compose new Question
                    <div className='sub-heading'>
                        Would you rather ...
                    </div>
                </div>
                <div className='card-body'>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <TextField
                                id=""
                                label="Option 1"
                                style={{ margin: 8 }}
                                placeholder="Enter Option One"
                                helperText="make it interesting!"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={optionOneText}
                                onChange={this.handleOneChange}
                                required
                            />
                        </div>
                        <div className='title-center'>
                            <Typography color="textPrimary">OR</Typography>
                        </div>
                        <div>
                            <TextField
                                id=""
                                label="Option 2"
                                style={{ margin: 8 }}
                                placeholder="Enter Option Two"
                                helperText="make it interesting!"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={optionTwoText}
                                onChange={this.handleTwoChange}
                                required
                            />
                        </div>
                        <div className='title-center'>
                            <Button 
                                type='submit' 
                                className='center' 
                                variant="contained" 
                                color="secondary" >
                                Create
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion)