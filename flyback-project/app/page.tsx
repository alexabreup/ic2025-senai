import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              IA no Controle e Predição de Falhas em Fonte Chaveada Flyback
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Desenvolvimento de um sistema inteligente para monitorar, prever e diagnosticar falhas em fontes
              chaveadas utilizando Inteligência Artificial.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="/metodologia" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Metodologia
              </Link>
              <Link href="/blog" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Acompanhar Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="w-full py-6 md:py-8 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold">Projeto de Iniciação Científica</h3>
            <p className="mt-2 text-muted-foreground">
              Faculdade de Tecnologia em Eletrônica Industrial do Senai Anchieta
            </p>
          </div>
        </div>
      </section>

      {/* Objetivos Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center">Objetivos Principais</h2>
            <p className="mt-2 text-center text-muted-foreground">
              Nosso projeto visa desenvolver soluções inovadoras para monitoramento e predição de falhas em fontes
              chaveadas.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Monitoramento</h3>
                <p className="text-muted-foreground">
                  Desenvolver um sistema inteligente para monitorar fontes chaveadas Flyback utilizando IA.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Predição</h3>
                <p className="text-muted-foreground">
                  Treinar modelos de IA para detecção de padrões anômalos e predição de falhas.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Implementação</h3>
                <p className="text-muted-foreground">
                  Implementar os modelos em um microcontrolador STM32 para operação em tempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section className="w-full py-8 md:py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center">Metodologia Proposta</h2>
            <p className="mt-2 text-center text-muted-foreground">
              Nossa abordagem metodológica para alcançar os objetivos do projeto.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Bancada de Teste</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Fonte Flyback com circuito intergrado (~10W de potência)</li>
                  <li>Carga eletrônica ajustável</li>
                  <li>Sensores (tensão, corrente, temperatura, harmônicos)</li>
                  <li>Microcontroladores STM32 e ESP32</li>
                  <li>Instrumentação: Multímetros, ponte LCR, DAC, osciloscópios e computador</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Coleta e Análise de Dados</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Monitoramento contínuo durante operação normal e sob falhas simuladas</li>
                  <li>Filtragem de ruído e normalização dos dados</li>
                  <li>Uso de algoritmos de machine learning (CNN, RNN, SVM, Random Forest)</li>
                  <li>Conversão do modelo para TensorFlow Lite</li>
                  <li>Implementação no microcontrolador STM32</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/metodologia" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Ver metodologia completa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center">Últimas Atualizações</h2>
            <p className="mt-2 text-center text-muted-foreground">
              Acompanhe o progresso do nosso projeto através do blog.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="border rounded-md p-4">
                <h3 className="text-xl font-semibold">Montagem da Bancada de Teste</h3>
                <p className="text-sm text-muted-foreground">12 de Abril, 2023</p>
                <p className="mt-2 text-muted-foreground">
                  Concluímos a montagem inicial da bancada com CI TNY286 e sensores para coleta de dados.
                </p>
                <Link href="/blog/montagem-bancada" className="mt-2 inline-flex items-center text-primary hover:underline">
                  Ler mais
                </Link>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="text-xl font-semibold">Coleta de Dados Inicial</h3>
                <p className="text-sm text-muted-foreground">28 de Maio, 2023</p>
                <p className="mt-2 text-muted-foreground">
                  Iniciamos a coleta de dados em condições normais de operação da fonte Flyback.
                </p>
                <Link href="/blog/coleta-dados" className="mt-2 inline-flex items-center text-primary hover:underline">
                  Ler mais
                </Link>
              </div>
              
              <div className="border rounded-md p-4">
                <h3 className="text-xl font-semibold">Seleção de Modelos de IA</h3>
                <p className="text-sm text-muted-foreground">15 de Junho, 2023</p>
                <p className="mt-2 text-muted-foreground">
                  Análise inicial de CNN, RNN, SVM e Random Forest para o projeto de predição.
                </p>
                <Link href="/blog/modelos-ia" className="mt-2 inline-flex items-center text-primary hover:underline">
                  Ler mais
                </Link>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/blog" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Ver todas as atualizações
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
