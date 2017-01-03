import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'Containers/App';
import HomePage from 'Containers/HomePage';
import AboutPage from 'Containers/AboutPage';
import ReduxPage from 'Containers/ReduxPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="redux" component={ReduxPage} />
  </Route>
);
