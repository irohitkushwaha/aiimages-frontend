import SearchBar from "../ui/searchbar";

const HeroSection = ({query}) => {
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
        <div className="relative z-10 flex md:mt-[70px] mt-[30px] mb-[50px] md:mb-[70px]">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:gap-[30px] gap-[10px]">
            <div className="max-w-3xl">
              {/* <p className="text-6xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight text-center">
                Explore Ultra Realistic
              </p> */}
              <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-8 md:leading-tight leading-[36px] text-center">
                Explore Ultra Realistic AI Generated Images Collections
              </h1>
              {/* <p className="text-6xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight text-center">
                Collections
              </p> */}
            </div>
            <div className="w-full">
              <SearchBar query={query}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
