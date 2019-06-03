import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import configureStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux';
import { BrowseerRouter as Router } from 'react-router-dom';

const store = configureStore();

render(
  <ReduxProvider store={store}>
  <App />
  </ReduxProvider>,
  document.getElementById('app'))
