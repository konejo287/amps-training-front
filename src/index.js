import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import React from "react";
import { render } from "react-dom";
import configureStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./components/App";



const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('app'))
