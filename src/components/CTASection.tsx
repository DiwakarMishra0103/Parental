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

  // Handle initial form submission: send OTP via your backend
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number (10 digits and numeric)
    if (phone.length !== 10 || isNaN(Number(phone))) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }
    setPhoneError("");
    setIsSubmitting(true);

    // Prepare payload for sending OTP
    const payload = {
      name,
      email,
      phone,
      concern,
    };

    try {
      const response = await fetch("http://localhost:8000/api/auth/request-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        toast({
          title: "OTP Sent",
          description: "Please check your phone for the OTP.",
          variant: "default",
        });
        setStep("otp");
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send OTP.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast({
        title: "Submission Failed",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle OTP verification and, on success, submit data to Google Sheets
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setOtpError("");

    try {
      // Verify OTP via your backend
      const verifyResponse = await fetch("http://localhost:8000/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, otp }),
      });
      const verifyResult = await verifyResponse.json();

      if (verifyResponse.ok && verifyResult.success) {
        toast({
          title: "Verification Successful",
          description: "Thank you for verifying your number.",
          variant: "default",
        });

        // Generate the current timestamp
        const currentTimestamp = new Date().toLocaleString();

        // Prepare the form data for Google Sheets submission
        const formData = new FormData();
        formData.append("Name", name);
        formData.append("Email", email);
        formData.append("Phone", phone);
        formData.append("Concern", concern);
        formData.append("Timestamp", currentTimestamp);

        // Submit data to your Google Script endpoint (Google Sheets)
         await fetch(
          "https://script.google.com/macros/s/AKfycbzS-_n5tlwWP3vC5pKDEScaanAxWViApqxDxPjGRX1yLd_EqkFeVpXG5lBlbNUvCO76PQ/exec",
          {
            method: "POST",
            body: formData,
          }
        );
        // Optionally, you can check sheetResponse if needed
        setStep("thankyou");
      } else {
        setOtpError(verifyResult.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setOtpError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Resend OTP option
  const handleResendOtp = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        toast({
          title: "OTP Resent",
          description: "A new OTP has been sent to your phone.",
          variant: "default",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to resend OTP.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Allow the user to change their phone number if needed
  const handleChangePhone = () => {
    setStep("form");
    setOtp("");
    setOtpError("");
    // Optionally clear the phone field:
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
                Join thousands of Indian families who trust Woof to keep their
                children safe online. No credit card required.
              </p>
              <a
                href="#CTA"
                className="text-gray-600 hover:text-woof-purple transition-colors"
              >
                <Button
                  size="lg"
                  className="bg-white text-woof-purple hover:bg-gray-100"
                >
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
                        {isSubmitting ? "Sending OTP..." : "Get in Touch"}
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
                      <Button
                        variant="link"
                        onClick={handleResendOtp}
                        className="text-white underline"
                      >
                        Resend OTP
                      </Button>
                      <Button
                        variant="link"
                        onClick={handleChangePhone}
                        className="text-white underline"
                      >
                        Change Phone Number
                      </Button>
                    </div>
                  </>
                )}

                {step === "thankyou" && (
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                    <h3 className="text-3xl font-bold text-white">Thank You!</h3>
                    <p className="text-white/80 text-center">
                      Your submission has been received successfully.
                    </p>
                    <p className="text-sm text-white/70 text-center">
                      View submissions on{" "}
                      <a
                        href="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-white hover:text-gray-300"
                      >
                        Google Sheets
                      </a>
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
