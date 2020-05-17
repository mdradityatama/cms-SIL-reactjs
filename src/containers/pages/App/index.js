import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { store } from '../../../config/redux';
import { Provider } from 'react-redux';

import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
