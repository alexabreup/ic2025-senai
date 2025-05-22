'use client'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { withBasePath } from '@/lib/route-utils'

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  // Processa os caminhos de imagem no conteúdo markdown
  // Substitui referências a imagens para usar o basePath correto
  const processedContent = content.replace(
    /!\[(.*?)\]\((\/[^)]+)\)/g,
    (match, alt, path) => {
      return `![${alt}](${withBasePath(path)})`
    }
  )

  return (
    <div className="prose prose-stone dark:prose-invert max-w-none">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {processedContent}
      </ReactMarkdown>
    </div>
  )
}
