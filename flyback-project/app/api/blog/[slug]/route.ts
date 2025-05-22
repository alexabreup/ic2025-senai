import { NextRequest, NextResponse } from "next/server"
import { getPostMarkdown, savePostMarkdown } from "@/lib/markdown"
import fs from 'fs'
import path from 'path'

export const dynamic = "force-static"

// This function is required for static export
export async function generateStaticParams() {
  // Get all blog posts from the content directory
  const contentDir = path.join(process.cwd(), 'content/blog')
  const files = fs.readdirSync(contentDir)
  
  // Return the slugs for all blog posts
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace(/\.md$/, '')
    }))
}

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
