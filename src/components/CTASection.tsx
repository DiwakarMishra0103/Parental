import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, CheckCircleIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Phone", phone);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzS-_n5tlwWP3vC5pKDEScaanAxWViApqxDxPjGRX1yLd_EqkFeVpXG5lBlbNUvCO76PQ/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      toast({
        title: "Thank You!",
        description: "Your form has been submitted successfully.",
        variant: "default",
      });
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error submitting form", error);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="CTA" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-woof-blue to-woof-purple rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* <div className="inline-flex items-center rounded-full px-4 py-1 text-sm mb-6 bg-white/20 text-white">
                <span>14-day free trial</span>
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Protect your child's digital journey today
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join thousands of Indian families who trust Woof to keep their
                children safe online. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-white text-woof-purple hover:bg-gray-100"
                >
                  Start Your Free Trial
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white/20"
                >
                  Plans Starting at ₹199/month
                </Button> */}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Want us to contact you?
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      name="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="border-white/30 bg-white/10 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        name="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 border-white/30 bg-white/10 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                      <Input
                        id="phone"
                        placeholder="Your 10-digit mobile number"
                        name="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-10 border-white/30 bg-white/10 text-white placeholder:text-white/50"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-woof-purple hover:bg-gray-100"
                  >
                    {isSubmitting ? "Sending..." : "Get in Touch"}
                  </Button>
                  <p className="text-xs text-white/70 text-center">
                    We value your privacy and follow all TRAI & IT Act regulations.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
