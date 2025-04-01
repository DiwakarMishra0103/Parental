
import { Shield, Clock, MapPin, Eye, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <Shield className="h-12 w-12 text-woof-purple" />,
    title: "Peace of Mind",
    description: "Rest easy knowing your child is protected from online dangers with real-time alerts in Hindi and English."
  },
  {
    icon: <Clock className="h-12 w-12 text-woof-blue" />,
    title: "Family Time",
    description: "Set healthy screen time limits during study hours and encourage more quality family interactions."
  },
  {
    icon: <MapPin className="h-12 w-12 text-woof-orange" />,
    title: "Location Safety",
    description: "Track your child's location in busy Indian cities with accurate notifications when they reach school or tuitions."
  },
  {
    icon: <Eye className="h-12 w-12 text-woof-green" />,
    title: "Content Filtering",
    description: "Block inappropriate content based on Indian cultural values and your family's personal preferences."
  }
];

const features = [
  "Monitors popular Indian apps and social media platforms",
  "Multi-language interface including Hindi, English, and more",
  "24/7 support team based in India"
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Indian Parents Choose Woof
          </h2>
          <p className="text-xl text-muted-foreground">
            We help you create a safer digital environment for your children while teaching them responsible online habits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div 
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-full bg-gray-100 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Redesigned "Made for Indian Families" section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 bg-woof-purple/10 text-woof-purple font-medium py-2 px-4 rounded-full w-fit mb-6">
                    <Shield className="h-5 w-5" />
                    <span>Made for Indian Families</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6">
                    Designed Specifically for Your Family's Needs
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-8">
                    Woof is designed specifically with urban Indian families in mind, addressing the unique digital challenges faced by children in India's fast-paced tech environment.
                  </p>
                  
                  <div className="space-y-5 mb-8">
                    {features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md"
                      >
                        <CheckCircle2 className="h-6 w-6 text-woof-purple mt-0.5 flex-shrink-0" />
                        <p className="font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* <Button className="mt-2 bg-woof-purple hover:bg-woof-purple/90">
                    Learn More
                  </Button> */}
                </div>
              </div>
              
              <div className="relative flex items-center justify-center p-8 lg:p-0">
                <div className="relative w-full h-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-woof-purple/20 to-woof-blue/20 rounded-2xl transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Family using Woof app together" 
                    className="rounded-2xl shadow-lg relative z-10 object-cover w-full h-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-woof-purple" />
                      <span className="font-medium text-woof-purple">Family Protection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
