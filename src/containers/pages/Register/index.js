import React, { Component } from 'react';
import './Register.scss';
import firebase from '../../../config/firebase';
import Button from '../../../components/atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../../../config/redux/action';

class Register extends Component {
  state = {
    email: '',
    password: '',
    message : {
      email: '',
      password: ''
    }

  }

  handleChangeText = (e) => {
    // console.log(data)
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleRegisterSubmit = () => {
    const {email, password} = this.state;
    console.log('E & P : ', email, password)
    if (email === '') {
      this.setState({
        ...this.state,
        message: {
          email : 'tidak boleh kosong!'
        }
      })
    }
    if (password === '') {
      this.setState({
        ...this.state,
        message: {
          password : 'password boleh kosong!'
        }
      })
    }
    this.setState({
      ...this.state,
      email: '',
      password: ''
    })
    this.props.registerUserAPI({email, password})
  }
  render(){
    return(
      <div className="auth-container">
        <div className="auth-card">
    <p className="auth-title">Register page</p>
          <p>{this.state.email}</p>
          <p>{this.state.password}</p>
          <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText}/>
          <p>{this.state.message.email}</p>
          <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText}/>
          <p>{this.state.message.password}</p>
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

const reduxDiispatch = (dispatch) => ({
  registerUserAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDiispatch)(Register);
