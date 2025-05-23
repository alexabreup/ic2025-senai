'use client';
import { useEffect, useRef, useState } from 'react';

export default function MermaidDiagram({ chart }) {
  const containerRef = useRef(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Função para renderizar o diagrama Mermaid
    const renderDiagram = async () => {
      if (!containerRef.current || !chart) return;
      
      try {
        // Importar mermaid dinamicamente
        const mermaid = (await import('mermaid')).default;
        
        // Configuração básica do Mermaid
        mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          securityLevel: 'loose',
          fontFamily: 'inherit',
          logLevel: 'warn',
          flowchart: { useMaxWidth: true, htmlLabels: true },
          er: { useMaxWidth: true },
          sequence: { useMaxWidth: true },
          journey: { useMaxWidth: true },
          gantt: { useMaxWidth: true },
          pie: { useMaxWidth: true },
        });
        
        // Limpar o container
        containerRef.current.innerHTML = '';
        
        // Preparar o diagrama
        let diagramDefinition = chart.trim();
        
        // Converter graph TD para flowchart TD se necessário
        if (diagramDefinition.startsWith('graph TD') || diagramDefinition.startsWith('graph LR')) {
          diagramDefinition = diagramDefinition.replace(/^graph\s+(TD|LR|TB|BT|RL)/, 'flowchart $1');
          console.log('Convertido graph para flowchart:', diagramDefinition);
        }
        
        // Criar um ID único para o diagrama
        const id = `mermaid-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
        
        // Renderizar o diagrama
        try {
          console.log(`Renderizando diagrama (${id}):`, diagramDefinition);
          const { svg } = await mermaid.render(id, diagramDefinition);
          containerRef.current.innerHTML = svg;
          setError(null);
          setIsLoaded(true);
        } catch (renderError) {
          console.error('Erro ao renderizar diagrama:', renderError);
          
          // Mostrar o erro no container
          containerRef.current.innerHTML = `
            <div class="p-4 border border-red-500 bg-red-50 text-red-700 rounded">
              <p class="font-bold">Erro ao renderizar diagrama:</p>
              <pre class="mt-2 text-sm overflow-auto">${renderError.message || 'Erro desconhecido'}</pre>
              <div class="mt-4 p-3 bg-gray-100 rounded">
                <code class="text-xs whitespace-pre-wrap">${diagramDefinition.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
              </div>
            </div>
          `;
          setError(renderError);
        }
      } catch (error) {
        console.error('Erro ao carregar biblioteca Mermaid:', error);
        setError(error);
        
        // Mostrar o erro no container
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="p-4 border border-red-500 bg-red-50 text-red-700 rounded">
              <p class="font-bold">Erro ao carregar biblioteca Mermaid:</p>
              <pre class="mt-2 text-sm overflow-auto">${error.message || 'Erro desconhecido'}</pre>
            </div>
          `;
        }
      }
    };
    
    // Renderizar o diagrama após um pequeno atraso para garantir que o DOM está pronto
    const timer = setTimeout(() => {
      renderDiagram();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [chart]);
  
  return (
    <div 
      ref={containerRef} 
      className="mermaid-container my-6 min-h-[200px] w-full overflow-x-auto"
      style={{ 
        display: 'block', 
        visibility: 'visible',
        border: error ? '1px solid #f56565' : 'none',
        padding: '8px',
        borderRadius: '4px',
        backgroundColor: isLoaded ? 'transparent' : '#f9fafb'
      }}
    />
  );
}
