import React, { useState } from 'react';
import { Table } from './Table';

const Affiliates: React.FC = () => {
  const [affiliates, setAffiliates] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', referrals: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', referrals: 3 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', referrals: 7 },
  ]);

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Referrals', accessor: 'referrals' },
  ];

  const handleEdit = (id: number, newData: any) => {
    setAffiliates(affiliates.map(item => (item.id === id ? { ...item, ...newData } : item)));
  };

  const handleDelete = (id: number) => {
    setAffiliates(affiliates.filter(item => item.id !== id));
  };

  const handleAdd = (newData: any) => {
    const newId = Math.max(...affiliates.map(item => item.id)) + 1;
    setAffiliates([...affiliates, { id: newId, ...newData }]);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Affiliates</h2>
      <Table
        columns={columns}
        data={affiliates}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default Affiliates;