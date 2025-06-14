import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Grid Background */}
      <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(156, 163, 175, 0.5) 1px, rgba(229, 231, 235, 0.2) 1px),
              linear-gradient(to right, rgba(156, 163, 175, 0.5) 1px, rgba(229, 231, 235, 0.2) 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex mt-[70px] min-h-screen">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl">
            {/* <p className="text-6xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight text-center">
                Explore Ultra Realistic
              </p> */}
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight text-center">
                Explore Ultra Realistic AI Generated Images Collections
              </h1>
              {/* <p className="text-6xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight text-center">
                Collections
              </p> */}
             
        
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
