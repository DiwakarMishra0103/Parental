
import React from "react";
import { ShieldCheck } from "lucide-react";
import { Feature } from "./featuresData";

interface FeatureCardProps {
  feature: Feature;
  index: number;
  id: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, id }) => {
  const { iconComponent: IconComponent, title, colorClass, contentTitle, items } = feature;
  
  return (
    <div id={id} className={`py-16 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {index % 2 === 0 ? (
            <>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconComponent className={`h-6 w-6 ${colorClass}`} />
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <h2 className="text-2xl font-bold mb-6">{contentTitle}</h2>
                <ul className="space-y-4">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className={`mr-2 mt-1 bg-${feature.color}/10 p-1 rounded-full`}>
                        <ShieldCheck className={`h-4 w-4 ${colorClass}`} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-first md:order-last">
                {React.createElement(feature.visualComponent)}
              </div>
            </>
          ) : (
            <>
              <div>
                {React.createElement(feature.visualComponent)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <IconComponent className={`h-6 w-6 ${colorClass}`} />
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <h2 className="text-2xl font-bold mb-6">{contentTitle}</h2>
                <ul className="space-y-4">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className={`mr-2 mt-1 bg-${feature.color}/10 p-1 rounded-full`}>
                        <ShieldCheck className={`h-4 w-4 ${colorClass}`} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
