import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Tech-Driven Lead Generation Experts | Contactoutreach",
  description:
    "Learn about our Reno-based team of lead generation experts and our mission to accelerate B2B sales with AI-powered solutions.",
}

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former VP of Sales at Fortune 500 SaaS company with 15+ years in B2B sales and lead generation.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "AI and machine learning expert with previous experience at Google and Microsoft, specializing in predictive analytics.",
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Customer Success",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Customer success leader with 12+ years helping B2B companies optimize their sales processes and achieve growth.",
  },
  {
    name: "David Park",
    role: "Head of Product",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Product strategist with deep expertise in sales technology and user experience design for B2B platforms.",
  },
]

const stats = [
  { icon: Users, label: "Team Members", value: "50+" },
  { icon: Target, label: "Clients Served", value: "500+" },
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: MapPin, label: "Reno, Nevada", value: "HQ" },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                Contactoutreach
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We're a tech-driven team based in Reno, Nevada, on a mission to revolutionize B2B lead generation through
              advanced AI and data intelligence. Our platform helps growth-stage companies accelerate their sales
              pipeline with precision targeting and intent signals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that every business deserves access to high-quality leads that convert. Traditional lead
                  generation methods are outdated, inefficient, and expensive.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  That's why we built Contactoutreach - to democratize access to advanced AI-powered lead generation
                  tools that were previously only available to enterprise companies.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-black font-semibold">
                  Learn More About Our Platform
                </Button>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Innovation:</strong>
                      <span className="text-gray-600 ml-1">
                        Constantly pushing the boundaries of what's possible in lead generation
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Transparency:</strong>
                      <span className="text-gray-600 ml-1">Clear pricing, honest results, and open communication</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <strong className="text-gray-900">Results:</strong>
                      <span className="text-gray-600 ml-1">Focused on delivering measurable ROI for our clients</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced team driving innovation in B2B lead generation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reno Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Reno, Nevada"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Reno?</h3>
                <p className="text-gray-600">
                  Reno offers the perfect blend of tech innovation and business-friendly environment. Our location
                  allows us to attract top talent while maintaining competitive costs.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Proudly Based in Reno, Nevada</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our headquarters in Reno puts us at the heart of the emerging Nevada tech scene. We're part of a
                  growing community of innovative companies choosing Nevada for its business-friendly policies and
                  access to talent.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  This strategic location allows us to serve clients across the United States while maintaining the
                  agility and cost-effectiveness that our clients value.
                </p>
                <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
                  Visit Our Office
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help accelerate your B2B lead generation and sales growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
