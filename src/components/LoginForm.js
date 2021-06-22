import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const errorList = () =>{
            if(this.props.errors.length > 0) {
                return (<div className="alert alert-danger">
                {this.props.errors.map((value, i)=> {
                    return <li key={'error' + i}>{value}</li>
                })}
            </div>)  
            }
        }
        return(
            <form onSubmit={this.props.handleSubmit}>
                {errorList()}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" onChange={this.props.handleChangeNameInput}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.props.handleChangePasswordInput}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        )
    }
}

export default LoginForm;