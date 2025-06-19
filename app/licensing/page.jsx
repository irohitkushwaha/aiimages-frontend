// This is a Server Component (no 'use client')
export async function generateMetadata() {
  return {
    title: "Licensing Terms - AI Generated Images",
    description:
      "Licensing Terms for AI-generated Images Platform",
    robots: "index, follow",
  };
}

import Link from 'next/link';
import { AlertTriangle, Shield, FileText, Users } from 'lucide-react';

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Licensing Terms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Important information about using AI-generated images from our platform
          </p>
        </header>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                Important: We Do Not Provide Licenses
              </h2>
              <p className="text-yellow-700">
                Our platform does not provide any legal licenses or guarantees. You are responsible for verifying that images are suitable for your intended use.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* How Our Images Are Created */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">How Our Images Are Created</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                All images on our platform are created using advanced AI generation models. These models create completely new images from scratch based on text prompts.
              </p>
              <p>
                Our AI does not copy or reproduce existing copyrighted images. Instead, it generates original content based on patterns learned during training.
              </p>
            </div>
          </section>

          {/* Copyright Status */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Copyright Status</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">99% Chance: Copyright-Free</h3>
                  <p className="text-green-700 text-sm">
                    Most of our AI-generated images are completely original and do not infringe on any existing copyrights.
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">1% Chance: Potential Issues</h3>
                  <p className="text-red-700 text-sm">
                    In rare cases, AI might generate content that resembles existing copyrighted material.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Responsibilities */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Your Responsibilities</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="font-medium text-gray-900">As a user, you must:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Verify each image</strong> before using it for commercial purposes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Check for potential copyright issues</strong> if the image looks like it might be based on existing work</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Use your own judgment</strong> about whether an image is safe to use</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Accept full responsibility</strong> for how you use the images</span>
                </li>
              </ul>
            </div>
          </section>

          {/* What We Don't Provide */}
          <section className="bg-red-50 rounded-lg p-8 border border-red-200">
            <h2 className="text-2xl font-bold text-red-900 mb-4">What We Don't Provide</h2>
            <div className="space-y-3 text-red-800">
              <p>• <strong>No legal licenses</strong> - We don't grant you any specific legal rights</p>
              <p>• <strong>No copyright guarantees</strong> - We cannot promise that images are 100% copyright-free</p>
              <p>• <strong>No legal protection</strong> - We won't defend you if someone claims copyright infringement</p>
              <p>• <strong>No warranties</strong> - Images are provided "as is" without any promises</p>
            </div>
          </section>

          {/* Simple Guidelines */}
          <section className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Simple Guidelines for Safe Use</h2>
            <div className="grid md:grid-cols-2 gap-6 text-blue-800">
              <div>
                <h3 className="font-semibold mb-2">✅ Generally Safe:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Abstract patterns</li>
                  <li>• Generic landscapes</li>
                  <li>• Common objects</li>
                  <li>• Simple illustrations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">⚠️ Check Carefully:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Famous landmarks</li>
                  <li>• Character-like figures</li>
                  <li>• Logo-style designs</li>
                  <li>• Branded items</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Licensing?</h2>
            <p className="text-gray-600 mb-6">
              While we can't provide legal advice, we're happy to explain how our platform works.
            </p>
            <Link href="/contact">
            <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Contact Support
            </button>
            </Link>
          </section>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Disclaimer:</strong> This page explains our platform but does not constitute legal advice. 
            Consult with a lawyer if you need legal guidance about copyright and licensing issues.
          </p>
        </div>
      </div>
    </div>
  );
}