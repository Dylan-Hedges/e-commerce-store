import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

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
  handleSubmit = async event => {
    //Prevents the forms default behaviour
    event.preventDefault();
    const {email, password} = this.state;
    try{
      //Signs in user using email and password - auth.signInWithEmailAndPassword( ) is a firebase util
      await auth.signInWithEmailAndPassword(email, password);
      //Clears the email and password fields
      this.setState({email: '', password: ''});
    }catch (error){
      console.log(error);
    }
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
          <div className='buttons'>
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
