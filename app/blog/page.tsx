import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog - B2B Lead Generation Insights & Tips | Contactoutreach",
  description: "Expert insights on B2B lead generation, sales acceleration, and AI-powered prospecting strategies.",
}

const blogPosts = [
  {
    title: "The Future of B2B Lead Generation: AI-Powered Prospecting",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way businesses identify and engage with potential customers.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "AI & Technology",
    image: "/placeholder.svg?height=200&width=400",
    slug: "future-b2b-lead-generation-ai",
  },
  {
    title: "10 Sales Acceleration Strategies That Actually Work",
    excerpt:
      "Proven tactics to speed up your sales cycle and close more deals faster in today's competitive B2B landscape.",
    author: "Michael Chen",
    date: "2024-01-12",
    category: "Sales Strategy",
    image: "/placeholder.svg?height=200&width=400",
    slug: "sales-acceleration-strategies",
  },
  {
    title: "Intent Data: The Secret Weapon for Modern Sales Teams",
    excerpt: "Learn how to leverage buyer intent signals to identify prospects who are ready to purchase.",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    category: "Lead Generation",
    image: "/placeholder.svg?height=200&width=400",
    slug: "intent-data-secret-weapon",
  },
  {
    title: "CRM Integration Best Practices for Lead Generation",
    excerpt: "Maximize your ROI by properly integrating your lead generation tools with your existing CRM system.",
    author: "David Park",
    date: "2024-01-08",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=400",
    slug: "crm-integration-best-practices",
  },
  {
    title: "Building a High-Converting B2B Sales Funnel in 2024",
    excerpt: "Step-by-step guide to creating a sales funnel that converts prospects into customers consistently.",
    author: "Sarah Johnson",
    date: "2024-01-05",
    category: "Sales Strategy",
    image: "/placeholder.svg?height=200&width=400",
    slug: "building-high-converting-sales-funnel",
  },
  {
    title: "The ROI of Quality Leads: Why Precision Matters",
    excerpt: "Why focusing on lead quality over quantity delivers better results and higher conversion rates.",
    author: "Michael Chen",
    date: "2024-01-03",
    category: "Lead Generation",
    image: "/placeholder.svg?height=200&width=400",
    slug: "roi-quality-leads-precision",
  },
]

const categories = ["All", "AI & Technology", "Sales Strategy", "Lead Generation", "Technology"]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Lead Generation{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Expert insights on B2B lead generation, sales acceleration, and AI-powered prospecting strategies
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  category === "All" ? "bg-green-600 text-white hover:bg-green-700" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">Featured</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{blogPosts[0].author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  </div>
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    <Button className="bg-green-600 hover:bg-green-700 text-black font-semibold group">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold group"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="text-black border-gray-300 hover:bg-gray-50 bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with Lead Generation Insights</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get the latest strategies, tips, and industry insights delivered to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
              Download Free Guide
            </Button>
          </div>
          <p className="text-sm text-green-100 mt-4">🔒 We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  )
}
