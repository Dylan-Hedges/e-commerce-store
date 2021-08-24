import {createSelector} from 'reselect';

//Recieves global state and stores the user piece of state
const selectUser = state => state.user;

//Selector that returns the current user - used for sign in/out
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
