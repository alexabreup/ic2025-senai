import path from "path"
import fs from "fs"
import matter from "gray-matter"

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
  // Lê o arquivo Markdown correspondente ao slug
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      content: matterResult.content
    };
  } catch (error) {
    throw new Error(`Post with slug ${slug} not found`);
  }
}

export function getAllPosts(): PostMetadata[] {
  // Lê todos os arquivos do diretório blog
  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove a extensão ".md" para obter o slug
      const slug = fileName.replace(/\.md$/, '');
      
      // Lê o conteúdo do arquivo Markdown
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Usa gray-matter para analisar a seção de metadados do post
      const matterResult = matter(fileContents);
      
      // Combina os dados com o slug
      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
      } as PostMetadata;
    });
    
  // Ordena os posts por data, do mais recente para o mais antigo
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Esta função não é mais necessária, pois o conteúdo é obtido diretamente em getPostBySlug
