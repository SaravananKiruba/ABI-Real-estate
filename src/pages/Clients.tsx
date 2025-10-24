import React, { useState } from 'react';
import { 
  FiPlus, FiSearch, FiEdit2, FiTrash2, FiDownload, FiPhone, FiMail, 
  FiUser, FiFilter, FiEye, FiUpload, FiCalendar,
  FiDollarSign, FiFileText, FiAlertCircle, FiCheckCircle, FiClock
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { dummyClients } from '../data/dummyData';

const Clients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [showClientModal, setShowClientModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'interactions' | 'documents' | 'payments'>('overview');
  const [filterStage, setFilterStage] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');

  const filteredClients = dummyClients.filter((client) => {
    const matchesSearch = 
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStage = filterStage === 'all' || client.stage === filterStage;
    const matchesPriority = filterPriority === 'all' || client.priority === filterPriority;
    
    return matchesSearch && matchesStage && matchesPriority;
  });

  return (
    <div className="lg:ml-64 p-4 md:p-8 bg-brand-cream min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">Client Management</h1>
          <p className="text-gray-600 mt-2">360° view of all your clients with complete interaction history</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-brand-teal text-brand-teal rounded-xl hover:bg-brand-teal hover:text-white transition-all shadow-elegant">
            <FiDownload size={20} />
            Export
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-brand text-white rounded-xl hover:shadow-elegant-hover transition-all">
            <FiPlus size={20} />
            Add Client
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-brand-teal hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Clients</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{filteredClients.length}</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <FiCheckCircle size={12} /> +12% this month
              </p>
            </div>
            <div className="w-14 h-14 bg-brand-teal/10 rounded-xl flex items-center justify-center">
              <FiUser size={24} className="text-brand-teal" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-brand-coral hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Booked</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {dummyClients.filter((c) => c.stage === 'booked').length}
              </p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <FiCheckCircle size={12} /> +8% conversion
              </p>
            </div>
            <div className="w-14 h-14 bg-brand-coral/10 rounded-xl flex items-center justify-center">
              <FiCheckCircle size={24} className="text-brand-coral" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-brand-sage hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">High Priority</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {dummyClients.filter((c) => c.priority === 'high').length}
              </p>
              <p className="text-xs text-brand-coral mt-1 flex items-center gap-1">
                <FiAlertCircle size={12} /> Needs attention
              </p>
            </div>
            <div className="w-14 h-14 bg-brand-sage/10 rounded-xl flex items-center justify-center">
              <FiAlertCircle size={24} className="text-brand-sage" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-purple-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Follow-ups Due</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
              <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
                <FiClock size={12} /> 3 overdue
              </p>
            </div>
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center">
              <FiCalendar size={24} className="text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-card p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <FiSearch className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search clients by name, email, or phone..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <FiFilter className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <select
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all appearance-none bg-white"
              value={filterStage}
              onChange={(e) => setFilterStage(e.target.value)}
            >
              <option value="all">All Stages</option>
              <option value="prospect">Prospect</option>
              <option value="verified">Verified</option>
              <option value="booked">Booked</option>
            </select>
          </div>

          <div className="relative">
            <FiFilter className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <select
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all appearance-none bg-white"
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
        </div>
      </div>

      {/* Enhanced Clients Table */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-brand-teal to-brand-sage text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Client Details</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Project & Stage</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Priority</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Budget</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Last Contact</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client, index) => (
                <tr 
                  key={client.id} 
                  className={`border-b hover:bg-brand-cream/50 transition-all cursor-pointer ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                  onClick={() => {
                    setSelectedClient(client);
                    setShowClientModal(true);
                  }}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-sage rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{client.name}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          {client.source} • {client.documents.length} docs
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <FiMail size={14} className="text-brand-teal" />
                        {client.email}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <FiPhone size={14} className="text-brand-coral" />
                        {client.phone}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900 text-sm mb-1">{client.project}</p>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                        client.stage === 'booked'
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : client.stage === 'verified'
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {client.stage.charAt(0).toUpperCase() + client.stage.slice(1)}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                        client.priority === 'high'
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : client.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                          : 'bg-gray-100 text-gray-600 border border-gray-200'
                      }`}
                    >
                      <FiAlertCircle size={12} />
                      {client.priority.charAt(0).toUpperCase() + client.priority.slice(1)}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <p className="font-bold text-brand-coral">{client.budget}</p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{client.lastContact}</p>
                    <p className="text-xs text-gray-400 mt-1">3 days ago</p>
                  </td>

                  <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        className="p-2 hover:bg-brand-teal/10 rounded-lg transition-all group"
                        title="View 360° Profile"
                      >
                        <FiEye size={18} className="text-brand-teal group-hover:scale-110 transition-transform" />
                      </button>
                      <button 
                        className="p-2 hover:bg-green-50 rounded-lg transition-all group"
                        title="WhatsApp"
                      >
                        <FaWhatsapp size={18} className="text-green-600 group-hover:scale-110 transition-transform" />
                      </button>
                      <button 
                        className="p-2 hover:bg-brand-coral/10 rounded-lg transition-all group"
                        title="Call"
                      >
                        <FiPhone size={18} className="text-brand-coral group-hover:scale-110 transition-transform" />
                      </button>
                      <button 
                        className="p-2 hover:bg-blue-50 rounded-lg transition-all group"
                        title="Edit"
                      >
                        <FiEdit2 size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                      </button>
                      <button 
                        className="p-2 hover:bg-red-50 rounded-lg transition-all group"
                        title="Delete"
                      >
                        <FiTrash2 size={18} className="text-red-600 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <FiUser size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No clients found matching your criteria</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>

      {/* 360° Client View Modal */}
      {showClientModal && selectedClient && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowClientModal(false)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="bg-gradient-brand p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    {selectedClient.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedClient.name}</h2>
                    <p className="text-white/80 text-sm mt-1">{selectedClient.email} • {selectedClient.phone}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowClientModal(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-all"
                >
                  <FiTrash2 size={24} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b bg-gray-50">
              {(['overview', 'interactions', 'documents', 'payments'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-4 font-semibold transition-all ${
                    activeTab === tab
                      ? 'border-b-4 border-brand-coral text-brand-coral bg-white'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-brand-cream/50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 font-medium">Project</p>
                      <p className="text-lg font-bold text-gray-900 mt-1">{selectedClient.project}</p>
                    </div>
                    <div className="bg-brand-cream/50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 font-medium">Budget</p>
                      <p className="text-lg font-bold text-brand-coral mt-1">{selectedClient.budget}</p>
                    </div>
                    <div className="bg-brand-cream/50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 font-medium">Priority</p>
                      <p className="text-lg font-bold text-gray-900 mt-1 capitalize">{selectedClient.priority}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-brand-cream/50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 font-medium">Stage</p>
                      <p className="text-lg font-bold text-gray-900 mt-1 capitalize">{selectedClient.stage}</p>
                    </div>
                    <div className="bg-brand-cream/50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 font-medium">Last Contact</p>
                      <p className="text-lg font-bold text-gray-900 mt-1">{selectedClient.lastContact}</p>
                    </div>
                    <div className="bg-brand-cream/50 rounded-xl p-4">
                      <p className="text-sm text-gray-500 font-medium">Documents</p>
                      <p className="text-lg font-bold text-gray-900 mt-1">{selectedClient.documents.join(', ')}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'interactions' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Interaction History</h3>
                    <button className="flex items-center gap-2 px-4 py-2 bg-brand-teal text-white rounded-xl hover:shadow-elegant transition-all">
                      <FiPlus size={16} />
                      Add Interaction
                    </button>
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-l-4 border-brand-coral bg-brand-cream/30 rounded-xl p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">Phone Call</p>
                          <p className="text-sm text-gray-600 mt-1">Discussed site visit schedule and payment plans</p>
                          <p className="text-xs text-gray-400 mt-2 flex items-center gap-2">
                            <FiClock size={12} /> 2 days ago • By Rohit Mehta
                          </p>
                        </div>
                        <FiPhone className="text-brand-coral" size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'documents' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Client Documents</h3>
                    <button className="flex items-center gap-2 px-4 py-2 bg-brand-teal text-white rounded-xl hover:shadow-elegant transition-all">
                      <FiUpload size={16} />
                      Upload Document
                    </button>
                  </div>
                  {selectedClient.documents.map((doc: string, i: number) => (
                    <div key={i} className="flex items-center justify-between bg-brand-cream/30 rounded-xl p-4 hover:shadow-card transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-brand-sage/20 rounded-xl flex items-center justify-center">
                          <FiFileText size={24} className="text-brand-sage" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{doc}</p>
                          <p className="text-xs text-gray-500 mt-1">Uploaded on {selectedClient.lastContact}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-brand-teal/10 rounded-lg">
                        <FiDownload size={18} className="text-brand-teal" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'payments' && (
                <div className="space-y-4">
                  <h3 className="font-bold text-lg mb-4">Payment History</h3>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Total Paid</p>
                        <p className="text-3xl font-bold text-green-600 mt-1">₹25,00,000</p>
                      </div>
                      <FiDollarSign size={40} className="text-green-600" />
                    </div>
                  </div>
                  {[1, 2].map((i) => (
                    <div key={i} className="border border-gray-200 rounded-xl p-4 hover:shadow-card transition-all">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">Payment #{i}</p>
                          <p className="text-sm text-gray-600 mt-1">₹12,50,000 • Bank Transfer</p>
                          <p className="text-xs text-gray-400 mt-2">Oct {20 - i}, 2025</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          Completed
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
