import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';

import Container from './app/utils/Container';
import HomePage from './app/home/HomePage';

const Routes = () => (
    <Router history={browserHistory}>
        <Route component={Container}>
            <Route path="/(search/:keyword)" component={HomePage}/>
        </Route>
    </Router>
);

export default Routes;
