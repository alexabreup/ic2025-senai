import TestDiagram from '@/components/test-diagram';

export const metadata = {
  title: 'Teste de Diagrama Mermaid',
  description: 'Página para testar a renderização de diagramas Mermaid',
};

export default function TestDiagramPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Teste de Diagrama Mermaid</h1>
      <p className="mb-6">Esta página testa a renderização direta de um diagrama Mermaid específico.</p>
      
      <TestDiagram />
    </div>
  );
}
