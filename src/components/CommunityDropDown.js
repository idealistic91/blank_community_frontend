import React from 'react';
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Paths } from '../config/Paths';

import { changeCommunity } from '../redux/Community/community.actions';

class CommunityDropDown extends React.Component {
    constructor(props) {
        super(props)

        this.requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }

        this.state = {
            communities: []
        }

        fetch(`${Paths.baseUrl}${Paths.communities}/my_communities?access_token=${this.props.auth_token}`,
        this.requestOptions)
        .then((response) => {
            console.log(response)
            if(response.status == 200){
                return response.json()
            } else {
                return false;
            }
        })
        .then((response) => {
            this.setState({communities: response})
        })

    }

    render(){
        const communityLinks = this.state.communities.map((community)=>{
                let id = community.id
                let name = community.name
                return(
                    <Link className="dropdown-item"
                    key={id} onClick={() => this.props.changeCommunity(id, name)}>{name}</Link>
                )
            })
        

        return(
            <NavDropdown title={this.props.community_name} id="collasible-nav-dropdown">
                {communityLinks}
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

  const mapDispatchToProps = dispatch => {
        return {
            changeCommunity: (id, name) => dispatch(changeCommunity(id, name)),
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(CommunityDropDown)