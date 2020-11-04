import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import { auth } from '../../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../../assets/crown.svg'
const Header = ({ currentUser }) => (
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
            {
                currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :  <Link className='option' to='signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header