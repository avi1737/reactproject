import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import CardList from './Components/CardList';
import HeadingSection from './Components/HeadingSection';
import Login from './Components/Login';

function App() {

  return (
    <>
    <Switch>
      <Route exact path = '/' component = {HeadingSection}/>
      <Route path = '/priceCards' component = {CardList} />
      <Route path = '/Login' component = {Login} />
    </Switch>
    </>
  )
}

export default App;
