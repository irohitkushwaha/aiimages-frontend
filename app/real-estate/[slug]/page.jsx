import { getImageWithSimilar } from "@/api/getImageWithSimilar";
import Button from "@/components/ui/button";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const imageData = await getImageWithSimilar(slug);

  return {
    title: imageData.mainImage.PageTitle,
    description: imageData.mainImage.PageDescription,
    robots: "index, follow",
    openGraph: {
      title: imageData.mainImage.PageTitle,
      description: imageData.mainImage.PageDescription,
      images: [
        {
          url: imageData.mainImage.ImageFile,
          width: 1200,
          height: 630,
          alt: imageData.mainImage.Alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: imageData.mainImage.PageTitle,
      description: imageData.mainImage.PageDescription,
      images: [imageData.mainImage.ImageFile],
    },
  };
}

async function ImagePage({ params }) {
  // Access slug from params
  const { slug } = await params;

  console.log("slug value is inside function ", slug);

  // Make API call
  const imageData = await getImageWithSimilar(slug);

  try {
    const categoryMap = [
      { fullCategory: "Business", shortCategory: "business" },
      { fullCategory: "Finance", shortCategory: "finance" },
      { fullCategory: "Education & Learning", shortCategory: "education" },
      { fullCategory: "Technology", shortCategory: "technology" },
      { fullCategory: "Festivals & occasions", shortCategory: "festivals" },
      { fullCategory: "Fashion & beauty", shortCategory: "fashion" },
      { fullCategory: "Travel, Lifestyle & Nature", shortCategory: "nature" },
      {
        fullCategory: "Home Design & Real Estate",
        shortCategory: "real-estate",
      },
      { fullCategory: "Food & Drink", shortCategory: "food" },
    ];

    // Utility: Pass long category, get short category
    function getShortCategory(fullCategory) {
      const found = categoryMap.find((c) => c.fullCategory === fullCategory);
      return found ? found.shortCategory : null;
    }
    return (
      <div className="w-full py-2">
        <h1 className="text-center font-bold md:text-[32px] text-[27px] text-gray-900 py-[15px] capitalize px-[10px]">
          {imageData.mainImage.PageTitle}
        </h1>
        <div className="w-full mx-auto pt-[20px] px-[10px]">
          <figure className="w-full mx-auto">
            <img
              src={imageData.mainImage.ImageFile}
              alt={imageData.mainImage.Alt}
              title={imageData.mainImage.ImgTitle}
              loading="lazy"
              className="mx-auto"
              // className="w-full"
            />
            <figcaption className="text-center text-gray-800 text-[18px] font-semibold pt-[15px] pb-[30px] max-w-[1200px] mx-auto">
              {imageData.mainImage.Caption}
            </figcaption>
            <a
              href={`https://api.aigeneratedimagess.com/api/image/download?url=${encodeURIComponent(
                imageData.mainImage.ImageFile
              )}`}
              download
            >
              <Button>Download</Button>
            </a>
          </figure>
        </div>
        <h2 className="text-center font-bold text-[28px] text-gray-800 py-[15px] pb-[30px] mt-[40px]">
          Similar Images
        </h2>
        <section
          // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-[20px]  pb-[50px] auto-rows-min"
          className="columns-1 sm:columns-2 md:columns-4 gap-2 md:px-[20px] px-[10px] pb-[50px] pt-[10px]"
        >
          {imageData.similarImages.map((image) => (
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
  } catch (error) {
    console.error("Error loading image page:", error);
    notFound();
  }
}

export default ImagePage;
