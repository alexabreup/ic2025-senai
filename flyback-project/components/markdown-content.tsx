'use client'

import { withBasePath } from '@/lib/route-utils'

interface MarkdownContentProps {
  content: string
}

/**
 * Component to render markdown content with proper image path handling
 * This component processes image paths in markdown content to ensure they work with basePath
 */
export function MarkdownContent({ content }: MarkdownContentProps) {
  // Process image paths in the content
  let processedContent = content;
  
  // First, handle markdown image syntax ![alt](/path/to/image.png)
  processedContent = processedContent.replace(
    /!\[([^\]]*)\]\((\/ic2025-senai\/[^)]+)\)/g,
    (match, alt, path) => {
      // In development, remove the /ic2025-senai prefix
      const cleanPath = process.env.NODE_ENV === 'development' 
        ? path.replace(/^\/ic2025-senai\//, '/') 
        : path;
      return `![${alt}](${cleanPath})`;
    }
  );
  
  // Then handle HTML image tags <img src="/path/to/image.png">
  processedContent = processedContent.replace(
    /src=["'](\/ic2025-senai\/[^"']+)["']/g,
    (match, path) => {
      // In development, remove the /ic2025-senai prefix
      const cleanPath = process.env.NODE_ENV === 'development' 
        ? path.replace(/^\/ic2025-senai\//, '/') 
        : path;
      return `src="${cleanPath}"`;
    }
  );

  return (
    <div 
      className="prose prose-slate dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  )
}
