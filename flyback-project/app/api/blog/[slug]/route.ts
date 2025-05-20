import { NextRequest, NextResponse } from "next/server"
import { getPostMarkdown, savePostMarkdown } from "@/lib/markdown"

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const post = await getPostMarkdown(slug)
    
    return NextResponse.json(post)
  } catch (error) {
    console.error("Erro ao buscar post:", error)
    return NextResponse.json(
      { error: "Post não encontrado" },
      { status: 404 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const { content, frontmatter } = await request.json()
    
    // Validar dados
    if (!content || !frontmatter || !frontmatter.title || !frontmatter.date) {
      return NextResponse.json(
        { error: "Dados incompletos" },
        { status: 400 }
      )
    }
    
    // Salvar o post
    await savePostMarkdown(slug, content, frontmatter)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao atualizar post:", error)
    return NextResponse.json(
      { error: "Erro ao atualizar post" },
      { status: 500 }
    )
  }
}
