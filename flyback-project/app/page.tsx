import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Cpu, Database, LineChart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section 
        className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/90 to-primary text-primary-foreground"
        style={{ backgroundImage: 'none' }}
      >
        <div className="container px-4 md:px-6 space-y-8 xl:space-y-12 max-w-full">
          <div className="grid max-w-full mx-auto gap-4 px-4 sm:px-6 md:px-6 md:grid-cols-1 lg:grid-cols-2 md:gap-8">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  IA no Controle e Predição de Falhas em Fonte Chaveada Flyback
                </h1>
                <p className="max-w-full text-muted-foreground text-primary-foreground/80 text-sm md:text-base lg:text-lg">
                  Desenvolvimento de um sistema inteligente para monitorar, prever e diagnosticar falhas em fontes
                  chaveadas utilizando Inteligência Artificial.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Link href="/metodologia" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                    Metodologia
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/blog" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full bg-black border-white text-white hover:bg-black/80">
                    Acompanhar Blog
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center mt-6 lg:mt-0">
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] bg-white/10 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4 md:p-6">
                    <div className="flex justify-center mb-4">
                      <Cpu className="h-12 w-12 md:h-16 md:w-16 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Projeto de Iniciação Científica</h3>
                    <p className="mt-2 text-sm md:text-base text-white/80">
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
      <section className="w-full py-8 md:py-16 lg:py-24">
        <div className="container px-4 md:px-6 max-w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Objetivos Principais</h2>
              <p className="max-w-full text-muted-foreground text-sm md:text-base lg:text-lg">
                Nosso projeto visa desenvolver soluções inovadoras para monitoramento e predição de falhas em fontes
                chaveadas.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-8 md:mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 md:p-6 shadow-sm">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10">
                <Cpu className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">Monitoramento</h3>
              <p className="text-center text-sm md:text-base text-muted-foreground">
                Desenvolver um sistema inteligente para monitorar fontes chaveadas Flyback utilizando IA.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 md:p-6 shadow-sm">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10">
                <LineChart className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">Predição</h3>
              <p className="text-center text-sm md:text-base text-muted-foreground">
                Treinar modelos de IA para detecção de padrões anômalos e predição de falhas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 md:p-6 shadow-sm">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">Implementação</h3>
              <p className="text-center text-sm md:text-base text-muted-foreground">
                Implementar os modelos em um microcontrolador STM32 para operação em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section className="w-full py-8 md:py-16 lg:py-24 bg-muted">
        <div className="container px-4 md:px-6 max-w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Metodologia Proposta</h2>
              <p className="max-w-full text-muted-foreground text-sm md:text-base lg:text-lg">
                Nossa abordagem metodológica para alcançar os objetivos do projeto.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-full grid-cols-1 gap-6 lg:grid-cols-2 mt-8 md:mt-12">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold">Bancada de Teste</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
                <li>Fonte Flyback com circuito intergrado (~10W de potência)</li>
                <li>Carga eletrônica ajustável</li>
                <li>Sensores (tensão, corrente, temperatura, harmônicos)</li>
                <li>Microcontroladores STM32 e ESP32</li>
                <li>Instrumentação: Multímetros, ponte LCR, DAC, osciloscópios e computador</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold">Coleta e Análise de Dados</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted-foreground">
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
              <Button className="w-full sm:w-auto">
                Ver metodologia completa
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="w-full py-8 md:py-16 lg:py-24">
        <div className="container px-4 md:px-6 max-w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Últimas Atualizações</h2>
              <p className="max-w-full text-muted-foreground text-sm md:text-base lg:text-lg">
                Acompanhe o progresso do nosso projeto através do blog.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-8 md:mt-12">
            {/* Estes seriam posts dinâmicos do blog, aqui estão exemplos estáticos */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-4 md:p-6 space-y-2">
                <h3 className="text-lg md:text-xl font-bold">Montagem da Bancada de Teste</h3>
                <p className="text-xs md:text-sm text-muted-foreground">12 de Abril, 2023</p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Concluímos a montagem inicial da bancada com CI TNY286 e sensores para coleta de dados.
                </p>
                <Link href="/blog/montagem-bancada" className="text-primary hover:underline inline-flex items-center text-sm md:text-base">
                  Ler mais <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-4 md:p-6 space-y-2">
                <h3 className="text-lg md:text-xl font-bold">Coleta de Dados Inicial</h3>
                <p className="text-xs md:text-sm text-muted-foreground">28 de Maio, 2023</p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Iniciamos a coleta de dados em condições normais de operação da fonte Flyback.
                </p>
                <Link href="/blog/coleta-dados" className="text-primary hover:underline inline-flex items-center text-sm md:text-base">
                  Ler mais <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-4 md:p-6 space-y-2">
                <h3 className="text-lg md:text-xl font-bold">Seleção de Modelos de IA</h3>
                <p className="text-xs md:text-sm text-muted-foreground">15 de Junho, 2023</p>
                <p className="text-sm md:text-base text-muted-foreground">
                  Análise inicial de CNN, RNN, SVM e Random Forest para o projeto de predição.
                </p>
                <Link href="/blog/modelos-ia" className="text-primary hover:underline inline-flex items-center text-sm md:text-base">
                  Ler mais <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/blog">
              <Button className="w-full sm:w-auto">
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
