const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Free",
      description: "Perfect for beginners & personal projects.",
      price: "$0 /Month",
      features: [
        { name: "Gemini 2.5 Flash model", enabled: true },
        { name: "Educational use allowed", enabled: true },
        { name: "Instant download", enabled: true },
        { name: "Copyright verification required", enabled: true },
        { name: "Limited commercial use", enabled: true },
        { name: "Basic image styles", enabled: true },
        // { name: "Unlimited download", enabled: false },
        // { name: "Ultra-high quality 4K", enabled: false },
        // { name: "Full commercial license", enabled: false },
      ],
    },
    {
      name: "Pro",
      description: "Professional-grade AI images for serious creators.",
      price: "$5 /Month",
      features: [
        { name: "Unlimited download", enabled: true },
        { name: "Imagen 3 advanced model", enabled: true },
        { name: "Ultra-high quality 4K images", enabled: true },
        { name: "100% copyright-free guarantee", enabled: true },
        { name: "Full commercial license", enabled: true },
        { name: "Priority customer support", enabled: true },
      ],
    },
   ];
  return (
    <div className="min-h-screen bg-white py-16 px-5 relative">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
              linear-gradient(to bottom, rgba(156, 163, 175, 0.5) 1px, rgba(229, 231, 235, 0.2) 1px),
              linear-gradient(to right, rgba(156, 163, 175, 0.5) 1px, rgba(229, 231, 235, 0.2) 1px)
            `,
          backgroundSize: "100px 100px",
        }}
      />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col gap-[50px]">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI-powered images that makes customers buy.
          </h1>
          <p className="text-2xl md:text-4xl font-bold text-gray-700 mb-6 leading-tight">
            Choose your plan and start converting today
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white/30 backdrop-blur-md border-2 border-gray-200/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-gray-300/60"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-700">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline mb-1">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{plan.period}</p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gray-900 hover:bg-gray-900/95 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-8">
                Choose Plan
              </button>

              {/* Features */}
              <div className="border-t border-gray-200/50 pt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">
                  What you get:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-center text-sm ${
                        feature.enabled ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      <span className="text-gray-400 mr-3 font-medium">+</span>
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
