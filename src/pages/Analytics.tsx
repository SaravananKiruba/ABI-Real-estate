import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  FiTrendingUp, FiDollarSign, FiTarget, FiUsers, FiDownload,
  FiBarChart2, FiPieChart, FiActivity
} from 'react-icons/fi';
import { dummyAnalytics, dummyProjects } from '../data/dummyData';

const Analytics: React.FC = () => {
  const COLORS = ['#D97D55', '#6FA4AF', '#B8C4A9', '#F4E9D7'];
  const [timeRange, setTimeRange] = useState('monthly');

  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Analytics & Insights</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">Comprehensive business intelligence & KPIs</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <select
            className="flex-1 md:flex-initial px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-sm md:text-base"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-elegant-hover transition-all">
            <FiDownload size={18} />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-brand-coral hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Conversion Rate</p>
            <FiTarget className="text-brand-coral text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">{dummyAnalytics.conversionRate}</p>
          <div className="flex items-center gap-1 mt-2">
            <FiTrendingUp className="text-green-600 text-xs md:text-sm" />
            <p className="text-xs text-green-600 font-semibold">+12% vs last month</p>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-green-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total Revenue</p>
            <FiDollarSign className="text-green-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">{dummyAnalytics.totalRevenue}</p>
          <div className="flex items-center gap-1 mt-2">
            <FiTrendingUp className="text-green-600 text-xs md:text-sm" />
            <p className="text-xs text-green-600 font-semibold">+18% growth</p>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-purple-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Collection %</p>
            <FiActivity className="text-purple-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">67.2%</p>
          <div className="flex items-center gap-1 mt-2">
            <FiTrendingUp className="text-green-600 text-xs md:text-sm" />
            <p className="text-xs text-green-600 font-semibold">Improving</p>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-brand-teal hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Avg Deal Value</p>
            <FiBarChart2 className="text-brand-teal text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">{dummyAnalytics.avgDealValue}</p>
          <div className="flex items-center gap-1 mt-2">
            <FiTrendingUp className="text-green-600 text-xs md:text-sm" />
            <p className="text-xs text-green-600 font-semibold">+5% increase</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
              <FiTrendingUp className="text-green-600" size={20} />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900">Revenue Trend</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dummyAnalytics.monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: '#3b82f6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Lead Source Performance */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
              <FiBarChart2 className="text-blue-600" size={20} />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900">Lead Source Wise Closure</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dummyAnalytics.leadSourceROI}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="source" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="leads" fill="#3b82f6" name="Total Leads" />
              <Bar dataKey="conversions" fill="#10b981" name="Closed Deals" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Lead Status Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <FiPieChart className="text-purple-600" size={20} />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900">Lead Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'New', value: dummyAnalytics.pendingLeads },
                  { name: 'Contacted', value: 45 },
                  { name: 'Negotiation', value: 30 },
                  { name: 'Converted', value: dummyAnalytics.convertedLeads },
                  { name: 'Lost', value: dummyAnalytics.lostLeads },
                ]}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => entry.name}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Projects Status */}
        <div className="lg:col-span-2 bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-coral/20 to-brand-sage/20 flex items-center justify-center">
              <FiActivity className="text-brand-coral" size={20} />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900">Project Progress</h3>
          </div>
          <div className="space-y-4 md:space-y-5">
            {dummyProjects.map((project) => {
              // Calculate real-time completion percentage based on sold units
              const completionPercentage = ((project.soldUnits / project.totalUnits) * 100).toFixed(1);
              
              return (
                <div key={project.id} className="bg-gray-50 rounded-xl p-3 md:p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 text-sm md:text-base">{project.name}</span>
                    <span className="text-xs md:text-sm px-3 py-1 bg-brand-teal/20 text-brand-teal rounded-full font-bold">
                      {completionPercentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-3">
                    <div
                      className="bg-gradient-to-r from-brand-coral to-brand-teal h-2.5 md:h-3 rounded-full transition-all shadow-sm"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3 text-xs md:text-sm">
                    <div className="flex justify-between px-2 py-1 bg-white rounded-lg">
                      <span className="text-gray-600">Sold:</span>
                      <span className="font-bold text-green-600">{project.soldUnits}/{project.totalUnits}</span>
                    </div>
                    <div className="flex justify-between px-2 py-1 bg-white rounded-lg">
                      <span className="text-gray-600">Available:</span>
                      <span className="font-bold text-blue-600">{project.availableUnits}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lead Source Breakdown */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-card overflow-hidden">
        <div className="bg-gradient-to-r from-brand-coral to-brand-sage p-4 md:p-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <FiUsers className="text-white" size={20} />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-white">Lead Source Wise Closure Analysis</h3>
          </div>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Source</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Total Leads</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Closed Deals</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Closure Rate %</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Revenue Generated</th>
              </tr>
            </thead>
            <tbody>
              {dummyAnalytics.leadSourceROI.map((source, idx) => {
                const rate = ((source.conversions / source.leads) * 100).toFixed(1);
                const avgDealValue = 6556071; // Average deal value from analytics
                const revenueGenerated = source.conversions * avgDealValue;
                return (
                  <tr key={idx} className="border-b hover:bg-brand-cream/50 transition-all">
                    <td className="px-6 py-4 font-semibold text-gray-900">{source.source}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{source.leads}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">{source.conversions}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                        {rate}%
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-brand-coral">₹{revenueGenerated.toLocaleString('en-IN')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3 p-4">
          {dummyAnalytics.leadSourceROI.map((source, idx) => {
            const rate = ((source.conversions / source.leads) * 100).toFixed(1);
            const avgDealValue = 6556071;
            const revenueGenerated = source.conversions * avgDealValue;
            return (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 border-l-4 border-brand-coral">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-gray-900">{source.source}</h4>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                    {rate}% Closure
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-gray-600 text-xs">Total Leads</p>
                    <p className="font-bold text-brand-teal">{source.leads}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-gray-600 text-xs">Closed Deals</p>
                    <p className="font-bold text-green-600">{source.conversions}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 col-span-2">
                    <p className="text-gray-600 text-xs">Revenue Generated</p>
                    <p className="font-bold text-brand-coral">₹{revenueGenerated.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
