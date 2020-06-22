import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import history from 'components/history';
import RouteWithSubRoutes from 'components/RouteWithSubRoutes';
import routes from 'routes';

function Application() {
  return (
    <React.StrictMode>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(<Application />, document.getElementById('app-root'));
