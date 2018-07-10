import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import reducer from './reducer';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const Erying = () => {
    return <h2>二营</h2>
}

const Qibinglian = () => {
    return <h2>骑兵连</h2>
}

const Test = () => {
    return <h2>Test</h2>
}
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <div>
                <ul>
                    <li>
                        <Link to="/">一营</Link>
                    </li>
                    <li>
                        <Link to="/erying">二营</Link>
                    </li>
                    <li>
                        <Link to="/qibinglian">骑兵连</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/erying" component={Erying} />
                    <Route path="/qibinglian" component={Qibinglian} />
                    <Route path="/:location" component={Test} />
                </Switch>
            </div> */}
            <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/login" component={Login} />
                <Redirect to="/dashboard" />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))
