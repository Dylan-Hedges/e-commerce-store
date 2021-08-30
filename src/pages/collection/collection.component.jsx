import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

//Displays the collection on screen
const CollectionPage = ({collection}) => {
  const {title, items} = collection;

  return(
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (<CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

//Maps the collection to this component - ownProps is the props of this component, the /:collectionId is the route we are visitng (e.g. /hats or /jackets), this is passed down from shop.component.jsx via <Route>, ownProps lets us access this via ownProps.match.params.collectionId and we pass it into the selectCollection selector, in this selector the corresponding collection is pulled from the Redux Store (passed in as (state)) and mapped to the props of this component
const mapStateToProps = (state, ownProps) => ({
  //Selector that takes in the collectionId in the URL (e.g. /hats), finds collection in the Redux Store and returns it, the collection then saved to the props of this component under collection:
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
