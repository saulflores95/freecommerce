import React from 'react'
import '../styles/homepage.scss'
import Directory from '../../../components/directory/containers/directory'
import WithOgTags from '../../../components/og-tags/og-tags.components'
const DirectoryWithTags = WithOgTags(Directory);

const HomePage = () => (
    <div className='homepage'>
        <DirectoryWithTags title='MXShip' description='The best mexican artesenal goods' imgUrl='https://firebasestorage.googleapis.com/v0/b/mxship-db.appspot.com/o/greengods%2FWhatsApp%20Image%202021-04-14%20at%203.10.06%20PM.jpeg?alt=media&token=ab37f946-83f2-4335-af89-d7ee03755422'/>
    </div>
)

export default HomePage