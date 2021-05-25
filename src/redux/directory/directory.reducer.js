const INITIAL_STATE = { 
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'Green Gods',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/mxship-db.appspot.com/o/greengods%2FWhatsApp%20Image%202021-04-14%20at%203.10.06%20PM.jpeg?alt=media&token=ab37f946-83f2-4335-af89-d7ee03755422',
            size: 'large',
            id: 5,
            linkUrl: 'shop/green%20gods'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 6,
            linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer