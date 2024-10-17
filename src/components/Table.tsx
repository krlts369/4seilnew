import React, { useState } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';

interface Column {
  Header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: any[];
  onEdit: (id: number, newData: any) => void;
  onDelete: (id: number) => void;
  onAdd: (newData: any) => void;
}

export const Table: React.FC<TableProps> = ({ columns, data, onEdit, onDelete, onAdd }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newRow, setNewRow] = useState<any>({});

  const handleEdit = (id: number) => {
    setEditingId(id);
  };

  const handleSave = (id: number) => {
    onEdit(id, data.find(item => item.id === id));
    setEditingId(null);
  };

  const handleChange = (id: number, key: string, value: string) => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, [key]: value } : item
    );
    onEdit(id, updatedData.find(item => item.id === id));
  };

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  const handleAddChange = (key: string, value: string) => {
    setNewRow({ ...newRow, [key]: value });
  };

  const handleAddSave = () => {
    onAdd(newRow);
    setNewRow({});
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.Header}
              </th>
            ))}
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column, index) => (
                <td key={index} className="px-6 py-4 whitespace-nowrap">
                  {editingId === row.id ? (
                    <input
                      type="text"
                      value={row[column.accessor]}
                      onChange={(e) => handleChange(row.id, column.accessor, e.target.value)}
                      className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {editingId === row.id ? (
                  <button
                    onClick={() => handleSave(row.id)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(row.id)}
                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                  >
                    <Edit size={16} />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(row.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            {columns.map((column, index) => (
              <td key={index} className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  value={newRow[column.accessor] || ''}
                  onChange={(e) => handleAddChange(column.accessor, e.target.value)}
                  placeholder={`New ${column.Header}`}
                  className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </td>
            ))}
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                onClick={handleAddSave}
                className="text-green-600 hover:text-green-900"
              >
                <Plus size={16} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};