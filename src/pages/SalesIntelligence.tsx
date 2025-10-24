import React from 'react';
import { FiTrendingUp, FiTarget, FiMap, FiDollarSign, FiUsers, FiBarChart } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesIntelligence: React.FC = () => {
  const conversionData = [
    { stage: 'Leads', count: 350 },
    { stage: 'Contacted', count: 280 },
    { stage: 'Site Visit', count: 180 },
    { stage: 'Negotiation', count: 120 },
    { stage: 'Closed', count: 85 }
  ];

  const roiData = [
    { source: 'Facebook', spend: 50000, revenue: 2500000 },
    { source: 'Google', spend: 75000, revenue: 3800000 },
    { source: 'Walk-in', spend: 0, revenue: 1200000 },
    { source: 'Referral', spend: 25000, revenue: 1800000 }
  ];

  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
            <FiBarChart className="text-white text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Sales Intelligence & Analytics
            </h1>
            <p className="text-sm text-gray-600 mt-1">KPI Dashboards & ROI Analysis</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-green-500">
          <FiTarget className="text-green-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Conversion Rate</p>
          <p className="text-3xl font-bold text-gray-900">24.3%</p>
          <p className="text-xs text-green-600 mt-1">+3.2% vs last month</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-blue-500">
          <FiDollarSign className="text-blue-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Avg Deal Size</p>
          <p className="text-3xl font-bold text-gray-900">₹45L</p>
          <p className="text-xs text-blue-600 mt-1">Premium segment</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-purple-500">
          <FiUsers className="text-purple-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Top Performer</p>
          <p className="text-2xl font-bold text-gray-900">Amit S.</p>
          <p className="text-xs text-purple-600 mt-1">42 deals closed</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-orange-500">
          <FiTrendingUp className="text-orange-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Revenue Growth</p>
          <p className="text-3xl font-bold text-gray-900">+18%</p>
          <p className="text-xs text-orange-600 mt-1">QoQ growth</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Lead-to-Deal Conversion Funnel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">ROI by Marketing Source</h3>
          <div className="space-y-4">
            {roiData.map((source, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold text-gray-900">{source.source}</p>
                  <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                    ROI: {source.spend > 0 ? `${((source.revenue / source.spend) * 100).toFixed(0)}%` : 'N/A'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600">Spend</p>
                    <p className="font-bold text-red-600">₹{(source.spend / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Revenue</p>
                    <p className="font-bold text-green-600">₹{(source.revenue / 100000).toFixed(1)}L</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-card p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FiMap className="text-blue-600" />
          Geo Heatmap - Lead Distribution by Area
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { area: 'Bandra', leads: 145, color: 'red' },
            { area: 'Andheri', leads: 98, color: 'orange' },
            { area: 'Powai', leads: 76, color: 'yellow' },
            { area: 'Thane', leads: 54, color: 'blue' }
          ].map((location, idx) => (
            <div key={idx} className={`p-4 bg-${location.color}-100 rounded-xl border-2 border-${location.color}-300`}>
              <p className="font-semibold text-gray-900">{location.area}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{location.leads}</p>
              <p className="text-xs text-gray-600">Active Leads</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Agent Performance Leaderboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Amit Shah', deals: 42, revenue: '₹18.9Cr', rank: 1 },
            { name: 'Priya Desai', deals: 38, revenue: '₹16.2Cr', rank: 2 },
            { name: 'Rohit Verma', deals: 35, revenue: '₹15.1Cr', rank: 3 }
          ].map((agent, idx) => (
            <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold">
                  {agent.rank}
                </div>
                <p className="font-bold">{agent.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-indigo-100">Deals</p>
                  <p className="font-bold text-lg">{agent.deals}</p>
                </div>
                <div>
                  <p className="text-indigo-100">Revenue</p>
                  <p className="font-bold text-lg">{agent.revenue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesIntelligence;
