// app/faq/page.jsx
export async function generateMetadata() {
  return {
    title: "FAQ - AI Generated Images",
    description: "Find answers to common questions about AI Generated Photos Platform, pricing, usage, and technical requirements.",
    robots: "index, follow"
  };
}

// This is a Server Component (no 'use client')
import Link from "next/link";
import FAQAccordion from "@/components/features/faqaccordion";

// FAQ Data - This renders on the server
const faqData = [
  {
    question:
      "How are AI-generated images different from regular stock photos?",
    answer:
      "AI-generated images are created using advanced artificial intelligence models like Gemini 2.5 Flash Preview and Image Gen 3. Unlike traditional stock photos, they don't require photo shoots, models, or locations. They offer unlimited variety, no model release requirements, and can be customized to specific needs while maintaining ultra-high quality.",
  },
  {
    question: "Can I use AI-generated images for commercial purposes?",
    answer:
      "Yes! You can use our premium AI-generated images for commercial purposes, but you should double-check if someone has copyright claims. You can use them for marketing campaigns, websites, social media, presentations, advertisements, and any business purposes without additional fees or restrictions.",
  },
  {
    question: "Do I need to register to browse and download images?",
    answer:
      "You can browse our collection without registration, but you'll need to create a free account to access Image Gen 3 Models images. Registration gives you access to contributor features if you want to upload your own AI-generated Photos.",
  },
  {
    question: "What image formats and resolutions do you provide?",
    answer:
      "We provide ultra-high-resolution images in AVIF Format. Our AI models generate images up to 4K resolution and beyond, ensuring they're suitable for both digital use and large-format printing.",
  },
  {
    question: "How do I search for specific types of AI-generated images?",
    answer:
      "Use our advanced Image search engine with keywords or categories. Our AI-powered tagging system makes it easy to find exactly what you need.",
  },
  {
    question: "Can I request custom AI-generated images?",
    answer:
      "Yes! Our premium service includes custom AI image generation. Provide detailed prompts describing your vision, and our expert prompt engineers will use our advanced AI models to create unique images tailored to your specific requirements. For this, you`ll need to email at support@aigeneratedimagess.com",
  },
  {
    question: "How can I contribute my own AI-generated images?",
    answer:
      "Join our contributor community by creating an account and uploading your high-quality AI-generated content. All submissions are reviewed for quality and originality. Accepted contributors earn revenue share when their images are downloaded by users.",
  },
  {
    question: "What makes your AI image quality superior?",
    answer:
      "We use cutting-edge AI models including Gemini 2.5 Flash Preview and Image Gen 3, combined with expert prompt engineering techniques. Every image undergoes quality review to ensure photorealistic details, proper composition, and professional standards suitable for commercial use.",
  },
  {
    question:
      "Are there any copyright or legal issues with AI-generated images?",
    answer:
      "Our AI-generated images are created from scratch by artificial intelligence and don't copy existing copyrighted works. You receive full commercial usage rights without worrying about model releases, photographer credits, or trademark issues that can affect traditional stock photography.",
  },
  {
    question: "How do I download and save images to my computer?",
    answer:
      "After purchasing or selecting a free image, click the download button. The image will download directly to your device. You can re-download purchased images anytime from your account dashboard without additional charges.",
  },
];

// Server Component - renders on server for SEO
export default function FAQPage() {
  return (
    <>
      {/* SEO-friendly structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header - Server Rendered */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-10">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our AI Generated Images Platform
            </p>
          </header>

          {/* FAQ Accordion - Client Component for interactivity */}
          <FAQAccordion faqs={faqData} />

          {/* Contact Section - Server Rendered */}
          <section className="mt-16 bg-gradient-to-r from-gray-600 to-gray-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white mb-6 text-lg">
              Our support team is here to help you get the most out of AI
              Generated Images Platform
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center space-x-4">
              <Link href="/contact-us">
                <button className="bg-white border-2 border-gray-900 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer">
                  Contact Support
                </button>
              </Link>
              <Link href="/">
                <button className="bg-white border-2 border-gray-900 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer">
                  Browse Images
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
