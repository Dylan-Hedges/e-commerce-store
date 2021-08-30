import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

//Contains nested routes for each collection (e.g. when a user visits hats the URL is '/shop/hats' and the hats collection will be displayed to them - {match.path} recieves the path '/shop' from app.js, this makes it more flexible as we dont need to hard code the route and import the component ,match, location and history is passed into this component as props from <Route> which is set up in app.js
const ShopPage = ({match}) =>(
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;
