---
title: "Bancada de Testes para Fonte Chaveada Flyback com VIPer22"
date: "2025/04/20"
excerpt: ""
---

 

# Bancada de Testes para Fonte Chaveada Flyback com VIPer22: Disposição dos Dispositivos de Medição

## 1. Introdução

A bancada de testes para a fonte chaveada Flyback utilizando o CI **VIPer22** foi projetada para permitir a aquisição de dados de tensão, corrente, temperatura e harmônicos, visando o treinamento de modelos de IA para detecção e predição de falhas.

Este documento descreve a configuração dos dispositivos de medição e sua integração com microcontroladores (**STM32/ESP32**) para coleta e processamento de dados em tempo real.

---

## 2. Configuração da Bancada de Testes

A bancada consiste em uma fonte Flyback de **20W** controlada pelo **VIPer22**, uma carga eletrônica ajustável e sensores para monitoramento em tempo real.

### Tabela 1: Dispositivos de Medição e Suas Funções

| Dispositivo      | Função                                     | Localização no Circuito            | Interface com MCU     |
|------------------|--------------------------------------------|-------------------------------------|------------------------|
| INA219           | Medição de corrente e tensão DC na saída    | Saída do secundário (carga)        | I²C (STM32)            |
| ZMPT101B         | Medição de tensão AC na entrada (rede)      | Entrada primária (rede elétrica)   | ADC (STM32)            |
| SCT-013-020      | Medição de corrente AC não invasiva         | Cabo de alimentação primária       | ADC (STM32)            |
| Termopar Tipo K  | Monitoramento de temperatura                | MOSFET, diodo, transformador       | Amplificador + ADC     |
| ADS1256 (24 bits) | Aquisição de alta precisão (THD, ripple)   | Saída do Flyback e pontos críticos | SPI (STM32)            |
| Ponte LCR Zoyi   | Teste de capacitores/indutores degradados  | Banco de capacitores e indutores   | Offline (validação)    |
| Osciloscópio Digital | Análise de formas de onda (switching)   | Gate do MOSFET, saída secundária   | -                      |

---

## 3. Diagrama de Conexões

A aquisição de dados é realizada pelo **STM32F103C8T6**, que se comunica com os sensores via:

- **I²C** (INA219)
- **SPI** (ADS1256, MAX6675)
- **ADC** (ZMPT101B, SCT-013)

O **ESP32** é responsável pelo envio dos dados para a nuvem (IoT), quando necessário.

### Fluxo de Aquisição:

```mermaid
graph TD
    A[Sensores DC (INA219)] --> B[STM32 (I²C)]
    B --> C[Dados de tensão/corrente de saída]

    D[Sensores AC (ZMPT101B, SCT-013)] --> E[STM32 (ADC)]
    E --> F[Análise de harmônicos e consumo]

    G[Termopares] --> H[Amplificador (MAX6675)]
    H --> I[STM32 (SPI)]
    I --> J[Monitoramento térmico]

    K[ADS1256] --> L[STM32 (SPI)]
    L --> M[Leitura de ripple e distorção harmônica (THD)]
```

---

## 4. Tratamento de Dados para IA

Os dados coletados são **pré-processados** antes do treinamento do modelo de IA:

- **Filtragem:** Média móvel para reduzir ruído
- **Normalização:** Escalonamento para faixa `0–1`
- **Extração de características:**
  - FFT para análise espectral
  - Cálculo de THD
  - RMS de tensão/corrente

---

## 5. Conclusão

A bancada desenvolvida permite a coleta robusta de dados para treinamento de modelos de:

- **CNN** – Análise de formas de onda
- **LSTM** – Séries temporais

Essenciais para a **predição de falhas** em fontes Flyback.

A integração do **TensorFlow Lite** no STM32 viabiliza a implementação de **IA embarcada** com baixo *latency*, alinhando-se aos objetivos do projeto.

### Próximos passos:
- Validar os dados coletados em condições normais e com falhas simuladas.
- Treinar modelos de IA no Python e converter para formato embarcado.

---

**Palavras-chave:** Flyback, VIPer22, STM32, INA219, ZMPT101B, TensorFlow Lite  
 

 