import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionUserName } from '../../../config/redux/action';

class Login extends Component {
  changeUser = () => {
    this.props.changeUserName()
  }
  render(){
    return(
      <div>
        <p>Login page {this.props.username}</p>
        <button onClick={this.changeUser}>Change Username</button>
        <button>Go To Dashboard</button>
      </div>
    )
  }
}

const reduxState = (state) => ({
  popupProps: state.popup,
  username: state.user
})

const reduxDispatch = (dispatch) => ({
  changeUserName: () => dispatch(actionUserName())
})

export default connect(reduxState, reduxDispatch)(Login);
