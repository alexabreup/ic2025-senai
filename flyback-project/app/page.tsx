import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Cpu, Database, LineChart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/90 to-primary text-primary-foreground">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  IA no Controle e Predição de Falhas em Fonte Chaveada Flyback
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-primary-foreground/80 md:text-xl">
                  Desenvolvimento de um sistema inteligente para monitorar, prever e diagnosticar falhas em fontes
                  chaveadas utilizando Inteligência Artificial.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/metodologia">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Metodologia
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button size="lg" variant="outline" className="bg-black border-white text-white hover:bg-black/80">
                    Acompanhar Blog
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-white/10 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="flex justify-center mb-4">
                      <Cpu className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Projeto de Iniciação Científica</h3>
                    <p className="mt-2 text-white/80">
                      Faculdade de Tecnologia em Eletrônica Industrial do Senai Anchieta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Objetivos Principais</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nosso projeto visa desenvolver soluções inovadoras para monitoramento e predição de falhas em fontes
                chaveadas.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Monitoramento</h3>
              <p className="text-center text-muted-foreground">
                Desenvolver um sistema inteligente para monitorar fontes chaveadas Flyback utilizando IA.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Predição</h3>
              <p className="text-center text-muted-foreground">
                Treinar modelos de IA para detecção de padrões anômalos e predição de falhas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Implementação</h3>
              <p className="text-center text-muted-foreground">
                Implementar os modelos em um microcontrolador STM32 para operação em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Metodologia Proposta</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nossa abordagem metodológica para alcançar os objetivos do projeto.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Bancada de Teste</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Fonte Flyback com CI TNY286</li>
                <li>Carga eletrônica ajustável</li>
                <li>Sensores (tensão, corrente, temperatura, harmônicos)</li>
                <li>Microcontroladores STM32 e ESP32</li>
                <li>Instrumentação: Multímetros, osciloscópios e computador</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Coleta e Análise de Dados</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Monitoramento contínuo durante operação normal e sob falhas simuladas</li>
                <li>Filtragem de ruído e normalização dos dados</li>
                <li>Uso de algoritmos de machine learning (CNN, RNN, SVM, Random Forest)</li>
                <li>Conversão do modelo para TensorFlow Lite</li>
                <li>Implementação no microcontrolador STM32</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/metodologia">
              <Button>
                Ver metodologia completa
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Últimas Atualizações</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Acompanhe o progresso do nosso projeto através do blog.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            {/* Estes seriam posts dinâmicos do blog, aqui estão exemplos estáticos */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold">Montagem da Bancada de Teste</h3>
                <p className="text-sm text-muted-foreground">12 de Abril, 2023</p>
                <p className="text-muted-foreground">
                  Concluímos a montagem inicial da bancada com CI TNY286 e sensores para coleta de dados.
                </p>
                <Link href="/blog/montagem-bancada" className="text-primary hover:underline inline-flex items-center">
                  Ler mais <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold">Coleta de Dados Inicial</h3>
                <p className="text-sm text-muted-foreground">28 de Maio, 2023</p>
                <p className="text-muted-foreground">
                  Iniciamos a coleta de dados em condições normais de operação da fonte Flyback.
                </p>
                <Link href="/blog/coleta-dados" className="text-primary hover:underline inline-flex items-center">
                  Ler mais <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold">Seleção de Modelos de IA</h3>
                <p className="text-sm text-muted-foreground">15 de Junho, 2023</p>
                <p className="text-muted-foreground">
                  Análise inicial de CNN, RNN, SVM e Random Forest para o projeto de predição.
                </p>
                <Link href="/blog/modelos-ia" className="text-primary hover:underline inline-flex items-center">
                  Ler mais <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/blog">
              <Button>
                Ver todas as atualizações
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
