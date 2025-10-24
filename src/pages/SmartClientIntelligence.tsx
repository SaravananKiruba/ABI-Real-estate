import React from 'react';
import { 
  FiCpu, FiTarget, FiAlertCircle, FiTrendingUp, FiClock, 
  FiMessageSquare, FiThumbsUp, FiZap, FiActivity,
  FiCalendar, FiUser, FiPhone, FiMail
} from 'react-icons/fi';

interface ClientScore {
  id: number;
  name: string;
  readinessScore: number;
  churnRisk: 'Low' | 'Medium' | 'High';
  nextAction: string;
  conversionProbability: number;
  followUpIntensity: string;
}

const SmartClientIntelligence: React.FC = () => {
  const clientScores: ClientScore[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      readinessScore: 87,
      churnRisk: 'Low',
      nextAction: 'Schedule site visit within 48 hours',
      conversionProbability: 82,
      followUpIntensity: 'High - Daily contact'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      readinessScore: 45,
      churnRisk: 'High',
      nextAction: 'Send discount offer via WhatsApp',
      conversionProbability: 38,
      followUpIntensity: 'Moderate - Every 2 days'
    },
    {
      id: 3,
      name: 'Anil Desai',
      readinessScore: 92,
      churnRisk: 'Low',
      nextAction: 'Call today - Ready to book',
      conversionProbability: 94,
      followUpIntensity: 'Urgent - Immediate'
    },
    {
      id: 4,
      name: 'Sneha Patel',
      readinessScore: 68,
      churnRisk: 'Medium',
      nextAction: 'Resend property brochure',
      conversionProbability: 65,
      followUpIntensity: 'Moderate - Every 3 days'
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getRiskColor = (risk: string) => {
    if (risk === 'Low') return 'bg-green-100 text-green-800';
    if (risk === 'Medium') return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <FiCpu className="text-white text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Smart Client Intelligence
            </h1>
            <p className="text-sm text-gray-600 mt-1">AI-Powered Predictive Analytics & Action Recommendations</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-card border-l-4 border-green-500">
          <div className="flex items-center gap-3 mb-2">
            <FiTarget className="text-green-600 text-xl" />
            <p className="text-xs md:text-sm text-gray-600 font-medium">High Readiness</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">23</p>
          <p className="text-xs text-green-600 mt-1">Ready to convert</p>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-card border-l-4 border-red-500">
          <div className="flex items-center gap-3 mb-2">
            <FiAlertCircle className="text-red-600 text-xl" />
            <p className="text-xs md:text-sm text-gray-600 font-medium">Churn Risk</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">8</p>
          <p className="text-xs text-red-600 mt-1">Needs attention</p>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-card border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-2">
            <FiTrendingUp className="text-blue-600 text-xl" />
            <p className="text-xs md:text-sm text-gray-600 font-medium">Avg Score</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">73%</p>
          <p className="text-xs text-blue-600 mt-1">+5% vs last month</p>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-card border-l-4 border-purple-500">
          <div className="flex items-center gap-3 mb-2">
            <FiZap className="text-purple-600 text-xl" />
            <p className="text-xs md:text-sm text-gray-600 font-medium">Auto Actions</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">47</p>
          <p className="text-xs text-purple-600 mt-1">Triggered today</p>
        </div>
      </div>

      {/* AI Recommendations Panel */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 md:p-6 mb-6 border border-purple-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <FiCpu className="text-white text-xl" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-2">AI Recommendations - Today</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <FiPhone className="text-green-600" />
                <span><strong>3 clients</strong> need immediate call - High conversion probability</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiMessageSquare className="text-blue-600" />
                <span><strong>12 leads</strong> flagged for WhatsApp campaign - Send discount offers</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiAlertCircle className="text-red-600" />
                <span><strong>5 clients</strong> inactive for 7+ days - Churn risk detected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Scoring Table */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden mb-6">
        <div className="p-4 md:p-6 border-b border-gray-200">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">Predictive Client Scores & Actions</h2>
          <p className="text-sm text-gray-600 mt-1">AI-generated priority list with recommended actions</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Client</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Readiness Score</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Churn Risk</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Conversion %</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Next Action</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clientScores.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-coral to-brand-teal rounded-full flex items-center justify-center">
                        <FiUser className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{client.name}</p>
                        <p className="text-xs text-gray-500">ID: #{client.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border ${getScoreColor(client.readinessScore)}`}>
                      <FiActivity className="text-sm" />
                      <span className="font-bold text-sm">{client.readinessScore}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getRiskColor(client.churnRisk)}`}>
                      {client.churnRisk}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80px]">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                          style={{ width: `${client.conversionProbability}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{client.conversionProbability}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-sm text-gray-700 max-w-xs">{client.nextAction}</p>
                    <p className="text-xs text-gray-500 mt-1">Follow-up: {client.followUpIntensity}</p>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors" title="Call">
                        <FiPhone size={16} />
                      </button>
                      <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors" title="WhatsApp">
                        <FiMessageSquare size={16} />
                      </button>
                      <button className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors" title="Email">
                        <FiMail size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conversion Heatmap & Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Auto-Proposal Optimizer */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <FiThumbsUp className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Auto-Proposal Optimizer</h3>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Rajesh Kumar - Recommended Unit</p>
              <p className="text-sm text-gray-700">2BHK Tower A, Floor 12 - ₹45L</p>
              <p className="text-xs text-blue-600 mt-2">Match Score: 94% based on budget & preferences</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Anil Desai - Best Offer</p>
              <p className="text-sm text-gray-700">3BHK Penthouse - ₹1.2Cr (5% discount available)</p>
              <p className="text-xs text-green-600 mt-2">Conversion probability: 96% with current offer</p>
            </div>
          </div>
        </div>

        {/* Inactivity Alerts */}
        <div className="bg-white rounded-2xl shadow-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <FiClock className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Inactivity Alert Scheduler</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-xl border border-red-200">
              <FiAlertCircle className="text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-900">5 Clients - No contact in 7 days</p>
                <p className="text-xs text-gray-600 mt-1">Auto-reminder sent to agents</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
              <FiClock className="text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-900">12 Leads - Pending follow-up</p>
                <p className="text-xs text-gray-600 mt-1">Scheduled for tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Reminder Stack */}
      <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
        <div className="flex items-start gap-4">
          <FiCalendar className="text-3xl flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">AI-Powered Reminder Stack</h3>
            <p className="text-purple-100 mb-4">Smart reminders automatically prioritized by conversion probability</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs font-semibold mb-1">TODAY - Urgent</p>
                <p className="text-2xl font-bold">8 Actions</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs font-semibold mb-1">THIS WEEK</p>
                <p className="text-2xl font-bold">23 Actions</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs font-semibold mb-1">OVERDUE</p>
                <p className="text-2xl font-bold text-yellow-300">3 Actions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartClientIntelligence;
