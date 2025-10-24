import React from 'react';
import { FiBell, FiSettings, FiUser, FiLogOut } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="lg:ml-64">
          <h2 className="text-xl font-semibold text-gray-800">
            Real Estate CRM Dashboard
          </h2>
        </div>

        <div className="flex items-center gap-6">
          <button className="relative text-gray-600 hover:text-gray-900">
            <FiBell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">Admin Role</p>
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <FiUser size={20} />
            </div>
          </div>

          <button className="text-gray-600 hover:text-gray-900">
            <FiSettings size={20} />
          </button>

          <button className="text-gray-600 hover:text-gray-900">
            <FiLogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
