import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import { Switch,Route } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component = {ShopPage}/>
        <Route exact path='/signin' component = {SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
