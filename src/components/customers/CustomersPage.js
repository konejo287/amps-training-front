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

    handleSubmit = (values) => {
        console.log(values);
        const customers = { ...values };
        this.setState({ customers: customers });
        this.props.actions.createCustomer(this.state);
    }

    render() {
        return (
            <div>
                <BootstrapTable data={ this.props.customers } striped hover>
                    <TableHeaderColumn isKey dataField='id'>Customer ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='first_name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='last_name'>lastName</TableHeaderColumn>
                </BootstrapTable>
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
            loadCustomers: bindActionCreators(customerActions.loadCustomers, dispatch)
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);