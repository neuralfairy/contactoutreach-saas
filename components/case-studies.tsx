"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign } from "lucide-react"

const caseStudies = [
  {
    company: "TechFlow Solutions",
    industry: "SaaS",
    challenge: "Low-quality leads from traditional channels",
    solution: "AI-powered targeting with intent signals",
    results: {
      leadQuality: "+250%",
      conversionRate: "+180%",
      revenue: "+$2.3M",
    },
    quote:
      "Contactoutreach transformed our lead generation. We're now closing deals 3x faster with higher-quality prospects.",
    author: "Sarah Chen, VP of Sales",
  },
  {
    company: "GrowthCorp",
    industry: "Marketing Agency",
    challenge: "Scaling lead generation for multiple clients",
    solution: "Multi-client dashboard with automated workflows",
    results: {
      leadQuality: "+300%",
      conversionRate: "+220%",
      revenue: "+$4.1M",
    },
    quote: "The ROI has been incredible. We've expanded our client base by 400% using Contactoutreach's platform.",
    author: "Mike Rodriguez, CEO",
  },
  {
    company: "Enterprise Systems",
    industry: "B2B Software",
    challenge: "Long sales cycles with low conversion",
    solution: "Intent-based targeting and lead scoring",
    results: {
      leadQuality: "+190%",
      conversionRate: "+150%",
      revenue: "+$1.8M",
    },
    quote: "Our sales team now focuses on qualified prospects only. The efficiency gains have been remarkable.",
    author: "Jennifer Park, Sales Director",
  },
]

export default function CaseStudies() {
  const [currentStudy, setCurrentStudy] = useState(0)

  const nextStudy = () => {
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length)
  }

  const prevStudy = () => {
    setCurrentStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const study = caseStudies[currentStudy]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories from{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Our Clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies are accelerating their growth with our platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Company Info */}
                <div className="p-8 lg:p-12 bg-white">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                    <p className="text-green-600 font-semibold">{study.industry}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  <blockquote className="border-l-4 border-green-500 pl-4 mb-6">
                    <p className="text-gray-700 italic mb-2">"{study.quote}"</p>
                    <cite className="text-sm text-gray-500">— {study.author}</cite>
                  </blockquote>
                </div>

                {/* Right Side - Results */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-green-600 to-green-700 text-white">
                  <h4 className="text-2xl font-bold mb-8">Results Achieved</h4>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">{study.results.leadQuality}</div>
                        <div className="text-green-100">Lead Quality Improvement</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">{study.results.conversionRate}</div>
                        <div className="text-green-100">Conversion Rate Increase</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <DollarSign className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">{study.results.revenue}</div>
                        <div className="text-green-100">Additional Revenue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevStudy}
              className="text-black border-gray-300 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStudy(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStudy ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextStudy}
              className="text-black border-gray-300 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-semibold">
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
