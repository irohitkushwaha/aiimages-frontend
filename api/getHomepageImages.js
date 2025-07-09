import BASE_URL from "./baseUrl";

// export async function getHomepageImages(page = 0) {
//     const res = await fetch(`${BASE_URL}/image/homepage-images?page=${page}`, {
//       cache: "no-store",
//     });
//     console.log("response for gethomepageimage", res)
//     if (!res.ok) throw new Error("Failed to fetch images error from next js api error");
//     const data = await res.json();
//     return data.data;
//   }

export async function getHomepageImages(page = 0) {
  try {
    const res = await fetch(`${BASE_URL}/image/homepage-images?page=${page}`, {
      cache: "no-store",
    });
    console.log("response for gethomepageimage", res);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to fetch images. Status: ${res.status}. Message: ${errorText}`
      );
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching homepage images:", error);
    throw error; // Re-throwing the error so the caller can handle it.
  }
}
