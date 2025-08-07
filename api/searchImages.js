import BASE_URL from "./baseUrl";

// API service for searching AI images
export const searchAiImages = async (keyword) => {
  try {
    if (!keyword || keyword.trim() === "") {
      throw new Error("Keyword is required");
    }

    const encodedKeyword = encodeURIComponent(keyword.trim());
    console.log("value of encodedkeyword in api file is", encodedKeyword)
    const response = await fetch(`${BASE_URL}/search?keyword=${encodedKeyword}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

console.log("response value is on api file", response)

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log("data value after parsing json in api file is", data)

    return data;

  } catch (error) {
    console.error("Search API error:", error);
    throw error;
  }
};