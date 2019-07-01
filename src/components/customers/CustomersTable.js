import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const CustomersTable = props => {
    let { customers, actions } = props;

    return (
        <BootstrapTable data={ customers } deleteRow={ true } selectRow={ props.selectRowProp } options={ props.options } striped hover>
            <TableHeaderColumn isKey dataField='id'>Customer ID</TableHeaderColumn>
            <TableHeaderColumn dataField='first_name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='last_name'>lastName</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default CustomersTable;
