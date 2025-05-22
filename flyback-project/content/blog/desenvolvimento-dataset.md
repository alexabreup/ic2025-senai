---
title: "Desenvolvimento de Dataset para Treinamento de Modelos de IA"
date: "2025-05-21"
excerpt: "Metodologia e processo de criação do dataset para treinamento dos modelos de IA utilizados na predição de falhas em fontes chaveadas."
---

# Desenvolvimento de Dataset para Treinamento de Modelos de IA

## Introdução

Um dos maiores desafios no desenvolvimento de sistemas de predição de falhas baseados em IA é a obtenção de um dataset representativo e balanceado. Neste artigo, detalhamos o processo de criação do nosso dataset, desde a coleta de dados em diferentes condições operacionais até a indução controlada de falhas para enriquecer o conjunto de treinamento.

---

## Estratégia de Coleta de Dados

### Condições Operacionais Normais
Para estabelecer uma linha de base confiável, coletamos dados durante operação normal sob diferentes condições:

- **Variação de Carga**: De 10% a 100% da capacidade nominal.
- **Variação de Temperatura Ambiente**: De 15°C a 40°C.
- **Variação de Tensão de Entrada**: De 85V a 265V AC.
- **Ciclos de Liga/Desliga**: Para capturar transientes de inicialização e desligamento.

### Indução Controlada de Falhas
Para treinar o modelo na detecção de falhas, induzimos de forma controlada várias condições anômalas:

1. **Falhas de Componentes**:
   - Capacitores com ESR elevado
   - Diodos com queda de tensão anormal
   - Transformador com indutância reduzida
   - MOSFET com RDS(on) elevado

2. **Falhas Operacionais**:
   - Sobrecarga (110% a 150% da capacidade nominal)
   - Curto-circuito momentâneo na saída
   - Sobreaquecimento induzido
   - Tensão de entrada fora da especificação

3. **Falhas Graduais**:
   - Degradação progressiva de capacitores
   - Aumento gradual da temperatura do transformador
   - Redução gradual da eficiência

---

## Estrutura do Dataset

### Parâmetros Monitorados
Para cada amostra coletada, registramos os seguintes parâmetros:

| Categoria | Parâmetros |
|-----------|------------|
| Tensões | Entrada AC, Barramento DC, Saídas (5V, 12V) |
| Correntes | Entrada AC, Primário, Secundários |
| Temperaturas | Ambiente, MOSFET, Diodo, Transformador |
| Formas de Onda | Tensão Drain-Source, Corrente Primário, Tensão Gate |
| Frequências | Comutação, Ripple, Ressonâncias |
| Eficiência | Potência entrada/saída, Perdas |

### Organização Temporal
Os dados foram organizados em séries temporais com diferentes granularidades:

- **Alta Frequência**: Amostragem a 1MSPS para captura de transientes (armazenados por evento).
- **Média Frequência**: Amostragem a 1kSPS para monitoramento contínuo (janela de 10 segundos).
- **Baixa Frequência**: Amostragem a 1SPS para tendências de longo prazo (armazenados continuamente).

---

## Pré-processamento dos Dados

### Limpeza
- **Remoção de Outliers**: Utilizando métodos estatísticos (Z-score, IQR).
- **Filtragem de Ruído**: Aplicação de filtros digitais para melhorar a relação sinal-ruído.
- **Preenchimento de Lacunas**: Interpolação para dados faltantes (menos de 0.1% do total).

### Normalização
- **Escalonamento Min-Max**: Para parâmetros com faixas conhecidas.
- **Padronização Z-score**: Para parâmetros com distribuição aproximadamente normal.
- **Transformação Logarítmica**: Para parâmetros com distribuição assimétrica.

### Extração de Características
- **Domínio do Tempo**: Estatísticas (média, desvio padrão, curtose, assimetria).
- **Domínio da Frequência**: FFT, espectrograma, densidade espectral de potência.
- **Características Derivadas**: Taxas de variação, correlações entre parâmetros.

---

## Balanceamento e Aumento de Dados

### Balanceamento de Classes
Como as falhas são eventos raros, enfrentamos o desafio do desbalanceamento de classes:

- **Técnicas de Subamostragem**: Redução controlada dos dados de operação normal.
- **Técnicas de Sobreamostragem**: SMOTE (Synthetic Minority Over-sampling Technique) para gerar exemplos sintéticos de falhas.
- **Ponderação de Classes**: Ajuste dos pesos durante o treinamento.

### Aumento de Dados
Para melhorar a robustez dos modelos, aplicamos técnicas de aumento de dados:

- **Adição de Ruído Gaussiano**: Para simular variações naturais nos sensores.
- **Deslocamento Temporal**: Para capturar variações na temporalidade dos eventos.
- **Mistura de Condições**: Combinação de diferentes cenários operacionais.

---

## Validação do Dataset

### Validação Cruzada
- **K-Fold Estratificado**: Para garantir representatividade de todas as classes em cada fold.
- **Leave-One-Out**: Para cenários específicos de falha com poucos exemplos.

### Análise de Representatividade
- **Cobertura de Cenários**: Verificação da abrangência de condições operacionais.
- **Distribuição Estatística**: Análise da distribuição dos parâmetros chave.
- **Validação por Especialistas**: Revisão dos dados por engenheiros experientes em fontes chaveadas.

---

## Resultados e Métricas

O dataset final contém:

- **Total de Amostras**: 1.2 milhões de pontos de dados
- **Classes de Falhas**: 15 tipos diferentes
- **Proporção Normal/Falha**: 80/20 após balanceamento
- **Tamanho Total**: 8GB de dados brutos, 2GB após pré-processamento

---

## Conclusão

O desenvolvimento de um dataset abrangente e bem estruturado foi um passo fundamental para o sucesso do nosso projeto de predição de falhas. A combinação de dados reais de operação com falhas induzidas de forma controlada permitiu criar um conjunto de treinamento robusto, capaz de capacitar nossos modelos de IA a detectar padrões sutis que precedem falhas em fontes chaveadas Flyback.

Este dataset continuará sendo enriquecido à medida que coletamos mais dados operacionais e exploramos novos cenários de falha, garantindo a evolução contínua da capacidade preditiva do sistema.

---
