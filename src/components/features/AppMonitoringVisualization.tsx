
import React from "react";

export const AppMonitoringVisualization: React.FC = () => {
  const appData = [
    { name: "Games", time: "1h 20m", color: "bg-woof-orange" },
    { name: "YouTube", time: "45m", color: "bg-red-500" },
    { name: "Educational", time: "35m", color: "bg-green-500" },
    { name: "Social", time: "25m", color: "bg-blue-500" }
  ];

  return (
    <div className="bg-woof-orange/10 rounded-lg p-6 relative h-full min-h-[250px] flex items-center justify-center">
      <div className="w-full max-w-[280px]">
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <div className="text-sm font-medium mb-3">Today's App Usage</div>
          
          {appData.map((app, index) => (
            <div key={index} className="mb-2 last:mb-0">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">{app.name}</span>
                <span className="text-xs text-gray-500">{app.time}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className={`${app.color} h-2 rounded-full`} 
                  style={{ width: `${(parseInt(app.time) / 140) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-3">
          <div className="text-xs text-gray-500 mb-1">App Limits</div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-red-100 rounded"></div>
            </div>
            <div>
              <div className="text-sm font-medium">Games</div>
              <div className="text-xs text-woof-orange">30m remaining today</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
