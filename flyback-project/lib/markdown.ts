import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"

const contentDirectory = path.join(process.cwd(), "content")
const blogDirectory = path.join(contentDirectory, "blog")

export type PostMetadata = {
  title: string
  date: string
  excerpt: string
  slug: string
  content?: string
}

export async function getPostBySlug(slug: string): Promise<PostMetadata> {
  const fullPath = path.join(blogDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post with slug ${slug} not found`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  // Converter markdown para HTML com suporte a tabelas e outros recursos do GFM
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || '',
    slug,
    content: contentHtml
  }
}

export function getAllPosts(): PostMetadata[] {
  // Ler todos os arquivos no diretório de blog
  const fileNames = fs.readdirSync(blogDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remover a extensão ".md" para obter o slug
      const slug = fileName.replace(/\.md$/, '')
      
      // Ler o conteúdo do arquivo markdown
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      
      // Usar gray-matter para analisar a seção de metadados do post
      const { data } = matter(fileContents)
      
      // Combinar os dados com o slug
      return {
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || '',
        slug
      }
    })
  
  // Ordenar posts pela data, do mais recente para o mais antigo
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostMarkdown(slug: string): Promise<{ content: string, data: any }> {
  const fullPath = path.join(blogDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post with slug ${slug} not found`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return { content, data }
}

export async function savePostMarkdown(slug: string, content: string, frontmatter: any): Promise<void> {
  const fullPath = path.join(blogDirectory, `${slug}.md`)
  
  // Criar o conteúdo do arquivo com frontmatter e markdown
  const fileContent = matter.stringify(content, frontmatter)
  
  // Escrever no arquivo
  fs.writeFileSync(fullPath, fileContent, 'utf8')
}
