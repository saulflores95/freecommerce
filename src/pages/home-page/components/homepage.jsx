import React from 'react'
import '../styles/homepage.scss'
import Directory from '../../../components/directory/containers/directory'
import WithOgTags from '../../../components/og-tags/og-tags.components'

const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
)

export default HomePage