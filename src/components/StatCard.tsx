import React from 'react';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, color }) => {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50',
    green: 'border-green-500 bg-green-50',
    purple: 'border-purple-500 bg-purple-50',
    orange: 'border-orange-500 bg-orange-50',
  };

  const textColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
  };

  const isPositive = change.startsWith('+');

  return (
    <div
      className={`${
        colorClasses[color as keyof typeof colorClasses]
      } border-l-4 rounded-lg p-6 bg-white shadow`}
    >
      <p className="text-gray-600 text-sm font-medium">{title}</p>
      <p className={`text-3xl font-bold mt-2 ${textColorClasses[color as keyof typeof textColorClasses]}`}>
        {value}
      </p>
      <div className="flex items-center gap-2 mt-4">
        {isPositive ? (
          <FiTrendingUp className="text-green-500" />
        ) : (
          <FiTrendingDown className="text-red-500" />
        )}
        <span className={isPositive ? 'text-green-600' : 'text-red-600'}>
          {change}
        </span>
        <span className="text-gray-500 text-xs">from last month</span>
      </div>
    </div>
  );
};

export default StatCard;
