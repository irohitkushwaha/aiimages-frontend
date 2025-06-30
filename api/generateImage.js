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
    credentials: "include", // send cookies for JWT auth
    body: formData,
    headers: {
      'Accept': 'application/json'
      // Do NOT set Content-Type! Let the browser set it for multipart/form-data.
    }
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Failed to generate image");
  }
  return res.json();
}