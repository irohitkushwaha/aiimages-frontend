import SearchBar from "../ui/searchbar";

const HeroSection = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Grid Background */}
      <section className="relative bg-white overflow-hidden">
        {/* Grid Background */}
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

        {/* Hero Content */}
        <div className="relative z-10 flex mt-[70px] mb-[70px]">
          <div className="max-w-7xl mx-auto px-8 flex flex-col gap-[30px]">
            <div className="max-w-3xl">
              {/* <p className="text-6xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight text-center">
                Explore Ultra Realistic
              </p> */}
              <h1 className="text-6xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight text-center">
                Explore Ultra Realistic AI Generated Images Collections
              </h1>
              {/* <p className="text-6xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight text-center">
                Collections
              </p> */}
            </div>
            <div className="w-full">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
