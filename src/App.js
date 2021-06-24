import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      //If the user is signed in - i.e. if there is a userAuth object
      if (userAuth){
        //Executes the create a new user function and saves the user document reference- passes the user authentication object we get from firebase into this function
        const userRef = await createUserProfileDocument(userAuth);
        //Saves the data stored in the document for this user to the state of this component - onSnapshot() subscribes/listens to the document for this user, on the inital call we get the current contents of the document, then each time the content changes another call updates the document snapshot
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }else{
        //Set state to null - there is no user auth object
        this.setState({currentUser: userAuth})
      }
    });
  }

  componentWillUnmount(){
    //Closes the subscription - the Subscription needs to be closed when we are done, calls a function that is returned from auth.onAuthStateChanged()
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
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
