"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function EditPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`/api/blog/${params.slug}`)
        if (!response.ok) throw new Error("Failed to load post")
        
        const post = await response.json()
        setTitle(post.data.title)
        setDate(post.data.date)
        setExcerpt(post.data.excerpt || "")
        setContent(post.content)
        setLoading(false)
      } catch (error) {
        console.error("Error loading post:", error)
        setLoading(false)
      }
    }

    loadPost()
  }, [params.slug])

  async function handleSave() {
    setSaving(true)
    try {
      const response = await fetch(`/api/blog/${params.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          frontmatter: {
            title,
            date,
            excerpt,
          },
        }),
      })

      if (!response.ok) throw new Error("Failed to save post")
      
      router.push("/admin/blog")
    } catch (error) {
      console.error("Error saving post:", error)
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <p>Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Editar Postagem</h1>
          <div className="flex gap-2">
            <Link href="/admin/blog">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
            <Button 
              size="sm" 
              onClick={handleSave}
              disabled={saving}
            >
              <Save className="mr-2 h-4 w-4" />
              {saving ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título da postagem"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="date">Data</Label>
            <Input
              id="date"
              type="date"
              value={date.substring(0, 10)}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="excerpt">Resumo</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Breve resumo da postagem"
              rows={3}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="content">Conteúdo (Markdown)</Label>
            <div className="border rounded-md">
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Conteúdo em formato Markdown"
                className="font-mono text-sm"
                rows={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
