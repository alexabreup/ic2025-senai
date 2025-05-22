import Link from "next/link"
import { getAllPosts } from "@/lib/markdown"
import { Button } from "@/components/ui/button"
import { PlusCircle, Edit, ArrowLeft } from "lucide-react"

export default function AdminBlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Administração do Blog</h1>
          <div className="flex gap-2">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao site
              </Button>
            </Link>
            <Link href="/admin/blog/new">
              <Button size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                Nova Postagem
              </Button>
            </Link>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Título</th>
                <th className="px-4 py-3 text-left font-medium">Data</th>
                <th className="px-4 py-3 text-left font-medium">Slug</th>
                <th className="px-4 py-3 text-right font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {posts.map((post) => (
                <tr key={post.slug} className="hover:bg-muted/50">
                  <td className="px-4 py-3">{post.title}</td>
                  <td className="px-4 py-3">
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-4 py-3">{post.slug}</td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/blog/edit/${post.slug}`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
