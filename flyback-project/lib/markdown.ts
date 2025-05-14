import path from "path"

const contentDirectory = path.join(process.cwd(), "content")

export type PostMetadata = {
  title: string
  date: string
  excerpt: string
  slug: string
  content?: string
}

export async function getPostBySlug(slug: string): Promise<PostMetadata> {
  // Em um ambiente real, você leria do sistema de arquivos
  // Aqui estamos simulando para o ambiente Next.js
  const posts = getAllPosts()
  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    throw new Error(`Post with slug ${slug} not found`)
  }

  // Simular o conteúdo do post
  const content = await getPostContent(slug)
  return { ...post, content }
}

export function getAllPosts(): PostMetadata[] {
  // Em um ambiente real, você leria do sistema de arquivos
  // Aqui estamos simulando para o ambiente Next.js
  return [
    {
      title: "Montagem da Bancada de Teste",
      date: "2023-04-12",
      excerpt: "Concluímos a montagem inicial da bancada com CI TNY286 e sensores para coleta de dados.",
      slug: "montagem-bancada",
    },
    {
      title: "Coleta de Dados Inicial",
      date: "2023-05-28",
      excerpt: "Iniciamos a coleta de dados em condições normais de operação da fonte Flyback.",
      slug: "coleta-dados",
    },
    {
      title: "Seleção de Modelos de IA",
      date: "2023-06-15",
      excerpt: "Análise inicial de CNN, RNN, SVM e Random Forest para o projeto de predição.",
      slug: "modelos-ia",
    },
  ]
}

async function getPostContent(slug: string): Promise<string> {
  // Em um ambiente real, você leria do sistema de arquivos
  // Aqui estamos simulando para o ambiente Next.js

  const contentMap: Record<string, string> = {
    "montagem-bancada": `
# Montagem da Bancada de Teste

## Componentes Utilizados

- Fonte Flyback com circuito intergrado (~10W de potência)
- Carga eletrônica ajustável
- Sensores de tensão e corrente
- Microcontrolador STM32
- ESP32 para comunicação

## Desafios Encontrados

1. **Alimentação dos Sensores**: Tivemos que projetar um circuito regulador para garantir alimentação estável aos sensores.

2. **Isolação Galvânica**: Implementamos optoacopladores para isolar os sinais de controle.

3. **Ruído Eletromagnético**: A proximidade dos componentes gerava interferência, resolvida com um layout mais cuidadoso.

## Próximos Passos

- Calibração dos sensores
- Desenvolvimento do firmware para coleta de dados
- Criação do protocolo de comunicação entre STM32 e computador
    `,
    "coleta-dados": `
# Coleta de Dados Inicial

## Metodologia

Iniciamos a coleta de dados em condições normais de operação da fonte Flyback. O processo envolveu:

1. **Configuração dos Sensores**: Calibração precisa para garantir medições confiáveis.
2. **Definição de Parâmetros**: Estabelecimento dos parâmetros a serem monitorados.
3. **Protocolo de Amostragem**: Definição da frequência e duração das coletas.

## Resultados Preliminares

Os dados iniciais mostram padrões interessantes nas formas de onda da tensão e corrente durante a operação normal. Identificamos características que podem ser úteis para o treinamento dos modelos de IA.

## Próximas Etapas

- Simulação de falhas controladas
- Expansão do conjunto de dados
- Pré-processamento para remoção de ruídos
    `,
    "modelos-ia": `
# Seleção de Modelos de IA

## Modelos Analisados

Realizamos uma análise comparativa de diferentes algoritmos de machine learning para determinar qual seria mais adequado para nosso caso de uso:

1. **Redes Neurais Convolucionais (CNN)**: Excelentes para reconhecimento de padrões em dados sequenciais.
2. **Redes Neurais Recorrentes (RNN)**: Ideais para séries temporais e previsão.
3. **Support Vector Machines (SVM)**: Bom desempenho com conjuntos de dados menores.
4. **Random Forest**: Robusto contra overfitting e capaz de lidar com dados ruidosos.

## Critérios de Avaliação

- Precisão na detecção de anomalias
- Tempo de inferência (crucial para implementação em microcontrolador)
- Requisitos de memória e processamento
- Facilidade de conversão para TensorFlow Lite

## Próximos Passos

- Implementação dos modelos selecionados
- Treinamento com o conjunto de dados coletado
- Validação cruzada para avaliar desempenho
    `,
  }

  return contentMap[slug] || "Conteúdo não encontrado"
 }
