import React from 'react';
import Row from './Row';

function Table({ transactions }) {
    return (
        <table className="table-info">
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>Amount</td>
                </tr>
            </thead>

            <Row transactions={transactions} />

        </table>
    );
}

export default Table;
