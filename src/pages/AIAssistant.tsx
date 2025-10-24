import React, { useState, useMemo } from 'react';
import { aiPropertyData, getUniqueLocations, getUniqueProjects, getUniqueFacings } from '../data/aiPropertyData';
import { Search, Phone, MapPin, Compass, Building2, Home, Filter, CheckCircle, XCircle, Clock } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    location: '',
    facing: '',
    projectName: '',
    propertyName: '',
  });
  const [isCallActive, setIsCallActive] = useState(false);

  // Get unique values for filters
  const locations = useMemo(() => getUniqueLocations(), []);
  const projects = useMemo(() => getUniqueProjects(), []);
  const facings = useMemo(() => getUniqueFacings(), []);

  // Filter properties based on search query and active filters
  const filteredProperties = useMemo(() => {
    let filtered = aiPropertyData;

    // Apply active filters
    if (activeFilters.location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase() === activeFilters.location.toLowerCase()
      );
    }
    if (activeFilters.facing) {
      filtered = filtered.filter(p => 
        p.facing.toLowerCase() === activeFilters.facing.toLowerCase()
      );
    }
    if (activeFilters.projectName) {
      filtered = filtered.filter(p => 
        p.projectName.toLowerCase() === activeFilters.projectName.toLowerCase()
      );
    }
    if (activeFilters.propertyName) {
      filtered = filtered.filter(p => 
        p.propertyName.toLowerCase().includes(activeFilters.propertyName.toLowerCase())
      );
    }

    // Apply search query (searches across all fields)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p =>
        p.propertyName.toLowerCase().includes(query) ||
        p.projectName.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.facing.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, activeFilters]);

  const handleQuickFilter = (field: keyof typeof activeFilters, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [field]: prev[field] === value ? '' : value
    }));
  };

  const clearFilters = () => {
    setActiveFilters({
      location: '',
      facing: '',
      projectName: '',
      propertyName: '',
    });
    setSearchQuery('');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Available
          </span>
        );
      case 'Sold':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Sold
          </span>
        );
      case 'Reserved':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Reserved
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Sales Assistant</h1>
            <p className="text-gray-600 mt-1">Real-time property search during client calls</p>
          </div>
          <button
            onClick={() => setIsCallActive(!isCallActive)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              isCallActive
                ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            <Phone className={`w-5 h-5 ${isCallActive ? 'animate-bounce' : ''}`} />
            {isCallActive ? 'End Call' : 'Start Call'}
          </button>
        </div>

        {isCallActive && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Phone className="h-5 w-5 text-blue-500 animate-pulse" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <span className="font-semibold">Call Active:</span> Use the search below to find properties as the client describes their requirements
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type what the client is asking for... (e.g., 'East facing in Whitefield' or 'Lakeside Paradise')"
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Quick Filters */}
      <div className="mb-6 bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Quick Filters</h2>
          {(activeFilters.location || activeFilters.facing || activeFilters.projectName || searchQuery) && (
            <button
              onClick={clearFilters}
              className="ml-auto text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location Filter */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4" />
              Location
            </label>
            <div className="flex flex-wrap gap-2">
              {locations.map(location => (
                <button
                  key={location}
                  onClick={() => handleQuickFilter('location', location)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeFilters.location === location
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          {/* Facing Filter */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Compass className="w-4 h-4" />
              Facing
            </label>
            <div className="flex flex-wrap gap-2">
              {facings.map(facing => (
                <button
                  key={facing}
                  onClick={() => handleQuickFilter('facing', facing)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeFilters.facing === facing
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {facing}
                </button>
              ))}
            </div>
          </div>

          {/* Project Filter */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Building2 className="w-4 h-4" />
              Project
            </label>
            <select
              value={activeFilters.projectName}
              onChange={(e) => handleQuickFilter('projectName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Projects</option>
              {projects.map(project => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-700">
          Found <span className="font-semibold text-blue-600">{filteredProperties.length}</span> properties
          {searchQuery && <span className="ml-1">matching "{searchQuery}"</span>}
        </p>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
          >
            {/* Property Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">{property.propertyName}</h3>
                </div>
                {getStatusBadge(property.status)}
              </div>
              <p className="text-blue-100 text-sm flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                {property.projectName}
              </p>
            </div>

            {/* Property Details */}
            <div className="p-4">
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-sm font-medium">{property.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Compass className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-sm"><span className="font-medium">{property.facing}</span> Facing</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Type:</span>
                    <span className="ml-1 font-medium">{property.type}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Size:</span>
                    <span className="ml-1 font-medium">{property.size}</span>
                  </div>
                </div>
                {property.bedrooms && (
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Bedrooms:</span>
                      <span className="ml-1 font-medium">{property.bedrooms} BHK</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Bathrooms:</span>
                      <span className="ml-1 font-medium">{property.bathrooms}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Amenities */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Amenities:</p>
                <div className="flex flex-wrap gap-1">
                  {property.amenities.slice(0, 3).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      +{property.amenities.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{property.price}</span>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No properties found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
