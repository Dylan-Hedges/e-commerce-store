import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//Middleware that logs all action activity - used for debugging, catches and displays actions that get dispatched
const middlewares = [logger];

//Creates the Redux Store object - creates it using the object returned from rootReducer, passes it to <Provider> in index.js
const store = createStore(rootReducer, applyMiddleware(...middlewares));

//Creates a persisted version of the Redux Store
const persistor = persistStore(store);

export {store, persistor};
