import React from 'react';
import * as customerActions from '../../redux/actions/customerActions';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const CustomersTable = props => {
    let { customers, actions } = props;

    const selectRowProp = {
        mode: 'checkbox'
    };
    
    const options = {
        afterDeleteRow: onAfterDeleteRow
    };
    
    function onAfterDeleteRow() {
        let customerId = arguments[0][0];
        
    }

    return (
        <BootstrapTable data={ customers } deleteRow={ true } selectRow={ selectRowProp } options={ options } striped hover>
            <TableHeaderColumn isKey dataField='id'>Customer ID</TableHeaderColumn>
            <TableHeaderColumn dataField='first_name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='last_name'>lastName</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default CustomersTable;
