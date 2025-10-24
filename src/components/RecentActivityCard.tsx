import React from 'react';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  project: string;
  stage: string;
  priority: string;
  budget: string;
  source: string;
  lastContact: string;
  notes: string;
  documents: string[];
}

interface RecentActivityCardProps {
  client: Client;
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({ client }) => {
  const stageColors = {
    prospect: 'bg-gray-100 text-gray-800',
    verified: 'bg-blue-100 text-blue-800',
    booked: 'bg-green-100 text-green-800',
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            {client.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{client.name}</h4>
            <p className="text-xs text-gray-500">{client.project}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            stageColors[client.stage as keyof typeof stageColors]
          }`}
        >
          {client.stage.charAt(0).toUpperCase() + client.stage.slice(1)}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            priorityColors[client.priority as keyof typeof priorityColors]
          }`}
        >
          {client.priority.charAt(0).toUpperCase() + client.priority.slice(1)}
        </span>
        <span className="text-sm text-gray-600 hidden md:inline">{client.budget}</span>
      </div>
    </div>
  );
};

export default RecentActivityCard;
