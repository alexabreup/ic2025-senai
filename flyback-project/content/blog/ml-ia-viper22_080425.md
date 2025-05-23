---
title: "Sistema Inteligente para Análise de Fontes Chaveadas Flyback com VIPer22A usando TensorFlow e TensorFlow Lite"
date: "2025-04-08"
excerpt: "Teste de IA para predição de falhas em fontes chaveadas Flyback com VIPer22A"
---


## 1. Introdução

Este documento descreve uma arquitetura de Aprendizado de Máquina (ML) aplicada à análise de fontes chaveadas Flyback baseadas no VIPer22A, utilizando **TensorFlow** (para treinamento) e **TensorFlow Lite** (para inferência em dispositivos embarcados). O sistema integra-se a um **dashboard de gerenciamento industrial** que monitora custos, desempenho e falhas em tempo real.

---

## 2. Arquitetura do Sistema

### 2.1 Visão Geral

O sistema combina:

- ✅ **TensorFlow** (modelagem e treinamento)
- ✅ **TensorFlow Lite** (inferência em microcontroladores)
- ✅ **Dashboard Next.js + Express.js** (monitoramento)
- ✅ **Sensores industriais**: ZMPT101B, INA219, SCT-013-020

### 2.2 Fluxo de Dados

#### Aquisição de Dados

Sensores medem:

- Tensão de saída (`ZMPT101B`)
- Corrente (`INA219`, `SCT-013-020`)
- Temperatura (sensor integrado)

Dados são pré-processados e armazenados em **SQLite**.

#### Treinamento do Modelo (TensorFlow)

**Dataset:**

- Dados históricos de fontes Flyback com VIPer22A
- Anomalias registradas (sobretensão, sobrecorrente, falhas térmicas)

**Modelo:**

- Rede Neural LSTM (para séries temporais)
- Random Forest (para classificação de falhas)

#### Inferência em Tempo Real (TensorFlow Lite)

Modelo otimizado roda em **STM32F103C8T6** (placa industrial). Detecta:

- Eficiência energética
- Falhas iminentes (ex.: MOSFET superaquecendo)
- Oscilações anormais

#### Dashboard de Monitoramento (Next.js + Looker Studio)

Exibe:

- Status da fonte chaveada
- Histórico de falhas
- Custos de manutenção (integrado ao relatório de compras)

---

## 3. Implementação do Modelo de ML

### 3.1 Dataset e Pré-processamento

**Variáveis de Entrada:**

| Variável | Descrição |
|---------|-----------|
| Vin     | Tensão de entrada |
| Vout    | Tensão de saída |
| I_MOSFET| Corrente no MOSFET |
| Temp    | Temperatura do VIPer22A |
| Freq    | Frequência de chaveamento |

**Rótulos (Saída do Modelo):**

```text
0 → Operação normal  
1 → Sobretensão  
2 → Sobrecorrente  
3 → Falha térmica
```

### 3.2 Modelo TensorFlow (Treinamento)

```python
import tensorflow as tf
from tensorflow.keras.layers import LSTM, Dense

model = tf.keras.Sequential([
    LSTM(64, input_shape=(60, 4)),  # 60 timesteps, 4 features
    Dense(32, activation='relu'),
    Dense(4, activation='softmax')  # 4 classes de falha
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=50, validation_data=(X_val, y_val))
```

### 3.3 Conversão para TensorFlow Lite

```python
converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

with open('viper22_flyback_model.tflite', 'wb') as f:
    f.write(tflite_model)
```

### 3.4 Inferência no Microcontrolador (STM32F103C8T6)

- Usa **TensorFlow Lite for Microcontrollers**
- Processa dados dos sensores em tempo real
- Envia alertas via **MQTT** para o dashboard

---

## 4. Integração com o Dashboard Industrial

### 4.1 Funcionalidades

- 📊 Relatório de Gastos
- 🔍 Análise de Desempenho (gráficos de eficiência)
- ⚠️ Alertas de Falhas (notificações em tempo real)

### 4.2 Tecnologias Utilizadas

| Componente         | Tecnologia                              |
|--------------------|------------------------------------------|
| Frontend           | Next.js (deploy GitHub Pages)            |
| Backend            | Express.js + SQLite (VPS Hostinger)      |
| Visualização       | Looker Studio (embeds)                   |
| IoT/Microcontrolador | STM32F103C8T6 + TensorFlow Lite         |

---

## 5. Gestão do Projeto (Métodos Aplicados)

### 5.1 Controle de Tempo

- Diagrama de Gantt (GitHub Projects) para acompanhamento
- Metodologia Ágil (sprints quinzenais)

### 5.2 Gestão de Riscos

- **FMEA** para antecipar falhas:

> Exemplo: "Modelo TensorFlow Lite não cabe na memória do STM32" → Otimizar quantização.

### 5.3 Monitoramento Contínuo

- Uptime Robot para verificar disponibilidade
- EVM para controle de custos vs. progresso

---

## 6. Conclusão

Este sistema combina **IA embarcada** (TensorFlow Lite) com gestão industrial para:

- ✔ Prever falhas em fontes Flyback com VIPer22A
- ✔ Reduzir custos com manutenção preventiva
- ✔ Automatizar relatórios de desempenho e gastos

### Próximos passos:

- Testar modelo em protótipos reais
- Integrar ao sistema de compras (ex.: alertas para reposição de componentes)

 