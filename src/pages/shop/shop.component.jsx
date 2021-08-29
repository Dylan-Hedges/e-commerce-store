import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import {selectCollections} from '../../redux/shop/shop.selectors';

//Displays images and titles on the shop page
const ShopPage = ({collections}) =>(
    <div className='shop-page'>
      {collections.map(({id, ...otherCollectionProps}) =>(
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

//Maps the memoized selector to this component to display items on screen (mapped under the collections prop)  - in a memozied selector the data is cached which helps to improve performance as the same calculations do not have to be performed multiple times and reduces the amount of re-renders as the cached result is the same
const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
