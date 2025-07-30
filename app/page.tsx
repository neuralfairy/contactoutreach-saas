import type { Metadata } from "next"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CaseStudies from "@/components/case-studies"
import ROICalculator from "@/components/roi-calculator"
import Integrations from "@/components/integrations"
import Pricing from "@/components/pricing"
import ExitIntentPopup from "@/components/exit-intent-popup"

export const metadata: Metadata = {
  title: "Contactoutreach Solutions - Fuel Your Sales Pipeline with Targeted B2B Leads",
  description:
    "Advanced B2B lead generation platform using AI-powered targeting and intent signals. Start your free trial today and accelerate your sales pipeline.",
  keywords: "B2B lead generation, sales acceleration, targeted prospecting, AI lead generation, CRM integration",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CaseStudies />
      <ROICalculator />
      <Integrations />
      <Pricing />
      <ExitIntentPopup />
    </>
  )
}
