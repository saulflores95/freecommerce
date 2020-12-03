import React from 'react'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

// Match is passed down becouse the ShopPaged is wrapped by a route at App.js
const ShopPage  = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={ CollectionPage } />
    </div>
)

export default ShopPage