import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  //Executed when form is submitted
  handleSubmit = event => {
    //Prevents the forms default behaviour
    event.preventDefault();
    //Clears the email and password fields
    this.setState({email: '', password: ''});
  }
  //Executed when the user types
  handleChange = event => {
    const {value, name} = event.target;
    //Dynamically updates state - [name] will be either "email" or "password", changes depending on the field the user is typing in, allows us to reuse the same function for both
    this.setState ({[name]: value})
  }
  render(){
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
          <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
          <input type="submit" value="Submit Form"/>
        </form>
      </div>
    )
  }
}

export default SignIn;
