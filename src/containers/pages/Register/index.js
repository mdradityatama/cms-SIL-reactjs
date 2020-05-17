import React, { Component } from 'react';
import './Register.scss';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleRegisterSubmit = () => {
    const {email, password} = this.state;

    this.props.registerUserAPI({email, password})
    this.setState({
      email: '',
      password: ''
    })
  }
  render(){
    return(
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register page</p>
          <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
          <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
          <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading}/>
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
  registerUserAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);
