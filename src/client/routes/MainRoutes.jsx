import React from 'react';

// routing modules
import { Route } from 'react-router-dom';

// components
// import HomeContainer from '../scenes/Home';
import UNNumbersContainer from '../scenes/UNNumbers';

export default function MainRoutes() {
  return (
    <div>
      {/* <Route exact path="/" component={HomeContainer} /> */}
      <Route exact path="/" component={UNNumbersContainer} />
    </div>
  );
}
