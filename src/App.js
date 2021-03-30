import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'

import  HomePage from './pages/home-page/components/homepage'
import ShopPage from './pages/shop-page/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/components/sign-in-and-sign-up'
import CheckoutPage from './pages/checkout/checkout.component'
import SellerPage from './pages/seller-page/seller-page.component'

import Header from './components/header/components/header'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { createStructuredSelector } from 'reselect'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends Component {
  componentDidMount () {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      setCurrentUser(userAuth)

  })
}

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser 
            ? (<Redirect to='/' />) 
            : <SignInAndSignUpPage />} />

          <Route exact path='/become-seller' render={() => 
            this.props.currentUser 
            ? (<SellerPage />) 
            : <Redirect to='/' /> }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
