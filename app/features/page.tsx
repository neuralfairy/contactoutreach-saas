import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Target, Zap, Database, Users, BarChart3, Shield, Clock, Globe, Workflow } from "lucide-react"

export const metadata: Metadata = {
  title: "Features - Advanced B2B Lead Generation Tools | Contactoutreach",
  description:
    "Discover powerful AI-driven features for B2B lead generation including intent signals, CRM sync, and advanced targeting.",
}

const features = [
  {
    icon: Brain,
    title: "AI-Powered Targeting",
    description:
      "Advanced machine learning algorithms analyze millions of data points to identify your ideal prospects with 95% accuracy.",
    benefits: ["Predictive lead scoring", "Behavioral analysis", "Lookalike modeling", "Real-time optimization"],
  },
  {
    icon: Target,
    title: "Intent Signals",
    description:
      "Capture buying intent signals from multiple sources to reach prospects at the perfect moment in their buying journey.",
    benefits: [
      "Website visitor tracking",
      "Content engagement signals",
      "Search behavior analysis",
      "Social media monitoring",
    ],
  },
  {
    icon: Zap,
    title: "Real-time CRM Sync",
    description: "Seamlessly integrate with your existing CRM and sales tools for instant data synchronization.",
    benefits: ["Bi-directional sync", "Custom field mapping", "Automated workflows", "Duplicate prevention"],
  },
  {
    icon: Database,
    title: "Data Enrichment",
    description: "Enrich your leads with comprehensive contact and company information from our premium data sources.",
    benefits: ["Contact details", "Company insights", "Technographic data", "Firmographic data"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in tools for sales teams to collaborate, share insights, and track progress together.",
    benefits: ["Shared lead pools", "Team analytics", "Activity tracking", "Performance metrics"],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Comprehensive analytics dashboard to track performance metrics and optimize your lead generation strategy.",
    benefits: ["ROI tracking", "Conversion analytics", "Pipeline insights", "Custom reports"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance, data encryption, and privacy protection.",
    benefits: ["SOC 2 Type II", "GDPR compliant", "Data encryption", "Access controls"],
  },
  {
    icon: Clock,
    title: "Automated Workflows",
    description: "Set up automated sequences to nurture leads and engage prospects without manual intervention.",
    benefits: ["Email sequences", "Task automation", "Lead routing", "Follow-up reminders"],
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access to global B2B database with coverage across 200+ countries and territories.",
    benefits: ["200+ countries", "Multi-language support", "Local compliance", "Regional insights"],
  },
  {
    icon: Workflow,
    title: "API & Integrations",
    description: "Robust API and 100+ pre-built integrations to connect with your existing tech stack.",
    benefits: ["REST API", "100+ integrations", "Webhooks", "Custom connectors"],
  },
]

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Sales Success
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Everything you need to identify, target, and convert high-quality B2B leads with advanced AI and automation
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-semibold">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 500+ companies already using our platform to accelerate their sales pipeline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
