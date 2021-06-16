import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  //null property used for closing the firebase auth subscription
  unsubscribeFromAuth = null;

  componentDidMount(){
    //Listens to changes in authentication on firebase - uses an Open Subscription, whenever there is a change in authentication (e.g. a user logs in/out) firebase sends a message saying the authentication state has changed
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      //Updates the app state with user account info - takes the account and authentication info in the message sent from firebase and updates the app state using this information
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    //Closes the subscription - the Subscription needs to be closed when we are done, calls a function that is returned from auth.onAuthStateChanged()
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path ='/' component={HomePage} />
            <Route exact path ='/shop' component={ShopPage} />
            <Route exact path ='/signin' component={SignInAndSignUpPage} />
          </Switch>
      </div>
    );
  }
}

export default App;
