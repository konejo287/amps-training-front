import React from "react";
import { connect } from 'react-redux';
import * as customerActions from '../redux/actions/customerActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ContactForm from './ContacForm';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Welcome</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="customers" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;