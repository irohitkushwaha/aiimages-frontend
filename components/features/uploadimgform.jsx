// "use client";
// // components/features/UploadFormClient.jsx
// import { useEffect } from "react";
// import { uploadImage } from "@/api/uploadImageApi";

// export default function UploadFormClient() {
//   useEffect(() => {
//     // Wait for DOM to be ready and check if elements exist
//     const form = document.getElementById("upload-form");
//     const imageInput = document.getElementById("image-input");
//     const uploadArea = document.getElementById("upload-area");
//     const submitBtn = document.getElementById("submit-btn");
//     const successMessage = document.getElementById("success-message");
//     const errorMessage = document.getElementById("error-message");
//     const charCount = document.getElementById("char-count");
//     const pageDescInput = document.getElementById("pageDescription");
//     const pageTitleInput = document.getElementById("pageTitle");
//     const pageSlugInput = document.getElementById("pageSlug");

//     // If essential elements don't exist, return early
//     if (
//       !form ||
//       !uploadArea ||
//       !submitBtn ||
//       !pageDescInput ||
//       !pageTitleInput ||
//       !pageSlugInput
//     ) {
//       console.warn("Essential form elements not found");
//       return;
//     }

//     let isSubmitting = false;
//     let imagePreview = null;

//     // Character count for page description
//     const updateCharCount = () => {
//       if (!pageDescInput || !charCount) return;
//       const length = pageDescInput.value.length;
//       charCount.textContent = `${length}/160 characters`;
//       if (length > 160) {
//         charCount.className = "text-sm text-red-500 ml-auto";
//       } else {
//         charCount.className = "text-sm text-gray-500 ml-auto";
//       }
//     };

//     // Auto-generate slug from page title
//     const generateSlug = (title) => {
//       return title
//         .toLowerCase()
//         .replace(/[^a-z0-9 -]/g, "")
//         .replace(/\s+/g, "-")
//         .replace(/-+/g, "-")
//         .trim("-");
//     };

//     const handlePageTitleChange = () => {
//       if (!pageTitleInput || !pageSlugInput) return;
//       const title = pageTitleInput.value;
//       if (title && !pageSlugInput.value) {
//         pageSlugInput.value = generateSlug(title);
//       }
//       clearError("pageTitle");
//     };

//     // Error handling
//     const showError = (fieldName, message) => {
//       const errorElement = document.getElementById(`${fieldName}-error`);
//       const inputElement =
//         document.getElementById(fieldName) ||
//         document.querySelector(`[name="${fieldName}"]`);

//       if (errorElement) {
//         errorElement.textContent = message;
//         errorElement.classList.remove("hidden");
//       }

//       if (inputElement) {
//         inputElement.classList.add("border-red-300", "bg-red-50");
//         inputElement.classList.remove("border-gray-300");
//       }
//     };

//     const clearError = (fieldName) => {
//       const errorElement = document.getElementById(`${fieldName}-error`);
//       const inputElement =
//         document.getElementById(fieldName) ||
//         document.querySelector(`[name="${fieldName}"]`);

//       if (errorElement) {
//         errorElement.classList.add("hidden");
//       }

//       if (inputElement) {
//         inputElement.classList.remove("border-red-300", "bg-red-50");
//         inputElement.classList.add("border-gray-300");
//       }
//     };

//     // File handling
//     const handleFileSelect = (file) => {
//       if (file && file.type === "image/avif") {
//         clearError("Image");

//         // Create preview
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           showImagePreview(e.target.result);
//         };
//         reader.readAsDataURL(file);
//       } else {
//         removeImagePreview();
//         if (file && file.type !== "image/avif") {
//           showError("Image", "Please select an AVIF image file");
//         }
//       }
//     };

//     const showImagePreview = (src) => {
//       if (!uploadArea) return;
//       uploadArea.innerHTML = `
//         <div class="relative">
//           <img src="${src}" alt="Preview" class="w-full h-64 object-cover rounded-lg" />
//           <button type="button" id="remove-image" class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors">
//             <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//         </div>
//       `;

//       const removeBtn = document.getElementById("remove-image");
//       removeBtn?.addEventListener("click", removeImagePreview);
//       imagePreview = src;
//     };

//     const removeImagePreview = () => {
//       if (!uploadArea) return;
//       uploadArea.innerHTML = `
//         <input type="file" name="Image" accept=".avif" required class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="image-input" />
//         <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//         </svg>
//         <p class="text-lg font-medium text-gray-700 mb-2">Drop your AVIF image here, or click to browse</p>
//         <p class="text-sm text-gray-500">Only AVIF format is supported</p>
//       `;

//       const newImageInput = document.getElementById("image-input");
//       newImageInput?.addEventListener("change", (e) =>
//         handleFileSelect(e.target.files[0])
//       );
//       setupDragAndDrop();

//       imagePreview = null;
//       clearError("Image");
//     };

//     // Drag and drop functionality
//     const setupDragAndDrop = () => {
//       if (!uploadArea) return;

//       const handleDrag = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         if (e.type === "dragenter" || e.type === "dragover") {
//           uploadArea.classList.add("border-blue-500", "bg-blue-50");
//         } else if (e.type === "dragleave") {
//           uploadArea.classList.remove("border-blue-500", "bg-blue-50");
//         }
//       };

//       const handleDrop = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         uploadArea.classList.remove("border-blue-500", "bg-blue-50");

//         const files = e.dataTransfer.files;
//         if (files && files[0]) {
//           handleFileSelect(files[0]);
//         }
//       };

//       uploadArea.addEventListener("dragenter", handleDrag);
//       uploadArea.addEventListener("dragover", handleDrag);
//       uploadArea.addEventListener("dragleave", handleDrag);
//       uploadArea.addEventListener("drop", handleDrop);
//     };

//     // Form validation
//     const validateForm = () => {
//       let isValid = true;

//       // Clear all previous errors
//       [
//         "Image",
//         "alt",
//         "caption",
//         "imageTitle",
//         "category",
//         "pageTitle",
//         "pageSlug",
//         "pageDescription",
//       ].forEach(clearError);

//       // Image validation
//       if (!imageInput.files[0] && !imagePreview) {
//         showError("Image", "Please select an AVIF image file");
//         isValid = false;
//       }

//       // Alt text validation
//       const alt = document.getElementById("alt").value.trim();
//       if (!alt) {
//         showError("alt", "Alt text is required");
//         isValid = false;
//       } else if (alt.length < 3) {
//         showError("alt", "Alt text must be at least 3 characters");
//         isValid = false;
//       }

//       // Caption validation
//       const caption = document.getElementById("caption").value.trim();
//       if (!caption) {
//         showError("caption", "Caption is required");
//         isValid = false;
//       } else if (caption.length < 10) {
//         showError("caption", "Caption must be at least 10 characters");
//         isValid = false;
//       }

//       // Image title validation
//       const imageTitle = document.getElementById("imageTitle").value.trim();
//       if (!imageTitle) {
//         showError("imageTitle", "Image title is required");
//         isValid = false;
//       } else if (imageTitle.length < 3) {
//         showError("imageTitle", "Image title must be at least 3 characters");
//         isValid = false;
//       }

//       // Category validation
//       const category = document.getElementById("category").value;
//       if (!category) {
//         showError("category", "Please select a category");
//         isValid = false;
//       }

//       // Page title validation
//       const pageTitle = document.getElementById("pageTitle").value.trim();
//       if (!pageTitle) {
//         showError("pageTitle", "Page title is required");
//         isValid = false;
//       } else if (pageTitle.length < 5) {
//         showError("pageTitle", "Page title must be at least 5 characters");
//         isValid = false;
//       }

//       // Page slug validation
//       const pageSlug = document.getElementById("pageSlug").value.trim();
//       if (!pageSlug) {
//         showError("pageSlug", "Page slug is required");
//         isValid = false;
//       } else if (!/^[a-z0-9-]+$/.test(pageSlug)) {
//         showError(
//           "pageSlug",
//           "Slug can only contain lowercase letters, numbers, and hyphens"
//         );
//         isValid = false;
//       }

//       // Page description validation
//       const pageDescription = document
//         .getElementById("pageDescription")
//         .value.trim();
//       if (!pageDescription) {
//         showError("pageDescription", "Page description is required");
//         isValid = false;
//       } else if (pageDescription.length < 20) {
//         showError(
//           "pageDescription",
//           "Page description must be at least 20 characters"
//         );
//         isValid = false;
//       } else if (pageDescription.length > 160) {
//         showError(
//           "pageDescription",
//           "Page description should not exceed 160 characters"
//         );
//         isValid = false;
//       }

//       return isValid;
//     };

//     // Form submission
//     const handleSubmit = async (e) => {
//       e.preventDefault();

//       if (isSubmitting) return;

//       if (!validateForm()) return;

//       isSubmitting = true;
//       submitBtn.disabled = true;
//       submitBtn.innerHTML = `
//         <div class="flex items-center justify-center">
//           <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//           Uploading Image...
//         </div>
//       `;
//       submitBtn.className = submitBtn.className.replace(
//         "bg-gray-900 hover:bg-gray-800",
//         "bg-gray-400 cursor-not-allowed"
//       );

//       try {
//         // Simulate API call
//         const formData = new FormData(form);

//         const formDataObject = {};
//         for (const [key, value] of formData.entries()) {
//           formDataObject[key] = value;
//         }

//         console.log("FormData structure:", {
//           entries: formDataObject,
//           // For file uploads
//           files: formData.getAll("Image").map((file) => ({
//             name: file.name,
//             type: file.type,
//             size: file.size,
//           })),
//         });
//         // Simulate upload delay
//         await uploadImage(formData);

//         console.log("Upload data:", Object.fromEntries(formData));

//         // Show success message
//         if (successMessage) {
//           successMessage.classList.remove("hidden");
//         }
//         if (errorMessage) {
//           errorMessage.classList.add("hidden");
//         }

//         // Reset form
//         form.reset();
//         removeImagePreview();
//         updateCharCount();
//       } catch (error) {
//         console.error("Upload error:", error);
//         if (errorMessage) {
//           errorMessage.classList.remove("hidden");
//         }
//         if (successMessage) {
//           successMessage.classList.add("hidden");
//         }
//       } finally {
//         isSubmitting = false;
//         submitBtn.disabled = false;
//         submitBtn.innerHTML = `
//           <div class="flex items-center justify-center">
//             <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
//             </svg>
//             Upload Image
//           </div>
//         `;
//         submitBtn.className = submitBtn.className.replace(
//           "bg-gray-400 cursor-not-allowed",
//           "bg-gray-900 hover:bg-gray-800"
//         );
//       }
//     };

//     // Event listeners - Add null checks
//     form?.addEventListener("submit", handleSubmit);

//     // Set up initial image input listener
//     const initialImageInput = document.getElementById("image-input");
//     initialImageInput?.addEventListener("change", (e) =>
//       handleFileSelect(e.target.files[0])
//     );

//     pageDescInput?.addEventListener("input", updateCharCount);
//     pageTitleInput?.addEventListener("input", handlePageTitleChange);

//     // Initialize
//     setupDragAndDrop();
//     updateCharCount();

//     // Cleanup function
//     return () => {
//       form?.removeEventListener("submit", handleSubmit);
//       const currentImageInput = document.getElementById("image-input");
//       currentImageInput?.removeEventListener("change", handleFileSelect);
//       pageDescInput?.removeEventListener("input", updateCharCount);
//       pageTitleInput?.removeEventListener("input", handlePageTitleChange);
//     };
//   }, []);

//   return null; // This component only adds interactivity
// }
