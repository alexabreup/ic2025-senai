'use client';
import { useState, useEffect } from 'react';
import KatexSpan from './katex-span';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export default function MarkdownContent({ content }) {
  const [isClient, setIsClient] = useState(false);
  const [htmlContent, setHtmlContent] = useState('');
  
  useEffect(() => {
    setIsClient(true);
    
    const processContent = async () => {
      if (!content) return;
      
      try {
        // Preparar o conteúdo para processamento
        let modifiedContent = content;
        
        // Converter 'graph TD' para 'flowchart TD' para melhor compatibilidade
        modifiedContent = modifiedContent.replace(/```mermaid\s*\n\s*graph TD/g, '```mermaid\nflowchart TD');
        
        // Processar o markdown para HTML
        const result = await remark()
          .use(remarkGfm)
          .use(html, { sanitize: false })
          .process(modifiedContent);
        
        // Pós-processamento do HTML para garantir que os blocos Mermaid estejam corretos
        let processedHtml = result.toString();
        
        // Substituir blocos de código Mermaid para garantir que tenham a classe 'mermaid'
        // Procura por <pre><code class="language-mermaid"> e substitui por <div class="mermaid">
        processedHtml = processedHtml.replace(
          /<pre><code class="language-mermaid">(([\s\S](?!<\/code><\/pre>))*)\s*<\/code><\/pre>/g,
          '<div class="mermaid">$1</div>'
        );
        
        // Definir o conteúdo HTML processado
        setHtmlContent(processedHtml);
      } catch (error) {
        console.error('Erro ao processar markdown:', error);
        setHtmlContent(`<div class="p-4 border border-red-500 bg-red-50 text-red-700 rounded">
          <p><strong>Erro ao processar markdown:</strong></p>
          <pre>${error.message}</pre>
        </div>`);
      }
    };
    
    processContent();
  }, [content]);
  
  useEffect(() => {
    // Inicializar Mermaid apenas no cliente e após o conteúdo HTML estar pronto
    if (isClient && htmlContent) {
      const initMermaid = async () => {
        try {
          // Importar Mermaid dinamicamente
          const mermaid = (await import('mermaid')).default;
          
          // Configurar Mermaid
          mermaid.initialize({
            startOnLoad: false, // Alterado para false para usar renderização manual
            theme: 'default',
            securityLevel: 'loose',
            fontFamily: 'inherit',
            flowchart: { useMaxWidth: true },
            er: { useMaxWidth: true },
            sequence: { useMaxWidth: true },
            journey: { useMaxWidth: true },
            gantt: { useMaxWidth: true },
            pie: { useMaxWidth: true },
          });
          
          // Renderizar todos os diagramas na página manualmente
          setTimeout(() => {
            try {
              // Encontrar todos os elementos com classe 'mermaid'
              const mermaidElements = document.querySelectorAll('.mermaid');
              
              if (mermaidElements.length > 0) {
                // Renderizar cada diagrama individualmente
                mermaidElements.forEach((element, index) => {
                  // Limpar o conteúdo anterior para evitar duplicação
                  const content = element.textContent;
                  element.textContent = '';
                  
                  // Renderizar o diagrama
                  mermaid.render(`mermaid-diagram-${index}`, content)
                    .then(({ svg }) => {
                      element.innerHTML = svg;
                    })
                    .catch(err => {
                      console.error(`Erro ao renderizar diagrama ${index}:`, err);
                      element.innerHTML = `<div class="p-3 text-red-500 border border-red-300 rounded">
                        Erro ao renderizar diagrama: ${err.message}
                      </div>`;
                    });
                });
                console.log('Mermaid inicializado e diagramas renderizados');
              } else {
                console.warn('Nenhum elemento Mermaid encontrado na página');
              }
            } catch (runError) {
              console.error('Erro ao renderizar diagramas Mermaid:', runError);
            }
          }, 1000); // Aumentado para 1000ms para garantir que o DOM esteja pronto
        } catch (error) {
          console.error('Erro ao carregar biblioteca Mermaid:', error);
        }
      };
      
      initMermaid();
    }
  }, [isClient, htmlContent]);

  // Retornar div vazio durante SSR para evitar problemas de hidratação
  if (!isClient) {
    return <div className="markdown-content"></div>;
  }

  return (
    <div className="markdown-content prose prose-slate max-w-none">
      {/* Renderizar o conteúdo HTML com suporte a KaTeX */}
      <KatexSpan dangerouslySetInnerHTML={{ __html: htmlContent }} />
      
      {/* Adicionar estilos para diagramas Mermaid */}
      <style jsx global>{`
        .mermaid {
          margin: 2rem 0;
          overflow-x: auto;
          text-align: center;
          min-height: 200px;
          background-color: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}
