import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { connect } from "react-redux";


class ProfileDropDown extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <NavDropdown title={this.props.username} id="collasible-nav-dropdown">
                <Link className="dropdown-item" href="/">Profile</Link>
                <Link className="dropdown-item" href="/">{this.props.community_name}</Link>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        )
    }

}

const mapStateToProps = state => {
    return {
      authenticated: state.login.authenticated,
      username: state.login.username,
      auth_token: state.login.auth_token,
      current_community: state.community.current_community,
      community_name: state.community.community_name
    }
  } 

export default connect(mapStateToProps)(ProfileDropDown);