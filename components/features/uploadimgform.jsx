// 'use client'
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Upload, Image as ImageIcon, CheckCircle, AlertCircle, X } from 'lucide-react';

// export default function UploadImageForm({ categories }) {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [dragActive, setDragActive] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     watch,
//     reset,
//     clearErrors
//   } = useForm({
//     defaultValues: {
//       image: null,
//       alt: '',
//       caption: '',
//       imageTitle: '',
//       category: '',
//       pageSlug: '',
//       pageTitle: '',
//       pageDescription: ''
//     }
//   });

//   const watchedFields = watch();

//   // Generate slug from page title
//   const generateSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/[^a-z0-9 -]/g, '')
//       .replace(/\s+/g, '-')
//       .replace(/-+/g, '-')
//       .trim('-');
//   };

//   // Handle page title change and auto-generate slug
//   const handlePageTitleChange = (e) => {
//     const title = e.target.value;
//     setValue('pageTitle', title);
//     if (title && !watchedFields.pageSlug) {
//       setValue('pageSlug', generateSlug(title));
//     }
//     clearErrors('pageTitle');
//   };

//   // Handle file selection
//   const handleFileSelect = (file) => {
//     if (file && file.type === 'image/avif') {
//       setValue('image', file);
//       clearErrors('image');
      
//       // Create preview
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setImagePreview(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setValue('image', null);
//       setImagePreview(null);
//       // You might want to show an error here for non-AVIF files
//     }
//   };

//   // Handle drag and drop
//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === 'dragenter' || e.type === 'dragover') {
//       setDragActive(true);
//     } else if (e.type === 'dragleave') {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
    
//     const files = e.dataTransfer.files;
//     if (files && files[0]) {
//       handleFileSelect(files[0]);
//     }
//   };

//   // Remove image
//   const removeImage = () => {
//     setValue('image', null);
//     setImagePreview(null);
//     clearErrors('image');
//   };

//   // Form submission
//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Simulate API call - In real app, you'd upload to your backend
//       const formData = new FormData();
//       Object.keys(data).forEach(key => {
//         if (data[key] !== null && data[key] !== '') {
//           formData.append(key, data[key]);
//         }
//       });

//       // Simulate upload delay
//       await new Promise(resolve => setTimeout(resolve, 3000));
      
//       console.log('Upload data:', data);
//       setSubmitStatus('success');
      
//       // Reset form after successful upload
//       reset();
//       setImagePreview(null);
//     } catch (error) {
//       setSubmitStatus('error');
//       console.error('Upload error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
//       <div className="flex items-center mb-6">
//         <Upload className="w-6 h-6 text-blue-600 mr-3" />
//         <h2 className="text-2xl font-bold text-gray-900">Upload AI Generated Image</h2>
//       </div>

//       {/* Success Message */}
//       {submitStatus === 'success' && (
//         <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
//           <div className="flex items-center">
//             <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
//             <div>
//               <h4 className="font-semibold text-green-800">Image Uploaded Successfully!</h4>
//               <p className="text-green-700 text-sm">Your AI generated image has been uploaded and will be reviewed shortly.</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Error Message */}
//       {submitStatus === 'error' && (
//         <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
//           <div className="flex items-center">
//             <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
//             <div>
//               <h4 className="font-semibold text-red-800">Upload Failed</h4>
//               <p className="text-red-700 text-sm">Something went wrong. Please try again.</p>
//             </div>
//           </div>
//         </div>
//       )}

//       <div onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         {/* Upload Image */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Upload Image (AVIF only) *
//           </label>
          
//           {!imagePreview ? (
//             <div
//               className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
//                 dragActive 
//                   ? 'border-blue-500 bg-blue-50' 
//                   : errors.image 
//                     ? 'border-red-300 bg-red-50' 
//                     : 'border-gray-300 hover:border-gray-400'
//               }`}
//               onDragEnter={handleDrag}
//               onDragLeave={handleDrag}
//               onDragOver={handleDrag}
//               onDrop={handleDrop}
//             >
//               <input
//                 type="file"
//                 accept=".avif"
//                 {...register('image', { required: 'Please select an AVIF image file' })}
//                 onChange={(e) => handleFileSelect(e.target.files[0])}
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               />
//               <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
//               <p className="text-lg font-medium text-gray-700 mb-2">
//                 Drop your AVIF image here, or click to browse
//               </p>
//               <p className="text-sm text-gray-500">
//                 Only AVIF format is supported
//               </p>
//             </div>
//           ) : (
//             <div className="relative">
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="w-full h-64 object-cover rounded-lg"
//               />
//               <button
//                 type="button"
//                 onClick={removeImage}
//                 className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>
//           )}
          
//           {errors.image && (
//             <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
//           )}
//         </div>

//         {/* Alt Text */}
//         <div>
//           <label htmlFor="alt" className="block text-sm font-medium text-gray-700 mb-2">
//             Alt Text *
//           </label>
//           <input
//             type="text"
//             id="alt"
//             {...register('alt', { 
//               required: 'Alt text is required',
//               minLength: { value: 5, message: 'Alt text must be at least 5 characters' }
//             })}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//               errors.alt ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//             placeholder="Describe the image for accessibility"
//           />
//           {errors.alt && (
//             <p className="mt-1 text-sm text-red-600">{errors.alt.message}</p>
//           )}
//         </div>

//         {/* Caption */}
//         <div>
//           <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">
//             Caption *
//           </label>
//           <textarea
//             id="caption"
//             rows={3}
//             {...register('caption', { 
//               required: 'Caption is required',
//               minLength: { value: 10, message: 'Caption must be at least 10 characters' }
//             })}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
//               errors.caption ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//             placeholder="Write a descriptive caption for the image"
//           />
//           {errors.caption && (
//             <p className="mt-1 text-sm text-red-600">{errors.caption.message}</p>
//           )}
//         </div>

//         {/* Image Title */}
//         <div>
//           <label htmlFor="imageTitle" className="block text-sm font-medium text-gray-700 mb-2">
//             Image Title *
//           </label>
//           <input
//             type="text"
//             id="imageTitle"
//             {...register('imageTitle', { 
//               required: 'Image title is required',
//               minLength: { value: 3, message: 'Image title must be at least 3 characters' }
//             })}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//               errors.imageTitle ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//             placeholder="Enter a title for the image"
//           />
//           {errors.imageTitle && (
//             <p className="mt-1 text-sm text-red-600">{errors.imageTitle.message}</p>
//           )}
//         </div>

//         {/* Category */}
//         <div>
//           <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
//             Category *
//           </label>
//           <select
//             id="category"
//             {...register('category', { required: 'Please select a category' })}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//               errors.category ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//           >
//             <option value="">Select a category...</option>
//             {categories.map((category) => (
//               <option key={category.value} value={category.value}>
//                 {category.label}
//               </option>
//             ))}
//           </select>
//           {errors.category && (
//             <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
//           )}
//         </div>

//         {/* Page Title */}
//         <div>
//           <label htmlFor="pageTitle" className="block text-sm font-medium text-gray-700 mb-2">
//             Page Title *
//           </label>
//           <input
//             type="text"
//             id="pageTitle"
//             {...register('pageTitle', { 
//               required: 'Page title is required',
//               minLength: { value: 5, message: 'Page title must be at least 5 characters' }
//             })}
//             onChange={handlePageTitleChange}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//               errors.pageTitle ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//             placeholder="Enter the page title"
//           />
//           {errors.pageTitle && (
//             <p className="mt-1 text-sm text-red-600">{errors.pageTitle.message}</p>
//           )}
//         </div>

//         {/* Page Slug */}
//         <div>
//           <label htmlFor="pageSlug" className="block text-sm font-medium text-gray-700 mb-2">
//             Page Slug *
//           </label>
//           <input
//             type="text"
//             id="pageSlug"
//             {...register('pageSlug', { 
//               required: 'Page slug is required',
//               pattern: {
//                 value: /^[a-z0-9-]+$/,
//                 message: 'Slug can only contain lowercase letters, numbers, and hyphens'
//               }
//             })}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//               errors.pageSlug ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//             placeholder="page-url-slug"
//           />
//           <p className="mt-1 text-xs text-gray-500">
//             Auto-generated from page title. Use lowercase letters, numbers, and hyphens only.
//           </p>
//           {errors.pageSlug && (
//             <p className="mt-1 text-sm text-red-600">{errors.pageSlug.message}</p>
//           )}
//         </div>

//         {/* Page Description */}
//         <div>
//           <label htmlFor="pageDescription" className="block text-sm font-medium text-gray-700 mb-2">
//             Page Description *
//           </label>
//           <textarea
//             id="pageDescription"
//             rows={4}
//             {...register('pageDescription', { 
//               required: 'Page description is required',
//               minLength: { value: 20, message: 'Page description must be at least 20 characters' },
//               maxLength: { value: 160, message: 'Page description should not exceed 160 characters' }
//             })}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
//               errors.pageDescription ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//             placeholder="Write a meta description for the page (recommended: 120-160 characters)"
//           />
//           <div className="flex justify-between items-center mt-1">
//             {errors.pageDescription && (
//               <p className="text-sm text-red-600">{errors.pageDescription.message}</p>
//             )}
//             <p className="text-sm text-gray-500 ml-auto">
//               {watchedFields.pageDescription?.length || 0}/160 characters
//             </p>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           onClick={handleSubmit(onSubmit)}
//           className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
//             isSubmitting
//               ? 'bg-gray-400 cursor-not-allowed'
//               : 'bg-gray-900 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
//           } text-white`}
//         >
//           {isSubmitting ? (
//             <div className="flex items-center justify-center">
//               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//               Uploading Image...
//             </div>
//           ) : (
//             <div className="flex items-center justify-center">
//               <Upload className="w-5 h-5 mr-2" />
//               Upload Image
//             </div>
//           )}
//         </button>
//       </div>

//       {/* Form Footer */}
//       <div className="mt-6 p-4 bg-blue-50 rounded-lg">
//         <p className="text-sm text-blue-800 text-center">
//           <strong>Note:</strong> Only AVIF format images are accepted. 
//           All uploaded images will be reviewed before going live.
//         </p>
//       </div>
//     </div>
//   );
// }


'use client'
// components/features/UploadFormClient.jsx
import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function UploadFormClient() {
  useEffect(() => {
    // Wait for DOM to be ready and check if elements exist
    const form = document.getElementById('upload-form');
    const imageInput = document.getElementById('image-input');
    const uploadArea = document.getElementById('upload-area');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const charCount = document.getElementById('char-count');
    const pageDescInput = document.getElementById('pageDescription');
    const pageTitleInput = document.getElementById('pageTitle');
    const pageSlugInput = document.getElementById('pageSlug');

    // If essential elements don't exist, return early
    if (!form || !uploadArea || !submitBtn || !pageDescInput || !pageTitleInput || !pageSlugInput) {
      console.warn('Essential form elements not found');
      return;
    }

    let isSubmitting = false;
    let imagePreview = null;

    // Character count for page description
    const updateCharCount = () => {
      if (!pageDescInput || !charCount) return;
      const length = pageDescInput.value.length;
      charCount.textContent = `${length}/160 characters`;
      if (length > 160) {
        charCount.className = 'text-sm text-red-500 ml-auto';
      } else {
        charCount.className = 'text-sm text-gray-500 ml-auto';
      }
    };

    // Auto-generate slug from page title
    const generateSlug = (title) => {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
    };

    const handlePageTitleChange = () => {
      if (!pageTitleInput || !pageSlugInput) return;
      const title = pageTitleInput.value;
      if (title && !pageSlugInput.value) {
        pageSlugInput.value = generateSlug(title);
      }
      clearError('pageTitle');
    };

    // Error handling
    const showError = (fieldName, message) => {
      const errorElement = document.getElementById(`${fieldName}-error`);
      const inputElement = document.getElementById(fieldName) || document.querySelector(`[name="${fieldName}"]`);
      
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
      }
      
      if (inputElement) {
        inputElement.classList.add('border-red-300', 'bg-red-50');
        inputElement.classList.remove('border-gray-300');
      }
    };

    const clearError = (fieldName) => {
      const errorElement = document.getElementById(`${fieldName}-error`);
      const inputElement = document.getElementById(fieldName) || document.querySelector(`[name="${fieldName}"]`);
      
      if (errorElement) {
        errorElement.classList.add('hidden');
      }
      
      if (inputElement) {
        inputElement.classList.remove('border-red-300', 'bg-red-50');
        inputElement.classList.add('border-gray-300');
      }
    };

    // File handling
    const handleFileSelect = (file) => {
      if (file && file.type === 'image/avif') {
        clearError('image');
        
        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
          showImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        removeImagePreview();
        if (file && file.type !== 'image/avif') {
          showError('image', 'Please select an AVIF image file');
        }
      }
    };

    const showImagePreview = (src) => {
      if (!uploadArea) return;
      uploadArea.innerHTML = `
        <div class="relative">
          <img src="${src}" alt="Preview" class="w-full h-64 object-cover rounded-lg" />
          <button type="button" id="remove-image" class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `;
      
      const removeBtn = document.getElementById('remove-image');
      removeBtn?.addEventListener('click', removeImagePreview);
      imagePreview = src;
    };

    const removeImagePreview = () => {
      if (!uploadArea) return;
      uploadArea.innerHTML = `
        <input type="file" name="image" accept=".avif" required class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="image-input" />
        <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <p class="text-lg font-medium text-gray-700 mb-2">Drop your AVIF image here, or click to browse</p>
        <p class="text-sm text-gray-500">Only AVIF format is supported</p>
      `;
      
      const newImageInput = document.getElementById('image-input');
      newImageInput?.addEventListener('change', (e) => handleFileSelect(e.target.files[0]));
      setupDragAndDrop();
      
      imagePreview = null;
      clearError('image');
    };

    // Drag and drop functionality
    const setupDragAndDrop = () => {
      if (!uploadArea) return;
      
      const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
          uploadArea.classList.add('border-blue-500', 'bg-blue-50');
        } else if (e.type === 'dragleave') {
          uploadArea.classList.remove('border-blue-500', 'bg-blue-50');
        }
      };

      const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('border-blue-500', 'bg-blue-50');
        
        const files = e.dataTransfer.files;
        if (files && files[0]) {
          handleFileSelect(files[0]);
        }
      };

      uploadArea.addEventListener('dragenter', handleDrag);
      uploadArea.addEventListener('dragover', handleDrag);
      uploadArea.addEventListener('dragleave', handleDrag);
      uploadArea.addEventListener('drop', handleDrop);
    };

    // Form validation
    const validateForm = () => {
      let isValid = true;
      
      // Clear all previous errors
      ['image', 'alt', 'caption', 'imageTitle', 'category', 'pageTitle', 'pageSlug', 'pageDescription'].forEach(clearError);

      // Image validation
      if (!imageInput.files[0] && !imagePreview) {
        showError('image', 'Please select an AVIF image file');
        isValid = false;
      }

      // Alt text validation
      const alt = document.getElementById('alt').value.trim();
      if (!alt) {
        showError('alt', 'Alt text is required');
        isValid = false;
      } else if (alt.length < 5) {
        showError('alt', 'Alt text must be at least 5 characters');
        isValid = false;
      }

      // Caption validation
      const caption = document.getElementById('caption').value.trim();
      if (!caption) {
        showError('caption', 'Caption is required');
        isValid = false;
      } else if (caption.length < 10) {
        showError('caption', 'Caption must be at least 10 characters');
        isValid = false;
      }

      // Image title validation
      const imageTitle = document.getElementById('imageTitle').value.trim();
      if (!imageTitle) {
        showError('imageTitle', 'Image title is required');
        isValid = false;
      } else if (imageTitle.length < 3) {
        showError('imageTitle', 'Image title must be at least 3 characters');
        isValid = false;
      }

      // Category validation
      const category = document.getElementById('category').value;
      if (!category) {
        showError('category', 'Please select a category');
        isValid = false;
      }

      // Page title validation
      const pageTitle = document.getElementById('pageTitle').value.trim();
      if (!pageTitle) {
        showError('pageTitle', 'Page title is required');
        isValid = false;
      } else if (pageTitle.length < 5) {
        showError('pageTitle', 'Page title must be at least 5 characters');
        isValid = false;
      }

      // Page slug validation
      const pageSlug = document.getElementById('pageSlug').value.trim();
      if (!pageSlug) {
        showError('pageSlug', 'Page slug is required');
        isValid = false;
      } else if (!/^[a-z0-9-]+$/.test(pageSlug)) {
        showError('pageSlug', 'Slug can only contain lowercase letters, numbers, and hyphens');
        isValid = false;
      }

      // Page description validation
      const pageDescription = document.getElementById('pageDescription').value.trim();
      if (!pageDescription) {
        showError('pageDescription', 'Page description is required');
        isValid = false;
      } else if (pageDescription.length < 20) {
        showError('pageDescription', 'Page description must be at least 20 characters');
        isValid = false;
      } else if (pageDescription.length > 160) {
        showError('pageDescription', 'Page description should not exceed 160 characters');
        isValid = false;
      }

      return isValid;
    };

    // Form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (isSubmitting) return;
      
      if (!validateForm()) return;

      isSubmitting = true;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <div class="flex items-center justify-center">
          <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          Uploading Image...
        </div>
      `;
      submitBtn.className = submitBtn.className.replace('bg-gray-900 hover:bg-gray-800', 'bg-gray-400 cursor-not-allowed');

      try {
        // Simulate API call
        const formData = new FormData(form);
        
        // Simulate upload delay
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        console.log('Upload data:', Object.fromEntries(formData));
        
        // Show success message
        if (successMessage) {
          successMessage.classList.remove('hidden');
        }
        if (errorMessage) {
          errorMessage.classList.add('hidden');
        }
        
        // Reset form
        form.reset();
        removeImagePreview();
        updateCharCount();
        
      } catch (error) {
        console.error('Upload error:', error);
        if (errorMessage) {
          errorMessage.classList.remove('hidden');
        }
        if (successMessage) {
          successMessage.classList.add('hidden');
        }
      } finally {
        isSubmitting = false;
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <div class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            Upload Image
          </div>
        `;
        submitBtn.className = submitBtn.className.replace('bg-gray-400 cursor-not-allowed', 'bg-gray-900 hover:bg-gray-800');
      }
    };

    // Event listeners - Add null checks
    form?.addEventListener('submit', handleSubmit);
    
    // Set up initial image input listener
    const initialImageInput = document.getElementById('image-input');
    initialImageInput?.addEventListener('change', (e) => handleFileSelect(e.target.files[0]));
    
    pageDescInput?.addEventListener('input', updateCharCount);
    pageTitleInput?.addEventListener('input', handlePageTitleChange);

    // Initialize
    setupDragAndDrop();
    updateCharCount();

    // Cleanup function
    return () => {
      form?.removeEventListener('submit', handleSubmit);
      const currentImageInput = document.getElementById('image-input');
      currentImageInput?.removeEventListener('change', handleFileSelect);
      pageDescInput?.removeEventListener('input', updateCharCount);
      pageTitleInput?.removeEventListener('input', handlePageTitleChange);
    };
  }, []);

  return null; // This component only adds interactivity
}