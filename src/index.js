import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import CLConstance from './components/utils/Constance';
import App from './components/App';
import CLHome from './components/home/CLHome';
import CLBlogs from './components/blogs/CLBlogs';
import CLPortfolio from './components/portfolio/CLPortfolio';

import './index.css';

const routesData = CLConstance.staticData.routes;
const routes = (
    <Router history={browserHistory}>
        <Route component={App} >
            <Route path={routesData.home} component={CLHome} />
            <Route path={routesData.blogs} component={CLBlogs} />
            <Route path={routesData.portfolio} component={CLPortfolio} />
        </Route>
    </Router>
);

ReactDOM.render(
    routes,
    document.getElementById('root')
);
