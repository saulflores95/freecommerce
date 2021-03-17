import React, { Component } from 'react'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { createStructuredSelector } from 'reselect'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner  = WithSpinner(CollectionPage)
// Match is passed down becouse the ShopPaged is wrapped by a route at App.js
class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync()
    }

    unsubscribeFromSnapshot = null

    render() {
        const { match, isCollectionFetching} = this.props
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={ props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} /> } />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps =  dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)