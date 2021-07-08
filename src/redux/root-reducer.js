import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';

//Combines all the reducers - combines the objects returned from the reducers to form the new state object, K/V pairs for the state object are set here
export default combineReducers({
  user: userReducer
});
