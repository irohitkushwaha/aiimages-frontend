import { AlertTriangle, Gavel, Globe, FileText } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Ai-generated images copyright ruling",
    description:
      "Complete guide to AI image copyright laws worldwide. US federal court ruling March 2025, China Beijing court decision 2023, India review panel 2025. Learn copyright & protection rules for ChatGPT DALL-E, Midjourney, Google Gemini AI-generated images.",
    robots: "index, follow",
  };
}

export default function AICopyrightPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-5">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Ai-generated Images Copyright Ruling
          </h1>
          <p className="text-[18px] text-gray-600 max-w-3xl ">
            Popular AI tools like ChatGPT's image creator, Google Gemini, and
            Midjourney can make amazing pictures in seconds.
          </p>
          <p className="text-[18px] text-gray-600 max-w-3xl">
            But who really owns these AI-made images?
          </p>
          <p className="text-[18px] text-gray-600 max-w-3xl">
            This simple question has become a big legal problem around the
            world.
          </p>
          <p className="text-[18px] text-gray-600 max-w-3xl">
            Different countries have completely different rules about AI image
            copyright. These rules will decide how people can use AI art tools
            in the future.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                Quick Summary
              </h2>
              <p className="text-blue-700">
                The world is split on AI image copyright: US has strict rules
                requiring human authorship, China allows copyright with human
                involvement, and India is currently reviewing its laws.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Copyright Rulings by Country */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <Globe className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Copyright Rulings by Country
              </h2>
            </div>

            {/* United States */}
            <div className="mb-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🇺🇸</span>
                <h3 className="text-xl font-bold text-red-900">
                  United States
                </h3>
              </div>
              <div className="bg-red-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-red-800 mb-2">
                  The Rule: No Copyright for Pure AI Creations
                </h4>
                <p className="text-red-700 text-sm">
                  The U.S. Court of Appeals for the D.C. Circuit ruled on March
                  18, 2025: AI-generated works without human input cannot get
                  copyright protection under U.S. law.
                </p>
              </div>
              <div className="space-y-3 text-red-800">
                <p>
                  <strong>What This Means:</strong>
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      ChatGPT, Gemini, or Midjourney images need substantial
                      human creativity to get copyright
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Pure AI output has no legal protection under current law
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      You need significant human authorship to claim ownership
                    </span>
                  </li>
                </ul>
                <div className="bg-red-200 p-3 rounded mt-4">
                  <p className="text-sm">
                    <strong>Note:</strong> The U.S. Copyright Office maintains
                    that "if content is entirely generated by AI, it cannot be
                    protected by copyright" because protection is limited to
                    works of human authorship.
                  </p>
                </div>
              </div>
            </div>

            {/* China */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🇨🇳</span>
                <h3 className="text-xl font-bold text-green-900">China</h3>
              </div>
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-green-800 mb-2">
                  The Rule: AI Images Can Have Copyright (With Conditions)
                </h4>
                <p className="text-green-700 text-sm">
                  Beijing Internet Court ruled on November 27, 2023:
                  AI-generated images can get copyright if they show human
                  intellectual investment and creativity. Multiple Chinese
                  courts have since confirmed this approach.
                </p>
              </div>
              <div className="space-y-3 text-green-800">
                <p>
                  <strong>What This Means:</strong>
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      First country to grant copyright protection to
                      AI-generated images
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Your creative prompts, selection, and editing can give you
                      copyright
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Most AI-friendly country for copyright protection globally
                    </span>
                  </li>
                </ul>
                <div className="bg-green-200 p-3 rounded mt-4">
                  <p className="text-sm">
                    <strong>The Test:</strong> Courts look for human
                    intellectual investment in the creative process, including
                    concept development, prompt crafting, and image selection.
                  </p>
                </div>
              </div>
            </div>

            {/* India */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🇮🇳</span>
                <h3 className="text-xl font-bold text-yellow-900">India</h3>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-yellow-800 mb-2">
                  The Rule: Under Active Review
                </h4>
                <p className="text-yellow-700 text-sm">
                  India set up an expert panel in May 2025 led by the Department
                  for Promotion of Industry and Internal Trade (DPIIT) to review
                  copyright laws for AI-generated content amid legal challenges
                  to companies like OpenAI.
                </p>
              </div>
              <div className="space-y-3 text-yellow-800">
                <p>
                  <strong>Current Status:</strong>
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Government panel actively reviewing existing copyright law
                      for AI disputes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Legal challenges against AI companies are ongoing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Committee examining global approaches including U.S. and
                      Chinese models
                    </span>
                  </li>
                </ul>
                <div className="bg-yellow-200 p-3 rounded mt-4">
                  <p className="text-sm">
                    <strong>Expected Direction:</strong> India may adopt a
                    middle-ground approach requiring meaningful human
                    involvement, potentially less strict than the U.S. but with
                    clearer guidelines than current law provides.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Tools Comparison */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Popular AI Tools and Copyright
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  ChatGPT (DALL-E)
                </h3>
                <p className="text-gray-600 text-sm">
                  OpenAI's image generator built into ChatGPT. Copyright
                  protection depends entirely on your country's laws and level
                  of human involvement.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Google Gemini
                </h3>
                <p className="text-gray-600 text-sm">
                  Google's AI that can create images. Same copyright rules apply
                  as other AI tools - varies by jurisdiction.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Midjourney</h3>
                <p className="text-gray-600 text-sm">
                  Popular AI art platform. Users must follow their country's
                  copyright laws, which differ significantly worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <div className="flex items-center mb-4">
              <Gavel className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">
                Key Takeaways
              </h2>
            </div>
            <div className="space-y-4 text-blue-800">
              <p className="font-medium">
                The world shows three distinct approaches to AI image copyright:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded">
                  <h3 className="font-semibold mb-2">🇺🇸 United States</h3>
                  <p className="text-sm">
                    Strictest rules - requires human authorship, no protection
                    for pure AI output
                  </p>
                </div>
                <div className="bg-blue-100 p-4 rounded">
                  <h3 className="font-semibold mb-2">🇨🇳 China</h3>
                  <p className="text-sm">
                    Most permissive - recognizes copyright with human
                    intellectual investment
                  </p>
                </div>
                <div className="bg-blue-100 p-4 rounded">
                  <h3 className="font-semibold mb-2">🇮🇳 India</h3>
                  <p className="text-sm">
                    Under active review - expert panel examining AI copyright
                    framework
                  </p>
                </div>
              </div>
              <p className="text-sm mt-4">
                These different approaches create significant challenges for
                global businesses and creators using AI tools like ChatGPT,
                Gemini, and Midjourney. The legal landscape continues to evolve
                rapidly.
              </p>
            </div>
          </section>

          {/* Recent Updates */}
          <section className="bg-orange-50 rounded-lg p-8 border border-orange-200">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-orange-900">
                Recent Legal Developments (June 2025)
              </h2>
            </div>
            <div className="space-y-4 text-orange-800">
              <div className="bg-orange-100 p-4 rounded">
                <h3 className="font-semibold mb-2">U.S. AI Training Rulings</h3>
                <p className="text-sm">
                  Federal courts have ruled on AI training with copyrighted
                  materials: training on books may be fair use, but using
                  pirated materials is illegal. These rulings affect how AI
                  companies develop their systems.
                </p>
              </div>
              <div className="bg-orange-100 p-4 rounded">
                <h3 className="font-semibold mb-2">
                  China Expands AI Copyright Recognition
                </h3>
                <p className="text-sm">
                  Additional Chinese courts beyond Beijing have confirmed
                  copyright protection for AI-generated images, solidifying
                  China's position as the most AI-friendly jurisdiction for
                  copyright.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Disclaimer:</strong> This information is for educational
            purposes only and does not constitute legal advice. Copyright laws
            are complex and change frequently. Information last updated: June
            2025. Always consult with a qualified lawyer for legal guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
