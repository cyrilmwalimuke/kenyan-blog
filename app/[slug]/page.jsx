import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react"


export default function Component() {
  const article = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Exploring the latest technologies and methodologies that are shaping the future of web development, from AI integration to sustainable coding practices.",
    content: `
      <p style='margin-bottom:20px;'>The web development landscape is evolving at an unprecedented pace. As we navigate through 2024, several key trends are emerging that will fundamentally change how we build and interact with web applications.</p>
      
      <h2 style='margin-bottom:20px; font:bold; font-size:25px'>AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is no longer just a buzzword in web development. Tools like GitHub Copilot, ChatGPT, and specialized AI coding assistants are becoming integral parts of developers' workflows. These tools are not replacing developers but rather augmenting their capabilities, allowing for faster prototyping and more efficient debugging.</p>
      
      <p>The integration of AI in development workflows has shown remarkable results:</p>
      <ul>
        <li>40% reduction in time spent on boilerplate code</li>
        <li>Improved code quality through AI-powered reviews</li>
        <li>Enhanced accessibility through automated testing</li>
      </ul>
      
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is transforming how we think about web application architecture. By processing data closer to the user, we're seeing significant improvements in performance and user experience. Platforms like Vercel Edge Functions and Cloudflare Workers are making edge computing accessible to developers of all skill levels.</p>
      
      <blockquote>
        "Edge computing isn't just about speed—it's about creating more resilient and responsive web applications that can adapt to users' needs in real-time."
      </blockquote>
      
      <h2>Sustainable Web Development</h2>
      <p>Environmental consciousness is becoming a priority in web development. Developers are increasingly focusing on creating energy-efficient applications that minimize their carbon footprint. This includes optimizing images, reducing JavaScript bundle sizes, and choosing green hosting providers.</p>
      
      <h2>The Evolution of JavaScript Frameworks</h2>
      <p>The JavaScript ecosystem continues to evolve with new frameworks and improvements to existing ones. React Server Components, Svelte 5, and the continued growth of Next.js are reshaping how we build modern web applications.</p>
      
      <p>Key developments include:</p>
      <ul>
        <li>Better server-side rendering capabilities</li>
        <li>Improved developer experience with hot reloading</li>
        <li>Enhanced performance through better bundling</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>As we look toward the future, it's clear that web development will continue to evolve rapidly. The key to success will be staying adaptable and continuously learning. The trends we're seeing today are just the beginning of a more intelligent, efficient, and sustainable web.</p>
    `,
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      bio: "Senior Full-Stack Developer with 8+ years of experience in modern web technologies.",
    },
    publishedAt: "March 15, 2024",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["JavaScript", "AI", "Edge Computing", "Sustainability"],
    coverImage: "/placeholder.svg?height=400&width=800",
  }

  const relatedArticles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating React apps that can grow with your business.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "6 min read",
      slug: "scalable-react-apps",
    },
    {
      title: "Introduction to Server Components",
      excerpt: "Understanding React Server Components and how they're changing web development.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "5 min read",
      slug: "server-components-intro",
    },
    {
      title: "Optimizing Web Performance in 2024",
      excerpt: "Essential techniques for making your websites faster and more efficient.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "7 min read",
      slug: "web-performance-2024",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-2">
              <button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
              <button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div variant="secondary">{article.category}</div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.publishedAt}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{article.title}</h1>

          <p className="text-xl text-muted-foreground mb-6">{article.excerpt}</p>

          {/* Author Info */}
          <div className="flex items-center gap-3 mb-8">
            <Image
              src={article.author.avatar || "/placeholder.svg"}
              alt={article.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-medium">{article.author.name}</div>
              <div className="text-sm text-muted-foreground">{article.author.bio}</div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="mb-8">
            <Image
            //   src={article.coverImage || "/placeholder.svg"}
            src='https://bettsrecruiting.com/wp-content/uploads/2021/05/christina-wocintechchat-com-LQ1t-8Ms5PY-unsplash-scaled.jpg'
              alt={article.title}
              width={800}
              height={400}
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <div key={tag} variant="outline">
                #{tag}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 h-1 w-full" />

        {/* Author Card */}
        <div className="bg-muted/50 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <Image
              src={article.author.avatar || "/placeholder.svg"}
              alt={article.author.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">About {article.author.name}</h3>
              <p className="text-muted-foreground mb-4">{article.author.bio}</p>
              <button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                View Profile
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <Link key={relatedArticle.slug} href={`/blog/${relatedArticle.slug}`} className="group block">
                <div className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <Image
                    src={relatedArticle.image || "/placeholder.svg"}
                    alt={relatedArticle.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{relatedArticle.excerpt}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {relatedArticle.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
