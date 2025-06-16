export async function generateMetadata() {
  return {
    title: "Terms of use - Ai Generated Images",
    description: "Understand our platform rules for uploading and using AI-generated images. Learn about user rights, content guidelines, and platform usage policies.",
    robots: "index, follow",
  };
}
// This is a Server Component (no 'use client')
import { FileText, Users, Shield, AlertCircle, Check, X } from 'lucide-react';
import Link from 'next/link';
export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple rules for using our AI-generated images platform
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Important Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                By Using Our Platform, You Agree to These Terms
              </h2>
              <p className="text-blue-700">
                Please read these terms carefully. If you don't agree, please don't use our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* What Our Platform Does */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">What Our Platform Does</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                We provide a platform where you can browse and download AI-generated images. Our advanced AI models create these images from text prompts.
              </p>
              <p>
                You can use our platform to find images for your projects, but you are responsible for how you use them.
              </p>
            </div>
          </section>

          {/* Your Account */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Your Account</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="font-semibold text-gray-900">You Must:</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Be at least 18 years old</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Give us accurate information when you sign up</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Keep your password safe and private</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Tell us immediately if someone uses your account without permission</span>
                </li>
              </ul>
            </div>
          </section>

          {/* What You Can Do */}
          <section className="bg-green-50 rounded-lg p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-green-900 mb-4">What You Can Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3 text-green-800">
                <p className="font-semibold">✅ Allowed:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Browse and search for images</li>
                  <li>• Download images for personal use</li>
                  <li>• Use images for commercial projects (double check copyright)</li>
                  <li>• Edit and modify downloaded images</li>
                  <li>• Share images you've downloaded</li>
                </ul>
              </div>
              <div className="space-y-3 text-green-800">
                <p className="font-semibold">ℹ️ Remember:</p>
                <ul className="space-y-1 text-sm">
                  <li>• You must verify copyright yourself</li>
                  <li>• We don't provide any legal licenses</li>
                  <li>• Use is at your own responsibility</li>
                  <li>• Check our licensing page for details</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What You Cannot Do */}
          <section className="bg-red-50 rounded-lg p-8 border border-red-200">
            <h2 className="text-2xl font-bold text-red-900 mb-4">What You Cannot Do</h2>
            <div className="space-y-3 text-red-800">
              <div className="flex items-start">
                <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <span><strong>Resell our images as your own</strong> - Don't claim you created them</span>
              </div>
              <div className="flex items-start">
                <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <span><strong>Create competing platforms</strong> - Don't use our images to build a similar service</span>
              </div>
              <div className="flex items-start">
                <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <span><strong>Abuse our platform</strong> - No hacking, spamming, or breaking our systems</span>
              </div>
              <div className="flex items-start">
                <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <span><strong>Share your account</strong> - Keep your login details private</span>
              </div>
              <div className="flex items-start">
                <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <span><strong>Use images for illegal purposes</strong> - No harmful, illegal, or offensive content</span>
              </div>
            </div>
          </section>

          {/* Our Rights and Responsibilities */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Rights and Responsibilities</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">We Can:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Remove images from our platform</li>
                    <li>• Suspend or close accounts</li>
                    <li>• Update these terms anytime</li>
                    <li>• Improve our platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">We Don't:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Guarantee image quality</li>
                    <li>• Promise 100% uptime</li>
                    <li>• Provide legal advice</li>
                    <li>• Take responsibility for your use</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Payment and Pricing */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment and Pricing</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Some images are free, others require payment. Prices are shown clearly before download.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Payment Rules:</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• We have <Link className='text-blue-500 underline' href="/refund-policy">Refund Policy</Link></li>
                  <li>• Prices may change without notice</li>
                  <li>• You pay for the download, not a license</li>
                  <li>• Payment gives you access to the file only</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Privacy */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We collect some information when you use our platform (like what images you download). 
                We use this to improve our service and show you relevant content.
              </p>
              <p>
                We don't sell your personal information to others. See our Privacy Policy for full details.
              </p>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="bg-yellow-50 rounded-lg p-8 border border-yellow-200">
            <h2 className="text-2xl font-bold text-yellow-900 mb-4">Important Disclaimers</h2>
            <div className="space-y-4 text-yellow-800">
              <p>
                <strong>No Warranties:</strong> Our platform and images are provided "as is" without any promises or guarantees.
              </p>
              <p>
                <strong>Your Risk:</strong> You use our platform at your own risk. We're not responsible for any problems that arise from your use.
              </p>
              <p>
                <strong>No Legal Advice:</strong> Nothing on our platform constitutes legal advice. Consult a lawyer for legal questions.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update these terms from time to time. When we do, we'll update the date at the top of this page.
              </p>
              <p>
                Big changes will be announced on our platform. By continuing to use our service after changes, you agree to the new terms.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Questions About These Terms?</h2>
            <p className="text-blue-700 mb-6">
              If you have questions about these terms, please contact our support team.
            </p>
            <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            These terms are written in simple language to help you understand your rights and responsibilities. 
            They are legally binding when you use our platform.
          </p>
        </div>
      </div>
    </div>
  );
}