import HeroSection from "../components/features/herosection";
import ImagesList from "@/components/features/imagesList";
import Button from "@/components/ui/button";
export async function generateMetadata() {
  return {
    title: "Ai Generated Images - Ultra Realistic Collections",
    description:
      "Explore or Download High Quality Ai Generated Photos/Images/Pictures Collections for free and copyright/Royalty free Images",
    keywords: "Ai Generated Images, Ai Created Images, Ai Generated Photos, Ai Generated Pictures",
    robots: "index, follow",
    openGraph: {
      type: 'website',
      url: 'https://aigeneratedimagess.com',
      title: 'AI Generated Images - Ultra Realistic Collections',
      description: "Explore or Download High Quality Ai Generated Photos/Images/Pictures Collections for free and copyright/Royalty free Images",
      images: ['/AILOGO.png']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Generated Images - Ultra Realistic Collections',
      description: "Explore or Download High Quality Ai Generated Photos/Images/Pictures Collections for free and copyright/Royalty free Images",
    }
  };
}

export default function Home() {
  return (
    <div className="pb-[50px]">
      <HeroSection />
      <ImagesList />
      <Button>Load more ...</Button>
    </div>
  );
}
