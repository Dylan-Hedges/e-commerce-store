import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  //null property used for closing the firebase auth subscription
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    //Listens to changes in authentication on firebase - uses an Open Subscription, whenever there is a change in authentication (e.g. a user logs in/out) firebase sends a message saying the authentication state has changed
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      //If the user is signed in - i.e. if there is a userAuth object
      if (userAuth){
        //Executes the create a new user function and saves the user document reference- passes the user authentication object we get from firebase into this function
        const userRef = await createUserProfileDocument(userAuth);
        //Saves the data stored in the document for this user and passes it into the setCurrentUser action as the payload - onSnapshot() subscribes/listens to the document for this user, on the inital call we get the current contents of the document, then each time the content changes another call updates the document snapshot
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }else{
        setCurrentUser(userAuth);
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
        <Header />
          <Switch>
            <Route exact path ='/' component={HomePage} />
            <Route exact path ='/shop' component={ShopPage} />
            <Route exact path ='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          </Switch>
      </div>
    );
  }
}

//Maps the current user
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

//Allows our component to dispatch actions to update the Redux Store
const mapDispatchToProps = dispatch => ({
  //Dispatches the action setCurrentUser with the type as 'SET_CURRENT_USER' and the payload as the user object, the 'SET_CURRENT_USER' reducer will then update the Redux Store with the info of the currently logged in user
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
