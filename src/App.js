import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import  HomePage from './pages/home-page/components/homepage'
import ShopPage from './pages/shop-page/containers/shop'
import Header from './components/header/components/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/components/sign-in-and-sign-up'
import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  
  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser:user
      })
      console.log(user)
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
