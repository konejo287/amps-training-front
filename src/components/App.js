import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/common/Header";
//import HomePage from "./home/HomePage";
import CustomersPage from "./customers/CustomersPage";

class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Route path="/customers" component={CustomersPage} />
                <Route path="/orders" component={CustomersPage} />
            </div>
        );
    }
}

export default App;