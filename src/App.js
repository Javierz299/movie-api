import React from 'react'
import './App.css';

import { Router, Switch, Route } from 'react-router-dom'
import history from './utils/history'

import Header from './components/Header/Header'
import Watched from './components/Watched/Watched'
import MovieList from './components/MovieList/MovieList'
import AddMovie from './components/AddMovie/AddMovie'


const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Header />

        <Switch>
          <Route exact path="/" >
            <MovieList />
          </Route>

          <Route path="/watched" >
            <Watched />
          </Route>

          <Route path="/add">
            <AddMovie />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
