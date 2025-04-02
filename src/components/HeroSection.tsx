
import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Smartphone, Clock, Bell } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28" id="hero">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block">
              <div className="flex items-center rounded-full bg-muted px-4 py-1 text-sm">
                <Shield className="mr-1 h-3 w-3 text-woof-blue" />
                <span className="text-woof-purple">Trusted by 10,000+ Indian families</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Digital safety for your children in today's India
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl max-w-[600px]">
            keep your child safe by blocking harmful content, tracking location and setting time limits on apps. Digital parenting made simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a href="#CTA" className="text-gray-600 hover:text-woof-purple transition-colors">
                <Button size="lg" className="bg-woof-blue hover:bg-woof-purple text-white transition-colors">
                  Start Your Free Trial
                </Button>
              </a>
              {/* <Button size="lg" variant="outline" className="border-woof-blue text-woof-blue hover:bg-woof-blue hover:text-white transition-colors">
                Watch Demo
              </Button> */}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md mx-auto">
              {/* New appropriate hero image: Parent and child using digital device safely */}
              <div className="relative bg-gradient-to-br from-woof-purple/20 to-woof-blue/20 rounded-2xl p-6 shadow-lg">
                <div className="absolute top-4 right-4 bg-woof-blue text-white p-2 rounded-full">
                  <Shield className="h-5 w-5" />
                </div>

                {/* Parent device mockup */}
                <div className="bg-white rounded-xl shadow-md p-4 mb-6 transform rotate-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Smartphone className="h-4 w-4 text-woof-purple mr-2" />
                      <span className="text-sm font-medium">Parent Dashboard</span>
                    </div>
                    <Bell className="h-4 w-4 text-woof-orange" />
                  </div>

                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-lg p-2 flex justify-between items-center">
                      <span className="text-xs">Rohit's Screen Time</span>
                      <span className="text-xs font-bold text-woof-blue">1h 20m</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 flex justify-between items-center">
                      <span className="text-xs">Content Filtered</span>
                      <span className="text-xs font-bold text-woof-green">Safe</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 flex justify-between items-center">
                      <span className="text-xs">Location</span>
                      <span className="text-xs font-bold text-woof-purple">School</span>
                    </div>
                  </div>
                </div>

                {/* Child device mockup */}
                <div className="bg-white rounded-xl shadow-md p-4 transform -rotate-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Smartphone className="h-4 w-4 text-woof-blue mr-2" />
                      <span className="text-sm font-medium">Rohit's Device</span>
                    </div>
                    <Clock className="h-4 w-4 text-woof-blue" />
                  </div>

                  <div className="bg-woof-blue/10 rounded-lg p-3 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Time Remaining Today</span>
                      <span className="text-sm font-bold text-woof-blue">45m</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-woof-blue h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {['Study', 'Games', 'Video', 'Chat'].map((app, i) => (
                      <div key={i} className="bg-gray-50 rounded-md p-1 text-center">
                        <div className={`w-6 h-6 mx-auto rounded-md mb-1 flex items-center justify-center ${i === 1 || i === 2 ? 'bg-woof-orange/20' : 'bg-woof-green/20'}`}>
                          <span className="text-xs">{app[0]}</span>
                        </div>
                        <span className="text-xs">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 flex justify-center">
          <a href="#benefits" className="flex flex-col items-center text-muted-foreground hover:text-woof-purple">
            <span className="mb-2">Learn More</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
