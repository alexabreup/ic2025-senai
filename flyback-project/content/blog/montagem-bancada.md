---
title: "Montagem da Bancada de Teste"
date: "2023-04-12"
excerpt: "Concluímos a montagem inicial da bancada com CI TNY286 e sensores para coleta de dados."
---

# Montagem da Bancada de Teste

## Componentes Utilizados

- Fonte Flyback com circuito intergrado (~10W de potência)
- Carga eletrônica ajustável
- Sensores de tensão e corrente
- Microcontrolador STM32
- ESP32 para comunicação

## Desafios Encontrados

1. **Alimentação dos Sensores**: Tivemos que projetar um circuito regulador para garantir alimentação estável aos sensores.

2. **Isolação Galvânica**: Implementamos optoacopladores para isolar os sinais de controle.

3. **Ruído Eletromagnético**: A proximidade dos componentes gerava interferência, resolvida com um layout mais cuidadoso.

## Próximos Passos

- Calibração dos sensores
- Desenvolvimento do firmware para coleta de dados
- Criação do protocolo de comunicação entre STM32 e computador
