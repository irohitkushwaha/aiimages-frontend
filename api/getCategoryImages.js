import BASE_URL from "./baseUrl";

export async function getCategoryImages(category) {
  if (!category) {
    throw new Error("category is required");
  }

  const res = await fetch(
    `${BASE_URL}/image/images-by-category?category=${encodeURIComponent(category)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch category images");
  const data = await res.json();
  return data.data;
}
