"use client";

import React, { useState } from "react";
import { Upload, Image, Sparkles, Wand2, Download, X } from "lucide-react";
import { generateImage } from "@/api/generateImage";

const AiImageGenerator = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [fileError, setFileError] = useState("");
  const [promptError, setPromptError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [prompt, setPrompt] = useState("");

  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");

    if (file) {
      if (!allowedTypes.includes(file.type)) {
        setFileError("Please upload only JPG, PNG, or WebP images");
        setPreviewImage(null);
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
    if (promptError) setPromptError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    let hasErrors = false;

    if (!selectedFile) {
      setFileError("Please upload an image");
      hasErrors = true;
    }

    if (!prompt.trim()) {
      setPromptError("Please describe what you want to change");
      hasErrors = true;
    }

    if (hasErrors) return;

    setIsGenerating(true);

    try {
      const response = await generateImage({ prompt, imageFile: selectedFile });
      console.log("response is", response)
      setGeneratedImage(response.imageBase64); 
    } catch (error) {
      console.log("consoling error", error)
      setFileError(error.message || "Failed to generate image");
    } finally {
      setIsGenerating(false);
    }
  };

  const resetForm = () => {
    setPreviewImage(null);
    setGeneratedImage(null);
    setFileError("");
    setPromptError("");
    setSelectedFile(null);
    setPrompt("");
    setIsGenerating(false);

    // Reset file input
    const fileInput = document.getElementById("image-upload");
    if (fileInput) fileInput.value = "";
  };

  const handleCancelUpload = () => {
    setPreviewImage(null);
    setSelectedFile(null);
    setFileError("");

    // Reset file input
    const fileInput = document.getElementById("image-upload");
    if (fileInput) fileInput.value = "";
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = `ai-generated-image-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-6">
          <div className="flex items-center justify-center mb-10">
            <Wand2 className="w-8 h-8 text-white md:mr-6 mr-3 mt-1" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              AI Image Generator from Image
            </h1>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Transform your images with the power of AI. Upload an image and
            describe your vision.
          </p>
        </div>

        {/* Main Content */}
        <div className={`grid grid-cols-1 ${generatedImage? "lg:grid-cols-2" : "lg:grid-cols-1 lg:max-w-4xl lg:mx-auto"}  gap-8 mb-12 w-full`}>
          {/* Left Panel - Input */}
          <div className="space-y-6">
            <div className="space-y-6">
              {/* Image Upload */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <label className="block text-sm font-medium text-slate-200 mb-4">
                  Upload Your Image
                </label>

                <div className="relative">
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp"
                    onChange={handleFileChange}
                    className="hidden"
                    id="image-upload"
                  />

                  <label
                    htmlFor="image-upload"
                    className="flex flex-col items-center justify-center w-full h-72 border-2 border-dashed border-slate-600 rounded-xl cursor-pointer hover:border-purple-400 transition-colors bg-slate-800/30"
                  >
                    {previewImage ? (
                      <div className="relative w-full h-full">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleCancelUpload();
                          }}
                          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-12 h-12 text-slate-400 mb-4" />
                        <p className="mb-2 text-sm text-slate-300">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-slate-400">
                          JPG, PNG, or WebP (MAX. 10MB)
                        </p>
                      </div>
                    )}
                  </label>
                </div>

                {fileError && (
                  <p className="text-red-400 text-sm mt-2">{fileError}</p>
                )}
              </div>

              {/* Prompt Input */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <label className="block text-sm font-medium text-slate-200 mb-4">
                  Describe Your Vision
                </label>
                <textarea
                  value={prompt}
                  onChange={handlePromptChange}
                  placeholder="Ex- add golden hour lighting, change background to Paris, make it cinematic…"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                />
                {promptError && (
                  <p className="text-red-400 text-sm mt-2">{promptError}</p>
                )}
              </div>

              {/* Generate Button */}
              <button
                onClick={handleSubmit}
                disabled={isGenerating || !previewImage}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600  text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Generating Image...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Image</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Panel - Generated Image */}
          {generatedImage && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-slate-200">
                  Generated Image
                </h3>
                {generatedImage && (
                  <button
                    onClick={resetForm}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Generate New
                  </button>
                )}
              </div>

              <div className="aspect-square bg-slate-900/50 rounded-xl flex items-center justify-center border border-slate-600/50 mb-4">
                {generatedImage ? (
                  <img
                    src={generatedImage}
                    alt="Generated"
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="text-center">
                    <Image className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-400">
                      Your generated image will appear here
                    </p>
                  </div>
                )}
              </div>

              {/* Download Button */}
              {generatedImage && (
                <button
                  onClick={handleDownload}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Image</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* How to Guide */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-200 mb-6 text-center">
            How to Generate Images from Images
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">
                Upload Your Image
              </h3>
              <p className="text-slate-400 text-sm">
                Select a high-quality JPG, PNG, or WebP image as your base for
                transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">
                Describe Changes
              </h3>
              <p className="text-slate-400 text-sm">
                Write a detailed prompt describing what you want to add, change,
                or enhance in the image.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">
                Generate & Wait
              </h3>
              <p className="text-slate-400 text-sm">
                Click generate and let our AI process your request. This usually
                takes a few moments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">
                Download Result
              </h3>
              <p className="text-slate-400 text-sm">
                Review your AI-generated image and download it when you're
                satisfied with the result.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-900/50 rounded-xl border border-slate-600/50">
            <h4 className="font-semibold text-slate-200 mb-2">💡 Pro Tips:</h4>
            <ul className="text-slate-200 text-sm space-y-1">
              <li>• Be specific in your descriptions for better results</li>
              <li>• Mention lighting, style, colors, and mood you want</li>
              <li>• Use high-resolution images for the best output quality</li>
              <li>• Try different prompts to explore creative possibilities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiImageGenerator;
