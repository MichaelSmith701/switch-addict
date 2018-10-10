import React, { Component } from 'react';
import * as authCall from '../services/auth';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password:"",
      loggedIn: false, 
      token: "",
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async logIn(email, password) {
    let user = await authCall.signIn(email, password);
    this.setState({...user, loggedIn: true});
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.logIn(this.state.email, this.state.password);
  }
  
  render() {
    
    const login = this.state.loggedIn ? <p>You are logged in as {this.state.username}!</p> : <p>You are not logged in!</p>;
    
    return (
      <div className='signin-form-container'>
        <form className='signin-form'
              onSubmit={this.handleSubmit}
        >
          <label htmlFor="email">Email:</label>
          <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
          <label htmlFor="password">Password:</label>
          <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
          <input type='submit' value='Sign In'/>
        </form>
        {login}
      </div>
    );
  }
}

export default SignIn;