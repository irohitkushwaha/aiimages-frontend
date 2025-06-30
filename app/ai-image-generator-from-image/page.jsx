import AiImageGenerator from "./comp";

export async function generateMetadata() {
  return {
    title: "AI Image Generator from Image",
    description: "Generate AI images from your uploaded image. Use our AI image generator from image to chnage or enhance existing ones",
    robots: "index, follow"
  };
}

export default function Page() {
  return <AiImageGenerator />;
}