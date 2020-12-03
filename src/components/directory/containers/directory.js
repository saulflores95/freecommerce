import React, { Component } from 'react'
import MenuItem from '../../menu-item/components/menu-item'
import '../styles/directory.scss'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../../redux/directory/directory.selectors'
import { createStructuredSelector} from 'reselect'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)