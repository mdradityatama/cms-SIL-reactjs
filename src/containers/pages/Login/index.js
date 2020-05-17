import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAPI } from '../../../config/redux/action';


import Button from '../../../components/atoms/Button';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleLoginSubmit = () => {
    const {email, password} = this.state;

    console.log(`p : w ${email} : ${password}`);
    this.props.loginAPI({email, password});
    this.setState({
      email: '',
      password: ''
    })
  }
  render(){
    return(
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Login page</p>
          <p className="auth-title">{this.state.email}</p>
          <p className="auth-title">{this.state.password}</p>
          <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
          <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
          <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading}/>
        </div>
        {/*<button>Go To Dashboard</button>*/}
      </div>
    )
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login);
