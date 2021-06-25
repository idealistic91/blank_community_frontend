import '../styles/Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import ProfileDropDown from './ProfileDropDown';
import CommunityDropDown from './CommunityDropDown';
import GoogleFontLoader from 'react-google-font-loader';
import Logo from './Logo';



import {
    logIn,
    logOut,
  } from "../redux/Login/login.actions"

import { changeCommunity } from '../redux/Community/community.actions';


class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }

    handleLogout = () => {
        this.props.logOut()
    }

    render() {
        const loggedInLinks = [
                        <ProfileDropDown />,
                        <CommunityDropDown />,
                        <li className="nav-item">
                            <span className="nav-link" onClick={this.handleLogout}>Logout</span>
                        </li>]
        return(
            <>
             <GoogleFontLoader
                    fonts={[
                        {
                        font: 'Press Start 2P',
                        weights: [400, '400i'],
                        },
                    ]}
            />
            <Navbar bg="dark" expand="lg" variant='dark' id="nav">
                <Navbar.Brand href="#home" id="logo">
                    <Logo />
                    {/* {this.props.viewLabel} */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users" className="nav-link">Users</Link>
                    </li>
                    {!this.props.authenticated && <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>}
                    <li className="nav-item">
                        <Link to="/events" className="nav-link">Events</Link>
                    </li>
                </Nav>
                <Nav className="ml-auto">
                    {this.props.authenticated && loggedInLinks}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
        )
    }
}

const mapStateToProps = state => {
    return {
      authenticated: state.login.authenticated,
      username: state.login.username,
      current_community: state.community.current_community,
      community_name: state.community.community_name
    }
}

  const mapDispatchToProps = dispatch => {
    return {
        changeCommunity: (id, name) => dispatch(changeCommunity(id, name)),
        logIn: (username) => dispatch(logIn(username)),
        logOut: () => dispatch(logOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);