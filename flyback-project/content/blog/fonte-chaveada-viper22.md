---
title: "Projeto de Fonte Chaveada (SMPS) com Viper22"
date: "2025-04-15"
excerpt: "Projeto de Fonte Chaveada (SMPS) com Viper22: 12V e 5V, Saída Total de 12W."
---

# Projeto de Fonte Chaveada (SMPS) com Viper22: 12V e 5V, Saída Total de 12W

## Introdução

Trabalhar com projetos eletrônicos que utilizam a tensão da rede elétrica AC muitas vezes exige uma fonte de alimentação compacta e eficiente. Embora adaptadores comerciais sejam uma solução comum, nem sempre são práticos ou disponíveis em quantidade suficiente para todos os projetos. Pensando nisso, criei um circuito SMPS (Switched-Mode Power Supply) próprio, baseado no controlador **Viper22**, capaz de fornecer duas saídas reguladas: **5V** e **12V**, com potência total de até **12W**.

Este projeto utiliza um transformador proveniente de uma fonte ATX de standby e foi montado em uma placa de circuito impresso (PCB), garantindo alta qualidade e facilitando a montagem de componentes SMD graças ao stencil de aço fornecido.

---

## Componentes Principais

### Controlador
- **Viper22**: Um controlador PWM integrado com MOSFET de alta tensão, ideal para aplicações de baixa potência como esta.

### Transformador
- Utilizado de uma fonte ATX padrão de standby.
- Possui saídas secundárias de **5V** e **12V**.

### Regulação
- **TL431**: Utilizado como controlador de feedback para manter a saída de **5V** regulada com precisão.

---

## Características do Projeto

| Especificação        | Valor             |
|----------------------|-------------------|
| Tensão de entrada    | 85V ~ 265V AC     |
| Saída principal      | 5V @ até 1A       |
| Saída auxiliar       | 12V @ até 0.5A    |
| Potência total       | Até 12W           |
| Tipo de PCB          | Dupla face        |

---

## Funcionamento e Testes

Após a fabricação da placa, realizei testes de carga nas saídas para verificar o desempenho sob diferentes condições:

### Cenários Testados

1. **Carga simultânea nas duas saídas (5V e 12V)**:
   - A fonte forneceu cerca de **11W** sem queda significativa de tensão.
   - Temperatura estável e sem aquecimento anormal.
   - Não foi possível testar além de **12W**, mas acredito que a fonte possa entregar um pouco mais.

2. **Somente carga na saída de 12V (~1A)**:
   - A fonte entrou em modo **hiccup** (proteção contra sobrecorrente).
   - Isso ocorreu porque não havia feedback ativo da malha de controle, já que a regulação é feita apenas na saída de 5V.

3. **Somente carga na saída de 5V (~1.5A)**:
   - A tensão caiu para aproximadamente **4.86V**, indicando que o limite de corrente foi atingido.
   - Recomendo limitar a corrente a **1A** para manter a tensão regulada.

---

## Aplicações Sugeridas

Este circuito é ideal para pequenos projetos eletrônicos que exigem alimentação direta da rede elétrica e necessitam de múltiplas tensões. Exemplos incluem:

- Projetos com microcontroladores (como Arduino, ESP32, STM32)
- Acionamento de relés e optoisoladores
- Sensores e circuitos lógicos
- Fonte de alimentação para módulos de comunicação (Wi-Fi, Bluetooth, GSM)

---

## Montagem e Fabricação

O projeto foi desenvolvido com layout otimizado para fabricação em PCB. Os arquivos da placa estão disponíveis publicamente no site da PCBWAY:

🔗 [Projeto na PCBWAY](https://www.pcbway.com/project/shareproject/viper22A_5V_12V_SMPS_Circuit_0c248d23.html)

A PCBWAY ofereceu suporte excelente na fabricação, entregando a placa e o stencil de aço em **10 dias**, com qualidade impecável, o que facilitou muito a montagem dos componentes SMD.

---

## Considerações Finais

Este projeto de fonte SMPS com Viper22A mostrou-se eficaz e confiável para uso em pequenas cargas, especialmente aquelas que demandam **até 1A em 5V** e **0.5A em 12V**. É uma solução prática, compacta e reutilizável para futuros projetos que envolvam alimentação direta da rede elétrica.



---

## Links Úteis

- [Projeto original no Hackster.io](https://www.hackster.io/FiDeNet/viper22a-12v-5v-smps-with-12w-total-output-fef0bc)
- [Projeto da PCB no PCBWAY](https://www.pcbway.com/project/shareproject/viper22A_5V_12V_SMPS_Circuit_0c248d23.html)

---

