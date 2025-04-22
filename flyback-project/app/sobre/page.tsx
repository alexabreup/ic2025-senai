export default function SobrePage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Sobre o Projeto</h1>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Projeto de Iniciação Científica: IA no Controle e Predição de Falhas em Fonte Chaveada Flyback</h2>

          <h3>Equipe</h3>
          <ul>
            <li>
              <strong>Discente:</strong> Alexandre de Abreu Pereira
            </li>
            <li>
              <strong>Docente:</strong> Luís Carlos Canno
            </li>
            <li>
              <strong>Instituição:</strong> Faculdade de Tecnologia em Eletrônica Industrial do Senai Anchieta, Vila
              Mariana, São Paulo, SP Brasil
            </li>
          </ul>

          <h3>Objetivos Principais</h3>
          <ul>
            <li>
              Desenvolver um sistema inteligente para monitorar, prever e diagnosticar falhas em fontes chaveadas
              Flyback utilizando Inteligência Artificial (IA).
            </li>
            <li>Criar uma bancada de teste controlada para simular condições normais e de falhas.</li>
            <li>
              Treinar modelos de IA para detecção de padrões anômalos e implementá-los em um microcontrolador STM32.
            </li>
          </ul>

          <h3>Resultados Esperados</h3>
          <ul>
            <li>Base de dados abrangente para operação normal e falhas simuladas.</li>
            <li>Modelo de IA com alta acurácia na predição de falhas.</li>
            <li>Sistema funcional capaz de operar em tempo real no STM32.</li>
          </ul>

          <h3>Cronograma</h3>
          <ul>
            <li>Montagem da bancada de teste: 1 mês.</li>
            <li>Coleta de dados: 2 meses.</li>
            <li>Tratamento e análise de dados: 1 mês.</li>
            <li>Treinamento de modelos de IA: 2 meses.</li>
            <li>Implementação no STM32: 1 mês.</li>
            <li>Testes finais e validação: 1 mês.</li>
          </ul>

          <h3>Conclusão Esperada</h3>
          <p>
            O projeto fornecerá um sistema eficiente e confiável para monitoramento e predição de falhas em fontes
            Flyback, alinhado às demandas da Indústria 4.0, com potencial aplicação em cenários industriais para
            aumentar a confiabilidade e reduzir custos associados a falhas.
          </p>

          <h3>Palavras-chave</h3>
          <p>
            Fonte chaveada Flyback, Inteligência Artificial, Monitoramento, Predição de Falhas, STM32, TensorFlow Lite.
          </p>
        </div>
      </div>
    </div>
  )
}
