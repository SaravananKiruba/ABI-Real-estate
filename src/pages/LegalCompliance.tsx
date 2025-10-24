import React from 'react';
import { FiShield, FiFileText, FiCheckCircle, FiAlertCircle, FiCalendar, FiDollarSign } from 'react-icons/fi';

const LegalCompliance: React.FC = () => {
  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
            <FiShield className="text-white text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Legal & Compliance Intelligence
            </h1>
            <p className="text-sm text-gray-600 mt-1">RERA, GST & Documentation Management</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-green-500">
          <FiCheckCircle className="text-green-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">RERA Registered</p>
          <p className="text-3xl font-bold text-gray-900">8</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-yellow-500">
          <FiAlertCircle className="text-yellow-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Pending Docs</p>
          <p className="text-3xl font-bold text-gray-900">12</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-blue-500">
          <FiFileText className="text-blue-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">KYC Complete</p>
          <p className="text-3xl font-bold text-gray-900">245</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-red-500">
          <FiCalendar className="text-red-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Expiring Soon</p>
          <p className="text-3xl font-bold text-gray-900">5</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">RERA Registration Tracker</h3>
          <div className="space-y-3">
            {['Sunshine Apartments', 'Metro Plaza', 'Green Valley Villas'].map((project, idx) => (
              <div key={idx} className="p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">{project}</p>
                    <p className="text-sm text-gray-600 mt-1">RERA No: MH/2024/{10000 + idx}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">Valid</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">GST + Stamp Duty Calculator</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">Property Value</p>
              <p className="text-2xl font-bold text-gray-900">₹50,00,000</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-xl">
                <p className="text-xs text-gray-600">GST (5%)</p>
                <p className="text-xl font-bold text-purple-600">₹2,50,000</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl">
                <p className="text-xs text-gray-600">Stamp Duty (7%)</p>
                <p className="text-xl font-bold text-orange-600">₹3,50,000</p>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white">
              <p className="text-sm mb-1">Total Amount Payable</p>
              <p className="text-2xl font-bold">₹56,00,000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-card p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Document Expiry Tracker</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Client</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Document</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Expiry Date</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">Rajesh Kumar</td>
                <td className="px-4 py-3 text-sm">PAN Card</td>
                <td className="px-4 py-3 text-sm">2025-12-31</td>
                <td className="px-4 py-3"><span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Valid</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">Priya Sharma</td>
                <td className="px-4 py-3 text-sm">Aadhar Card</td>
                <td className="px-4 py-3 text-sm">2025-11-15</td>
                <td className="px-4 py-3"><span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Expiring Soon</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LegalCompliance;
