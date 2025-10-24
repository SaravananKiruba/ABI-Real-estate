import React, { useState } from 'react';
import { 
  FiPlus, FiSearch, FiTrash2, FiUserPlus, FiTrendingUp, FiCalendar,
  FiFilter, FiDownload, FiPhone, FiMail, FiClock, FiTarget, FiAward, FiCheckCircle
} from 'react-icons/fi';
import { FaFacebook, FaGoogle, FaLinkedin, FaInstagram, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { dummyLeads } from '../data/dummyData';

const Leads: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterSource, setFilterSource] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [showLeadModal, setShowLeadModal] = useState(false);

  const filteredLeads = dummyLeads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    const matchesSource = filterSource === 'all' || lead.source === filterSource;
    
    return matchesSearch && matchesStatus && matchesSource;
  });

  const statusColors = {
    new: 'bg-blue-100 text-blue-800 border-blue-200',
    contacted: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    negotiation: 'bg-purple-100 text-purple-800 border-purple-200',
    converted: 'bg-green-100 text-green-800 border-green-200',
    lost: 'bg-red-100 text-red-800 border-red-200',
  };

  const getSourceIcon = (source: string) => {
    switch (source.toLowerCase()) {
      case 'google ads': return <FaGoogle className="text-blue-600" />;
      case 'facebook': return <FaFacebook className="text-blue-700" />;
      case 'instagram': return <FaInstagram className="text-pink-600" />;
      case 'linkedin': return <FaLinkedin className="text-blue-800" />;
      case 'website form': return <FaGlobe className="text-brand-teal" />;
      default: return <FaGlobe className="text-gray-600" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-600';
    if (score >= 60) return 'from-blue-500 to-blue-600';
    if (score >= 40) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-red-600';
  };

  return (
    <div className="lg:ml-64 p-4 md:p-8 bg-brand-cream min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">Lead Management</h1>
          <p className="text-gray-600 mt-2">AI-powered lead scoring & automated assignment system</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-brand-coral text-brand-coral rounded-xl hover:bg-brand-coral hover:text-white transition-all shadow-elegant">
            <FiDownload size={20} />
            Export
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-warm text-white rounded-xl hover:shadow-elegant-hover transition-all">
            <FiPlus size={20} />
            Add Lead
          </button>
        </div>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-blue-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Leads</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{filteredLeads.length}</p>
              <p className="text-xs text-green-600 mt-1">+23% this week</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <FiTrendingUp size={24} className="text-blue-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-yellow-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">New Leads</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {dummyLeads.filter((l) => l.status === 'new').length}
              </p>
              <p className="text-xs text-yellow-600 mt-1">Needs action</p>
            </div>
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
              <FiClock size={24} className="text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-purple-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">In Progress</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {dummyLeads.filter((l) => ['contacted', 'negotiation'].includes(l.status)).length}
              </p>
              <p className="text-xs text-purple-600 mt-1">Active pipeline</p>
            </div>
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <FiTarget size={24} className="text-purple-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-green-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Converted</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {dummyLeads.filter((l) => l.status === 'converted').length}
              </p>
              <p className="text-xs text-green-600 mt-1">28% conversion</p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <FiCheckCircle size={24} className="text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-coral to-orange-500 rounded-2xl shadow-elegant p-6 text-white hover:shadow-elegant-hover transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80 font-medium">Avg Score</p>
              <p className="text-3xl font-bold mt-2">
                {Math.round(dummyLeads.reduce((sum, l) => sum + l.score, 0) / dummyLeads.length)}
              </p>
              <p className="text-xs text-white/80 mt-1">AI-powered</p>
            </div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <FiAward size={24} className="text-white" />
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
              placeholder="Search leads by name, email, or phone..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <FiFilter className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <select
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all appearance-none bg-white"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="negotiation">Negotiation</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>
          </div>

          <div className="relative">
            <FiFilter className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <select
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all appearance-none bg-white"
              value={filterSource}
              onChange={(e) => setFilterSource(e.target.value)}
            >
              <option value="all">All Sources</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Website Form">Website</option>
              <option value="Facebook">Facebook</option>
              <option value="Referral">Referral</option>
            </select>
          </div>
        </div>
      </div>

      {/* Enhanced Leads Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLeads.map((lead) => (
          <div 
            key={lead.id}
            className="bg-white rounded-2xl shadow-card hover:shadow-elegant transition-all cursor-pointer overflow-hidden border-l-4 border-brand-coral"
            onClick={() => {
              setSelectedLead(lead);
              setShowLeadModal(true);
            }}
          >
            {/* Lead Score Badge */}
            <div className={`h-2 bg-gradient-to-r ${getScoreColor(lead.score)}`}></div>
            
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-coral to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{lead.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                      {getSourceIcon(lead.source)}
                      {lead.source}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[lead.status as keyof typeof statusColors]}`}>
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </span>
              </div>

              {/* Lead Score */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                    <FiTarget size={14} className="text-brand-coral" />
                    Lead Score
                  </span>
                  <span className="text-sm font-bold text-gray-900">{lead.score}/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 relative overflow-hidden">
                  <div
                    className={`h-2.5 rounded-full bg-gradient-to-r ${getScoreColor(lead.score)} transition-all duration-500`}
                    style={{ width: `${lead.score}%` }}
                  ></div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-brand-cream/50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 font-medium mb-1">Property Type</p>
                  <p className="text-sm font-semibold text-gray-900">{lead.property}</p>
                </div>
                <div className="bg-brand-cream/50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 font-medium mb-1">Budget</p>
                  <p className="text-sm font-semibold text-brand-coral">{lead.budget}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FiMail size={14} className="text-brand-teal" />
                  {lead.email}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FiPhone size={14} className="text-brand-coral" />
                  {lead.phone}
                </p>
              </div>

              {/* Assigned To & Follow-up */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-sage to-brand-teal rounded-lg flex items-center justify-center text-white text-xs font-bold">
                    {lead.assignedTo.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Assigned to</p>
                    <p className="text-sm font-semibold text-gray-900">{lead.assignedTo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <FiCalendar size={12} />
                  <span>{lead.followUpDate}</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100" onClick={(e) => e.stopPropagation()}>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-all text-sm font-semibold">
                  <FaWhatsapp size={16} />
                  WhatsApp
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-brand-teal/10 text-brand-teal rounded-xl hover:bg-brand-teal/20 transition-all text-sm font-semibold">
                  <FiPhone size={16} />
                  Call
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-brand-sage/10 text-brand-sage rounded-xl hover:bg-brand-sage/20 transition-all text-sm font-semibold">
                  <FiUserPlus size={16} />
                  Convert
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredLeads.length === 0 && (
        <div className="bg-white rounded-2xl shadow-card p-12 text-center">
          <FiTrendingUp size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-xl font-semibold">No leads found</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or add a new lead</p>
        </div>
      )}

      {/* Lead Detail Modal */}
      {showLeadModal && selectedLead && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowLeadModal(false)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${getScoreColor(selectedLead.score)} p-6 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    {selectedLead.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedLead.name}</h2>
                    <p className="text-white/80 text-sm mt-1 flex items-center gap-2">
                      {getSourceIcon(selectedLead.source)}
                      <span>{selectedLead.source} • Score: {selectedLead.score}/100</span>
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowLeadModal(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-all"
                >
                  <FiTrash2 size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-brand-cream/50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 font-medium mb-2 flex items-center gap-2">
                      <FiMail size={14} /> Email
                    </p>
                    <p className="text-base font-semibold text-gray-900">{selectedLead.email}</p>
                  </div>
                  <div className="bg-brand-cream/50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 font-medium mb-2 flex items-center gap-2">
                      <FiPhone size={14} /> Phone
                    </p>
                    <p className="text-base font-semibold text-gray-900">{selectedLead.phone}</p>
                  </div>
                  <div className="bg-brand-cream/50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 font-medium mb-2">Budget Range</p>
                    <p className="text-base font-semibold text-brand-coral">{selectedLead.budget}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-brand-cream/50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 font-medium mb-2">Property Type</p>
                    <p className="text-base font-semibold text-gray-900">{selectedLead.property}</p>
                  </div>
                  <div className="bg-brand-cream/50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 font-medium mb-2 flex items-center gap-2">
                      <FiCalendar size={14} /> Next Follow-up
                    </p>
                    <p className="text-base font-semibold text-gray-900">{selectedLead.followUpDate}</p>
                  </div>
                  <div className="bg-brand-cream/50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 font-medium mb-2">Assigned To</p>
                    <p className="text-base font-semibold text-gray-900">{selectedLead.assignedTo}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-elegant-hover transition-all font-semibold">
                  <FiUserPlus size={20} />
                  Convert to Client
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brand text-white rounded-xl hover:shadow-elegant-hover transition-all font-semibold">
                  <FiCalendar size={20} />
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
