export default function MetodologiaPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Metodologia</h1>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Metodologia Proposta</h2>

          <h3>Bancada de Teste</h3>
          <p>
            A bancada de teste é fundamental para a coleta de dados em condições controladas. Ela será composta pelos
            seguintes componentes:
          </p>
          <ul>
            <li>
              <strong>Componentes:</strong> Fonte Flyback com CI TNY286, carga eletrônica ajustável, sensores (tensão,
              corrente, temperatura, harmônicos), microcontroladores STM32 e ESP32.
            </li>
            <li>
              <strong>Instrumentação:</strong> Multímetros, osciloscópios e computador para coleta de dados.
            </li>
          </ul>

          <h3>Coleta de Dados</h3>
          <p>
            A coleta de dados será realizada de forma sistemática para garantir a qualidade e representatividade dos
            dados:
          </p>
          <ul>
            <li>
              Monitoramento contínuo de tensão, corrente, temperatura e harmônicos durante operação normal e sob falhas
              simuladas.
            </li>
            <li>Salvamento dos dados em formato CSV para análise posterior.</li>
            <li>Documentação detalhada das condições de teste e parâmetros monitorados.</li>
          </ul>

          <h3>Tratamento e Análise de Dados</h3>
          <p>
            Os dados coletados passarão por um processo de tratamento e análise para prepará-los para o treinamento dos
            modelos de IA:
          </p>
          <ul>
            <li>Filtragem de ruído e normalização dos dados.</li>
            <li>Análise exploratória para identificação de padrões e correlações.</li>
            <li>Seleção de características relevantes para o treinamento dos modelos.</li>
            <li>
              Uso de algoritmos de machine learning, como Redes Neurais Convolucionais (CNN) e Recorrentes (RNN), além
              de SVM e Random Forest.
            </li>
          </ul>

          <h3>Implementação no STM32</h3>
          <p>A implementação dos modelos treinados no microcontrolador STM32 envolverá:</p>
          <ul>
            <li>Conversão do modelo treinado para TensorFlow Lite e embarque no microcontrolador STM32.</li>
            <li>Otimização do modelo para execução eficiente em hardware com recursos limitados.</li>
            <li>Desenvolvimento de firmware para aquisição de dados e execução do modelo em tempo real.</li>
            <li>Avaliação da precisão, tempo de inferência e consumo de recursos.</li>
          </ul>

          <h3>Validação e Testes</h3>
          <p>A validação do sistema será realizada através de:</p>
          <ul>
            <li>Testes com diferentes cenários de falha.</li>
            <li>Comparação dos resultados com métodos tradicionais de detecção de falhas.</li>
            <li>Avaliação da robustez do sistema em condições variadas de operação.</li>
            <li>Documentação detalhada dos resultados e limitações do sistema.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
