import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import Home from './containers/Home';
import Nav from './components/Nav';

let store = createStore(reducers);

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Route path="/" component={Home} />
      </div>
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
