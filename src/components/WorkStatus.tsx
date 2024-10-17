import React, { useState } from 'react';
import { Table } from './Table';

const WorkStatus: React.FC = () => {
  const [workStatus, setWorkStatus] = useState([
    { id: 1, project: 'Project A', status: 'In Progress', dueDate: '2023-04-15' },
    { id: 2, project: 'Project B', status: 'Completed', dueDate: '2023-03-30' },
    { id: 3, project: 'Project C', status: 'Not Started', dueDate: '2023-05-01' },
  ]);

  const columns = [
    { Header: 'Project', accessor: 'project' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Due Date', accessor: 'dueDate' },
  ];

  const handleEdit = (id: number, newData: any) => {
    setWorkStatus(workStatus.map(item => (item.id === id ? { ...item, ...newData } : item)));
  };

  const handleDelete = (id: number) => {
    setWorkStatus(workStatus.filter(item => item.id !== id));
  };

  const handleAdd = (newData: any) => {
    const newId = Math.max(...workStatus.map(item => item.id)) + 1;
    setWorkStatus([...workStatus, { id: newId, ...newData }]);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Work Status</h2>
      <Table
        columns={columns}
        data={workStatus}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default WorkStatus;