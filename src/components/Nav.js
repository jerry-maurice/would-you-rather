import React from 'react'
import { NavLink } from 'react-router-dom'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../styles/Nav.css'


export default function Nav() {
    const {
        isAuthenticated,
        loginWithRedirect,
        logout,
        user,
      } = useAuth0();
    return (
      <div className='nav'>
        {isAuthenticated && 
        (
            <Breadcrumbs aria-label="breadcrumb">
                <NavLink className='nav-link' color="inherit" to="/">
                    Home
                </NavLink>
                <NavLink className='nav-link' color="inherit" to="/add">
                    Create
                </NavLink>
                <NavLink className='nav-link' color="inherit" to="/logout">
                    <Button onClick={() => logout()}>Logout</Button>
                </NavLink>
                <Typography color="textPrimary">Hello {user.name}</Typography>
            </Breadcrumbs>
        )
        }
        {!isAuthenticated && 
        (
            <Breadcrumbs aria-label="breadcrumb">
                <Button onClick={() => loginWithRedirect()}>Login</Button>
            </Breadcrumbs>
        )
        }
      </div>
    );
  }