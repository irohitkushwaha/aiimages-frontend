// services/api/imageApi.js
import BASE_URL from "./baseUrl";

export async function uploadImage(formData) {
    const res = await fetch(`${BASE_URL}/image/upload`, {
      method: "POST",
      credentials: "include", // send cookies for JWT auth
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    console.log("upload image api response is", res)

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || "Failed to upload image");
    }
    return res.json();
  }

  //deploying