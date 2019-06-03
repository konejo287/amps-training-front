import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/common/Header";
//import HomePage from "./home/HomePage";
import CustomersPage from "./customers/CustomersPage";

class App extends React.Component {

    /*componentDidMount() {
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
                </BootstrapTable>,
                <ContactForm onSubmit={this.handleSubmit} />,
                {
                 /* this.props.registry.map(register => (
                        <div key={register.firstName}>{register.firstName}{register.lastName}</div>
                    )) 
                }
            </div>
        );
    }
}

App.propTypes = {
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
}*/

render() {
    return (
      <div className="container-fluid">
            <Switch>
                <Header />
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={CustomersPage} />
            </Switch>
      </div>
    );
  }
}
//export default connect(mapStateToProps, mapDispatchToProps)(App);h
export default App;