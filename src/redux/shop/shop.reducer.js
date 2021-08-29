import SHOP_DATA from './shop.data';

const INITAL_STATE = {
  collections: SHOP_DATA
};

//Reducer returns the data in the shop.data file - we only have default: as this data will not change, as a result there are no actions
const shopReducer = (state = INITAL_STATE, action) => {
  switch(action.type){
    default:
    return state;
  }
}

export default shopReducer;
