---
title: "Projeto de Fonte Chaveada Flyback com o VIPer22A-E e Análise dos Componentes Magnéticos Selecionados"
date: "2025-06-13"
---


## Introdução

Uma análise técnica detalhada do projeto de uma fonte chaveada do tipo **Flyback**, utilizando o circuito integrado **VIPer22A-E** da STMicroelectronics, juntamente com os componentes magnéticos especificados: o transformador **EF20HSD08T-T** e o indutor de modo comum **NT1608VCD4T-F**.

Detalho uma visão completa sobre a adequação destes componentes à topologia Flyback, bem como sua funcionalidade dentro do contexto de um conversor off-line operando em baixa potência.

---

## Especificações Gerais do Projeto

- **Topologia**: Flyback isolada  
- **Controlador**: VIPer22A-E (PWM + MOSFET integrado)  
- **Potência de saída**: Até 10W  
- **Entrada CA**: 85–265 VAC (faixa universal)  
- **Saídas CC**:  
  - Secundário 1: 12V  
  - Secundário 2: 20V (auxiliar/VDD)  
- **Componentes magnéticos**:  
  - Transformador EF20HSD08T-T  
  - Indutor NT1608VCD4T-F (modo comum)

---

## Análise do Circuito Integrado: VIPer22A-E

O **VIPer22A-E** é um controlador PWM de modo corrente com MOSFET de alta tensão integrado, projetado especificamente para aplicações de baixa potência (<12 W). Suas principais características incluem:

- **Tensão de operação do VDD**: 9–38 V  
- **Frequência de chaveamento fixa**: 60 kHz  
- **Modo automático de economia de energia** em cargas leves  
- **Proteções integradas**:  
  - Sobrecorrente  
  - Sobretensão  
  - Sobreaquecimento  
- **Corrente de pico no MOSFET**: ~0.7 A  
- **Tensão de ruptura do MOSFET**: 730 V  

Esse CI é particularmente útil em aplicações Flyback devido à sua integração, robustez e facilidade de implementação. Sua ampla faixa de alimentação (9–38 V) permite que seja alimentado diretamente por um enrolamento auxiliar do transformador principal, eliminando a necessidade de uma fonte externa de alimentação.

---

## Análise do Transformador EF20HSD08T-T

![Especificação Técnica do Transformador EF20HSD08T-T](/images/pdf_images/transformador-1.png)

### Dados Elétricos

- **Indutância primária**: 2,2 mH ±5% @10kHz / 20mV  
- **Relação de espiras**:  
  - (N1 + N4) : N2 = 1 : 0,1705  
  - (N1 + N4) : N3 = 1 : 0,1023  
- **Rigidez dielétrica**: 1500 VAC por 2 segundos entre todos os enrolamentos  
- **Enrolamentos**:  
  - N1: 88 espiras – #32 AWG  
  - N2 (12V): 30 espiras – 2x#35 AWG  
  - N3 (20V): 18 espiras – #24 AWG  
  - N4 (auxiliar): 88 espiras – #32 AWG  

### Função no Circuito

O transformador desempenha três funções fundamentais:

1. **Armazenamento e transferência de energia** durante os ciclos de condução e interrupção do MOSFET.  
2. **Isolação galvânica** entre o lado primário (rede CA) e o secundário (saída CC).  
3. **Fornecimento de tensão auxiliar** (20V) para alimentar o pino VDD do VIPer22A-E.  

Com base na indutância primária de 2,2 mH e na frequência de 60 kHz, o transformador opera dentro da faixa de fluxo aceitável para núcleos ferrite, garantindo eficiência e estabilidade térmica.

A relação de espiras foi dimensionada de forma a atender às tensões de saída desejadas, considerando as quedas nos diodos retificadores e perdas no fio. A isolação de 1500 VAC garante conformidade com padrões de segurança em aplicações conectadas à rede elétrica.

---

## Análise do Indutor NT1608VCD4T-F

![Especificação Técnica do Filtro NT1608VCD4T-F](/images/pdf_images/filtro-1.png)

### Dados Elétricos

- **Indutância**: 75–125 µH @1kHz / 1V  
- **Resistência DC**: 12 mΩ ±10%  
- **Relação de espiras**: 1:1  
- **Rigidez dielétrica**: 1500 VAC por 2 segundos entre primário e secundário  
- **Enrolamentos**:  
  - N1: 8 espiras – #22 AWG  
  - N2: 8 espiras – #22 AWG  

### Função no Circuito

O indutor NT1608VCD4T-F é do tipo **modo comum**, posicionado na entrada CA do circuito, com as seguintes funções:

1. **Atenuação de ruídos de modo comum** gerados pela comutação rápida do MOSFET.  
2. **Melhoria da compatibilidade eletromagnética (EMC)**, permitindo conformidade com normas como EN55032.  
3. **Redução de emissões conduzidas**, essencial para evitar interferências em outros dispositivos conectados à mesma rede.  

Sua construção simétrica (1:1) e alto nível de isolamento fazem dele um componente crítico para a conformidade EMC, especialmente em aplicações onde a certificação é obrigatória.

---

## Integração dos Componentes no Projeto Final

O VIPer22A-E, combinado com o transformador EF20HSD08T-T e o indutor NT1608VCD4T-F, forma uma solução compacta, eficiente e segura para aplicações de até 12 W. Abaixo estão os pontos-chave desta integração:

- **Alimentação do VDD via enrolamento auxiliar (20V)**: Dentro da faixa operacional do VIPer22A-E (9–38 V), garantindo estabilidade e eficiência mesmo sob variações de carga.  
- **Isolamento seguro entre primário e secundário**: Garantido pelo transformador com rigidez dielétrica de 1500 VAC.  
- **Conformidade EMC**: Assegurada pelo indutor de modo comum, minimizando emissões conduzidas.  
- **Baixo número de componentes externos**: Facilita o layout e reduz custos de produção.  
- **Proteções integradas no VIPer22A-E**: Elimina a necessidade de circuitos adicionais de proteção.  

---

## Considerações Finais

O projeto de uma fonte chaveada Flyback requer atenção cuidadosa à seleção de componentes, especialmente dos elementos magnéticos, cujo desempenho afeta diretamente a eficiência, a confiabilidade e a conformidade regulatória do sistema final.

Os componentes magnéticos selecionados — o transformador **EF20HSD08T-T** e o indutor **NT1608VCD4T-F** — mostram-se altamente adequados ao projeto proposto com o VIPer22A-E. Sua escolha está alinhada tanto às exigências técnicas da topologia Flyback quanto aos requisitos práticos de isolação, eficiência e segurança.

Como próximo passo, recomenda-se a montagem física do circuito, seguida de testes funcionais e medições reais de rendimento, temperatura, ripple de saída e emissões conduzidas, para validação das especificações teóricas aqui apresentadas.

---

## Anexos e Documentação Técnica

Para informações técnicas detalhadas sobre os componentes magnéticos utilizados neste projeto, consulte os seguintes documentos:

- [Especificação Técnica do Transformador EF20HSD08T-T](/ALEXANDRE%20-%20EF20HSD08T-T.pdf)
- [Especificação Técnica do Filtro NT1608VCD4T-F](/ALEXANDRE%20-%20NT1608VCD4T-F.pdf)
