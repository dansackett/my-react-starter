import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import App from 'Containers/App';
import HomePage from 'Pages/HomePage';
import AboutPage from 'Pages/AboutPage';
import ReduxExamplePage from 'Pages/ReduxExample';

export default (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
      <Route path="redux" component={ReduxExamplePage} />
    </Route>
  </Router>
);
