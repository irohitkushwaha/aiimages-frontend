import HeroSection from "@components/features/herosection";
import ImagesList from "@components/features/imagesList";
import { searchAiImages } from "@/api/searchImages";

export default async function Search({ params }) {
  // Get the query parameter from the URL and decode it
  const query = decodeURIComponent(params.query);

  let initialImages = [];
  let isLoading = true;

  try {
    // Fetch search results on the server (SSR)
    const searchResults = await searchAiImages(query);

    // Extract the data from the API response
    // Assuming your API returns { success: true, data: [...], message: "..." }
    initialImages = searchResults.data || [];
    isLoading = false;

    console.log(
      `Server-side search for "${query}" returned ${initialImages.length} results`
    );
  } catch (error) {
    console.error("Error fetching search results on server:", error);
    isLoading = false;
    initialImages = [];
  }

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );

  // No results component
  const NoResults = () => (
    <div className="flex justify-center items-center py-20">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          No Images Found for "{query}"
        </h3>
      </div>
    </div>
  );

  return (
    <div>
      <HeroSection />

      {isLoading ? (
        <LoadingSpinner />
      ) : initialImages.length === 0 ? (
        <NoResults />
      ) : (
        <ImagesList initialImages={initialImages} />
      )}
    </div>
  );
}
