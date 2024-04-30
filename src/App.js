import React, { useState } from 'react';
import './App.css';
import Transactions from './Components/Transactions';
import Header from './Components/Header'
import Search from './Components/Search'
import Table from './Components/Table';


function App() {
  const transactions = [
    {
      date: "20-04-2024",
      description: "Movies",
      category: "Entertainment",
      amount: "4,500"
    },
    {
      date: "21-04-2024",
      description: "Groceries",
      category: "Food",
      amount: "6,500"
    },
    {
      date: "22-04-2024",
      description: "Gas",
      category: "Travel",
      amount: "10,000"
    },
    {
      date: "23-04-2024",
      description: "Headphones",
      category: "Electronics",
      amount: "1,350"
    },
    {
      date: "24-04-2024",
      description: "Restaurant",
      category: "Food",
      amount: "4,500"
    },
    {
      date: "25-04-2024",
      description: "Ticket",
      category: "Transport",
      amount: "2,500"
    },
    {
      date: "26-04-2024",
      description: "Novel",
      category: "Books",
      amount: "900"
    },
    {
      date: "27-04-2024",
      description: "Medicine",
      category: "Health",
      amount: "1,500"
    }
  ];

  const [data, setData] = useState(transactions)
  const [search, setSearch] = useState("")


  function onSubmitData(formData) {
    setData((prevData) => [...prevData, formData])
  }
  function handleChange(e) {
    setSearch(e.target.value)

  }
  const itemsToDisplay = data.filter((transactions) => {
    if (search.length > 0) {
      return transactions.description.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
  });

  return (
    <div className="App">
      <Header />
      <Search search={setSearch} handleChange={handleChange}/>
      <Transactions onSubmitData={onSubmitData} />
      <Table transactions={itemsToDisplay} />
    </div>
  );
}

export default App;
