// app/contact-us/page.jsx
export async function generateMetadata() {
  return {
    title: "Contact Us - AI Generated Images",
    description: "Get in touch with our support team. Find contact information and support options for AI image Generated Images.",
    robots: "index, follow"
  };
}

import { Mail, Phone, MessageSquare, Send, CheckCircle, AlertCircle, MapPin, Clock, HelpCircle, Shield, Users } from 'lucide-react';
import ContactFormClient from '@/components/features/contactform';
export default function ContactUsPage() {
  const relatedToOptions = [
    { value: '', label: 'Select a topic...' },
    { value: 'account', label: 'Account Issues' },
    { value: 'download', label: 'Download Problems' },
    { value: 'payment', label: 'Payment & Billing' },
    { value: 'licensing', label: 'Licensing Questions' },
    { value: 'contributor', label: 'Contributor Program' },
    { value: 'custom', label: 'Custom Image Requests' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'other', label: 'Other' }
  ];

  const contactGuidelines = [
    {
      title: 'Response Time',
      description: 'We respond to most queries within 24 hours during business days',
      icon: <Clock className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Detailed Information',
      description: 'Include relevant details like account email, order number, or error messages',
      icon: <HelpCircle className="w-5 h-5 text-green-600" />
    },
    {
      title: 'Privacy & Security',
      description: 'Never share passwords or sensitive personal information in your message',
      icon: <Shield className="w-5 h-5 text-purple-600" />
    },
    {
      title: 'Professional Support',
      description: 'Our support team is trained to help with all AI image-related inquiries',
      icon: <Users className="w-5 h-5 text-orange-600" />
    }
  ];

  const supportCategories = [
    {
      category: 'Account Issues',
      description: 'Login problems, password reset, profile management',
      examples: ['Cannot log into account', 'Forgot password', 'Account verification']
    },
    {
      category: 'Download Problems',
      description: 'Image download failures, format issues, quality concerns',
      examples: ['Download not working', 'Wrong file format', 'Low quality image']
    },
    {
      category: 'Payment & Billing',
      description: 'Payment failures, refunds, subscription management',
      examples: ['Payment declined', 'Refund request', 'Subscription cancellation']
    },
    {
      category: 'Licensing Questions',
      description: 'Usage rights, commercial licensing, copyright inquiries',
      examples: ['Commercial use rights', 'Attribution requirements', 'Extended license']
    },
    {
      category: 'Technical Support',
      description: 'Website issues, browser compatibility, performance problems',
      examples: ['Site loading slowly', 'Search not working', 'Browser compatibility']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our support team for help with AI-generated images, licensing, or any questions
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information and Guidelines */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email Support */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Email Support</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Send us an email and we'll respond within 24 hours
              </p>
              <a 
                href="mailto:support@aigeneratedimagess.com"
                className="text-blue-600 hover:text-blue-700 font-medium break-all"
              >
                support@aigeneratedimagess.com
              </a>
            </div>

            {/* Contact Guidelines */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Contact Guidelines</h3>
              </div>
              <div className="space-y-4">
                {contactGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {guideline.icon}
                    </div>
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

            {/* Response Time */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-900">Response Time</h3>
              </div>
              <div className="space-y-2 text-green-800">
                <p>• <strong>General Queries:</strong> Within 24 hours</p>
                <p>• <strong>Technical Issues:</strong> Within 12 hours</p>
                <p>• <strong>Urgent Problems:</strong> Within 4 hours</p>
              </div>
            </div>

            {/* Support Categories */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <HelpCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-900">What We Help With</h3>
              </div>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Account and login issues</li>
                <li>• Download and payment problems</li>
                <li>• Licensing and copyright questions</li>
                <li>• Custom image generation requests</li>
                <li>• Contributor program inquiries</li>
                <li>• Technical troubleshooting</li>
                <li>• General platform feedback</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <Send className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
              </div>

              {/* Success Message */}
              <div id="success-message" className="hidden mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                    <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              <div id="error-message" className="hidden mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-red-800">Something went wrong</h4>
                    <p className="text-red-700 text-sm">Please try again or email us directly.</p>
                  </div>
                </div>
              </div>

              <form id="contact-form" className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength="2"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="Enter your full name"
                  />
                  <p className="mt-1 text-sm text-red-600 hidden" id="name-error"></p>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="Enter your email address"
                  />
                  <p className="mt-1 text-sm text-red-600 hidden" id="email-error"></p>
                </div>

                {/* Mobile Field */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="Enter your mobile number"
                  />
                  <p className="mt-1 text-sm text-red-600 hidden" id="mobile-error"></p>
                </div>

                {/* Related To Field */}
                <div>
                  <label htmlFor="relatedTo" className="block text-sm font-medium text-gray-700 mb-2">
                    Related To *
                  </label>
                  <select
                    id="relatedTo"
                    name="relatedTo"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                  >
                    {relatedToOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-sm text-red-600 hidden" id="relatedTo-error"></p>
                </div>

                {/* Query Field */}
                <div>
                  <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Query *
                  </label>
                  <textarea
                    id="query"
                    name="query"
                    rows={5}
                    required
                    minLength="10"
                    maxLength="500"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none border-gray-300"
                    placeholder="Please describe your query in detail. The more information you provide, the better we can help you."
                  />
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-red-600 hidden" id="query-error"></p>
                    <p className="text-sm text-gray-500 ml-auto" id="query-char-count">
                      0/500 characters
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
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                </button>
              </form>

              {/* Form Footer */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Note:</strong> All fields marked with * are required. 
                  We typically respond within 24 hours during business days.
                </p>
              </div>

              {/* Client-side interactivity */}
              <ContactFormClient />
            </div>
          </div>
        </div>

        {/* Support Categories Details */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {category.category}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Common Examples:</h4>
                <ul className="space-y-1">
                  {category.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-xs text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Immediate Help?
          </h2>
          <p className="text-white mb-6 text-lg">
            Check out our FAQ section for quick answers to common questions
          </p>
          <a href="/faq" className="inline-block">
            <button className="bg-white text-gray-900 font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Visit FAQ
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}