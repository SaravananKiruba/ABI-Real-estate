import React, { useState } from 'react';
import {
  FiFile, FiDownload, FiTrash2, FiUpload, FiFolder, FiCheckCircle,
  FiClock, FiSearch, FiFilter, FiAlertTriangle, FiFileText, FiImage,
  FiFilm, FiArchive, FiEye
} from 'react-icons/fi';
import { dummyDocuments } from '../data/dummyData';

const Documents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredDocuments = dummyDocuments.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || doc.type.toLowerCase().includes(filterType.toLowerCase());
    const matchesStatus = filterStatus === 'all' || doc.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'verified': return 'bg-green-100 text-green-700 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'expired': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getFileIcon = (type: string) => {
    if (type.includes('PDF') || type.includes('Agreement')) return <FiFileText className="text-red-500" size={20} />;
    if (type.includes('Image')) return <FiImage className="text-blue-500" size={20} />;
    if (type.includes('Video')) return <FiFilm className="text-purple-500" size={20} />;
    if (type.includes('Archive')) return <FiArchive className="text-yellow-500" size={20} />;
    return <FiFile className="text-gray-500" size={20} />;
  };

  return (
    <div className="lg:ml-64 p-4 sm:p-6 md:p-8 bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Artefacts Management</h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">Cloud storage, OCR & automated verification for all project artefacts</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-elegant-hover transition-all">
            <FiUpload size={20} />
            <span className="hidden sm:inline">Upload</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-blue-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total Artefacts</p>
            <FiFolder className="text-blue-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">{dummyDocuments.length}</p>
          <p className="text-xs text-gray-500 mt-1">All files</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-green-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Verified</p>
            <FiCheckCircle className="text-green-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">
            {dummyDocuments.filter((d) => d.status === 'verified').length}
          </p>
          <p className="text-xs text-green-600 mt-1">Approved</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-yellow-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Pending</p>
            <FiClock className="text-yellow-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">
            {dummyDocuments.filter((d) => d.status === 'pending').length}
          </p>
          <p className="text-xs text-yellow-600 mt-1">Review required</p>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 border-l-4 border-purple-500 hover:shadow-elegant transition-all">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total Size</p>
            <FiArchive className="text-purple-500 text-xl md:text-2xl" />
          </div>
          <p className="text-xl md:text-3xl font-bold text-gray-900">18.5 MB</p>
          <p className="text-xs text-purple-600 mt-1">Cloud storage</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-card p-4 md:p-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          <div className="relative">
            <FiSearch className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <FiFilter className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <select
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white text-sm md:text-base"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="Agreement">Agreements</option>
              <option value="Registration">Registration</option>
              <option value="Identity">Identity</option>
              <option value="Bank">Bank Docs</option>
            </select>
          </div>

          <div className="relative">
            <FiFilter className="absolute left-3 md:left-4 top-3 md:top-3.5 text-gray-400" size={18} />
            <select
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white text-sm md:text-base"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>
      </div>

      {/* Documents Table - Mobile Responsive */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-card overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Document</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Client/Project</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Upload Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Expiry</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Size</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.map((doc, index) => (
                <tr key={doc.id} className={`border-b hover:bg-brand-cream/50 transition-all ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {getFileIcon(doc.type)}
                      <span className="font-semibold text-gray-900">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{doc.client}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/20 text-brand-teal border border-brand-sage">
                      {doc.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{doc.uploadDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{doc.expiryDate}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{doc.size}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(doc.status)}`}>
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-all">
                        <FiEye size={16} className="text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-all">
                        <FiDownload size={16} className="text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-all">
                        <FiTrash2 size={16} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4 p-4">
          {filteredDocuments.map((doc) => (
            <div key={doc.id} className="bg-gray-50 rounded-xl p-4 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    {getFileIcon(doc.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 truncate">{doc.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{doc.client}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(doc.status)} whitespace-nowrap ml-2`}>
                  {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-teal/20 text-brand-teal">
                    {doc.type}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Uploaded:</span>
                  <span className="font-semibold">{doc.uploadDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expiry:</span>
                  <span className="font-semibold">{doc.expiryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Size:</span>
                  <span className="font-semibold text-brand-coral">{doc.size}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4 pt-3 border-t">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-all text-sm font-semibold">
                  <FiEye size={14} />
                  View
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all text-sm font-semibold">
                  <FiDownload size={14} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredDocuments.length === 0 && (
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 text-center mt-6">
          <FiAlertTriangle size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg md:text-xl font-semibold">No documents found</p>
          <p className="text-gray-400 text-sm mt-2">Upload documents or adjust your filters</p>
        </div>
      )}
    </div>
  );
};

export default Documents;
