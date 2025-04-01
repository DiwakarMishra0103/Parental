
import React from "react";
import { MapPin } from "lucide-react";

export const LocationTrackingVisualization: React.FC = () => {
  return (
    <div className="bg-woof-green/10 rounded-lg p-6 relative h-full min-h-[250px] flex items-center justify-center">
      <div className="w-full max-w-[280px]">
        <div className="bg-gray-100 rounded-lg h-[180px] relative mb-4">
          {/* Map visualization */}
          <div className="absolute h-full w-full overflow-hidden rounded-lg">
            {/* Map grid lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {Array(36).fill(0).map((_, i) => (
                <div key={i} className="border border-gray-200/50"></div>
              ))}
            </div>
            
            {/* Roads */}
            <div className="absolute top-1/3 left-0 right-0 h-2 bg-gray-300/70"></div>
            <div className="absolute top-2/3 left-0 right-0 h-2 bg-gray-300/70"></div>
            <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-gray-300/70"></div>
            <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-gray-300/70"></div>
            
            {/* Location pin - school */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-woof-green">
              <div className="relative">
                <MapPin size={28} className="fill-woof-green/20" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-2 w-2"></div>
              </div>
              <div className="text-xs font-medium bg-white px-2 py-0.5 rounded shadow-sm -mt-1 text-center">School</div>
            </div>
            
            {/* Location pin - current location */}
            <div className="absolute top-2/3 right-1/4 text-blue-500 animate-pulse">
              <div className="relative">
                <MapPin size={34} className="fill-blue-500/20" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full h-3 w-3"></div>
              </div>
              <div className="text-xs font-medium bg-white px-2 py-0.5 rounded shadow-sm -mt-1 text-center">Rahul</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-3">
          <div className="text-xs text-gray-500 mb-1">Recent Activity</div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <MapPin size={16} className="text-blue-500" />
            </div>
            <div>
              <div className="text-sm font-medium">Arrived at School</div>
              <div className="text-xs text-gray-500">8:45 AM today</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
