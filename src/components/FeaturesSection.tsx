
import React from "react";
import { featuresData } from "./features/featuresData";
import { FeatureCard } from "./features/FeatureCard";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-10">
      <div className="container px-4 md:px-6 mb-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Tools for Digital Parenting
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to guide your child's digital journey, all in one app.
          </p>
        </div>
      </div>

      {featuresData.map((feature, index) => (
        <FeatureCard key={feature.id} feature={feature} index={index} id={feature.id}/>
      ))}
    </section>
  );
};

export default FeaturesSection;
