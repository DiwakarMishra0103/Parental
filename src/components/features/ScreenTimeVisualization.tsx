
import React from "react";

export const ScreenTimeVisualization: React.FC = () => {
  return (
    <div className="bg-woof-blue/10 rounded-lg p-6 relative h-full min-h-[250px] flex items-center justify-center">
      <div className="text-center">
        <div className="bg-white rounded-full w-32 h-32 mx-auto shadow-lg flex items-center justify-center mb-4">
          <div className="text-woof-blue font-bold text-xl">2h 15m</div>
        </div>
        <div className="text-sm text-gray-600 mt-2">Daily Screen Time</div>
        <div className="mt-4 grid grid-cols-7 gap-1">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <div key={i} className="text-xs text-gray-500">{day}</div>
          ))}
          {[40, 65, 30, 85, 50, 120, 90].map((value, i) => (
            <div 
              key={i} 
              className="bg-woof-blue/80 rounded-t-sm" 
              style={{ height: `${value / 2}px` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
