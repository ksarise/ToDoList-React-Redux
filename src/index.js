import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadFromStorageToState, saveToStorageFromState } from './localStorage';
import reducers from './reducers';
import App from './App';
import './styles/style.sass';
import throttle from 'lodash/throttle';

const persistedState = loadFromStorageToState();

const store = createStore(
  reducers,
  persistedState
);


store.subscribe(throttle(() => { 
  saveToStorageFromState({
    todos: store.getState().todos
  }) 
}, 1000));

ReactDOM.render(
  <Provider store={ store }>
    <div className="container">
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);