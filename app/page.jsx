import HeroSection from "../components/features/herosection";
import ImagesList from "@/components/features/imagesList";
import Button from "@/components/ui/button";
export default function Home() {
  return (
    <div className="pb-[50px]">
      <HeroSection />
      <ImagesList />
      <Button>Load more ...</Button>
    </div>
  );
}
