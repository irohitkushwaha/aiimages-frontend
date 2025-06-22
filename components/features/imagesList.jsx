
"use client"
import Image from "next/image";
import React, { useState } from "react";
import { getHomepageImages } from "@/api/getHomepageImages";
import Link from "next/link";

function ImagesList({ initialImages }) {
  const [images, setImages] = useState(initialImages);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

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

  const loadMoreImages = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const newImages = await getHomepageImages(nextPage);

      if (newImages.length === 0) {
        setHasMore(false);
      } else {
        setImages((prevImages) => [...prevImages, ...newImages]);
        setCurrentPage(nextPage);
      }
    } catch (error) {
      console.error("Error loading more images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section
        // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-[20px]  pb-[50px] auto-rows-min"
        className="columns-1 sm:columns-2 md:columns-4 gap-2 md:px-[20px] px-[10px] pb-[50px]"
      >
        {images.map((image) => (
          <figure
            key={image._id}
            className="mb-2 group relative break-inside-avoid overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 h-fit"
          >
            <Link
              href={`/${getShortCategory(image.Category)}/${image.PageSlug}`}
              rel="noopener noreferrer"
              className="block w-full "
              //aspect-[4/3]
            >
              <img
                src={image.ImageFile}
                alt={image.Alt}
                title={image.ImgTitle}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* <Image
                src={image.ImageFile}
                alt={image.Alt}
                title={image.ImgTitle}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                sizes="100vw"
              /> */}

              {/* Hover overlay with title */}
              <div className="absolute inset-0 hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <h2 className="text-white text-lg font-semibold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {image.ImgTitle}
                </h2>
              </div>
            </Link>
          </figure>
        ))}
      </section>

      {hasMore && (
        <div className="flex justify-center mt-8 mb-8">
          <button
            onClick={loadMoreImages}
            disabled={loading}
            className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold text-[18px] cursor-pointer hover:bg-gray-900/95 transition-all duration-300"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ImagesList;
