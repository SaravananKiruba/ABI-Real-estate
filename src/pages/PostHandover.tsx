import React from 'react';
import { FiAward, FiMessageCircle, FiFolder, FiClock, FiGift, FiUsers, FiStar, FiTool } from 'react-icons/fi';

const PostHandover: React.FC = () => {
  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
            <FiAward className="text-white text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Post-Handover & Relationship
            </h1>
            <p className="text-sm text-gray-600 mt-1">Lifecycle Management Beyond Sale</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-green-500">
          <FiUsers className="text-green-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Total Owners</p>
          <p className="text-3xl font-bold text-gray-900">428</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-orange-500">
          <FiTool className="text-orange-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Open Tickets</p>
          <p className="text-3xl font-bold text-gray-900">23</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-blue-500">
          <FiGift className="text-blue-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Referrals</p>
          <p className="text-3xl font-bold text-gray-900">67</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-purple-500">
          <FiStar className="text-purple-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">NPS Score</p>
          <p className="text-3xl font-bold text-gray-900">8.7</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FiTool className="text-orange-600" />
            Post-Sale Ticketing System
          </h3>
          <div className="space-y-3">
            {[
              { client: 'Rajesh Kumar', issue: 'Water leakage in bathroom', status: 'In Progress', priority: 'High' },
              { client: 'Priya Sharma', issue: 'AC not working', status: 'Assigned', priority: 'Medium' },
              { client: 'Anil Desai', issue: 'Paint touch-up needed', status: 'Pending', priority: 'Low' }
            ].map((ticket, idx) => (
              <div key={idx} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-gray-900">{ticket.client}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    ticket.priority === 'High' ? 'bg-red-100 text-red-800' :
                    ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{ticket.issue}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{ticket.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FiFolder className="text-blue-600" />
            Digital Vault
          </h3>
          <div className="space-y-3">
            {[
              { doc: 'Sale Agreement', date: '2024-01-15', size: '2.4 MB' },
              { doc: 'Handover Certificate', date: '2024-06-20', size: '1.8 MB' },
              { doc: 'Building Plan', date: '2024-01-15', size: '5.2 MB' },
              { doc: 'Warranty Documents', date: '2024-06-20', size: '3.1 MB' }
            ].map((doc, idx) => (
              <div key={idx} className="p-4 bg-blue-50 rounded-xl border border-blue-200 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{doc.doc}</p>
                  <p className="text-xs text-gray-600 mt-1">{doc.date} • {doc.size}</p>
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FiGift className="text-purple-600" />
            Referral Engine
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <p className="font-semibold text-gray-900 mb-2">Referral Program</p>
              <p className="text-sm text-gray-600 mb-3">Earn ₹50,000 for each successful referral!</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">67</p>
                  <p className="text-xs text-gray-600">Total Referrals</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-2xl font-bold text-green-600">₹33.5L</p>
                  <p className="text-xs text-gray-600">Rewards Paid</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FiClock className="text-orange-600" />
            Warranty Timeline Tracker
          </h3>
          <div className="space-y-3">
            {[
              { item: 'Plumbing System', expiry: '2027-06-20', status: 'Active', remaining: '2 years' },
              { item: 'Electrical Fittings', expiry: '2026-06-20', status: 'Active', remaining: '1 year' },
              { item: 'Paint & Finish', expiry: '2025-12-20', status: 'Expiring Soon', remaining: '2 months' }
            ].map((warranty, idx) => (
              <div key={idx} className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{warranty.item}</p>
                    <p className="text-xs text-gray-600 mt-1">Expires: {warranty.expiry}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-semibold ${warranty.status === 'Active' ? 'text-green-600' : 'text-orange-600'}`}>
                      {warranty.remaining}
                    </p>
                    <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs ${
                      warranty.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {warranty.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
        <div className="flex items-start gap-4">
          <FiMessageCircle className="text-4xl flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">WhatsApp Service Line Integration</h3>
            <p className="text-amber-100 mb-4">24/7 customer support for maintenance & queries</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs mb-1">Avg Response Time</p>
                <p className="text-2xl font-bold">12 mins</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs mb-1">Tickets Resolved</p>
                <p className="text-2xl font-bold">234</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs mb-1">Satisfaction Rate</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHandover;
