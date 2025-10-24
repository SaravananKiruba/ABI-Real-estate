import React, { useState } from 'react';
import {
  FiDollarSign, FiClock, FiAlertCircle, FiDownload,
  FiFilter, FiSearch, FiCheckCircle, FiSend
} from 'react-icons/fi';
import { dummyFinance } from '../data/dummyData';

const Finance: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredFinance = dummyFinance.filter((invoice) => {
    const matchesSearch = invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'paid': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'overdue': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Finance Management</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">Track payments, invoices & GST compliance</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-elegant-hover transition-all">
            <FiDownload size={20} />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-blue-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total Invoiced</p>
            <FiDollarSign className="text-blue-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">₹2.75Cr</p>
          <p className="text-xs text-gray-500 mt-1">This year</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-green-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Collected</p>
            <FiCheckCircle className="text-green-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">₹1.85Cr</p>
          <p className="text-xs text-green-600 mt-1">67% collected</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-yellow-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Pending</p>
            <FiClock className="text-yellow-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">₹90.5L</p>
          <p className="text-xs text-yellow-600 mt-1">23 invoices</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-red-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Overdue</p>
            <FiAlertCircle className="text-red-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">₹82.25L</p>
          <p className="text-xs text-red-600 mt-1">Action needed</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by client or invoice ID..."
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm md:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <FiFilter className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <select
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none bg-white text-sm md:text-base"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>
      </div>

      {/* Invoices Table - Mobile Responsive */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-card overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-brand-teal to-brand-sage text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Invoice ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Due Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Milestone</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFinance.map((invoice, index) => (
                <tr key={invoice.id} className={`border-b hover:bg-brand-cream/50 transition-all ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-6 py-4 font-semibold text-gray-900">{invoice.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{invoice.clientName}</td>
                  <td className="px-6 py-4 font-bold text-brand-coral">{invoice.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{invoice.dueDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{invoice.milestone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(invoice.status)}`}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-all">
                        <FiSend size={16} className="text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-all">
                        <FiDownload size={16} className="text-blue-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4 p-4">
          {filteredFinance.map((invoice) => (
            <div key={invoice.id} className="bg-gray-50 rounded-xl p-4 border-l-4 border-brand-coral">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-gray-900">{invoice.id}</p>
                  <p className="text-sm text-gray-600 mt-1">{invoice.clientName}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(invoice.status)}`}>
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-bold text-brand-coral">{invoice.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Due:</span>
                  <span className="font-semibold">{invoice.dueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Milestone:</span>
                  <span className="font-semibold">{invoice.milestone}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4 pt-3 border-t">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-all text-sm font-semibold">
                  <FiSend size={14} />
                  Remind
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all text-sm font-semibold">
                  <FiDownload size={14} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredFinance.length === 0 && (
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 text-center mt-6">
          <FiDollarSign size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg md:text-xl font-semibold">No invoices found</p>
          <p className="text-gray-400 text-sm mt-2">Adjust your filters or create a new invoice</p>
        </div>
      )}
    </div>
  );
};

export default Finance;
