import React, { useState } from 'react';
import {
  FiDollarSign, FiClock, FiAlertCircle, FiDownload,
  FiFilter, FiSearch, FiCheckCircle, FiSend, FiPlus, FiX
} from 'react-icons/fi';
import { dummyFinance } from '../data/dummyData';

const Finance: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    clientName: '',
    propertyName: '',
    amount: '',
    dueDate: '',
    milestone: '',
    gstPercentage: '18',
    paymentMethod: 'bank_transfer',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({
      clientName: '',
      propertyName: '',
      amount: '',
      dueDate: '',
      milestone: '',
      gstPercentage: '18',
      paymentMethod: 'bank_transfer',
      notes: '',
    });
    setShowAddForm(false);
    // Show success message (you could add a toast notification here)
    alert('Invoice created successfully!');
  };

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
          <button 
            onClick={() => setShowAddForm(true)}
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-gradient-to-r from-brand-coral to-orange-500 text-white rounded-xl hover:shadow-elegant-hover transition-all"
          >
            <FiPlus size={20} />
            <span>Add Invoice</span>
          </button>
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

      {/* Add Invoice Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-brand-coral to-orange-500 text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Create New Invoice</h2>
                <p className="text-white/80 text-sm mt-1">Add a new invoice entry to the system</p>
              </div>
              <button 
                onClick={() => setShowAddForm(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-all"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Client Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Client Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all"
                    placeholder="Enter client name"
                  />
                </div>

                {/* Property Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="propertyName"
                    value={formData.propertyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all"
                    placeholder="Enter property name"
                  />
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all"
                    placeholder="Enter amount"
                  />
                </div>

                {/* GST Percentage */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    GST Percentage <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gstPercentage"
                    value={formData.gstPercentage}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all appearance-none bg-white"
                  >
                    <option value="0">0% (Exempt)</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                {/* Due Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Due Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all"
                  />
                </div>

                {/* Milestone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Milestone <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="milestone"
                    value={formData.milestone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all appearance-none bg-white"
                  >
                    <option value="">Select milestone</option>
                    <option value="Token Amount">Token Amount</option>
                    <option value="Booking Amount">Booking Amount</option>
                    <option value="Agreement Signing">Agreement Signing</option>
                    <option value="Construction Phase 1">Construction Phase 1</option>
                    <option value="Construction Phase 2">Construction Phase 2</option>
                    <option value="Pre-Possession">Pre-Possession</option>
                    <option value="Final Payment">Final Payment</option>
                    <option value="Possession">Possession</option>
                  </select>
                </div>

                {/* Payment Method */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Payment Method <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all appearance-none bg-white"
                  >
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="cheque">Cheque</option>
                    <option value="online_payment">Online Payment</option>
                    <option value="cash">Cash</option>
                    <option value="demand_draft">Demand Draft</option>
                  </select>
                </div>

                {/* Notes */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all resize-none"
                    placeholder="Add any additional notes or instructions..."
                  />
                </div>
              </div>

              {/* Calculation Summary */}
              {formData.amount && (
                <div className="mt-6 p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Invoice Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Amount:</span>
                      <span className="font-semibold">₹{parseFloat(formData.amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GST ({formData.gstPercentage}%):</span>
                      <span className="font-semibold">₹{(parseFloat(formData.amount) * parseFloat(formData.gstPercentage) / 100).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="pt-2 border-t-2 border-gray-300 flex justify-between text-base">
                      <span className="text-gray-900 font-bold">Total Amount:</span>
                      <span className="font-bold text-brand-coral">₹{(parseFloat(formData.amount) * (1 + parseFloat(formData.gstPercentage) / 100)).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Actions */}
              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-brand-coral to-orange-500 text-white rounded-xl hover:shadow-elegant-hover transition-all font-semibold"
                >
                  Create Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Finance;
