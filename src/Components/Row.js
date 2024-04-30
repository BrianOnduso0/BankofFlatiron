import React from 'react';

function Row({ transactions }) {
  const rows = transactions.map((transaction, index) => (
    <tr className='table-data'>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  ));

  return <div>{rows}</div>;
}

export default Row;
