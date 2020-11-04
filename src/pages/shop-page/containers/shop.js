import React, { Component } from 'react'
import SHOP_DATA from '../data/shop'
import CollectionPreview from '../../../components/collection-preview/components/collection-preview'

export default class ShopPage extends Component {
    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionPropos }) => (
                        <CollectionPreview key={id} {...otherCollectionPropos} />
                    ))
                }
            </div>
        )
    }
}