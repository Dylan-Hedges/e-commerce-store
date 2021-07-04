import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument} from'../../firebase/firebase.utils';

import './sign-up.styles.scss';

//Allows users to sign up using email and password
class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  //Creates a new user - executed when the form is submitted
  handleSubmit = async event => {
    //Prevents the default action happening when the form is submitted
    event.preventDefault();
    //Destructures what was typed into the form
    const {displayName, email, password, confirmPassword} = this.state;
    //Checks if the passwords match - if passwords are not the same then it exits (return;)
    if(password !== confirmPassword){
      alert("Passwords don't match");
      return;
    }
    try{
      //Creates a new authenticated user in firebase - this is a method that comes with firebase, email and password are sent to firebase, new user is created, a user auth object is sent back to our app, user is destructured from this object
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      //Saves user to our firestore database - executes our createUserProfileDocument() function (this same function is executed when signing up with Google, takes in the user and the displayName )
      createUserProfileDocument(user, {displayName});
      //Clears out the form - resets state
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''}
      );
    }catch(error){
      console.log(error);
    }
  }

  //Saves what the user types in the input fields - executed when a change occurs (i.e. user typing), saves what user types and dynamically updates state
  handleChange = event => {
    //Destructures name (e.g. displayName) and value (e.g. 'John123') from the input fields - name and values change depending on what input field the user is typing in, this is passed into this function under event.target;
    const {name, value} = event.target;
    //Dynamically updates state with what the user types- e.g. will update displayName with the value 'John123'
    this.setState({[name]: value});
  };

  render(){
    //Destructures displayName, email, password and confirmPassword from state
    const {displayName, email, password, confirmPassword} = this.state;
    //Renders input fields - displays values for displayName, email, password and confirmPassword in the fields
    return(
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;
