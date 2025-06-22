
import HeroSection from "../components/features/herosection";
import ImagesList from "@/components/features/imagesList";
import { getHomepageImages } from "@/api/getHomepageImages";
export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return {
    title: "Ai Generated Images", //
    description:
      "Explore or Download High Quality Ai Generated Photos/Images/Pictures Collections for free and copyright/Royalty free Images",
    keywords:
      "Ai Generated Images, Ai Created Images, Ai Generated Photos, Ai Generated Pictures",
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: "https://aigeneratedimagess.com",
      title: "AI Generated Images - Ultra Realistic Collections",
      description:
        "Explore or Download High Quality Ai Generated Photos/Images/Pictures Collections for free and copyright/Royalty free Images",
      images: ["/AILOGO.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Generated Images - Ultra Realistic Collections",
      description:
        "Explore or Download High Quality Ai Generated Photos/Images/Pictures Collections for free and copyright/Royalty free Images",
    },
  };
}

export default async function Home() {
  // Fetch initial images on the server (SSR)
  const initialImages = await getHomepageImages(0);
  //   {
  //     _id: 1,
  //     ImageFile: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
  //     ImgTitle: "Modern Business Office",
  //     Alt: "Modern Business Office",
  //     Category: "Business",
  //     PageSlug: "modern-business-office"
  //   },
  //   {
  //     _id: 2,
  //     ImageFile: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
  //     ImgTitle: "Financial Charts",
  //     Alt: "Financial Charts",
  //     Category: "Finance",
  //     PageSlug: "financial-charts"
  //   },
  //   {
  //     _id: 3,
  //     ImageFile: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400",
  //     ImgTitle: "Online Learning",
  //     Alt: "Online Learning",
  //     Category: "Education & Learning",
  //     PageSlug: "online-learning"
  //   },
  //   {
  //     _id: 4,
  //     ImageFile: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
  //     ImgTitle: "Tech Innovation",
  //     Alt: "Tech Innovation",
  //     Category: "Technology",
  //     PageSlug: "tech-innovation"
  //   },
  //   {
  //     _id: 5,
  //     ImageFile: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
  //     ImgTitle: "Festival Celebration",
  //     Alt: "Festival Celebration",
  //     Category: "Festivals & occasions",
  //     PageSlug: "festival-celebration"
  //   },
  //   {
  //     _id: 6,
  //     ImageFile: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
  //     ImgTitle: "Fashion Style",
  //     Alt: "Fashion Style",
  //     Category: "Fashion & beauty",
  //     PageSlug: "fashion-style"
  //   }
  // ];

  return (
    <div>
      <HeroSection />
      <ImagesList initialImages={initialImages} />
    </div>
  );
}
