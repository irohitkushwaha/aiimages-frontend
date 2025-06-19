import BASE_URL from "./baseUrl";

export async function getHomepageImages(page = 0) {
    const res = await fetch(`${BASE_URL}/image/homepage-images?page=${page}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch images error from next js api error");
    const data = await res.json();
    return data.data;
  }