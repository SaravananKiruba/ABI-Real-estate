import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiTrendingUp,
  FiCalendar,
  FiFileText,
  FiDollarSign,
  FiCheckCircle,
  FiFolder,
  FiBarChart2,
  FiMenu,
  FiX,
  FiZap,
  FiPackage,
  FiShield,
  FiSmartphone,
  FiAward,
  FiLogOut,
  FiCpu,
} from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: FiHome, category: 'main' },
    { path: '/clients', label: 'Clients', icon: FiUsers, category: 'main' },
    { path: '/leads', label: 'Leads', icon: FiTrendingUp, category: 'main' },
    { path: '/appointments', label: 'Appointments', icon: FiCalendar, category: 'main' },
    { path: '/quotations', label: 'Quotations', icon: FiFileText, category: 'main' },
    { path: '/finance', label: 'Finance', icon: FiDollarSign, category: 'main' },
    { path: '/attendance', label: 'Attendance', icon: FiCheckCircle, category: 'main' },
    { path: '/documents', label: 'Artefacts', icon: FiFolder, category: 'main' },
    { path: '/analytics', label: 'Analytics', icon: FiBarChart2, category: 'main' },
  ];

  const intelligenceModules = [
    { path: '/smart-intelligence', label: 'Smart AI', icon: FiZap },
    { path: '/ai-assistant', label: 'AI Assistant', icon: FiCpu },
    { path: '/property-lifecycle', label: 'Property Lifecycle', icon: FiPackage },
    { path: '/legal-compliance', label: 'Legal & RERA', icon: FiShield },
    { path: '/client-portal', label: 'Client Portal', icon: FiSmartphone },
    { path: '/sales-intelligence', label: 'Sales Analytics', icon: FiBarChart2 },
    { path: '/post-handover', label: 'Post-Handover', icon: FiAward },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <FiX size={24} className="text-gray-700" /> : <FiMenu size={24} className="text-gray-700" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed left-0 top-0 h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white transition-transform duration-300 z-40 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 w-64`}
      >
        <div className="p-6 border-b border-slate-700 flex-shrink-0">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-coral to-brand-teal bg-clip-text text-transparent">Easy2Work</h1>
          <p className="text-xs text-gray-400 mt-1">Real Estate CRM</p>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
          {/* Main Menu */}
          <nav className="mt-4 px-3">
            <p className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">Main Menu</p>
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-brand-coral to-brand-teal text-white shadow-lg'
                        : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Intelligence Modules */}
          <nav className="mt-6 px-3 pb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">Smart Modules</p>
            <div className="space-y-1">
              {intelligenceModules.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Logout - Fixed at bottom */}
        <div className="flex-shrink-0 p-4 border-t border-slate-700 bg-slate-900">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
          >
            <FiLogOut size={16} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
