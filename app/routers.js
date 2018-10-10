import React from 'react';
import { objectOf, any } from 'prop-types';
import { Switch, Route, Router } from 'react-router-dom';

import MainLayout from 'containers/MainLayout/Loadable';
import ProductBoardPage from 'containers/ProductBoardPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import StorePage from 'containers/StorePage/Loadable';

export default function App({ history }) {
  return (
    <div className="layout-main" id="layout-main">
      <Router history={history}>
        <div>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={ProductBoardPage} />
              <Route exact path="/store" component={StorePage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </MainLayout>
        </div>
      </Router>
    </div>
  );
}

App.propTypes = {
  history: objectOf(any).isRequired,
};
