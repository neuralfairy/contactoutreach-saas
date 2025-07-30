import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Target, Zap, Database, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Targeting",
    description: "Advanced machine learning algorithms identify your ideal prospects with 95% accuracy.",
    link: "/ai-aggregator-overview",
  },
  {
    icon: Target,
    title: "Intent Signals",
    description: "Capture buying intent signals to reach prospects at the perfect moment.",
    link: "/lead-generation",
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Seamlessly integrate with your existing CRM and sales tools.",
    link: "/crm-integrations",
  },
  {
    icon: Database,
    title: "Data Enrichment",
    description: "Enrich your leads with comprehensive contact and company information.",
    link: "/features",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in tools for sales teams to collaborate and track progress.",
    link: "/features",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track performance metrics and optimize your lead generation strategy.",
    link: "/features",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Sales Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to identify, target, and convert high-quality B2B leads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{feature.description}</CardDescription>
                <Link href={feature.link}>
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-semibold">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  )
}
