# real-Estate-Front-End
import React, { useState } from "react";

const PropertyCarousel = ({ property }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + property.images.length) % property.images.length);
  const nextSlide = () => setCurrent((current + 1) % property.images.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Main Image */}
      <div className="overflow-hidden rounded-2xl shadow-lg relative">
        <img
          src={property.images[current]}
          alt={`${property.title} ${current + 1}`}
          className="w-full h-96 object-cover transition-all duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
          <h2 className="text-xl font-bold">{property.title}</h2>
          <p className="text-lg">${property.price.toLocaleString()}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
      >
        ›
      </button>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {property.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
              i === current ? "border-blue-600" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Example Usage: Multiple Properties
export default function App() {
  const properties = [
    {
      title: "Modern Family Home",
      price: 350000,
      images: ["house1-1.jpg", "house1-2.jpg", "house1-3.jpg"],
    },
    {
      title: "Luxury Condo",
      price: 550000,
      images: ["house2-1.jpg", "house2-2.jpg", "house2-3.jpg"],
    },
    {
      title: "Cozy Cottage",
      price: 225000,
      images: ["house3-1.jpg", "house3-2.jpg"],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center space-y-10">
      {properties.map((property, index) => (
        <PropertyCarousel key={index} property={property} />
      ))}
    </div>
  );
}
