// services/api/imageApi.js
import BASE_URL from "./baseUrl";

/**
 * Calls the /image/generate endpoint with a prompt and an optional image file.
 * @param {Object} params
 * @param {string} params.prompt - The prompt text.
 * @param {File} [params.imageFile] - The image file (optional, but required by your backend).
 * @returns {Promise<any>}
 */
export async function generateImage({ prompt, imageFile }) {
  const formData = new FormData();
  formData.append("prompt", prompt);
  if (imageFile) {
    formData.append("image", imageFile); // field name must match backend: 'image'
  }

  const res = await fetch(`${BASE_URL}/image/generate`, {
    method: "POST",
    // credentials: "include", // send cookies for JWT auth
    body: formData,
    headers: {
      Accept: "application/json",
      // Do NOT set Content-Type! Let the browser set it for multipart/form-data.
    },
  });

  console.log("response from api call is for img generation", res);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Failed to generate image");
  }
  const responseData = await res.json();
  console.log("Response data:", responseData);

  // // Fix: Properly format the base64 data for display
  // if (responseData.imageBase64) {
  //   // Check if the base64 data already has the data URL prefix
  //   if (responseData.imageBase64.startsWith("data:image/")) {
  //     return responseData;
  //   } else {
  //     // Add the data URL prefix for base64 data
  //     responseData.imageBase64 = `data:image/png;base64,${responseData.imageBase64}`;
  //     return responseData;
  //   }
  // }

  return responseData.data;
}
