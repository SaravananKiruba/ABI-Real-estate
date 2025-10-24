import React from 'react';
import { FiSmartphone, FiMessageCircle, FiGlobe, FiCamera, FiMic, FiBell, FiVideo, FiDollarSign } from 'react-icons/fi';

const ClientExperience: React.FC = () => {
  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
            <FiSmartphone className="text-white text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Client Experience & Self-Service
            </h1>
            <p className="text-sm text-gray-600 mt-1">Client Portal with Multi-Language Support</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-pink-500">
          <FiSmartphone className="text-pink-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Active Users</p>
          <p className="text-3xl font-bold text-gray-900">1,234</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-blue-500">
          <FiMessageCircle className="text-blue-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">WhatsApp Queries</p>
          <p className="text-3xl font-bold text-gray-900">456</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-green-500">
          <FiGlobe className="text-green-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Languages</p>
          <p className="text-3xl font-bold text-gray-900">5</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-card border-l-4 border-purple-500">
          <FiBell className="text-purple-600 text-2xl mb-2" />
          <p className="text-sm text-gray-600">Notifications Sent</p>
          <p className="text-3xl font-bold text-gray-900">2,890</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Client Portal Features</h3>
          <div className="space-y-3">
            {[
              { icon: FiDollarSign, label: 'Payment History', color: 'green' },
              { icon: FiMessageCircle, label: 'Document Access', color: 'blue' },
              { icon: FiVideo, label: 'Property Walkthrough', color: 'purple' },
              { icon: FiCamera, label: 'Upload Documents (OCR)', color: 'orange' }
            ].map((feature, idx) => (
              <div key={idx} className={`p-4 bg-${feature.color}-50 rounded-xl border border-${feature.color}-200 flex items-center gap-3`}>
                <feature.icon className={`text-${feature.color}-600 text-xl`} />
                <span className="font-semibold text-gray-900">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Multi-Language Support</h3>
          <div className="grid grid-cols-2 gap-3">
            {['English', 'हिंदी (Hindi)', 'தமிழ் (Tamil)', 'తెలుగు (Telugu)', 'ಕನ್ನಡ (Kannada)', 'मराठी (Marathi)'].map((lang, idx) => (
              <div key={idx} className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200 text-center">
                <p className="font-semibold text-gray-900 text-sm">{lang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 text-white mb-6">
        <div className="flex items-start gap-4">
          <FiMessageCircle className="text-4xl flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold mb-2">WhatsApp Chatbot</h3>
            <p className="text-pink-100 mb-4">AI-powered assistant for instant customer support</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs mb-1">Check Status</p>
                <p className="text-lg font-bold">Available 24/7</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs mb-1">Book Site Visit</p>
                <p className="text-lg font-bold">Instant Booking</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-xs mb-1">FAQs Answered</p>
                <p className="text-lg font-bold">1,234+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-card p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Client Activities</h3>
        <div className="space-y-3">
          {[
            { client: 'Rajesh Kumar', activity: 'Viewed payment history', time: '2 mins ago', type: 'payment' },
            { client: 'Priya Sharma', activity: 'Downloaded agreement', time: '15 mins ago', type: 'document' },
            { client: 'Anil Desai', activity: 'Booked site visit', time: '1 hour ago', type: 'booking' },
          ].map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                  {activity.client[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{activity.client}</p>
                  <p className="text-xs text-gray-600">{activity.activity}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientExperience;
