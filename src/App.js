import logo from './logo.svg';
import './App.css';
import  HomePage from './pages/home-page/components/homepage'
import { Switch, Route } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1> Hats Page </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
