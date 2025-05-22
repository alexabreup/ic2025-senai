import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/markdown"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Aguardar explicitamente os parâmetros antes de usá-los
  // Esta é a forma recomendada pelo Next.js para lidar com parâmetros dinâmicos
  const slug = params?.slug ? await Promise.resolve(params.slug) : ""
  
  // Buscar o post pelo slug
  const post = await getPostBySlug(slug)

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

          <div className="markdown-content" dangerouslySetInnerHTML={{ __html: post.content || "" }} />
        </article>
      </div>
    </div>
  )
}
