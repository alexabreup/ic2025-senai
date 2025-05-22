---
title: "Seleção de Modelos de IA"
date: "2023-06-15"
excerpt: "Análise inicial de CNN, RNN, SVM e Random Forest para o projeto de predição."
---

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
