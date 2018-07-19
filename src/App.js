import React, { Component } from 'react';
import './App.css';
import MovieList from './component/content/movieList';
import MovieDetail from './component/content/movieDetail';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          debug
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movie/:id" component={MovieDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
