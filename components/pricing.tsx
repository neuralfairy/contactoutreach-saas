import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "1,000 leads per month",
      "Basic AI targeting",
      "Email support",
      "CRM integration",
      "Lead scoring",
      "Basic analytics",
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
      "5,000 leads per month",
      "Advanced AI targeting",
      "Intent signals",
      "Priority support",
      "Advanced CRM sync",
      "Custom workflows",
      "Team collaboration",
      "Advanced analytics",
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
      "Unlimited leads",
      "Custom AI models",
      "Dedicated success manager",
      "24/7 phone support",
      "Custom integrations",
      "White-label options",
      "Advanced security",
      "SLA guarantees",
    ],
    cta: "Enterprise & Custom",
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
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
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
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

        <div className="text-center">
          <p className="text-gray-600 mb-6">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
              Compare All Features
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-semibold">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
