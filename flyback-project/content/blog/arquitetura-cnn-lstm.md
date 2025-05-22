---
title: "Arquitetura de Modelo CNN-LSTM para Predição de Falhas"
date: "2025-05-21"
excerpt: "Detalhamento da arquitetura híbrida CNN-LSTM desenvolvida para predição de falhas em fontes chaveadas Flyback."
---

# Arquitetura de Modelo CNN-LSTM para Predição de Falhas

## Introdução

A predição eficaz de falhas em fontes chaveadas Flyback requer modelos capazes de capturar tanto características espaciais (padrões nas formas de onda) quanto temporais (evolução dos parâmetros ao longo do tempo). Neste artigo, apresentamos a arquitetura híbrida CNN-LSTM que desenvolvemos especificamente para esta aplicação, detalhando sua estrutura, processo de treinamento e resultados preliminares.

---

## Requisitos do Modelo

Nossa análise inicial identificou requisitos específicos para o modelo de predição:

1. **Capacidade de Extração de Características**: Identificar padrões sutis em formas de onda e sinais de alta dimensionalidade.
2. **Sensibilidade Temporal**: Detectar tendências e padrões que se desenvolvem ao longo do tempo.
3. **Robustez a Ruído**: Operar eficientemente mesmo com dados ruidosos típicos de ambientes industriais.
4. **Eficiência Computacional**: Possibilidade de implementação em hardware embarcado com recursos limitados.
5. **Interpretabilidade**: Capacidade de fornecer insights sobre os fatores que levaram à predição.

---

## Arquitetura Proposta

### Visão Geral
Nossa arquitetura híbrida combina Redes Neurais Convolucionais (CNN) para extração de características espaciais com Redes de Memória de Longo Prazo (LSTM) para modelagem de dependências temporais:

```
Input → CNN Blocks → Feature Fusion → LSTM Blocks → Attention → Dense Layers → Output
```

### Camadas CNN
Responsáveis pela extração de características das formas de onda e sinais:

- **Entrada**: Tensores 2D representando janelas de tempo de múltiplos sensores (128x12)
- **Bloco CNN 1**: 
  - Conv1D (32 filtros, kernel 3, stride 1, padding 'same')
  - BatchNormalization
  - ReLU
  - MaxPooling1D (pool size 2)
  - Dropout (0.2)
- **Bloco CNN 2**: 
  - Conv1D (64 filtros, kernel 3, stride 1, padding 'same')
  - BatchNormalization
  - ReLU
  - MaxPooling1D (pool size 2)
  - Dropout (0.2)
- **Bloco CNN 3**: 
  - Conv1D (128 filtros, kernel 3, stride 1, padding 'same')
  - BatchNormalization
  - ReLU
  - GlobalAveragePooling1D
  - Dropout (0.3)

### Fusão de Características
Para combinar características extraídas de diferentes sensores:

- **Concatenação**: União das características extraídas das CNNs
- **Camada de Atenção**: Pesos adaptativos para diferentes características
- **Dense Layer**: 256 neurônios com ativação ReLU
- **Reshape**: Reorganização para entrada na LSTM (sequência temporal)

### Camadas LSTM
Para modelagem das dependências temporais:

- **Bloco LSTM 1**:
  - LSTM (128 unidades, return sequences=True)
  - BatchNormalization
  - Dropout (0.3)
- **Bloco LSTM 2**:
  - LSTM (64 unidades, return sequences=False)
  - BatchNormalization
  - Dropout (0.3)

### Camadas de Saída
Para classificação e regressão:

- **Dense Layer 1**: 64 neurônios com ativação ReLU
- **Dropout**: 0.3
- **Dense Layer 2**: 32 neurônios com ativação ReLU
- **Saídas**:
  - Classificação: Dense (5 unidades, softmax) para tipo de falha
  - Regressão: Dense (1 unidade, sigmoid) para tempo até a falha

---

## Estratégia de Treinamento

### Preparação dos Dados
- **Janelas Deslizantes**: Sequências de 128 amostras com sobreposição de 50%
- **Normalização**: Z-score por sensor, calculado no conjunto de treinamento
- **Divisão dos Dados**: 70% treinamento, 15% validação, 15% teste

### Hiperparâmetros
- **Otimizador**: Adam (learning rate=0.001, beta1=0.9, beta2=0.999)
- **Função de Perda**: 
  - Classificação: Categorical Cross-Entropy
  - Regressão: Mean Squared Error
- **Batch Size**: 64
- **Épocas**: 100 com Early Stopping (paciência=10)
- **Redução de Learning Rate**: ReduceLROnPlateau (fator=0.5, paciência=5)

### Regularização
- **Dropout**: Variando de 0.2 a 0.3 em diferentes camadas
- **L2 Regularization**: 1e-4 nas camadas densas
- **Data Augmentation**: Adição de ruído gaussiano (σ=0.01)

---

## Otimização para Dispositivos Embarcados

Para viabilizar a implementação em hardware com recursos limitados:

### Quantização
- **Pós-treinamento**: Conversão para INT8 com calibração usando dados de validação
- **Redução de Precisão**: De FP32 para FP16 nas operações internas

### Pruning
- **Magnitude-based Pruning**: Remoção de 30% dos pesos menos significativos
- **Retraining**: Fine-tuning após pruning para recuperar acurácia

### Conversão para TensorFlow Lite
- **Otimizações**: Habilitadas para máximo desempenho
- **Delegados**: Configurados para utilizar aceleradores de hardware quando disponíveis

---

## Resultados Preliminares

### Métricas de Desempenho
Avaliação no conjunto de teste:

| Métrica | Valor |
|---------|-------|
| Acurácia (Classificação) | 94.3% |
| Precisão (Média) | 92.8% |
| Recall (Média) | 91.5% |
| F1-Score (Média) | 92.1% |
| MAE (Tempo até Falha) | 4.2 horas |
| RMSE (Tempo até Falha) | 6.8 horas |

### Matriz de Confusão (Principais Classes)

| Classe | Normal | Capacitor | MOSFET | Diodo | Transformador |
|--------|--------|-----------|--------|-------|--------------|
| Normal | 98.2%  | 0.5%      | 0.8%   | 0.3%  | 0.2%         |
| Capacitor | 1.2% | 95.3%    | 1.5%   | 1.8%  | 0.2%         |
| MOSFET | 2.1%   | 1.3%      | 93.5%  | 2.7%  | 0.4%         |
| Diodo | 1.5%    | 2.2%      | 3.1%   | 92.8% | 0.4%         |
| Transformador | 0.9% | 0.4% | 0.7%   | 0.8%  | 97.2%        |

### Desempenho em Hardware Embarcado

| Plataforma | Latência | Consumo de Memória | Precisão |
|------------|----------|-------------------|----------|
| STM32F746 (MCU) | 230ms | 420KB | 91.2% |
| ESP32-S3 (SoC) | 180ms | 380KB | 92.5% |
| Raspberry Pi 4 | 45ms | 1.2MB | 94.3% |

---

## Análise de Interpretabilidade

Para entender quais características o modelo utiliza para fazer predições:

### Mapas de Ativação
Visualização das regiões de maior ativação nas camadas convolucionais:
- Formas de onda de tensão: Foco em oscilações de alta frequência
- Corrente do primário: Atenção aos picos de comutação
- Temperatura: Padrões de aquecimento gradual

### SHAP Values
Análise da contribuição de cada característica para a predição:
- Ripple de tensão: Alto impacto na detecção de falhas de capacitores
- Tempo de comutação: Crítico para falhas de MOSFET
- Harmônicos de corrente: Importantes para falhas de diodo

---

## Conclusão e Próximos Passos

A arquitetura híbrida CNN-LSTM demonstrou excelente desempenho na predição de falhas em fontes chaveadas Flyback, alcançando alta precisão tanto na classificação do tipo de falha quanto na estimativa do tempo até a falha. A otimização bem-sucedida para hardware embarcado abre caminho para implementação em sistemas de monitoramento em tempo real.

### Próximos Passos:
1. **Expansão do Dataset**: Incluir mais variantes de falhas e condições operacionais
2. **Refinamento da Arquitetura**: Experimentar com variantes de atenção e redes residuais
3. **Implementação em Campo**: Testes em ambiente industrial real
4. **Feedback Contínuo**: Sistema de aprendizado online para adaptação a novos padrões

---
