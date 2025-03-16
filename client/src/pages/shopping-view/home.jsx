import React, { useEffect, useState } from "react";
import banner1 from "../../assets/banner4.jpg";
import banner2 from "../../assets/banner5.jpg";
import banner3 from "../../assets/banner7.webp";
import { Button } from "@/components/ui/button";
import {
  BabyIcon,
  ChevronLeft,
  ChevronRight,
  CloudLightning,
  ShirtIcon,
  Umbrella,
  Watch,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function ShoppingHome() {
  const slides = [banner1, banner2, banner3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const categories = [
    { id: "men", label: "Men", icon: ShirtIcon },
    { id: "women", label: "Women", icon: CloudLightning },
    { id: "kids", label: "Kids", icon: BabyIcon },
    { id: "accessories", label: "Accessories", icon: Watch },
    { id: "footwear", label: "Footwear", icon: Umbrella },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" flex flex-col min-h-screen ">
    <div className="flex items-center justify-center w-full mt-10 ">
    <div className="relative w-[90%] h-[520px] overflow-hidden rounded shadow-2xl shadow-black">
        {slides.map((slide, index) => (
          <img
            src={slide}
            key={index}
            className={`absolute ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 `}
          />
        ))}

        <Button
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
            )
          }
          variant="outline"
          size="icon"
          className="absolute top-1/2  cursor-pointer left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
          variant="outline"
          size="icon"
          className="absolute top-1/2 cursor-pointer  right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((item) => (
              <Card className="cursor-pointer hover:shadow-lg  transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <item.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="">{item.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShoppingHome;
