import React from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false
        }
        this.requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
    }

    fetchData = async (url, options = this.requestOptions) => {
        this.setState({
            isLoading: true
        })
        try {
            const response = await fetch(`${url}?access_token=${this.props.auth_token}`, options)
            if (response.ok) {
                const data = await response.json();
                this.setState({
                  data: data,
                  isLoading: false
                });  
              } else {
                throw new Error('Fetch request error');
              }
        } catch (err){

        }
    };

    componentDidMount() {
        this.props.updateView(this.props.viewLabel)
    }

    render() {
        if(this.props.authenticated || this.props.noAuth) {
            return(
                // Pass accessible high order functions and props to children
                React.cloneElement(this.props.children, { auth_token: this.props.auth_token,
                    fetchData: this.fetchData,
                    data: this.state.data, 
                    isLoading: this.state.isLoading })
            )
        } else {
            return(
                <div>
                    <h3>You need to be logged in!</h3>
                    <small><Link to='/login'>Logge dich ein</Link></small>
                </div>
            )
        }
        
    }
}
const mapStateToProps = state => ({
    authenticated: state.login.authenticated,
    username: state.login.username,
    auth_token: state.login.auth_token
  });

export default connect(mapStateToProps)(View);