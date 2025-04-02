
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Woof makes me feel secure knowing my children are safe online while I'm at the office.",
    author: "Priya S.",
    role: "Mumbai"
  },
  {
    text: "My son was spending too much time gaming. With Woof, I can now ensure he completes his studies before screen time.",
    author: "Rajesh K.",
    role: "Bangalore"
  },
  {
    text: "The location tracking feature lets me know when my daughter reaches her tuition classes safely. Invaluable in Delhi traffic!",
    author: "Anjali M.",
    role: "Delhi"
  },
  {
    text: "With so much inappropriate content online, Woof's content filtering gives us control over what our children can access.",
    author: "Vikram P.",
    role: "Pune"
  },
  {
    text: "Setting up Woof was surprisingly easy. The Hindi language option made it simple for my wife who prefers Hindi over English.",
    author: "Sanjay G.",
    role: "Chennai"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Indian Families
          </h2>
          {/* <p className="text-xl text-muted-foreground">
            Hear from parents across India who've found peace of mind with Woof
          </p> */}
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-woof-purple opacity-20 mb-4" />
                    <p className="flex-1 mb-4 text-gray-700">"{testimonial.text}"</p>
                    <div className="mt-auto">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="mr-2 relative static translate-y-0" />
            <CarouselNext className="relative static translate-y-0" />
          </div>
        </Carousel>
        
      
      </div>
    </section>
  );
};

export default TestimonialsSection;
