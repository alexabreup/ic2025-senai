import Link from "next/link"
import { getPostBySlug, getAllPosts, getPostMarkdown } from "@/lib/markdown"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import BlogContentWrapper from "@/components/blog-content-wrapper"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Garantir que params é aguardado antes de acessar suas propriedades
  const resolvedParams = await Promise.resolve(params)
  const { slug } = resolvedParams
  
  // Get both the processed post and the raw markdown content
  const post = await getPostBySlug(slug)
  const rawPost = await getPostMarkdown(slug)

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Voltar para o blog
          </Button>
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-8">
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          {/* Use the client-side wrapper component to render the content */}
          <BlogContentWrapper content={rawPost.content || ""} />
        </article>
      </div>
    </div>
  )
}
