import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import { withBasePath } from "@/lib/route-utils"

const contentDirectory = path.join(process.cwd(), "content")
const blogDirectory = path.join(contentDirectory, "blog")

export type PostMetadata = {
  title: string
  date: string
  excerpt: string
  slug: string
  content?: string
}

// Função para converter links e imagens do formato Obsidian para markdown padrão
function convertObsidianToMarkdown(content: string): string {
  // Converter links wiki do Obsidian [[link]] para [link](link)
  let processedContent = content.replace(/\[\[([^\]]+)\]\]/g, '[$1]($1)');
  
  // Converter imagens do Obsidian ![[imagem.png]] para ![](/attachments/imagem.png)
  processedContent = processedContent.replace(/!\[\[([^\]]+)\]\]/g, (match, filename) => {
    return `![](${withBasePath('/attachments/' + filename)})`;
  });
  
  return processedContent;
}

// Função para converter o frontmatter do Obsidian para o formato esperado
function convertObsidianFrontmatter(data: any): any {
  let newData = {...data};
  
  // Converter data para string se for um objeto Date
  if (newData.date && typeof newData.date !== 'string') {
    newData.date = newData.date.toISOString().split('T')[0];
  }
  
  return newData;
}

export async function getPostBySlug(slug: string): Promise<PostMetadata> {
  const fullPath = path.join(blogDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post with slug ${slug} not found`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  // Converter conteúdo do formato Obsidian para markdown padrão
  const obsidianProcessedContent = convertObsidianToMarkdown(content)
  
  // Converter markdown para HTML com suporte a tabelas, matemática e outros recursos
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkMath) // Suporte para expressões matemáticas
    .use(html, { sanitize: false }) // Desabilitar sanitização para permitir tags KaTeX
    .use(rehypeKatex) // Renderizar expressões matemáticas com KaTeX
    .process(obsidianProcessedContent)
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
  
  return { content, data: convertObsidianFrontmatter(data) }
}

export async function savePostMarkdown(slug: string, content: string, frontmatter: any): Promise<void> {
  const fullPath = path.join(blogDirectory, `${slug}.md`)
  
  // Criar o conteúdo do arquivo com frontmatter e markdown
  const fileContent = matter.stringify(content, frontmatter)
  
  // Escrever no arquivo
  fs.writeFileSync(fullPath, fileContent, 'utf8')
}
