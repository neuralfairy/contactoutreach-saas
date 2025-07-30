"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const integrations = [
  {
    category: "CRM Systems",
    tools: [
      { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
      { name: "HubSpot", logo: "/placeholder.svg?height=60&width=120" },
      { name: "Pipedrive", logo: "/placeholder.svg?height=60&width=120" },
      { name: "Zoho CRM", logo: "/placeholder.svg?height=60&width=120" },
    ],
  },
  {
    category: "PSA Suite",
    tools: [
      { name: "ConnectWise", logo: "/placeholder.svg?height=60&width=120" },
      { name: "Autotask", logo: "/placeholder.svg?height=60&width=120" },
      { name: "ServiceNow", logo: "/placeholder.svg?height=60&width=120" },
      { name: "Kaseya", logo: "/placeholder.svg?height=60&width=120" },
    ],
  },
  {
    category: "Marketing Automation",
    tools: [
      { name: "Marketo", logo: "/placeholder.svg?height=60&width=120" },
      { name: "Pardot", logo: "/placeholder.svg?height=60&width=120" },
      { name: "ActiveCampaign", logo: "/placeholder.svg?height=60&width=120" },
      { name: "Mailchimp", logo: "/placeholder.svg?height=60&width=120" },
    ],
  },
  {
    category: "Sales Tools",
    tools: [
      { name: "Outreach", logo: "/placeholder.svg?height=60&width=120" },
      { name: "SalesLoft", logo: "/placeholder.svg?height=60&width=120" },
      { name: "Apollo", logo: "/placeholder.svg?height=60&width=120" },
      { name: "ZoomInfo", logo: "/placeholder.svg?height=60&width=120" },
    ],
  },
]

export default function Integrations() {
  const [currentCategory, setCurrentCategory] = useState(0)

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % integrations.length)
  }

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + integrations.length) % integrations.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seamless{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Integrations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your existing tools and workflows in minutes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <Button variant="ghost" size="sm" onClick={prevCategory} className="text-gray-600 hover:text-gray-900">
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <h3 className="text-2xl font-bold text-gray-900">{integrations[currentCategory].category}</h3>

                <Button variant="ghost" size="sm" onClick={nextCategory} className="text-gray-600 hover:text-gray-900">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {integrations[currentCategory].tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <img
                      src={tool.logo || "/placeholder.svg"}
                      alt={`${tool.name} logo`}
                      className="h-12 w-auto mb-3 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700 text-center">{tool.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center space-x-2 mb-8">
                {integrations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCategory(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentCategory ? "bg-green-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-6">Don't see your tool? We support 100+ integrations and custom APIs.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
                    View All Integrations
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-black font-semibold">
                    Request Integration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
