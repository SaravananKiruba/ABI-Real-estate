import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
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
  FiTrendingUp, FiUsers, FiDollarSign, FiCheckCircle, FiClock,
  FiCalendar, FiArrowRight
} from 'react-icons/fi';
import { dummyAnalytics, dummyClients } from '../data/dummyData';
import StatCard from '../components/StatCard';
import RecentActivityCard from '../components/RecentActivityCard';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const stats = [
    {
      title: 'Total Leads',
      value: dummyAnalytics.totalLeads.toString(),
      change: '+12%',
      color: 'blue',
    },
    {
      title: 'Converted',
      value: dummyAnalytics.convertedLeads.toString(),
      change: '+5%',
      color: 'green',
    },
    {
      title: 'Total Revenue',
      value: dummyAnalytics.totalRevenue,
      change: '+18%',
      color: 'purple',
    },
    {
      title: 'Collections',
      value: dummyAnalytics.collectedRevenue,
      change: '+9%',
      color: 'orange',
    },
  ];

  const COLORS = ['#D97D55', '#6FA4AF', '#B8C4A9', '#F4E9D7', '#8b5cf6'];

  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-coral to-brand-teal bg-clip-text text-transparent">Dashboard</h1>
        <p className="text-sm md:text-base text-gray-600 mt-2">Welcome to Easy2Work Real Estate CRM 🏢</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        <button onClick={() => navigate('/leads')} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-elegant-hover transition-all group">
          <div className="flex items-center justify-between mb-2">
            <FiUsers size={24} />
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </div>
          <p className="font-bold text-base md:text-lg">Add Lead</p>
          <p className="text-xs md:text-sm text-blue-100 mt-1">Create new lead</p>
        </button>

        <button onClick={() => navigate('/appointments')} className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-elegant-hover transition-all group">
          <div className="flex items-center justify-between mb-2">
            <FiCalendar size={24} />
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </div>
          <p className="font-bold text-base md:text-lg">Schedule</p>
          <p className="text-xs md:text-sm text-green-100 mt-1">Book appointment</p>
        </button>

        <button onClick={() => navigate('/quotations')} className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-elegant-hover transition-all group">
          <div className="flex items-center justify-between mb-2">
            <FiDollarSign size={24} />
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </div>
          <p className="font-bold text-base md:text-lg">Quotation</p>
          <p className="text-xs md:text-sm text-purple-100 mt-1">Generate quote</p>
        </button>

        <button onClick={() => navigate('/clients')} className="bg-gradient-to-br from-brand-coral to-brand-teal text-white rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-elegant-hover transition-all group">
          <div className="flex items-center justify-between mb-2">
            <FiCheckCircle size={24} />
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </div>
          <p className="font-bold text-base md:text-lg">Close Deal</p>
          <p className="text-xs md:text-sm text-brand-cream mt-1">Convert lead</p>
        </button>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Monthly Revenue */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
              <FiTrendingUp className="text-green-600" size={20} />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900">
              Monthly Revenue
            </h3>
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
                stroke="#D97D55"
                strokeWidth={3}
                dot={{ fill: '#D97D55', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Lead Source ROI */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
              <FiUsers className="text-blue-600" size={20} />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900">
              Lead Source Performance
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dummyAnalytics.leadSourceROI}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="source" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="leads" fill="#6FA4AF" />
              <Bar dataKey="conversions" fill="#B8C4A9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Conversion Funnel */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <FiCheckCircle className="text-purple-600" size={20} />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900">
              Lead Status Distribution
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'New', value: 58 },
                  { name: 'Contacted', value: 45 },
                  { name: 'Negotiation', value: 30 },
                  { name: 'Converted', value: 42 },
                  { name: 'Lost', value: 25 },
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

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-coral/20 to-brand-teal/20 flex items-center justify-center">
              <FiClock className="text-brand-coral" size={20} />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900">
              Recent Clients
            </h3>
          </div>
          <div className="space-y-4">
            {dummyClients.slice(0, 4).map((client) => (
              <RecentActivityCard key={client.id} client={client} />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-brand-coral hover:shadow-elegant transition-all">
          <p className="text-xs md:text-sm text-gray-500 font-medium">Conversion Rate</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            {dummyAnalytics.conversionRate}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <FiTrendingUp className="text-green-600 text-xs md:text-sm" />
            <p className="text-xs text-green-600 font-semibold">Industry leading</p>
          </div>
        </div>
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-brand-teal hover:shadow-elegant transition-all">
          <p className="text-xs md:text-sm text-gray-500 font-medium">Avg Deal Value</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            {dummyAnalytics.avgDealValue}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <FiDollarSign className="text-brand-teal text-xs md:text-sm" />
            <p className="text-xs text-brand-teal font-semibold">Premium segment</p>
          </div>
        </div>
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-brand-sage hover:shadow-elegant transition-all">
          <p className="text-xs md:text-sm text-gray-500 font-medium">Top Performer</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            {dummyAnalytics.topPerformer}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <FiCheckCircle className="text-green-600 text-xs md:text-sm" />
            <p className="text-xs text-green-600 font-semibold">Star performer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
