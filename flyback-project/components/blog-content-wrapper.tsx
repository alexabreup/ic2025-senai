'use client';

import dynamic from 'next/dynamic';

// Dynamically import the client-side MarkdownContent component
const MarkdownContent = dynamic(() => import('./markdown-content'), {
  ssr: false,
  loading: () => <div className="markdown-content loading">Carregando...</div>
});

export default function BlogContentWrapper({ content }: { content: string }) {
  return <MarkdownContent content={content} />;
}
