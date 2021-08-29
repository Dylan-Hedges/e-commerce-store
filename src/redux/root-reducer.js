import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
//Tells redux-persist to use local storage (window object) as the default storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//Sets the configuration for reudx persist - key: 'root' is the point we want to start storing things, whitelist: ['cart'] are the reducers we want to store, we dont include 'user' as this is persisted by firebase
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}


//Combines all the reducers - combines the objects returned from the reducers to form the new state object, K/V pairs for the state object are set here
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

//Exports the root reducer and provides it with persist capability
export default persistReducer(persistConfig, rootReducer);
