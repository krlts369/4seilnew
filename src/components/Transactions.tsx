import React, { useState } from 'react';
import { Table } from './Table';

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-04-01', description: 'Grocery Shopping', amount: -150 },
    { id: 2, date: '2023-04-02', description: 'Salary Deposit', amount: 3000 },
    { id: 3, date: '2023-04-03', description: 'Utility Bill', amount: -200 },
  ]);

  const columns = [
    { Header: 'Date', accessor: 'date' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'Amount', accessor: 'amount' },
  ];

  const handleEdit = (id: number, newData: any) => {
    setTransactions(transactions.map(item => (item.id === id ? { ...item, ...newData } : item)));
  };

  const handleDelete = (id: number) => {
    setTransactions(transactions.filter(item => item.id !== id));
  };

  const handleAdd = (newData: any) => {
    const newId = Math.max(...transactions.map(item => item.id)) + 1;
    setTransactions([...transactions, { id: newId, ...newData }]);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
      <Table
        columns={columns}
        data={transactions}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default Transactions;