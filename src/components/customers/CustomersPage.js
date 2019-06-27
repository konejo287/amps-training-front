import React from "react";
import { connect } from 'react-redux';
import * as customerActions from '../../redux/actions/customerActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import CustomersTable from './CustomersTable';
import ContactForm from './ContacForm';
import { conditionalExpression } from "@babel/types";

class CustomersPage extends React.Component {

    componentDidMount() {
        const { actions } = this.props;

        actions.loadCustomers()
        .catch(error => {
            console.log('there was an error when loading customers ' , error);
        })
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
                  <CustomersTable customers={this.props.customers} actions={this.props}/>
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
            deleteCustomer: bindActionCreators(customerActions.deleteCustomer, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);