import React from 'react';
import { Menu, X, Home, BarChart2, DollarSign, Award, List, Users } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarItems = [
    { icon: Home, label: 'Home' },
    { icon: BarChart2, label: 'Work Status' },
    { icon: DollarSign, label: 'Cash Flow' },
    { icon: Award, label: 'Reward Points' },
    { icon: List, label: 'Transactions' },
    { icon: Users, label: 'Affiliates' },
  ];

  return (
    <div
      className={`bg-gray-800 text-white transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      } min-h-screen`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} className="mb-4">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <item.icon size={24} className="mr-4" />
                {isOpen && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;