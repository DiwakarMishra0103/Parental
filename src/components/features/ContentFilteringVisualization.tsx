
import React from "react";
import { ShieldCheck, X } from "lucide-react";

export const ContentFilteringVisualization: React.FC = () => {
  return (
    <div className="bg-woof-purple/10 rounded-lg p-6 relative h-full min-h-[250px] flex items-center justify-center">
      <div className="max-w-[300px] mx-auto">
        {/* Safe Content Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 relative z-10">
          <div className="absolute -top-3 -right-3 bg-woof-green text-white p-1 rounded-full">
            <ShieldCheck size={20} />
          </div>
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-woof-purple/10 rounded-md flex items-center justify-center mr-3">
              <span className="text-woof-purple font-medium">E</span>
            </div>
            <div>
              <div className="h-3 w-24 bg-gray-200 rounded-full mb-1"></div>
              <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div className="h-12 bg-gray-100 rounded-md w-full"></div>
        </div>
        
        {/* Blocked Content Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 relative opacity-50 transform -translate-y-2 -rotate-2">
          <div className="absolute -top-3 -right-3 bg-red-500 text-white p-1 rounded-full">
            <X size={20} />
          </div>
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-red-100 rounded-md flex items-center justify-center mr-3">
              <span className="text-red-500 font-medium">18+</span>
            </div>
            <div>
              <div className="h-3 w-24 bg-gray-200 rounded-full mb-1"></div>
              <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div className="h-12 bg-gray-100 rounded-md w-full relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs font-medium">Blocked Content</div>
            </div>
          </div>
        </div>
        
        {/* Safe Content Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 relative z-10 transform translate-y-2 rotate-1">
          <div className="absolute -top-3 -right-3 bg-woof-green text-white p-1 rounded-full">
            <ShieldCheck size={20} />
          </div>
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-woof-blue/10 rounded-md flex items-center justify-center mr-3">
              <span className="text-woof-blue font-medium">G</span>
            </div>
            <div>
              <div className="h-3 w-24 bg-gray-200 rounded-full mb-1"></div>
              <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
            </div>
          </div>
          <div className="h-12 bg-gray-100 rounded-md w-full"></div>
        </div>
      </div>
    </div>
  );
};
