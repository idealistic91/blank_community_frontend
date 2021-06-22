import React from 'react'
import LoginForm from '../components/LoginForm'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {Paths} from '../config/Paths';


import {
    logIn,
    logOut,
  } from "../redux/Login/login.actions"
import { changeCommunity } from '../redux/Community/community.actions';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameInput: '',
            passwordInput: '',
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangePasswordInput = this.handleChangePasswordInput.bind(this)
        this.handleChangeNameInput = this.handleChangeNameInput.bind(this)
        this.addLoginErrors = this.addLoginErrors.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleSubmit(event) {
        this.handleLogin(this.state)
        event.preventDefault()
    }
    handleChangeNameInput(event) {
        this.setState({nameInput: event.target.value})
    }
    handleChangePasswordInput(event) {
        this.setState({passwordInput: event.target.value})
    }
    addLoginErrors(error) {
        this.setState({errors: [...this.state.errors, error]})
    }
    handleLogin(data) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: data.nameInput, password: data.passwordInput})
        };
        fetch(`${Paths.baseUrl}${Paths.sessionsUrl}`, requestOptions)
        .then(response => response.json())
        .then((response) => {
            if(response.status === 'ok') {
                this.props.logIn(data.nameInput, response.auth_token)
                this.props.changeCommunity(response.community_id, response.community_name)
            } else {
                this.addLoginErrors(response.error_message)
            }
        })
      }
    render() {
        if(this.props.authenticated) {
            return(
                <Redirect to='/'/>
            );
        } else {
            return(
                <LoginForm handleSubmit={this.handleSubmit}
                    handleChangeNameInput={this.handleChangeNameInput}
                    handleChangePasswordInput={this.handleChangePasswordInput} errors={this.state.errors}/>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
      authenticated: state.login.authenticated,
      username: state.login.username,
      community: state.login.community
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      
      logIn: (username, auth_token) => dispatch(logIn(username, auth_token)),

      logOut: () => dispatch(logOut()),
      changeCommunity: (id, name) => dispatch(changeCommunity(id, name))

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);