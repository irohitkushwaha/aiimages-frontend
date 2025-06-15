import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="relative w-full mx-auto px-6 py-12">
      <div
        className="absolute inset-0 opacity-40 -z-10"
        style={{
          backgroundImage: `
              linear-gradient(to bottom, rgba(156, 163, 175, 0.5) 1px, rgba(229, 231, 235, 0.2) 1px),
              linear-gradient(to right, rgba(156, 163, 175, 0.5) 1px, rgba(229, 231, 235, 0.2) 1px)
            `,
          backgroundSize: "100px 100px",
        }}
      />
      <h1 className="text-4xl mx-auto max-w-4xl font-bold text-gray-900 border-b-4 border-blue-500 pb-4 mb-12">
        About us - AI Generated Images
      </h1>
      <div className="space-y-10 mx-auto max-w-4xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <p className="text-gray-800 leading-relaxed text-[18px]">
            We provide realistic, professional visuals for businesses,
            designers, and creators worldwide using advanced AI Technology
            Models.
          </p>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Do
          </h2>
          <p className="text-gray-700 mb-4">
            We use cutting-edge AI models to generate ultra-high-quality images:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">
                AI
              </span>
              <div>
                <strong className="text-gray-800">
                  Gemini 2.5 Flash Preview
                </strong>{" "}
                - Fast, premium image generation
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">
                GEN
              </span>
              <div>
                <strong className="text-gray-800">Image Gen 3</strong> -
                Photorealistic details and accuracy
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">
                PRO
              </span>
              <div>
                <strong className="text-gray-800">Expert prompting</strong> -
                Every image is crafted with precision
              </div>
            </li>
          </ul>
        </section>

        {/* Why Choose AI Images */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Why Choose AI Images
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Better than traditional stock photos:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Unlimited variety and styles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Super high resolution
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Always fresh and unique
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  No model releases needed
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Available instantly
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Perfect for:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Marketing campaigns
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Website design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Social media content
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Presentations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Creative projects
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Community */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Community
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-800 mb-3">
                For Users
              </h3>
              <p className="text-gray-700">
                Browse thousands of premium AI images. Easy search, instant
                download, commercial use allowed.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-green-800 mb-3">
                For Contributors
              </h3>
              <p className="text-gray-700">
                Upload your best AI-generated images and join our creative
                community. Share your work and help others create amazing
                content.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We make high-quality visuals accessible to everyone. No more
            expensive photo shoots, limited stock options, or creative barriers.
            Just incredible AI images when you need them.
          </p>
        </section>

        {/* Quality Promise */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Quality Promise
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every image meets our strict quality standards. We only publish
            realistic, professional-grade visuals that work for serious
            projects.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-900 text-white rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Ready to create amazing content?
          </h2>
          <p className="text-gray-300 mb-6">
            Browse our collection or start contributing today.
          </p>
          <div className="space-x-4">
            <Link href="/">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Browse Images
              </button>
            </Link>
            <Link href="/upload">
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Start Contributing
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
