//Sets a value for the inital state
const INITAL_STATE = {
  currentUser: null
}

//User Reducer - updates currentUser, takes in state (if state is undefined it sets state to INITAL_STATE) and recieves an action (an object with a type and payload)
const userReducer = (state = INITAL_STATE, action) => {
  //Determines if the reducer cares about the action by looking at action.type
  switch(action.type){
    case 'SET_CURRENT_USER':
      //Spreads in/copies state, updates currentUser prop with the action payload and returns a new state object
      return{
        ...state,
        currentUser: action.payload
      }
      //Returns state object - reducer doesnt care about the action
    default:
      return state;
  }
}

export default userReducer;
