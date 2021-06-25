import './styles/App.css';
import { connect } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Login from './views/Login';
import Modal from './components/Modal';
import React from 'react';
import View from './views/View';
import Users from './views/Users';
import Events from './views/Events';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username: '',
        viewLabel: '',
        auth_token: '',
        screenWidth: null
      }
      this.updateView = this.updateView.bind(this)
      this.updateUsername = this.updateUsername.bind(this)
      this.setLoading = this.setLoading.bind(this)
    }

    updateView(val) {
      this.setState({viewLabel: val})
    }
    setLoading(onOff) {
      console.log(onOff)
      this.setState({isLoading: onOff})
    }
    updateUsername(val) {
      this.setState({username: val})
    }
    componentDidMount() {
      window.addEventListener("resize", this.updateWindowDimensions(window.innerWidth));
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions)
    }
    updateWindowDimensions(val) {
      this.setState({ screenWidth: val });
    }

    render() {
      return (
        <>
        <Router >
            <div className="App">
            <header className="App-header">
              <Navigation viewLabel={this.state.viewLabel} />
            </header>
            <div className="row">
              <div className="col-lg-2 sidebar" id="left-sidebar"></div>
              <div className="col-lg-8" id="content-wrapper">
              <div id="content" className="container">
              <Switch>
                <Route exact path="/login">
                  <Modal isOpen={!this.props.authenticated} screenWidth={this.state.screenWidth} title='Log in'>
                    <Login updateView={this.updateView} viewLabel='Log In'/>
                  </Modal>
                </Route>
                <Route exact path="/users">
                  <View viewLabel='Users' updateView={this.updateView} key='users'>
                    <Users />
                  </View>
                </Route>
                <Route exact path="/events">
                  <View viewLabel='Events' updateView={this.updateView} key='events'>
                    <Events currentCommunity={this.props.current_community}/>
                  </View>
                </Route>
                <Route path="/">
                  <View viewLabel='Home' updateView={this.updateView} key='home' noAuth={true}>
                    <h1>Home</h1>
                  </View>
                </Route>
              </Switch>
            </div>
              </div>
              <div className="col-lg-2 sidebar" id="right-sidebar"></div>
            </div>
          </div>
      </Router>
      </>
      );
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

export default connect(mapStateToProps)(App);
