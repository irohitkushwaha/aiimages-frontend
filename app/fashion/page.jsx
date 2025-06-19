// app/technology/page.jsx
export async function generateMetadata() {
    return {
      title: "Fashion AI Images - Fashion & Beauty Photos",
      description: "Explore AI-generated fashion images for fashion companies, beauty, and fashion products. Perfect for fashion marketing and product presentations.",
      keywords: "fashion ai images, fashion photos, beauty images, fashion marketing, ai generated fashion photos",
      robots: "index, follow"
    };
  }

  import { getCategoryImages } from "@/api/getCategoryImages";

export default async function Fashion() {
  const categoryMap = [
    { fullCategory: "Business", shortCategory: "business" },
    { fullCategory: "Finance", shortCategory: "finance" },
    { fullCategory: "Education & Learning", shortCategory: "education" },
    { fullCategory: "Technology", shortCategory: "technology" },
    { fullCategory: "Festivals & occasions", shortCategory: "festivals" },
    { fullCategory: "Fashion & beauty", shortCategory: "fashion" },
    { fullCategory: "Travel, Lifestyle & Nature", shortCategory: "nature" },
    { fullCategory: "Home Design & Real Estate", shortCategory: "real-estate" },
    { fullCategory: "Food & Drink", shortCategory: "food" },
  ];

  // Utility: Pass long category, get short category
  function getShortCategory(fullCategory) {
    const found = categoryMap.find((c) => c.fullCategory === fullCategory);
    return found ? found.shortCategory : null;
  }
  const images = await getCategoryImages("Fashion & beauty");
  return (
    <div>
      <h1 className="text-center font-bold md:text-[32px] text-[27px] text-gray-900 py-[30px] capitalize px-[10px]">
        Best Fashion & Beauty Images - Free AI Generated 
      </h1>{" "}
      <section
        // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-[20px]  pb-[50px] auto-rows-min"
        className="columns-1 sm:columns-2 md:columns-4 gap-2 md:px-[20px] px-[10px] pb-[50px]"
      >
        {images.map((image) => (
          <figure
            key={image._id}
            className="mb-2 group relative break-inside-avoid overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 h-fit"
          >
            <a
              href={`/${getShortCategory(image.Category)}/${image.PageSlug}`}
              rel="noopener noreferrer"
              className="block w-full"
            >
              <img
                src={image.ImageFile}
                alt={image.Alt}
                title={image.ImgTitle}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay with title */}
              <div className="absolute inset-0 hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <h2 className="text-white text-lg font-semibold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {image.ImgTitle}
                </h2>
              </div>
            </a>
          </figure>
        ))}
      </section>
    </div>
  );
}

  