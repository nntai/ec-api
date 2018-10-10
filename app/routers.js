import React from 'react';
import { objectOf, any } from 'prop-types';
import { Switch, Route, Router } from 'react-router-dom';

import MainLayout from 'containers/MainLayout/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import StorePage from 'containers/StorePage/Loadable';

export default function App({ history }) {
  return (
    <div>
      <Router history={history}>
        <div className="layout-main">
          <Route path="/" component={MainLayout} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/store" component={StorePage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

App.propTypes = {
  history: objectOf(any).isRequired,
};
