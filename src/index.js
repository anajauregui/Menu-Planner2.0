import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index-reducers';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  devTools,
  applyMiddleware(thunk, middleware),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
