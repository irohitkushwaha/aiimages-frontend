import BASE_URL from "./baseUrl";

// API service for searching AI images
export const searchAiImages = async (keyword) => {
  try {
    if (!keyword || keyword.trim() === "") {
      throw new Error("Keyword is required");
    }

    const encodedKeyword = encodeURIComponent(keyword.trim());
    const response = await fetch(`${BASE_URL}/search?keyword=${encodedKeyword}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Search API error:", error);
    throw error;
  }
};