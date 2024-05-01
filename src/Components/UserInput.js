import React, { useState } from 'react';
import TransactionItem from './TransactionItem';
import { bankItems } from './Database';
import './UserInput.css';

function UserInput() {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: bankItems.length + 1,
      ...formData,
    };
    bankItems.push(newTransaction);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = bankItems.filter((transaction) =>
    transaction.id.toString().includes(searchTerm) ||
    transaction.date.includes(searchTerm) ||
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.amount.toString().includes(searchTerm)
  );

  return (
    <div className="Input">
      <input
        type="text"
        placeholder="Search Transactions"
        value={searchTerm}
        onChange={handleSearch}
      />
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Transaction</button>
        
      </form>

      <h2>Transactions</h2>
      <TransactionItem transactions={filteredTransactions} />
    </div>
  );
}

export default UserInput;
