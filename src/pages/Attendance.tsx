import React, { useState } from 'react';
import {
  FiUsers, FiCheckCircle, FiXCircle, FiClock, FiMapPin,
  FiCalendar, FiFilter, FiSearch, FiDownload, FiAlertCircle
} from 'react-icons/fi';
import { dummyAttendance } from '../data/dummyData';

const Attendance: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'today' | 'history'>('today');

  const filteredAttendance = dummyAttendance.filter((record) => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) || record.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || record.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'present': return 'bg-green-100 text-green-700 border-green-200';
      case 'absent': return 'bg-red-100 text-red-700 border-red-200';
      case 'late': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Attendance Management</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">Track employee check-ins, hours & GPS location</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl hover:shadow-elegant-hover transition-all">
            <FiDownload size={20} />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-blue-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total Employees</p>
            <FiUsers className="text-blue-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">{dummyAttendance.length}</p>
          <p className="text-xs text-gray-500 mt-1">Active staff</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-green-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Present Today</p>
            <FiCheckCircle className="text-green-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">
            {dummyAttendance.filter((a) => a.status === 'present').length}
          </p>
          <p className="text-xs text-green-600 mt-1">
            {Math.round((dummyAttendance.filter((a) => a.status === 'present').length / dummyAttendance.length) * 100)}% attendance
          </p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-red-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Absent</p>
            <FiXCircle className="text-red-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">
            {dummyAttendance.filter((a) => a.status === 'absent').length}
          </p>
          <p className="text-xs text-red-600 mt-1">Requires attention</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-purple-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Avg Hours</p>
            <FiClock className="text-purple-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">9.0h</p>
          <p className="text-xs text-purple-600 mt-1">Per employee</p>
        </div>
      </div>

      {/* View Toggle & Filters */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('today')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                viewMode === 'today'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setViewMode('history')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                viewMode === 'history'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              History
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm md:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <FiFilter className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <select
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none bg-white text-sm md:text-base"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
              <option value="late">Late</option>
            </select>
          </div>
        </div>
      </div>

      {/* Attendance Table - Mobile Responsive */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-card overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Employee</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Punch In</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Punch Out</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Hours</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">GPS</th>
              </tr>
            </thead>
            <tbody>
              {filteredAttendance.map((record, index) => (
                <tr key={record.id} className={`border-b hover:bg-brand-cream/50 transition-all ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                        {record.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="font-semibold text-gray-900">{record.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.role}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-2">
                    <FiCalendar size={14} className="text-gray-400" />
                    {record.date}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">{record.punchIn}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-red-600">{record.punchOut}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-sage/20 text-brand-teal border border-brand-sage">
                      {record.hours}h
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(record.status)}`}>
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-blue-50 rounded-lg transition-all mx-auto block">
                      <FiMapPin size={16} className="text-blue-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4 p-4">
          {filteredAttendance.map((record) => (
            <div key={record.id} className="bg-gray-50 rounded-xl p-4 border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                    {record.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{record.name}</p>
                    <p className="text-xs text-gray-500">{record.role}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(record.status)}`}>
                  {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center gap-2">
                    <FiCalendar size={14} />
                    Date:
                  </span>
                  <span className="font-semibold">{record.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Punch In:</span>
                  <span className="font-semibold text-green-600">{record.punchIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Punch Out:</span>
                  <span className="font-semibold text-red-600">{record.punchOut}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Hours:</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-sage/20 text-brand-teal border border-brand-sage">
                    {record.hours}h
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t">
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all text-sm font-semibold">
                  <FiMapPin size={14} />
                  View GPS Location
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredAttendance.length === 0 && (
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 text-center mt-6">
          <FiAlertCircle size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg md:text-xl font-semibold">No attendance records found</p>
          <p className="text-gray-400 text-sm mt-2">Adjust your filters or check back later</p>
        </div>
      )}
    </div>
  );
};

export default Attendance;
