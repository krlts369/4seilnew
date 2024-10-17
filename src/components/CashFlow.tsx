import React, { useState } from 'react';
import { Table } from './Table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CashFlow: React.FC = () => {
  const [cashFlowData, setCashFlowData] = useState([
    { id: 1, date: '2023-03-01', income: 5000, expenses: 3000 },
    { id: 2, date: '2023-03-15', income: 4500, expenses: 3200 },
    { id: 3, date: '2023-04-01', income: 6000, expenses: 3500 },
  ]);

  const columns = [
    { Header: 'Date', accessor: 'date' },
    { Header: 'Income', accessor: 'income' },
    { Header: 'Expenses', accessor: 'expenses' },
  ];

  const handleEdit = (id: number, newData: any) => {
    setCashFlowData(cashFlowData.map(item => (item.id === id ? { ...item, ...newData } : item)));
  };

  const handleDelete = (id: number) => {
    setCashFlowData(cashFlowData.filter(item => item.id !== id));
  };

  const handleAdd = (newData: any) => {
    const newId = Math.max(...cashFlowData.map(item => item.id)) + 1;
    setCashFlowData([...cashFlowData, { id: newId, ...newData }]);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Cash Flow</h2>
      <div className="mb-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={cashFlowData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#4CAF50" />
            <Bar dataKey="expenses" fill="#F44336" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Table
        columns={columns}
        data={cashFlowData}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default CashFlow;