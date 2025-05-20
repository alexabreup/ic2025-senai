import { NextRequest, NextResponse } from "next/server"
import { savePostMarkdown } from "@/lib/markdown"

export async function POST(request: NextRequest) {
  try {
    const { slug, content, frontmatter } = await request.json()
    
    // Validar dados
    if (!slug || !content || !frontmatter || !frontmatter.title || !frontmatter.date) {
      return NextResponse.json(
        { error: "Dados incompletos" },
        { status: 400 }
      )
    }
    
    // Salvar o post
    await savePostMarkdown(slug, content, frontmatter)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao criar post:", error)
    return NextResponse.json(
      { error: "Erro ao criar post" },
      { status: 500 }
    )
  }
}
