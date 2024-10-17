import React, { useState } from 'react';
import { Table } from './Table';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const RewardPoints: React.FC = () => {
  const [rewardPoints, setRewardPoints] = useState([
    { id: 1, category: 'Shopping', points: 500 },
    { id: 2, category: 'Travel', points: 750 },
    { id: 3, category: 'Dining', points: 300 },
  ]);

  const columns = [
    { Header: 'Category', accessor: 'category' },
    { Header: 'Points', accessor: 'points' },
  ];

  const handleEdit = (id: number, newData: any) => {
    setRewardPoints(rewardPoints.map(item => (item.id === id ? { ...item, ...newData } : item)));
  };

  const handleDelete = (id: number) => {
    setRewardPoints(rewardPoints.filter(item => item.id !== id));
  };

  const handleAdd = (newData: any) => {
    const newId = Math.max(...rewardPoints.map(item => item.id)) + 1;
    setRewardPoints([...rewardPoints, { id: newId, ...newData }]);
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Reward Points</h2>
      <div className="mb-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={rewardPoints}
              dataKey="points"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {rewardPoints.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <Table
        columns={columns}
        data={rewardPoints}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default RewardPoints;