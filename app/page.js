



import {
  Search,
  Menu,
  TrendingUp,
  Globe,
  Heart,
  MapPin,
  Briefcase,
  Smartphone,
  Plane,
  Trophy,
  GraduationCap,
  Stethoscope,
  Sprout,
  Music,
  User,
  Clock,
  Eye,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const categories = [
    { name: "Technology", icon: Smartphone, color: "bg-blue-500", count: 45 },
    { name: "Business", icon: Briefcase, color: "bg-green-500", count: 38 },
    { name: "Lifestyle", icon: Heart, color: "bg-pink-500", count: 52 },
    { name: "Travel", icon: Plane, color: "bg-purple-500", count: 29 },
    { name: "Sports", icon: Trophy, color: "bg-orange-500", count: 34 },
    { name: "Politics", icon: Globe, color: "bg-red-500", count: 41 },
    { name: "Health", icon: Stethoscope, color: "bg-teal-500", count: 27 },
    { name: "Education", icon: GraduationCap, color: "bg-indigo-500", count: 31 },
    { name: "Agriculture", icon: Sprout, color: "bg-emerald-500", count: 23 },
    { name: "Entertainment", icon: Music, color: "bg-yellow-500", count: 36 },
  ]

  const featuredArticles = [
    {
      id: 1,
      title: "Kenya's Digital Revolution: How M-Pesa Changed Africa",
      excerpt:
        "Exploring the transformative impact of mobile money on Kenya's economy and its influence across the continent.",
      category: "Technology",
      author: "Grace Wanjiku",
      date: "2 hours ago",
      readTime: "5 min read",
      views: "2.3K",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 2,
      title: "Safari Tourism Rebounds: Kenya's Wildlife Conservation Success",
      excerpt:
        "How community-based conservation efforts are protecting Kenya's wildlife while boosting local economies.",
      category: "Travel",
      author: "David Kimani",
      date: "4 hours ago",
      readTime: "7 min read",
      views: "1.8K",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Nairobi's Startup Ecosystem: The Silicon Savannah Rises",
      excerpt: "Inside Kenya's thriving tech hub and the entrepreneurs building the future of African innovation.",
      category: "Business",
      author: "Mary Njeri",
      date: "6 hours ago",
      readTime: "6 min read",
      views: "3.1K",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const trendingArticles = [
    {
      title: "President Ruto's Economic Reforms: What They Mean for Ordinary Kenyans",
      category: "Politics",
      views: "5.2K",
      time: "1 hour ago",
    },
    {
      title: "Harambee Stars Qualify for AFCON 2024: Road to Victory",
      category: "Sports",
      views: "4.8K",
      time: "3 hours ago",
    },
    {
      title: "Climate Change Impact on Kenyan Agriculture: Farmers Adapt",
      category: "Agriculture",
      views: "3.9K",
      time: "5 hours ago",
    },
    {
      title: "Kenyan Universities Embrace AI: The Future of Education",
      category: "Education",
      views: "3.2K",
      time: "8 hours ago",
    },
  ]

  const latestArticles = [
    {
      title: "Traditional Kenyan Cuisine Goes Global: Chef's Success Story",
      category: "Lifestyle",
      author: "Peter Mwangi",
      date: "1 day ago",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Mental Health Awareness in Kenya: Breaking the Stigma",
      category: "Health",
      author: "Dr. Sarah Mutua",
      date: "1 day ago",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Kenyan Music Industry: From Benga to Afrobeats",
      category: "Entertainment",
      author: "James Ochieng",
      date: "2 days ago",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Sustainable Fashion: Kenyan Designers Lead the Way",
      category: "Lifestyle",
      author: "Anne Wambui",
      date: "2 days ago",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
     

      {/* Hero Section */}
      <section className="relative bg-black via-black to-red-600 text-white py-10 sm:px-5">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-6">Discover Kenya Through Every Story</h1>
            <p className="text-sm md:text-lg mb-8 text-gray-200">
              From Nairobis bustling streets to Maasai Maras wildlife - explore all facets of Kenyan life
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-md text-sm px-4 py-2">
                Explore Stories
              </button>
              <button  className="border-white text-white hover:bg-white hover:text-black bg-black text-sm px-4 py-2 rounded-md border-[1px]">
                Subscribe Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end mt-7 sm:mt-1">
              <div className="flex space-x-4">
                 
                    <button>
                      <Image 
                      src='/youtube-logo.png'
                      alt="youtube-logo"
                      height='30'
                      width='30'
                      />
                    </button>

                    <button>
                      <Image 
                      src='/instagram-logo.webp'
                      alt="Instagram-logo"
                      height='30'
                      width='30'
                      />
                    </button>

                    <button>
                      <Image 
                      src='/x-twitter-transparent.png'
                      alt="x-logo"
                      height='30'
                      width='30'
                      />
                    </button>
                    <button classname='bg-pink-100'>
                      <Image 
                      src='/facebook-logo.png'
                      alt="x-logo"
                      height='25'
                      width='25'
                      />
                    </button>



                   
              </div>

        </div>


        





      </section>

      {/* Categories Grid
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore All Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link key={category.name} href="#" className="group">
                  <div className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <div className="p-6 text-center">
                      <div
                        className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} articles</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section> */}


      <section className=" h-70 w-full py-10 px-7">
        <div className="bg-gray-100 w-full h-full text-black flex justify-center items-center">
          AD HERE

        </div>
        


      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container px-4">
            <h2 className="text-3xl font-bold mb-7">Featured Stories</h2>
          
         

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Featured Article */}
            <div className="lg:row-span-2 overflow-hidden group hover:shadow-xl transition-all duration-300 shadow-md rounded-lg">
              <div className="relative h-64 lg:h-80">
                <Image
                  // src={featuredArticles[0].image || "/placeholder.svg"}
                  src='https://techweez.com/wp-content/uploads/2024/12/safaricom-mpesa-750x536.jpg'

                  alt={featuredArticles[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-500 px-4 text-sm rounded-full text-white">{featuredArticles[0].category}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {featuredArticles[0].title}
                </h3>
                <p className="text-gray-500 mb-4">{featuredArticles[0].excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredArticles[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredArticles[0].date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredArticles[0].views}</span>
                    </div>
                    <span>{featuredArticles[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Featured Articles */}
            <div className="space-y-6 ">
              {featuredArticles.slice(1).map((article) => (
                <div key={article.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-gray-300 border-[1.4px] rounded-lg">
                  <div className="flex">
                    <div className="relative w-32 h-24 flex-shrink-0">
                      <Image
                        // src={article.image || "/placeholder.svg"}
                         src='https://techweez.com/wp-content/uploads/2024/12/safaricom-mpesa-750x536.jpg'
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <div variant="secondary" className="mb-2 text-xs bg-gray-100 w-fit px-4 rounded-full">
                        {article.category}
                      </div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span >{article.author}</span>
                        <div className="flex items-center space-x-2">
                          <span>{article.views}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 h-80 w-full text-black flex items-center justify-center">
              AD HERE
            </div>
          </div>
         
        </div>
      </section>

      {/* Trending & Latest */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Trending */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Trending Now</h3>
              </div>
              <div className="space-y-4">
                {trendingArticles.map((article, index) => (
                  <div key={index} className="p-4 hover:shadow-md transition-shadow border-gray-300 border-[1.2px] rounded-lg bg-white">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div variant="outline" className="text-xs border-gray-500 rounded-full px-4 border-[1.2px]">
                            {article.category}
                          </div>
                          <span>•</span>
                          <span>{article.views} views</span>
                          <span>•</span>
                          <span>{article.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Articles */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-6">Latest Articles</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {latestArticles.map((article, index) => (
                  <div key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-40">
                      <Image
                        // src={article.image || "/placeholder.svg"}
                        src='https://techweez.com/wp-content/uploads/2024/12/safaricom-mpesa-750x536.jpg'
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div variant="secondary" className="mb-2 text-xs bg-gray-200 rounded-full font-semibold w-fit px-4">
                        {article.category}
                      </div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{article.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-300 text-black">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Kenya Blog</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get the latest stories from across Kenya delivered to your inbox weekly
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input placeholder="Enter your email" className="bg-white text-black text-sm focus:outline-none  rounded-md py-2 px-4 w-64" />
            <button className="bg-black text-white hover:bg-gray-800 px-4 rounded-md">Subscribe</button>
          </div>
        </div>
      </section>

      
    
    </div>
  )
}

