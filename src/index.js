import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './containers/post/post';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import * as reducers from './store/reducers';

import { Route, Switch } from 'react-router'; // react-router v4

const history = createBrowserHistory();
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);


const store = createStore(
    connectRouter(history)(reducers.post),
    composedEnhancers
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/post/:id" component={Post} />
                    <Route path="/post/" component={Post} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
