import HeroSection from "../components/features/herosection";
import ImagesList from "@/components/features/imagesList";
import { getHomepageImages } from "@/api/getHomepageImages";

export async function generateMetadata() {
  return {
    title: "Ai Generated Images",
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
      images: ["https://aigeneratedimagess.com/AILOGO.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Generated Images - Ultra Realistic Collections",
      description:
        "Explore or Download High Quality Ai Generated Photos/Images/Pictures Collections for free and copyright/Royalty free Images",
      image: "https://aigeneratedimagess.com/AILOGO.png",
    },
  };
}

export default async function Home() {
  // Fetch initial images on the server (SSR)
  const initialImages = await getHomepageImages(0);

  return (
    <div>
      <HeroSection />
      <ImagesList initialImages={initialImages} />
    </div>
  );
}
