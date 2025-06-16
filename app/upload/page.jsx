export async function generateMetadata() {
  return {
    title: "Upload AI Generated Images - Share Your Artwork",
    description:
      "Upload your AI-generated images to our platform. Share your AI artwork with the community and get it featured.",
    robots: "index, follow",
  };
}

import {
  Upload,
  Image as ImageIcon,
  ImagePlus,
  Info,
  CheckCircle,
  Upload as UploadIcon,
} from "lucide-react";
import UploadFormClient from "@/components/features/uploadimgform";
export default function UploadImagePage() {
  const categories = [
    { value: "business", label: "Business" },
    { value: "finance", label: "Finance" },
    { value: "education", label: "Education & Learning" },
    { value: "technology", label: "Technology" },
    { value: "festivals", label: "Festivals & Occasions" },
    { value: "fashion", label: "Fashion & Beauty" },
    { value: "travel", label: "Travel" },
    { value: "lifestyle", label: "Lifestyle & Nature" },
    { value: "home-design", label: "Home Design & Real Estate" },
    { value: "food-drink", label: "Food & Drink" },
  ];

  const uploadGuidelines = [
    {
      title: "Image Format",
      description:
        "Only AVIF format is accepted for optimal compression and quality",
      icon: <ImagePlus className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "AI Generated Only",
      description:
        "Images must be created using AI tools like Midjourney, DALL-E, or Stable Diffusion",
      icon: <UploadIcon className="w-5 h-5 text-green-600" />,
    },
    {
      title: "Quality Standards",
      description:
        "High resolution images with clear, professional quality are preferred",
      icon: <CheckCircle className="w-5 h-5 text-purple-600" />,
    },
    {
      title: "Content Guidelines",
      description:
        "No copyrighted material, inappropriate content, or low-quality images",
      icon: <Info className="w-5 h-5 text-orange-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upload AI Generated Image
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your AI-generated artwork with our community. Fill out the
            details below to upload your image.
          </p>
        </header>

        {/* Mobile-first layout: Form first on mobile, guidelines second */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Form - First on mobile, second on desktop */}
          <div className="lg:col-span-2 lg:order-2">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <Upload className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Upload AI Generated Image
                </h2>
              </div>

              {/* Server-side rendered form */}
              <form className="space-y-6" id="upload-form">
                {/* Upload Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Image (AVIF only) *
                  </label>

                  <div
                    className="relative border-2 border-dashed rounded-lg p-8 text-center transition-colors border-gray-300 hover:border-gray-400"
                    id="upload-area"
                  >
                    <input
                      type="file"
                      name="image"
                      accept=".avif"
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      id="image-input"
                    />
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      Drop your AVIF image here, or click to browse
                    </p>
                    <p className="text-sm text-gray-500">
                      Only AVIF format is supported
                    </p>
                  </div>

                  <p
                    className="mt-1 text-sm text-red-600 hidden"
                    id="image-error"
                  ></p>
                </div>

                {/* Alt Text */}
                <div>
                  <label
                    htmlFor="alt"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Alt Text *
                  </label>
                  <input
                    type="text"
                    id="alt"
                    name="alt"
                    required
                    minLength="5"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="Describe the image for accessibility"
                  />
                  <p
                    className="mt-1 text-sm text-red-600 hidden"
                    id="alt-error"
                  ></p>
                </div>

                {/* Caption */}
                <div>
                  <label
                    htmlFor="caption"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Caption *
                  </label>
                  <textarea
                    id="caption"
                    name="caption"
                    rows={3}
                    required
                    minLength="10"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none border-gray-300"
                    placeholder="Write a descriptive caption for the image"
                  />
                  <p
                    className="mt-1 text-sm text-red-600 hidden"
                    id="caption-error"
                  ></p>
                </div>

                {/* Image Title */}
                <div>
                  <label
                    htmlFor="imageTitle"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Image Title *
                  </label>
                  <input
                    type="text"
                    id="imageTitle"
                    name="imageTitle"
                    required
                    minLength="3"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="Enter a title for the image"
                  />
                  <p
                    className="mt-1 text-sm text-red-600 hidden"
                    id="imageTitle-error"
                  ></p>
                </div>

                {/* Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                  >
                    <option value="">Select a category...</option>
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  <p
                    className="mt-1 text-sm text-red-600 hidden"
                    id="category-error"
                  ></p>
                </div>

                {/* Page Title */}
                <div>
                  <label
                    htmlFor="pageTitle"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Page Title *
                  </label>
                  <input
                    type="text"
                    id="pageTitle"
                    name="pageTitle"
                    required
                    minLength="5"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="Enter the page title"
                  />
                  <p
                    className="mt-1 text-sm text-red-600 hidden"
                    id="pageTitle-error"
                  ></p>
                </div>

                {/* Page Slug */}
                <div>
                  <label
                    htmlFor="pageSlug"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Page Slug *
                  </label>
                  <input
                    type="text"
                    id="pageSlug"
                    name="pageSlug"
                    required
                    pattern="^[a-z0-9-]+$"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="page-url-slug"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Auto-generated from page title. Use lowercase letters,
                    numbers, and hyphens only.
                  </p>
                  <p
                    className="mt-1 text-sm text-red-600 hidden"
                    id="pageSlug-error"
                  ></p>
                </div>

                {/* Page Description */}
                <div>
                  <label
                    htmlFor="pageDescription"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Page Description *
                  </label>
                  <textarea
                    id="pageDescription"
                    name="pageDescription"
                    rows={4}
                    required
                    minLength="20"
                    maxLength="160"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none border-gray-300"
                    placeholder="Write a meta description for the page (recommended: 120-160 characters)"
                  />
                  <div className="flex justify-between items-center mt-1">
                    <p
                      className="text-sm text-red-600 hidden"
                      id="pageDescription-error"
                    ></p>
                    <p
                      className="text-sm text-gray-500 ml-auto"
                      id="char-count"
                    >
                      0/160 characters
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="submit-btn"
                  className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 bg-gray-900 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-white"
                >
                  <div className="flex items-center justify-center">
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Image
                  </div>
                </button>
              </form>

              {/* Status Messages */}
              <div
                id="success-message"
                className="hidden mt-6 bg-green-50 border border-green-200 rounded-lg p-4"
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-green-800">
                      Image Uploaded Successfully!
                    </h4>
                    <p className="text-green-700 text-sm">
                      Your AI generated image has been uploaded and will be
                      reviewed shortly.
                    </p>
                  </div>
                </div>
              </div>

              <div
                id="error-message"
                className="hidden mt-6 bg-red-50 border border-red-200 rounded-lg p-4"
              >
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-red-800">
                      Upload Failed
                    </h4>
                    <p className="text-red-700 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Footer */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Note:</strong> Only AVIF format images are accepted.
                  All uploaded images will be reviewed before going live.
                </p>
              </div>

              {/* Client-side interactivity */}
              <UploadFormClient />
            </div>
          </div>

          {/* Guidelines and Information - Second on mobile, first on desktop */}
          <div className="lg:col-span-1 lg:order-1 space-y-6">
            {/* Upload Guidelines */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  Upload Guidelines
                </h3>
              </div>
              <div className="space-y-4">
                {uploadGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">{guideline.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {guideline.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {guideline.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Info */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-900">
                  Available Categories
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-2 text-green-800 text-sm">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {category.label}
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Tips */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <ImagePlus className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-900">
                  SEO Best Practices
                </h3>
              </div>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Use descriptive alt text for accessibility</li>
                <li>• Write engaging captions that tell a story</li>
                <li>• Choose clear, keyword-rich titles</li>
                <li>• Keep page descriptions under 160 characters</li>
                <li>• Use relevant keywords naturally</li>
                <li>• Create SEO-friendly URL slugs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
