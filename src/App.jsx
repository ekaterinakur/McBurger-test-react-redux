import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import './App.css';
import { Provider } from 'react-redux';
import { getNextState } from './redux/reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BurgerListHandler from "./Components/BurgerListHandler";
import ChangeBurgerHandler from "./Components/ChangeBurgerHandler";
import PersonalBurgerHandler from "./Components/PersonalBurgerHandler";

const store = createStore(getNextState, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={BurgerListHandler} />
          <Route exact path='/burgers/change/:burgerId' component={ChangeBurgerHandler} />
          <Route exact path='/burgers/personal_burger' component={PersonalBurgerHandler} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
