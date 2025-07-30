import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Contactoutreach</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Advanced B2B lead generation platform powered by AI. Accelerate your sales pipeline with precision
              targeting and intent signals.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-green-600 hover:bg-green-700 text-black font-semibold">Start Free Trial</Button>
              <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800 bg-transparent">
                Book Demo
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/ai-aggregator-overview" className="hover:text-white transition-colors">
                  AI Aggregator
                </Link>
              </li>
              <li>
                <Link href="/lead-generation" className="hover:text-white transition-colors">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/crm-integrations" className="hover:text-white transition-colors">
                  CRM Integrations
                </Link>
              </li>
              <li>
                <Link href="/psa-suite" className="hover:text-white transition-colors">
                  PSA Suite
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/leadership-team" className="hover:text-white transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact-form" className="hover:text-white transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Support & Legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/partner-inquiry" className="hover:text-white transition-colors">
                  Partner Inquiry
                </Link>
              </li>
              <li>
                <Link href="/submit-ticket" className="hover:text-white transition-colors">
                  Submit Ticket
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/live-chat" className="hover:text-white transition-colors">
                  Live Chat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Contactoutreach Solutions. All rights reserved. | Reno, NV
            </div>
            <div className="text-gray-400 text-sm">
              <Link
                href="https://salescentri.com?utm_source=contactoutreach.com&utm_medium=footer&utm_campaign=partner_network"
                className="text-black hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
