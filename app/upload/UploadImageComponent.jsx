"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Upload, Image, ImagePlus, Info, CheckCircle } from "lucide-react";
import { uploadImage } from "@/api/uploadImageApi";

export default function UploadImageComponent() {
  const categories = [
    { value: "Business", label: "Business" },
    { value: "Finance", label: "Finance" },
    { value: "Education & Learning", label: "Education & Learning" },
    { value: "Technology", label: "Technology" },
    { value: "Festivals & occasions", label: "Festivals & occasions" },
    { value: "Fashion & beauty", label: "Fashion & beauty" },
    {
      value: "Travel, Lifestyle & Nature",
      label: "Travel, Lifestyle & Nature",
    },
    { value: "Home Design & Real Estate", label: "Home Design & Real Estate" },
    { value: "Food & Drink", label: "Food & Drink" },
    { value: "Other", label: "Other" },
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
      icon: <Upload className="w-5 h-5 text-green-600" />,
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

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      alt: "",
      caption: "",
      imgtitle: "",
      category: "",
      pagetitle: "",
      pageslug: "",
      pageDescription: "",
    },
  });

  // State for file upload and form status
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  // Watch page description for character count
  const pageDescription = watch("pageDescription", "");

  // Handle file selection
  const handleFileChange = (file) => {
    console.log("handle file change executed", file);
    if (file) {
      setImageFile(file);
      setUploadError("");
    } else {
      setUploadError("Please select a valid AVIF image file");
      setImageFile(null);
    }
  };

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // Auto-generate slug from page title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  // Form submission handler
  const onSubmit = async (data) => {
    if (!imageFile) {
      setUploadError("Image file is requiredddddddddd");
      return;
    }

    try {
      setIsUploading(true);
      setUploadError("");

      // const formData = {
      //   Image: imageFile,
      //   alt: data.alt,
      //   caption: data.caption,
      //   imgtitle: data.imageTitle,
      //   category: data.category,
      //   pagetitle: data.pageTitle,
      //   pageslug: data.pageSlug,
      //   pageDescription: data.pageDescription,
      // };

      const formData = new FormData();
      formData.append("Image", imageFile);
      formData.append("alt", data.alt);
      formData.append("caption", data.caption);
      formData.append("imgtitle", data.imgtitle);
      formData.append("category", data.category);
      formData.append("pagetitle", data.pagetitle);
      formData.append("pageslug", data.pageslug);
      formData.append("pageDescription", data.pageDescription);

      const response = await uploadImage(formData);

      console.log("Upload successful:", response);
      setUploadSuccess(true);

      // Reset form after successful upload
      setTimeout(() => {
        setUploadSuccess(false);
        setImageFile(null);
      }, 3000);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadError(
        error.message || "Failed to upload image. Please try again."
      );
    } finally {
      setIsUploading(false);
    }
  };

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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Upload Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Image (AVIF only) *
                  </label>

                  <div
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive
                        ? "border-blue-500 bg-blue-50"
                        : imageFile
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e.target.files[0])}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Image className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      {imageFile
                        ? imageFile.name
                        : "Drop your AVIF image here, or click to browse"}
                    </p>
                    <p className="text-sm text-gray-500">
                      Only AVIF format is supported
                    </p>
                  </div>
                </div>

                {/* Alt Text */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alt Text *
                  </label>
                  <input
                    type="text"
                    {...register("alt", {
                      required: "Alt text is required",
                      minLength: {
                        value: 5,
                        message: "Alt text must be at least 5 characters",
                      },
                    })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="Describe the image for accessibility"
                  />
                  {errors.alt && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.alt.message}
                    </p>
                  )}
                </div>

                {/* Caption */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Caption *
                  </label>
                  <textarea
                    rows={3}
                    {...register("caption", {
                      required: "Caption is required",
                      minLength: {
                        value: 10,
                        message: "Caption must be at least 10 characters",
                      },
                    })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none border-gray-300"
                    placeholder="Write a descriptive caption for the image"
                  />
                  {errors.caption && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.caption.message}
                    </p>
                  )}
                </div>

                {/* Image Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image Title *
                  </label>
                  <input
                    type="text"
                    {...register("imgtitle", {
                      required: "Image title is required",
                      minLength: {
                        value: 3,
                        message: "Image title must be at least 3 characters",
                      },
                    })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="Enter a title for the image"
                  />
                  {errors.imagetitle && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.imagetitle.message}
                    </p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    {...register("category", {
                      required: "Category is required",
                    })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                  >
                    <option value="">Select a category...</option>
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                {/* Page Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Title *
                  </label>
                  <input
                    type="text"
                    {...register("pagetitle", {
                      required: "Page title is required",
                      minLength: {
                        value: 5,
                        message: "Page title must be at least 5 characters",
                      },
                      onChange: (e) => {
                        setValue("pageslug", generateSlug(e.target.value));
                      },
                    })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="Enter the page title"
                  />
                  {errors.pagetitle && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.pagetitle.message}
                    </p>
                  )}
                </div>

                {/* Page Slug */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Slug *
                  </label>
                  <input
                    type="text"
                    {...register("pageslug", {
                      required: "Page slug is required",
                      pattern: {
                        value: /^[a-z0-9-]+$/,
                        message:
                          "Page slug must contain only lowercase letters, numbers, and hyphens",
                      },
                    })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="page-url-slug"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Auto-generated from page title. Use lowercase letters,
                    numbers, and hyphens only.
                  </p>
                  {errors.pageslug && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.pageslug.message}
                    </p>
                  )}
                </div>

                {/* Page Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Description *
                  </label>
                  <textarea
                    rows={4}
                    {...register("pageDescription", {
                      required: "Page description is required",
                      minLength: {
                        value: 20,
                        message:
                          "Page description must be at least 20 characters",
                      },
                      maxLength: {
                        value: 160,
                        message:
                          "Page description must not exceed 160 characters",
                      },
                    })}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none border-gray-300"
                    placeholder="Write a meta description for the page (recommended: 120-160 characters)"
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.pageDescription && (
                      <p className="text-sm text-red-600">
                        {errors.pageDescription.message}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 ml-auto">
                      {pageDescription.length}/160 characters
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isUploading}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    isUploading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gray-900 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  } text-white`}
                >
                  <div className="flex items-center justify-center">
                    <Upload className="w-5 h-5 mr-2" />
                    {isUploading ? "Uploading..." : "Upload Image"}
                  </div>
                </button>
              </form>

              {/* Status Messages */}
              {uploadSuccess && (
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
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
              )}

              {uploadError && (
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
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
                      <p className="text-red-700 text-sm">{uploadError}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Footer */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Note:</strong> Only AVIF format images are accepted.
                  All uploaded images will be reviewed before going live.
                </p>
              </div>
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
