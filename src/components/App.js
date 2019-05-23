import React from "react";
import { connect } from 'react-redux';
import * as customerActions from '../redux/actions/customerActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ContactForm from './ContacForm';

class App extends React.Component {
    
    /*state = {
        firstName: "",
        lastName: "",
        email: ""
    };   //quito este state completo*/

    componentDidMount() {
        const { customers, actions } = this.props;

        actions.loadCustomers().catch(error => {
            alert('there was an error when loading customers ' , error);
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
                <ContactForm onSubmit={this.handleSubmit} />,
                {
                 /* this.props.registry.map(register => (
                        <div key={register.firstName}>{register.firstName}{register.lastName}</div>
                    )) */
                }
            </div>
        );
    }
}

App.propTypes = {
    customers: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        customers: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCustomers: bindActionCreators(customerActions.loadCustomers, dispatch)
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);