"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function NewPostPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10))
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTitle = e.target.value
    setTitle(newTitle)
    
    // Gerar slug automaticamente a partir do título
    if (!slug || slug === generateSlug(title)) {
      setSlug(generateSlug(newTitle))
    }
  }

  function generateSlug(text: string) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim()
  }

  async function handleSave() {
    if (!title || !slug || !date || !content) {
      alert("Por favor, preencha todos os campos obrigatórios")
      return
    }

    setSaving(true)
    try {
      const response = await fetch(`/api/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
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

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Nova Postagem</h1>
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
              onChange={handleTitleChange}
              placeholder="Título da postagem"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="slug-da-postagem"
            />
            <p className="text-sm text-muted-foreground">
              O slug é usado na URL da postagem. Exemplo: /blog/slug-da-postagem
            </p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="date">Data</Label>
            <Input
              id="date"
              type="date"
              value={date}
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
