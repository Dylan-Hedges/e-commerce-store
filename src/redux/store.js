import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//Middleware that logs all action activity - used for debugging, catches and displays actions that get dispatched
const middlewares = [];

//If we are in development then push the logger into our array of middlewares - if it is anything else e.g. 'production' then it doesnt push it to the array as we dont want the logger in production
if(process.env.NODE_ENV === 'development'){
  console.log('test');
  middlewares.push(logger);
}


//Creates the Redux Store object - executes middlewares (if in production contains logger that tracks Redux state changes, actions), creates it using the object returned from rootReducer, passes it to <Provider> in index.js
const store = createStore(rootReducer, applyMiddleware(...middlewares));

//Creates a persisted version of the Redux Store
const persistor = persistStore(store);

export {store, persistor};
