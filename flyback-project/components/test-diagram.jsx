'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const MermaidDiagram = dynamic(() => import('./mermaid-diagram'), {
  ssr: false,
  loading: () => <div className="p-4 bg-gray-100 rounded">Carregando diagrama...</div>
});

export default function TestDiagram() {
  useEffect(() => {
    console.log('TestDiagram montado');
  }, []);

  const diagramDefinition = `flowchart TD
    A["Fonte não liga?"] --> B{"Medir VDD"}
    B -->|"VDD=0"| C["Checar retificador"]
    B -->|"VDD entre 0-8V"| D["Verificar circuito"]
    B -->|"VDD entre 8-14.5V"| E["Testar enrolamento"]
    B -->|"VDD acima 42V"| F["Problema regulador"]
    A --> G["Fonte liga e desliga"]
    G --> H{"Forma de onda"}
    H -->|"Pulsos curtos"| I["Proteção ativa"]
    H -->|"DC contínuo"| J["Falha no CI"]`;

  return (
    <div className="my-8 p-4 border border-gray-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Diagrama de Teste</h2>
      <MermaidDiagram chart={diagramDefinition} />
    </div>
  );
}
