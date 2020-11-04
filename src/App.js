import logo from './logo.svg';
import './App.css';
import  HomePage from './pages/home-page/components/homepage'
import ShopPage from './pages/shop-page/containers/shop'
import Header from './components/header/components/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/components/sign-in-and-sign-up'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
