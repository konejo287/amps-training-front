import React from "react";
import { connect } from 'react-redux';
import * as customerActions from '../../redux/actions/customerActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import ContactForm from './ContacForm';

class CustomersPage extends React.Component {

    componentDidMount() {
        const { actions } = this.props;

        actions.loadCustomers()
        .catch(error => {
            console.log('there was an error when loading customers ' , error);
        })
    }

    selectRowProp = {
        mode: 'checkbox'
    };

    options = {
        afterDeleteRow: this.onAfterDeleteRow
    };

    onAfterDeleteRow = (rowKeys) => {
        console.log('after on delete ' , rowKeys[0] , this.props);
        
    }

    handleSubmit = (values) => {
        const customers = { ...values };
        this.props.actions.createCustomer(customers);
    }

    render() {
        return (
            <div>
              <div className="row">
                <div className="col-5">
                  <ContactForm onSubmit={ this.handleSubmit } />
                </div>
                <div className="col">
                    <BootstrapTable data={ this.props.customers } deleteRow={ true } selectRow={ this.selectRowProp } options={ this.options } striped hover>
                        <TableHeaderColumn isKey dataField='id'>Customer ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='first_name'>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='last_name'>lastName</TableHeaderColumn>
                    </BootstrapTable>
                </div>
              </div>
                {
                 /* this.props.registry.map(register => (
                        <div key={register.firstName}>{register.firstName}{register.lastName}</div>
                    )) */
                }
            </div>
        );
    }
}

CustomersPage.propTypes = {
    customers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        customers: state.customers
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCustomers: bindActionCreators(customerActions.loadCustomers, dispatch),
            createCustomer: bindActionCreators(customerActions.createCustomer, dispatch),
            deleteCustomer: bindActionCreators(customerActions.createCustomer, dispatch)
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);