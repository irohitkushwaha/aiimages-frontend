export async function generateMetadata() {
  return {
    title: "Privacy Policy - AI Generated Images",
    description: "Learn how we protect your data and privacy when using our AI image generation platform. Understand our data collection, storage, and sharing practices.",
    robots: "index, follow"
  };
}

// This is a Server Component (no 'use client')
import { Shield, Eye, Database, Lock, Users, Mail, AlertCircle, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we collect, use, and protect your information on our AI-generated images platform
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Important Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                We Respect Your Privacy
              </h2>
              <p className="text-blue-700">
                This policy explains how we handle your personal information when you use our AI-generated images platform.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* What Information We Collect */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">What Information We Collect</h2>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Information You Give Us:</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Email address when you register</li>
                    <li>• Name and profile information</li>
                    <li>• Payment details for purchases</li>
                    <li>• Images you upload as a contributor</li>
                    <li>• Messages you send to support</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Information We Collect Automatically:</h3>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• Images you view and download</li>
                    <li>• Search terms you use</li>
                    <li>• Your device and browser type</li>
                    <li>• IP address and location (general area)</li>
                    <li>• How you use our platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="font-medium text-gray-900">We use your information to:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Platform Functions:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Create and manage your account</li>
                    <li>• Process downloads and payments</li>
                    <li>• Show you relevant images</li>
                    <li>• Provide customer support</li>
                    <li>• Send important account updates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Improvements:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Improve our AI image recommendations</li>
                    <li>• Understand what users like</li>
                    <li>• Fix bugs and technical issues</li>
                    <li>• Develop new features</li>
                    <li>• Prevent fraud and abuse</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Share Information With */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Who We Share Information With</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">✅ We DO Share With:</h3>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Payment processors (for transactions)</li>
                  <li>• Cloud storage providers (to host images)</li>
                  <li>• Analytics services (to improve our platform)</li>
                  <li>• Legal authorities (only when required by law)</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">❌ We DON'T Share With:</h3>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Advertisers or marketing companies</li>
                  <li>• Social media platforms</li>
                  <li>• Data brokers or list sellers</li>
                  <li>• Anyone who wants to spam you</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Protect Your Information */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">How We Protect Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>We take security seriously and use industry-standard measures to protect your data:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Technical Security:</h3>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Encrypted data transmission (HTTPS)</li>
                    <li>• Secure servers and databases</li>
                    <li>• Regular security updates</li>
                    <li>• Access controls for our team</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Operational Security:</h3>
                  <ul className="space-y-1 text-purple-700 text-sm">
                    <li>• Background checks for employees</li>
                    <li>• Limited access to personal data</li>
                    <li>• Regular security training</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights and Controls */}
          <section className="bg-green-50 rounded-lg p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Your Rights and Controls</h2>
            <div className="space-y-4 text-green-800">
              <p className="font-medium">You have the right to:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Access & Control:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• View what information we have about you</li>
                    <li>• Update your account information anytime</li>
                    <li>• Download your data</li>
                    <li>• Delete your account</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Communication:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Unsubscribe from emails</li>
                    <li>• Choose what notifications you receive</li>
                    <li>• Contact us about privacy concerns</li>
                    <li>• Ask questions about this policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>We use cookies and similar technologies to make our platform work better for you:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Essential Cookies</h3>
                  <p className="text-yellow-700 text-sm">Keep you logged in and make the site function properly</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Analytics Cookies</h3>
                  <p className="text-blue-700 text-sm">Help us understand how people use our platform</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Preference Cookies</h3>
                  <p className="text-purple-700 text-sm">Remember your settings and preferences</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                You can control cookies in your browser settings, but some features may not work without them.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Long We Keep Your Information</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Active Accounts:</h3>
                  <p className="text-gray-700 text-sm">
                    We keep your information as long as your account is active and for a reasonable time after you stop using our service.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Deleted Accounts:</h3>
                  <p className="text-gray-700 text-sm">
                    When you delete your account, we remove your personal information within 30 days (except what we're legally required to keep).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="bg-red-50 rounded-lg p-8 border border-red-200">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-4">Children's Privacy</h2>
                <div className="space-y-3 text-red-800">
                  <p>
                    Our platform is not intended for children under 18 years old. We don't knowingly collect personal information from children.
                  </p>
                  <p>
                    If you're a parent and believe your child has provided us with personal information, please contact us immediately and we'll delete it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to This Policy */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">When we make changes:</h3>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• We'll update the date at the top of this page</li>
                  <li>• We'll notify you via email for significant changes</li>
                  <li>• We'll post a notice on our platform</li>
                  <li>• You can always find the current version here</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">Questions About Your Privacy?</h2>
            </div>
            <p className="text-blue-700 mb-6">
              If you have questions about this privacy policy or how we handle your information, we're here to help.
            </p>
            <div className="space-y-4">
              <p className="text-blue-800 font-medium">
                Email us at: <span className="font-normal">support@aigeneratedimagess.com</span>
              </p>
              <a href="/contact" className="inline-block">
                <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                  Contact Support
                </button>
              </a>
            </div>
          </section>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Simple Language Promise:</strong> We've written this privacy policy in simple, clear language 
            because we believe you should understand how your information is handled. If anything is unclear, 
            please don't hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
}