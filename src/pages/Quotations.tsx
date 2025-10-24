import React, { useState } from 'react';
import {
  FiPlus, FiDownload, FiEdit2, FiCheckCircle, FiSend,
  FiCopy, FiFileText, FiSearch, FiFilter
} from 'react-icons/fi';
import { dummyQuotations } from '../data/dummyData';

const Quotations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredQuotations = dummyQuotations.filter((q) => {
    const matchesSearch = q.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || q.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || q.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'approved': return 'bg-green-100 text-green-700 border-green-200';
      case 'sent': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'draft': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'rejected': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-warm bg-clip-text text-transparent">Quotation Management</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">GST-ready quotations with digital signatures</p>
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-gradient-warm text-white rounded-xl hover:shadow-elegant-hover transition-all">
          <FiPlus size={20} />
          <span>Create Quotation</span>
        </button>
      </div>

      {/* Stats Cards - Mobile Responsive */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-brand-coral hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs md:text-sm text-gray-500 font-medium">Total</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">{filteredQuotations.length}</p>
            </div>
            <FiFileText className="text-brand-coral text-2xl md:text-3xl" />
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-green-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs md:text-sm text-gray-500 font-medium">Approved</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                {dummyQuotations.filter((q) => q.status === 'approved').length}
              </p>
            </div>
            <FiCheckCircle className="text-green-500 text-2xl md:text-3xl" />
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-blue-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs md:text-sm text-gray-500 font-medium">Sent</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                {dummyQuotations.filter((q) => q.status === 'sent').length}
              </p>
            </div>
            <FiSend className="text-blue-500 text-2xl md:text-3xl" />
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-gray-400 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs md:text-sm text-gray-500 font-medium">Draft</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                {dummyQuotations.filter((q) => q.status === 'draft').length}
              </p>
            </div>
            <FiEdit2 className="text-gray-400 text-2xl md:text-3xl" />
          </div>
        </div>
      </div>

      {/* Filters - Mobile Responsive */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by client or quotation ID..."
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all text-sm md:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <FiFilter className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <select
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all appearance-none bg-white text-sm md:text-base"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="sent">Sent</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quotations Grid - Mobile Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {filteredQuotations.map((quotation) => (
          <div key={quotation.id} className="bg-white rounded-xl md:rounded-2xl shadow-card hover:shadow-elegant transition-all overflow-hidden border-l-4 border-brand-coral">
            <div className="p-4 md:p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-coral to-orange-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md flex-shrink-0">
                    <FiFileText size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 truncate">{quotation.id}</h3>
                    <p className="text-xs md:text-sm text-gray-600 truncate">{quotation.clientName}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${getStatusColor(quotation.status)}`}>
                  {quotation.status.charAt(0).toUpperCase() + quotation.status.slice(1)}
                </span>
              </div>

              {/* Property Details */}
              <div className="bg-brand-cream/50 rounded-xl p-3 md:p-4 mb-4">
                <p className="text-xs md:text-sm font-semibold text-gray-900 mb-3">{quotation.property}</p>
                
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Price:</span>
                    <span className="font-semibold">{quotation.basePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST (18%):</span>
                    <span className="font-semibold">{quotation.gst}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stamp Duty:</span>
                    <span className="font-semibold">{quotation.stampDuty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount:</span>
                    <span className="font-semibold text-red-600">-{quotation.discount}</span>
                  </div>
                  <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between">
                    <span className="font-bold text-gray-900">Total Amount:</span>
                    <span className="font-bold text-brand-coral text-base md:text-lg">{quotation.total}</span>
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 mb-4 gap-2">
                <span className="flex items-center gap-1">
                  <FiFileText size={12} />
                  Created: {quotation.createdDate}
                </span>
                <span className="flex items-center gap-1">
                  <FiCheckCircle size={12} />
                  Valid Till: {quotation.validTill}
                </span>
              </div>

              {/* Actions - Mobile Responsive */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-brand-teal/10 text-brand-teal rounded-xl hover:bg-brand-teal/20 transition-all text-xs md:text-sm font-semibold">
                  <FiDownload size={14} />
                  <span className="hidden sm:inline">PDF</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-all text-xs md:text-sm font-semibold">
                  <FiSend size={14} />
                  <span className="hidden sm:inline">Send</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-brand-sage/10 text-brand-sage rounded-xl hover:bg-brand-sage/20 transition-all text-xs md:text-sm font-semibold">
                  <FiCopy size={14} />
                  <span className="hidden sm:inline">Copy</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-brand-coral/10 text-brand-coral rounded-xl hover:bg-brand-coral/20 transition-all text-xs md:text-sm font-semibold">
                  <FiEdit2 size={14} />
                  <span className="hidden sm:inline">Edit</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredQuotations.length === 0 && (
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 text-center">
          <FiFileText size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg md:text-xl font-semibold">No quotations found</p>
          <p className="text-gray-400 text-sm mt-2">Create your first quotation to get started</p>
        </div>
      )}
    </div>
  );
};

export default Quotations;
