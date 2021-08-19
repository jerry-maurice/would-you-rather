import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Login'
import Home from './home'
import NewQuestion from './NewQuestions'
import Nav from './Nav'
import ProtectedRoute from './Protected-route';

class App extends Component{
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return(
      <Router>
        <Fragment>
          <CssBaseline />
          <Container fixed>
            <LoadingBar />
            <Nav />
            {this.props.loading === true
            ?null
            :<div>
              <Route path='/home' exact component = {Home} />
              <Route path='/' exact component = {Login} />
              <Route path='/add' exact component = {NewQuestion} />
            </div>
            }
          </Container>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App) ;
