"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    monthlyLeads: 100,
    conversionRate: 5,
    averageDealValue: 5000,
    currentCost: 2000,
  })

  const [results, setResults] = useState({
    currentRevenue: 0,
    projectedRevenue: 0,
    additionalRevenue: 0,
    roi: 0,
  })

  const calculateROI = () => {
    const currentMonthlyRevenue = inputs.monthlyLeads * (inputs.conversionRate / 100) * inputs.averageDealValue
    const improvedConversionRate = inputs.conversionRate * 3 // 3x improvement
    const projectedMonthlyRevenue = inputs.monthlyLeads * (improvedConversionRate / 100) * inputs.averageDealValue
    const additionalRevenue = projectedMonthlyRevenue - currentMonthlyRevenue
    const annualAdditionalRevenue = additionalRevenue * 12
    const platformCost = 500 * 12 // $500/month platform cost
    const roi = ((annualAdditionalRevenue - platformCost) / platformCost) * 100

    setResults({
      currentRevenue: currentMonthlyRevenue,
      projectedRevenue: projectedMonthlyRevenue,
      additionalRevenue: additionalRevenue,
      roi: roi,
    })
  }

  const handleInputChange = (field: string, value: string) => {
    const numValue = Number.parseFloat(value) || 0
    setInputs((prev) => ({ ...prev, [field]: numValue }))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Potential ROI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much additional revenue you could generate with our platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="mr-3 h-6 w-6 text-green-600" />
                  Your Current Metrics
                </CardTitle>
                <CardDescription>Enter your current sales metrics to calculate potential ROI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="monthlyLeads">Monthly Leads</Label>
                  <Input
                    id="monthlyLeads"
                    type="number"
                    value={inputs.monthlyLeads}
                    onChange={(e) => handleInputChange("monthlyLeads", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="conversionRate">Conversion Rate (%)</Label>
                  <Input
                    id="conversionRate"
                    type="number"
                    step="0.1"
                    value={inputs.conversionRate}
                    onChange={(e) => handleInputChange("conversionRate", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="averageDealValue">Average Deal Value ($)</Label>
                  <Input
                    id="averageDealValue"
                    type="number"
                    value={inputs.averageDealValue}
                    onChange={(e) => handleInputChange("averageDealValue", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="currentCost">Current Lead Gen Cost/Month ($)</Label>
                  <Input
                    id="currentCost"
                    type="number"
                    value={inputs.currentCost}
                    onChange={(e) => handleInputChange("currentCost", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button
                  onClick={calculateROI}
                  className="w-full bg-green-600 hover:bg-green-700 text-black font-semibold"
                >
                  Calculate ROI
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <TrendingUp className="mr-3 h-6 w-6 text-green-600" />
                  Projected Results
                </CardTitle>
                <CardDescription>Based on our average 3x conversion improvement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-5 w-5 text-gray-600 mr-2" />
                      <span className="text-sm text-gray-600">Current Revenue</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      ${results.currentRevenue.toLocaleString()}/mo
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm text-gray-600">Projected Revenue</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      ${results.projectedRevenue.toLocaleString()}/mo
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 p-6 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-green-700 mb-2">Additional Monthly Revenue</div>
                    <div className="text-4xl font-bold text-green-800 mb-2">
                      ${results.additionalRevenue.toLocaleString()}
                    </div>
                    <div className="text-sm text-green-700">
                      ${(results.additionalRevenue * 12).toLocaleString()} annually
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg text-white text-center">
                  <div className="text-sm text-gray-300 mb-2">Projected ROI</div>
                  <div className="text-4xl font-bold mb-2">{results.roi.toFixed(0)}%</div>
                  <div className="text-sm text-gray-300">Return on investment</div>
                </div>

                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-black font-semibold">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
