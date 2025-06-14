import React from "react";

function ImagesList() {
  const images = [
    {
      id: 1,
      title: "Beautiful Sunset",
      imageUrl: "/68300d857d8d3f0d4e98125b.avif",
      linkUrl: "https://example.com/sunset",
    },
    {
      id: 2,
      title: "Mountain Vista",
      imageUrl:
        "https://images-videos.rohitkushwaha.com/thumbnail/68300d857d8d3f0d4e98125b.avif",
      linkUrl: "https://example.com/mountain",
    },
    {
      id: 3,
      title: "Ocean Waves",
      imageUrl:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/ocean",
    },
    {
      id: 4,
      title: "Forest Path",
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/forest",
    },
    {
      id: 5,
      title: "City Skyline",
      imageUrl: "/IMG20240923095712_11zon.jpg",
      linkUrl: "https://example.com/city",
    },
    {
      id: 6,
      title: "Desert Landscape",
      imageUrl:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/desert",
    },
    {
      id: 7,
      title: "Snowy Mountains",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/snow",
    },
    {
      id: 8,
      title: "Tropical Beach",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/beach",
    },
    {
      id: 1,
      title: "Beautiful Sunset",
      imageUrl: "/68300d857d8d3f0d4e98125b.avif",
      linkUrl: "https://example.com/sunset",
    },
    {
      id: 2,
      title: "Mountain Vista",
      imageUrl:
        "https://images-videos.rohitkushwaha.com/thumbnail/68300d857d8d3f0d4e98125b.avif",
      linkUrl: "https://example.com/mountain",
    },
    {
      id: 3,
      title: "Ocean Waves",
      imageUrl:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/ocean",
    },
    {
      id: 4,
      title: "Forest Path",
      imageUrl:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/forest",
    },
    {
      id: 5,
      title: "City Skyline",
      imageUrl: "/IMG20240923095712_11zon.jpg",
      linkUrl: "https://example.com/city",
    },
    {
      id: 6,
      title: "Desert Landscape",
      imageUrl:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/desert",
    },
    {
      id: 7,
      title: "Snowy Mountains",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/snow",
    },
    {
      id: 8,
      title: "Tropical Beach",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/beach",
    },
    {
      id: 7,
      title: "Snowy Mountains",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/snow",
    },
    {
      id: 8,
      title: "Tropical Beach",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/beach",
    },
    {
      id: 7,
      title: "Snowy Mountains",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/snow",
    },
    {
      id: 8,
      title: "Tropical Beach",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      linkUrl: "https://example.com/beach",
    },
  ];

  return (
    <section
      // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-[20px]  pb-[50px] auto-rows-min"
      className="columns-1 sm:columns-2 md:columns-4 gap-2 px-[20px] pb-[50px]"
    >
      {images.map((image) => (
        <article
          key={image.id}
          className="mb-2 group relative break-inside-avoid overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 h-fit"
        >
          <a
            href={image.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />

            {/* Hover overlay with title */}
            <div className="absolute inset-0 hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
              <h2 className="text-white text-lg font-semibold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                {image.title}
              </h2>
            </div>
          </a>
        </article>
      ))}
    </section>
  );
}

export default ImagesList;
