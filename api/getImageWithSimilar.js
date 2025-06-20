import BASE_URL from "./baseUrl";

export async function getImageWithSimilar(slug) {

  console.log("slug value is inside api call fn ", slug)

  if (!slug) {
    throw new Error("Slug is required from frontend");
  }

  const res = await fetch(`${BASE_URL}/image/image-with-similar?slug=${encodeURIComponent(slug)}`, {
    cache: "force-cache",
  });

  console.log("response of api call get image with similar inside api call fn is", res)

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to fetch image");
  }

  const data = await res.json();
  return data.data;
}
