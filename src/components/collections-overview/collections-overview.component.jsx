import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

//Displays item categories and several images for that category
const CollectionsOverview = ({collections}) => (
  <div className='collections-overview'>
    {collections.map(({id, ...otherCollectionProps}) =>(
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </div>
)

//Maps the memoized selector to this component to display items on screen (mapped under the collections prop)  - in a memozied selector the data is cached which helps to improve performance as the same calculations do not have to be performed multiple times and reduces the amount of re-renders as the cached result is the same
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
