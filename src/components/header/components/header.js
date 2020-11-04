import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
const Header = () => (
    <div className='header'>
        <Link to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop'>
                SHOP
            </Link>
            <Link to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header