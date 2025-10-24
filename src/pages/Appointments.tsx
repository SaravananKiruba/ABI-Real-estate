import React, { useState } from 'react';
import { 
  FiPlus, FiSearch, FiEdit2, FiCheckCircle, FiX, FiCalendar, 
  FiClock, FiMapPin, FiUser, FiPhone, FiVideo, FiHome, FiFilter 
} from 'react-icons/fi';
import { dummyAppointments } from '../data/dummyData';

const Appointments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');

  const filteredAppointments = dummyAppointments.filter((apt) => {
    const matchesSearch = apt.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || apt.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'scheduled': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  const getTypeIcon = (type: string) => {
    if (type.toLowerCase().includes('site')) return <FiMapPin className="text-brand-coral" />;
    if (type.toLowerCase().includes('virtual')) return <FiVideo className="text-brand-teal" />;
    if (type.toLowerCase().includes('office')) return <FiHome className="text-brand-sage" />;
    return <FiCalendar className="text-gray-600" />;
  };

  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">Appointment Management</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">Schedule, track & manage all client meetings</p>
        </div>
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-gradient-brand text-white rounded-xl hover:shadow-elegant-hover transition-all text-sm md:text-base">
            <FiPlus size={20} />
            <span className="hidden sm:inline">Schedule Appointment</span>
            <span className="sm:hidden">New</span>
          </button>
        </div>
      </div>

      {/* Stats Cards - Mobile Responsive */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-brand-teal hover:shadow-elegant transition-all">
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total</p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1 md:mt-2">{filteredAppointments.length}</p>
            <p className="text-xs text-green-600 mt-1">This month</p>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-blue-500 hover:shadow-elegant transition-all">
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Scheduled</p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1 md:mt-2">
              {dummyAppointments.filter((a) => a.status === 'scheduled').length}
            </p>
            <p className="text-xs text-blue-600 mt-1">Upcoming</p>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-green-500 hover:shadow-elegant transition-all">
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Completed</p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1 md:mt-2">
              {dummyAppointments.filter((a) => a.status === 'completed').length}
            </p>
            <p className="text-xs text-green-600 mt-1">+18%</p>
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-brand-coral hover:shadow-elegant transition-all">
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Today</p>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1 md:mt-2">5</p>
            <p className="text-xs text-brand-coral mt-1">3 pending</p>
          </div>
        </div>
      </div>

      {/* Filters - Mobile Responsive */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search appointments..."
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all text-sm md:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <FiFilter className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <select
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all appearance-none bg-white text-sm md:text-base"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="flex gap-2 sm:col-span-2 lg:col-span-1">
            <button 
              onClick={() => setViewMode('list')}
              className={`flex-1 px-4 py-2.5 md:py-3 rounded-xl font-semibold transition-all text-sm md:text-base ${
                viewMode === 'list' 
                  ? 'bg-brand-teal text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              List View
            </button>
            <button 
              onClick={() => setViewMode('calendar')}
              className={`flex-1 px-4 py-2.5 md:py-3 rounded-xl font-semibold transition-all text-sm md:text-base ${
                viewMode === 'calendar' 
                  ? 'bg-brand-teal text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Calendar
            </button>
          </div>
        </div>
      </div>

      {/* Appointments List - Mobile Responsive */}
      <div className="space-y-4">
        {filteredAppointments.map((apt) => (
          <div 
            key={apt.id} 
            className="bg-white rounded-xl md:rounded-2xl shadow-card hover:shadow-elegant transition-all overflow-hidden border-l-4 border-brand-teal"
          >
            <div className="p-4 md:p-6">
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-brand-teal to-brand-sage rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-md flex-shrink-0">
                    {apt.clientName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 truncate">{apt.clientName}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {getTypeIcon(apt.type)}
                      <p className="text-xs md:text-sm text-gray-600">{apt.type}</p>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border self-start ${getStatusColor(apt.status)}`}>
                  {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                </span>
              </div>

              {/* Details Grid - Mobile Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-brand-cream/50 rounded-lg p-3">
                  <FiCalendar className="text-brand-coral flex-shrink-0" size={16} />
                  <span className="truncate">{apt.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-brand-cream/50 rounded-lg p-3">
                  <FiClock className="text-brand-teal flex-shrink-0" size={16} />
                  <span className="truncate">{apt.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-brand-cream/50 rounded-lg p-3">
                  <FiMapPin className="text-brand-sage flex-shrink-0" size={16} />
                  <span className="truncate">{apt.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-brand-cream/50 rounded-lg p-3">
                  <FiUser className="text-purple-500 flex-shrink-0" size={16} />
                  <span className="truncate">{apt.assignedTo}</span>
                </div>
              </div>

              {/* Notes */}
              {apt.notes && (
                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-3 mb-4">
                  <p className="text-xs md:text-sm text-gray-700 line-clamp-2">{apt.notes}</p>
                </div>
              )}

              {/* Actions - Mobile Responsive */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-all text-sm font-semibold">
                  <FiCheckCircle size={16} />
                  <span className="hidden sm:inline">Complete</span>
                </button>
                <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-brand-teal/10 text-brand-teal rounded-xl hover:bg-brand-teal/20 transition-all text-sm font-semibold">
                  <FiPhone size={16} />
                  <span className="hidden sm:inline">Call</span>
                </button>
                <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-all text-sm font-semibold">
                  <FiEdit2 size={16} />
                  <span className="hidden sm:inline">Edit</span>
                </button>
                <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-red-50 text-red-700 rounded-xl hover:bg-red-100 transition-all text-sm font-semibold">
                  <FiX size={16} />
                  <span className="hidden sm:inline">Cancel</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 text-center">
          <FiCalendar size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg md:text-xl font-semibold">No appointments found</p>
          <p className="text-gray-400 text-sm mt-2">Schedule your first appointment to get started</p>
        </div>
      )}
    </div>
  );
};

export default Appointments;
