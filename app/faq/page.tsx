"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How quickly can I start generating leads?",
        answer:
          "You can start generating leads within 24 hours of setup. Our onboarding process is streamlined, and our AI begins learning your ideal customer profile immediately.",
      },
      {
        question: "Do I need technical expertise to use the platform?",
        answer:
          "No technical expertise required. Our platform is designed for sales and marketing professionals with an intuitive interface and guided setup process.",
      },
      {
        question: "What integrations do you support?",
        answer:
          "We support 100+ integrations including Salesforce, HubSpot, Pipedrive, Marketo, and all major CRM and marketing automation platforms.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.",
      },
      {
        question: "Can I change my plan anytime?",
        answer:
          "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.",
      },
      {
        question: "What happens if I exceed my lead limit?",
        answer:
          "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional leads as needed.",
      },
      {
        question: "Do you offer custom enterprise pricing?",
        answer:
          "Yes, we offer custom Enterprise plans with volume discounts for teams over 50 users and organizations with specific requirements.",
      },
    ],
  },
  {
    category: "Lead Quality & Data",
    questions: [
      {
        question: "How accurate is your lead data?",
        answer:
          "Our lead data maintains 95% accuracy through real-time verification, multiple data sources, and continuous updates.",
      },
      {
        question: "Where does your data come from?",
        answer:
          "We aggregate data from premium sources including public records, social media, company websites, and verified business directories.",
      },
      {
        question: "How do you ensure GDPR compliance?",
        answer:
          "We are fully GDPR compliant with proper consent mechanisms, data processing agreements, and the right to deletion for all EU data.",
      },
      {
        question: "Can I target specific industries or company sizes?",
        answer:
          "Yes, our advanced filtering allows targeting by industry, company size, revenue, location, technology stack, and 50+ other criteria.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "What support options are available?",
        answer:
          "We offer email support for all plans, priority support for Professional plans, and dedicated phone support for Enterprise customers.",
      },
      {
        question: "How long does it take to get support responses?",
        answer:
          "Email support: 24 hours, Priority support: 4 hours, Enterprise phone support: immediate during business hours.",
      },
      {
        question: "Do you provide onboarding assistance?",
        answer:
          "Yes, all customers receive guided onboarding. Professional and Enterprise plans include dedicated success managers.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Find answers to common questions about our B2B lead generation platform
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <Card key={faqIndex} className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            ),
          }),
        }}
      />

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-semibold">
                Live Chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
