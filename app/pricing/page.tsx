import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing - Transparent Plans for Every Business | Contactoutreach",
  description:
    "Choose the perfect plan for your B2B lead generation needs. All plans include 14-day free trial with no setup fees.",
}

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      { name: "1,000 leads per month", included: true },
      { name: "Basic AI targeting", included: true },
      { name: "Email support", included: true },
      { name: "CRM integration", included: true },
      { name: "Lead scoring", included: true },
      { name: "Basic analytics", included: true },
      { name: "Intent signals", included: false },
      { name: "Advanced workflows", included: false },
      { name: "Priority support", included: false },
      { name: "Custom integrations", included: false },
    ],
    cta: "Get Pricing",
    popular: false,
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Ideal for growing sales teams",
    features: [
      { name: "5,000 leads per month", included: true },
      { name: "Advanced AI targeting", included: true },
      { name: "Intent signals", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced CRM sync", included: true },
      { name: "Custom workflows", included: true },
      { name: "Team collaboration", included: true },
      { name: "Advanced analytics", included: true },
      { name: "API access", included: true },
      { name: "Custom integrations", included: false },
    ],
    cta: "Get Pricing",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      { name: "Unlimited leads", included: true },
      { name: "Custom AI models", included: true },
      { name: "Dedicated success manager", included: true },
      { name: "24/7 phone support", included: true },
      { name: "Custom integrations", included: true },
      { name: "White-label options", included: true },
      { name: "Advanced security", included: true },
      { name: "SLA guarantees", included: true },
      { name: "Custom reporting", included: true },
      { name: "On-premise deployment", included: true },
    ],
    cta: "Enterprise & Custom",
    popular: false,
  },
]

const faqs = [
  {
    question: "What's included in the free trial?",
    answer: "All plans include a 14-day free trial with full access to features. No credit card required to start.",
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "What happens if I exceed my lead limit?",
    answer:
      "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional leads.",
  },
  {
    question: "Do you offer custom pricing for large teams?",
    answer: "Yes, we offer custom Enterprise plans with volume discounts for teams over 50 users.",
  },
]

export default function PricingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transparent{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Choose the plan that fits your business needs. All plans include a 14-day free trial with no setup fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-green-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full font-semibold ${
                      plan.popular
                        ? "bg-green-600 hover:bg-green-700 text-black"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16">
            <p className="text-gray-600 mb-6">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="text-black border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                Compare All Features
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-semibold">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our pricing? We're here to help.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-green-600 hover:bg-green-700 text-black font-semibold">Contact Sales</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
