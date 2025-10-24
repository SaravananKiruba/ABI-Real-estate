import React from 'react';
import { 
  FiHome, FiCheckCircle, FiClock, FiAlertTriangle, FiTrendingUp, 
  FiPackage, FiMapPin, FiCalendar, FiUsers, FiDollarSign
} from 'react-icons/fi';

const PropertyLifecycle: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'Sunshine Apartments',
      type: 'Residential',
      totalUnits: 120,
      available: 45,
      phase: 'Construction - 65%',
      clients: { enquiry: 89, booking: 42, payment: 38, handover: 12 }
    },
    {
      id: 2,
      name: 'Metro Commercial Plaza',
      type: 'Commercial',
      totalUnits: 80,
      available: 22,
      phase: 'Pre-Launch',
      clients: { enquiry: 156, booking: 18, payment: 12, handover: 0 }
    },
  ];

  const milestones = [
    { name: 'Foundation Complete', date: '2024-01-15', status: 'completed', clients: 32 },
    { name: 'Slab Casting - Floor 5', date: '2024-03-20', status: 'completed', clients: 42 },
    { name: 'Slab Casting - Floor 10', date: '2024-06-15', status: 'in-progress', clients: 45 },
    { name: 'Electrical Work', date: '2024-09-01', status: 'pending', clients: 45 },
    { name: 'Final Handover', date: '2025-03-30', status: 'pending', clients: 75 },
  ];

  const getStatusColor = (status: string) => {
    if (status === 'completed') return 'bg-green-100 text-green-800 border-green-300';
    if (status === 'in-progress') return 'bg-blue-100 text-blue-800 border-blue-300';
    return 'bg-gray-100 text-gray-800 border-gray-300';
  };

  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <FiHome className="text-white text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Property Lifecycle & Inventory
            </h1>
            <p className="text-sm text-gray-600 mt-1">Project Progress Tracking & Real-Time Unit Availability</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-card border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-2">
            <FiHome className="text-blue-600 text-xl" />
            <p className="text-xs md:text-sm text-gray-600 font-medium">Total Units</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">320</p>
          <p className="text-xs text-blue-600 mt-1">Across all projects</p>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-card border-l-4 border-green-500">
          <div className="flex items-center gap-3 mb-2">
            <FiPackage className="text-green-600 text-xl" />
            <p className="text-xs md:text-sm text-gray-600 font-medium">Available</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">87</p>
          <p className="text-xs text-green-600 mt-1">Ready to sell</p>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-card border-l-4 border-orange-500">
          <div className="flex items-center gap-3 mb-2">
            <FiAlertTriangle className="text-orange-600 text-xl" />
            <p className="text-xs md:text-sm text-gray-600 font-medium">Low Inventory</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">2</p>
          <p className="text-xs text-orange-600 mt-1">Projects below threshold</p>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-6 shadow-card border-l-4 border-purple-500">
          <div className="flex items-center gap-3 mb-2">
            <FiTrendingUp className="text-purple-600 text-xl" />
            <p className="text-xs md:text-sm text-gray-600 font-medium">Booking Rate</p>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">73%</p>
          <p className="text-xs text-purple-600 mt-1">This quarter</p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <FiMapPin size={14} />
                    <span>{project.type}</span>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <p className="text-xs font-semibold">{project.phase}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Inventory Status */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-3xl font-bold text-blue-600">{project.totalUnits}</p>
                  <p className="text-sm text-gray-600 mt-1">Total Units</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <p className="text-3xl font-bold text-green-600">{project.available}</p>
                  <p className="text-sm text-gray-600 mt-1">Available</p>
                </div>
              </div>

              {/* Client Stage Timeline */}
              <h4 className="font-semibold text-gray-900 mb-3">Client Stage Distribution</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Enquiry</span>
                    <span className="font-semibold">{project.clients.enquiry} clients</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Booking</span>
                    <span className="font-semibold">{project.clients.booking} clients</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Payment</span>
                    <span className="font-semibold">{project.clients.payment} clients</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Handover</span>
                    <span className="font-semibold">{project.clients.handover} clients</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Milestone Timeline */}
      <div className="bg-white rounded-2xl shadow-card p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <FiCheckCircle className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Project Milestones - Sunshine Apartments</h2>
            <p className="text-sm text-gray-600">Milestone-triggered client updates enabled</p>
          </div>
        </div>

        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                  milestone.status === 'completed' 
                    ? 'bg-green-100 border-green-500' 
                    : milestone.status === 'in-progress'
                    ? 'bg-blue-100 border-blue-500'
                    : 'bg-gray-100 border-gray-300'
                }`}>
                  {milestone.status === 'completed' ? (
                    <FiCheckCircle className="text-green-600" />
                  ) : milestone.status === 'in-progress' ? (
                    <FiClock className="text-blue-600" />
                  ) : (
                    <FiCalendar className="text-gray-400" />
                  )}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-0.5 h-12 bg-gray-300"></div>
                )}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{milestone.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">Target: {milestone.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(milestone.status)}`}>
                      {milestone.status}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <FiUsers size={14} />
                      <span>{milestone.clients} clients notified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Time Inventory Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <FiAlertTriangle className="text-orange-600 text-2xl" />
            <h3 className="text-lg font-bold text-gray-900">Low Inventory Alerts</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl">
              <p className="font-semibold text-gray-900">Metro Plaza - 2BHK Units</p>
              <p className="text-sm text-gray-600 mt-1">Only <strong className="text-red-600">3 units</strong> remaining</p>
              <button className="mt-2 text-xs bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition-colors">
                Alert Sales Team
              </button>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <p className="font-semibold text-gray-900">Sunshine Apts - Penthouse</p>
              <p className="text-sm text-gray-600 mt-1">Only <strong className="text-red-600">1 unit</strong> remaining</p>
              <button className="mt-2 text-xs bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition-colors">
                Alert Sales Team
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <FiDollarSign className="text-blue-600 text-2xl" />
            <h3 className="text-lg font-bold text-gray-900">Booking Forecast</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">This Month (Projected)</p>
              <p className="text-3xl font-bold text-blue-600">42 Units</p>
              <p className="text-xs text-green-600 mt-1">+15% vs last month</p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">Revenue Projection</p>
              <p className="text-3xl font-bold text-blue-600">₹18.5 Cr</p>
              <p className="text-xs text-green-600 mt-1">Based on AI predictions</p>
            </div>
          </div>
        </div>
      </div>

      {/* VR/AR Integration Placeholder */}
      <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
        <div className="flex items-start gap-4">
          <FiHome className="text-3xl flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold mb-2">VR/AR Virtual Tour Integration</h3>
            <p className="text-purple-100 mb-4">Schedule virtual site visits with 360° property walkthroughs</p>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Launch Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLifecycle;
