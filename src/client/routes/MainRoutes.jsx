import React from 'react';

// routing modules
import { Route } from 'react-router-dom';

// components
// import LoginContainer from '../scenes/Login';
import HomeContainer from '../scenes/Home';
import UNNumbersContainer from '../scenes/UNNumbers';

export default function MainRoutes() {
  return (
    <div>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/un-numbers" component={UNNumbersContainer} />
    </div>
  );
}
