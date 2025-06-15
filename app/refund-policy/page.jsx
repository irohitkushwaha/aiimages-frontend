// This is a Server Component (no 'use client')
import Link from "next/link";
import {
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  CreditCard,
  AlertTriangle,
} from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Refund Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clear information about when and how you can get a refund for
            premium AI-generated images
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Quick Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <RefreshCw className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                Quick Summary
              </h2>
              <p className="text-blue-700">
                We offer refunds in specific situations, mainly if you haven't
                downloaded any premium images or if there's a payment issue.
                Once you download images, refunds are generally not available.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* When You CAN Get a Refund */}
          <section className="bg-green-50 rounded-lg p-8 border border-green-200">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-green-900">
                When You CAN Get a Refund
              </h2>
            </div>

            <div className="space-y-6">
              {/* Case 1: No Downloads */}
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  ✅ You Haven't Downloaded Any Premium Images
                </h3>
                <p className="text-green-700 mb-3">
                  If you purchased premium access or credits but haven't
                  downloaded any Imagen 3 generated images yet, you can get a
                  full refund.
                </p>
                <div className="bg-green-100 p-3 rounded text-sm text-green-800">
                  <strong>Time limit:</strong> Request within 24 hours of
                  payment
                </div>
              </div>

              {/* Case 2: Payment Issues */}
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  ✅ Payment Processing Problems
                </h3>
                <p className="text-green-700 mb-3">
                  If your payment got stuck, was charged multiple times, or
                  there was a technical error during payment processing.
                </p>
                <ul className="text-sm text-green-700 space-y-1 ml-4">
                  <li>• Duplicate charges from payment gateway errors</li>
                  <li>• Payment deducted but no access granted</li>
                  <li>• Payment stuck in "pending" status for over 24 hours</li>
                </ul>
              </div>

              {/* Case 3: Technical Issues */}
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  ✅ Platform Technical Problems
                </h3>
                <p className="text-green-700 mb-3">
                  If our platform was down or had major technical issues that
                  prevented you from using your purchase.
                </p>
                <ul className="text-sm text-green-700 space-y-1 ml-4">
                  <li>• Server outages lasting more than 4 hours</li>
                  <li>• Download system not working for your paid content</li>
                </ul>
              </div>

              {/* Case 4: Unauthorized Charges */}
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  ✅ Unauthorized or Accidental Purchases
                </h3>
                <p className="text-green-700 mb-3">
                  If someone used your account without permission or you
                  accidentally made a purchase.
                </p>
                <div className="bg-green-100 p-3 rounded text-sm text-green-800">
                  <strong>Note:</strong> Must be reported within 48 hours and
                  verified through our security process
                </div>
              </div>

              {/* Case 5: Service Not Delivered */}
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  ✅ Purchased Service Not Delivered
                </h3>
                <p className="text-green-700 mb-3">
                  If you paid for premium features but they weren't activated or
                  are not working properly.
                </p>
                <ul className="text-sm text-green-700 space-y-1 ml-4">
                  <li>• Premium account upgrade not applied</li>
                  <li>• Credits purchased but not added to account</li>
                  <li>
                    • Subscription active but premium features not accessible
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* When You CANNOT Get a Refund */}
          <section className="bg-red-50 rounded-lg p-8 border border-red-200">
            <div className="flex items-center mb-6">
              <XCircle className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-red-900">
                When You CANNOT Get a Refund
              </h2>
            </div>

            <div className="space-y-4 text-red-800">
              <div className="flex items-start">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <strong>After Downloading Images:</strong> Once you've
                  downloaded any premium Imagen 3 generated images, the digital
                  product has been delivered and used
                </div>
              </div>
              <div className="flex items-start">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <strong>Quality Dissatisfaction:</strong> If you don't like
                  the quality or style of downloaded images (this is subjective)
                </div>
              </div>
              <div className="flex items-start">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <strong>Change of Mind:</strong> Simply deciding you don't
                  need the images anymore after downloading
                </div>
              </div>
              <div className="flex items-start">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <strong>Copyright Concerns:</strong> If you discover potential
                  copyright issues after download (this is your responsibility
                  to check)
                </div>
              </div>
              <div className="flex items-start">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <strong>Expired Credits:</strong> If you didn't use your
                  credits before they expired (if applicable)
                </div>
              </div>
            </div>
          </section>

          {/* How to Request a Refund */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                How to Request a Refund
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="grid md:grid-cols-1 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Step-by-Step Process:
                  </h3>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                        1
                      </span>
                      <span>
                        Contact our support team within the time limits
                        mentioned above
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                        2
                      </span>
                      <span>
                        Provide your order/transaction ID and email address
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                        3
                      </span>
                      <span>
                        Explain why you're requesting a refund (be specific)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                        4
                      </span>
                      <span>
                        Wait for our team to review (usually 1-3 business days)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                        5
                      </span>
                      <span>
                        If approved, refund will be processed to your original
                        payment method
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Processing Time */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Refund Processing Time
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-orange-800 mb-2">
                    Review Time
                  </h3>
                  <p className="text-2xl font-bold text-orange-600">1-3 Days</p>
                  <p className="text-sm text-orange-700">
                    To review your request
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Processing Time
                  </h3>
                  <p className="text-2xl font-bold text-blue-600">2-5 Days</p>
                  <p className="text-sm text-blue-700">
                    To process approved refunds
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Bank Processing
                  </h3>
                  <p className="text-2xl font-bold text-green-600">3-10 Days</p>
                  <p className="text-sm text-green-700">For money to appear</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                <strong>Note:</strong> Total time can be 5-15 business days
                depending on your bank and payment method
              </p>
            </div>
          </section>

          {/* Partial Refunds */}
          <section className="bg-yellow-50 rounded-lg p-8 border border-yellow-200">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-yellow-900">
                Partial Refunds
              </h2>
            </div>
            <div className="space-y-4 text-yellow-800">
              <p>In some cases, we may offer partial refunds:</p>
              <ul className="space-y-2 ml-6">
                <li>
                  • If you used only a small portion of purchased credits due to
                  technical issues
                </li>
                <li>
                  • If you experienced service disruption during part of your
                  subscription period
                </li>
                <li>
                  • If there were payment processing fees that cannot be
                  reversed
                </li>
              </ul>
              <p className="text-sm">
                Partial refund amounts are determined case-by-case based on
                usage and circumstances.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need to Request a Refund?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact our support team with your refund request. We'll review it
              fairly and get back to you quickly.
            </p>
            <div className="space-y-4">
                <Link href="/contact-us">
              <button className="bg-gray-200 text-gray-700 font-medium px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer">
                Contact Support Team
              </button>
              </Link>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Important:</strong> This refund policy applies only to
            direct purchases made through our platform. For purchases made
            through third-party app stores or payment platforms, their refund
            policies may apply.
          </p>
        </div>
      </div>
    </div>
  );
}
