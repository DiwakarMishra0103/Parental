import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";

const CTASection = () => {
  const { toast } = useToast();
  const [step, setStep] = useState("form"); // "form", "otp", or "thankyou"
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // OTP state
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  // Simulated OTP value
  const [generatedOtp, setGeneratedOtp] = useState("");

  // Function to simulate OTP generation
  const generateOtp = () => {
    const otpValue = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpValue);
    console.log("Simulated OTP:", otpValue);
    toast({
      title: "OTP Sent",
      description: `Simulated OTP: ${otpValue} (For demo purposes only)`,
      variant: "default",
    });
  };

  // Handle initial form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number (10 digits and numeric)
    if (phone.length !== 10 || isNaN(Number(phone))) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }
    setPhoneError("");
    setIsSubmitting(true);

    // Simulate sending OTP
    generateOtp();

    // Switch to OTP input step
    setStep("otp");
    setIsSubmitting(false);
  };

  // Handle OTP verification
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setOtpError("");

    // Check if entered OTP matches the generated OTP
    if (otp !== generatedOtp) {
      setOtpError("Invalid OTP. Please try again.");
      setIsSubmitting(false);
      return;
    }

    toast({
      title: "Verification Successful",
      description: "Thank you for verifying your number.",
      variant: "default",
    });
    setStep("thankyou");
    setIsSubmitting(false);
  };

  // Handle OTP Resend
  const handleResendOtp = () => {
    generateOtp();
  };

  // Handle change phone option: reset OTP and form state if needed
  const handleChangePhone = () => {
    setStep("form");
    setOtp("");
    setOtpError("");
    // Optionally, clear the phone input if desired:
    // setPhone("");
  };

  return (
    <section id="CTA" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-woof-blue to-woof-purple rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left-side static content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Protect your child's digital journey today
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join thousands of Indian families who trust Woof to keep their children safe online. No credit card required.
              </p>
              <a href="#CTA" className="text-gray-600 hover:text-woof-purple transition-colors">
                <Button size="lg" className="bg-white text-woof-purple hover:bg-gray-100">
                  Get Started
                </Button>
              </a>
            </div>

            {/* Right-side dynamic content */}
            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12">
              <div className="max-w-md mx-auto">
                {step === "form" && (
                  <>
                    <h3 className="text-2xl font-semibold text-white mb-6">
                      Want us to contact you?
                    </h3>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
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
                            required
                            className={`pl-10 border ${
                              phoneError ? "border-red-500" : "border-white/30"
                            } bg-white/10 text-white placeholder:text-white/50`}
                          />
                        </div>
                        {phoneError && (
                          <p className="text-red-500 text-sm">{phoneError}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="concern" className="text-white">
                          What is your primary concern for your child's digital safety? (optional)
                        </Label>
                        <Textarea
                          id="concern"
                          placeholder="Enter your concern"
                          name="Concern"
                          value={concern}
                          onChange={(e) => setConcern(e.target.value)}
                          className="w-full border-white/30 bg-white/10 text-white placeholder:text-white/50 rounded-md p-3"
                        />
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
                  </>
                )}

                {step === "otp" && (
                  <>
                    <h3 className="text-2xl font-semibold text-white mb-6">
                      Enter OTP
                    </h3>
                    <form onSubmit={handleOtpSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="otp" className="text-white">
                          OTP Code
                        </Label>
                        <Input
                          id="otp"
                          placeholder="Enter the OTP"
                          name="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          required
                          className="border-white/30 bg-white/10 text-white placeholder:text-white/50"
                        />
                      </div>
                      {otpError && (
                        <p className="text-red-500 text-sm">{otpError}</p>
                      )}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-woof-purple hover:bg-gray-100"
                      >
                        {isSubmitting ? "Verifying..." : "Verify OTP"}
                      </Button>
                    </form>
                    <div className="flex justify-between items-center mt-4">
                      <Button variant="link" onClick={handleResendOtp} className="text-white underline">
                        Resend OTP
                      </Button>
                      <Button variant="link" onClick={handleChangePhone} className="text-white underline">
                        Change Phone Number
                      </Button>
                    </div>
                  </>
                )}

                {step === "thankyou" && (
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                    <h3 className="text-3xl font-bold text-white">
                      Thank You!
                    </h3>
                    <p className="text-white/80 text-center">
                      Your submission has been received successfully.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
