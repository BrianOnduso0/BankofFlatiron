import React, { useState } from 'react';
import '../index.css';

function Transactions({ onSubmitData }) {
    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitData(formData);
        setFormData({
            date: "",
            description: "",
            category: "",
            amount: ""
        });
    };

    return (
        <form className="row g-2 mt-2 mx-auto p-2" onSubmit={handleSubmit}>
            <div className="calendar">
                <label className="days">Date:</label>
                <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="input">
                <input type="text" className="form-control" placeholder="Description" name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div className="input">
                <input type="text" className="form-control" placeholder="Category" name="category" value={formData.category} onChange={handleChange} required />
            </div>
            <div className="input">
                <input type="number" className="form-control" placeholder="Amount" name="amount" value={formData.amount} onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-button" >
                Add Transaction
            </button>
        </form>
    );
}

export default Transactions;
