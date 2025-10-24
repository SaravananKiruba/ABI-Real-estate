import React, { useState } from 'react';
import { 
  FiPlus, FiSearch, FiTrash2, FiUserPlus, FiTrendingUp, FiCalendar,
  FiFilter, FiDownload, FiPhone, FiMail, FiClock, FiTarget, FiAward, FiCheckCircle,
  FiInfo, FiX
} from 'react-icons/fi';
import { FaFacebook, FaGoogle, FaLinkedin, FaInstagram, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { dummyLeads } from '../data/dummyData';

const Leads: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterSource, setFilterSource] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('score-desc');
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [showAddLeadForm, setShowAddLeadForm] = useState(false);
  const [showScoreExplanation, setShowScoreExplanation] = useState(false);

  const filteredLeads = dummyLeads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    const matchesSource = filterSource === 'all' || lead.source === filterSource;
    
    return matchesSearch && matchesStatus && matchesSource;
  });

  // Sorting logic
  const sortedLeads = [...filteredLeads].sort((a, b) => {
    switch (sortBy) {
      case 'score-desc':
        return b.score - a.score;
      case 'score-asc':
        return a.score - b.score;
      case 'date-new':
        return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
      case 'date-old':
        return new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime();
      case 'budget-high':
        const getBudgetValue = (budget: string) => {
          const match = budget.match(/₹([\d,]+)/);
          return match ? parseInt(match[1].replace(/,/g, '')) : 0;
        };
        return getBudgetValue(b.budget) - getBudgetValue(a.budget);
      case 'budget-low':
        const getBudgetValueLow = (budget: string) => {
          const match = budget.match(/₹([\d,]+)/);
          return match ? parseInt(match[1].replace(/,/g, '')) : 0;
        };
        return getBudgetValueLow(a.budget) - getBudgetValueLow(b.budget);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
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
          <button 
            onClick={() => setShowAddLeadForm(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-warm text-white rounded-xl hover:shadow-elegant-hover transition-all"
          >
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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

          <div className="relative">
            <FiFilter className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <select
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent transition-all appearance-none bg-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="score-desc">Score: High to Low</option>
              <option value="score-asc">Score: Low to High</option>
              <option value="date-new">Date: Newest First</option>
              <option value="date-old">Date: Oldest First</option>
              <option value="budget-high">Budget: High to Low</option>
              <option value="budget-low">Budget: Low to High</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Enhanced Leads Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedLeads.map((lead) => (
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

      {sortedLeads.length === 0 && (
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
              {/* Status Info Banner */}
              <div className="bg-gradient-to-r from-brand-cream to-brand-sage/10 rounded-xl p-4 mb-6 border-l-4 border-brand-sage">
                <p className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2">
                  <FiClock size={16} className="text-brand-sage" />
                  Current Status
                </p>
                <p className="text-gray-900">{selectedLead.statusInfo}</p>
                {selectedLead.lastActivity && (
                  <p className="text-xs text-gray-500 mt-2">Last Activity: {selectedLead.lastActivity}</p>
                )}
              </div>

              {/* Lead Score Breakdown */}
              {selectedLead.scoreBreakdown && (
                <div className="bg-white border-2 border-brand-cream rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <FiTarget className="text-brand-coral" />
                      Lead Score Breakdown
                    </h3>
                    <button 
                      onClick={() => setShowScoreExplanation(true)}
                      className="text-brand-teal hover:text-brand-coral transition-colors text-sm font-medium flex items-center gap-1"
                    >
                      <FiInfo size={16} />
                      How it works?
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Budget Match</span>
                        <span className="font-semibold text-gray-900">{selectedLead.scoreBreakdown.budgetMatch}/30</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-brand-coral to-orange-500 h-2 rounded-full transition-all"
                          style={{ width: `${(selectedLead.scoreBreakdown.budgetMatch / 30) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Response Time</span>
                        <span className="font-semibold text-gray-900">{selectedLead.scoreBreakdown.responseTime}/25</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-brand-teal to-brand-sage h-2 rounded-full transition-all"
                          style={{ width: `${(selectedLead.scoreBreakdown.responseTime / 25) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Engagement Level</span>
                        <span className="font-semibold text-gray-900">{selectedLead.scoreBreakdown.engagement}/25</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all"
                          style={{ width: `${(selectedLead.scoreBreakdown.engagement / 25) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Property Match</span>
                        <span className="font-semibold text-gray-900">{selectedLead.scoreBreakdown.propertyMatch}/20</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(selectedLead.scoreBreakdown.propertyMatch / 20) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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

      {/* Add Lead Form Modal */}
      {showAddLeadForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowAddLeadForm(false)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-brand p-6 text-white flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Add New Lead</h2>
                <p className="text-white/80 text-sm mt-1">Fill in the details to create a new lead</p>
              </div>
              <button 
                onClick={() => setShowAddLeadForm(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-all"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      placeholder="+91-9876543210"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Lead Source *</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent appearance-none bg-white">
                      <option value="">Select source</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Website Form">Website Form</option>
                      <option value="Referral">Referral</option>
                      <option value="Walk-in">Walk-in</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range *</label>
                    <input
                      type="text"
                      placeholder="₹40,00,000 - ₹60,00,000"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type *</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent appearance-none bg-white">
                      <option value="">Select type</option>
                      <option value="1BHK">1BHK</option>
                      <option value="2BHK">2BHK</option>
                      <option value="3BHK">3BHK</option>
                      <option value="4BHK">4BHK</option>
                      <option value="Villa">Villa</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Studio">Studio</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Assign To *</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent appearance-none bg-white">
                    <option value="">Select agent</option>
                    <option value="Rohit Mehta">Rohit Mehta</option>
                    <option value="Priya Kapoor">Priya Kapoor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Notes</label>
                  <textarea
                    placeholder="Additional notes about the lead..."
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddLeadForm(false)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-brand text-white rounded-xl hover:shadow-elegant-hover transition-all font-semibold"
                  >
                    Add Lead
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Score Explanation Modal */}
      {showScoreExplanation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowScoreExplanation(false)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-brand-coral to-orange-500 p-6 text-white flex items-center justify-between rounded-t-3xl">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <FiAward size={28} />
                  Lead Score Calculation
                </h2>
                <p className="text-white/80 text-sm mt-1">AI-powered scoring system (Max: 100 points)</p>
              </div>
              <button 
                onClick={() => setShowScoreExplanation(false)}
                className="p-2 hover:bg-white/20 rounded-xl transition-all"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="bg-gradient-to-br from-brand-coral/10 to-orange-50 rounded-xl p-4 border-l-4 border-brand-coral">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-coral rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    30
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Budget Match (30 points)</h3>
                    <p className="text-sm text-gray-600">
                      How well the lead's budget aligns with available properties. Higher budget ranges receive more points.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-teal/10 to-brand-sage/10 rounded-xl p-4 border-l-4 border-brand-teal">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-teal rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    25
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Response Time (25 points)</h3>
                    <p className="text-sm text-gray-600">
                      Speed of initial response and follow-up actions. Faster responses indicate higher interest and intent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border-l-4 border-purple-500">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    25
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Engagement Level (25 points)</h3>
                    <p className="text-sm text-gray-600">
                      Interaction frequency, question quality, site visits attended, and overall interest shown.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    20
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Property Match (20 points)</h3>
                    <p className="text-sm text-gray-600">
                      How well the desired property type and location match with our current inventory and offerings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-brand-cream to-brand-sage/10 rounded-xl p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-brand-coral">Pro Tip:</strong> Leads with scores above 80 are considered high-priority and should be contacted within 24 hours for best conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
