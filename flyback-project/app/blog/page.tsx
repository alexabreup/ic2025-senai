import Link from "next/link"
import { getAllPosts } from "@/lib/markdown"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog do Projeto</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Acompanhe as atualizações e o progresso do nosso projeto de iniciação científica.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <Button variant="outline" size="sm">
                  Ler mais
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
