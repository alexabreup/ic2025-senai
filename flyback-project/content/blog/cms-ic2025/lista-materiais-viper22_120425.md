---
title: "Lista de materiais da fonte chaveada flyback Viper22"
date: "2025/04/12"
---
 

# Lista de Materiais (BOM) – Fonte Chaveada VIPer22A com Saídas 12V e 5V (12W)

Este documento apresenta a lista completa de materiais (Bill of Materials - BOM) para montagem de uma **fonte chaveada Flyback** baseada no CI **VIPer22A**, com saídas reguladas de **12V/0.5A** e **5V/1A**, totalizando **12W de potência**.

A arquitetura utiliza componentes facilmente encontráveis e segue boas práticas de projeto para **eficiência, estabilidade e redução de EMI**.

---

## 1. Componentes Principais

| Ref. | Componente             | Especificações                         | Quantidade |
|------|------------------------|----------------------------------------|------------|
| U1   | IC VIPer22A            | Conversor Chaveado (STMicroelectronics)| 1          |
| T1   | Transformador          | EE16 ou EE19<br>Primário: 230V<br>Secundário: 12V & 5V | 1 |
| D1   | Diodo Retificador      | 1N4007 (1000V, 1A)                    | 1          |
| D2   | Diodo Schottky (12V)   | SB5100 (5A, 100V)                     | 1          |
| D3   | Diodo Schottky (5V)    | SB560 (5A, 60V)                       | 1          |
| C1   | Capacitor Eletrolítico | 10µF / 400V (Primário)                | 1          |
| C2   | Capacitor Eletrolítico | 100µF / 25V (Saída 12V)               | 1          |
| C3   | Capacitor Eletrolítico | 470µF / 16V (Saída 5V)                | 1          |
| C4   | Capacitor Cerâmico     | 100nF / 50V (Filtro de entrada)       | 1          |
| R1   | Resistor               | 1MΩ (1/4W)                            | 1          |
| R2   | Resistor               | 10Ω (1/4W)                            | 1          |
| R3   | Resistor               | 1kΩ (1/4W)                            | 1          |
| R4   | Resistor               | 4.7kΩ (1/4W)                          | 1          |
| R5   | Resistor               | 1kΩ (1/4W)                            | 1          |
| VR1  | Regulador Zener (12V)  | BZX55C12 (12V, 0.5W)                  | 1          |
| VR2  | Regulador Zener (5V)   | BZX55C5V1 (5.1V, 0.5W)                | 1          |
| L1   | Indutor de Filtro      | 100µH (para redução de EMI)           | 1          |

---

## 2. Componentes Opcionais / Proteção

| Ref. | Componente         | Especificações                         | Quantidade |
|------|--------------------|----------------------------------------|------------|
| F1   | Fusível            | 250V, 1A                              | 1          |
| RV1  | Varistor           | 275V (Proteção contra surtos)         | 1          |
| C5   | Capacitor X2       | 0.1µF / 275V (Filtro EMI)             | 1          |
| C6   | Capacitor Y2       | 2.2nF / 250V (Filtro EMI)             | 1          |

---

## 3. PCB e Conectores

| Ref. | Componente               | Especificações                             | Quantidade |
|------|--------------------------|--------------------------------------------|------------|
| -    | Placa PCB                | Customizada (Ver projeto PCBWay)           | 1          |
| J1   | Conector AC              | Terminal Block 2-pin (Entrada 220V)        | 1          |
| J2   | Conector DC              | Terminal Block 2-pin (Saída 12V)           | 1          |
| J3   | Conector DC              | Terminal Block 2-pin (Saída 5V)            | 1          |

---

## Observações Importantes

- O **transformador (T1)** deve ser projetado especificamente para as tensões primária (~230V) e secundárias (12V @ 0.5A e 5V @ 1A). Recomenda-se núcleo **EE16 ou EE19** com bom acoplamento magnético.
- Os **diodos Schottky (D2, D3)** são essenciais para melhorar a eficiência da fonte no secundário.
- Para atender a padrões de compatibilidade eletromagnética (EMI), recomenda-se incluir os capacitores **X2 (C5)** e **Y2 (C6)**.
- A placa pode ser fabricada via **PCBWay** ou outro serviço de fabricação de PCBs, seguindo o esquemático disponível no projeto original.

---

## Considerações Finais

Esta configuração de **Fonte Chaveada Flyback com VIPer22A** é adequada para aplicações de baixa potência, como alimentação de circuitos lógicos, sensores e módulos embarcados.

O uso do **VIPer22A** permite alta integração (MOSFET + controlador), reduzindo custos e complexidade do circuito.

### Próximos passos:
- Projeto e validação do transformador.
- Montagem e teste funcional da fonte.
- Medição de ripple, eficiência e resposta sob carga variável.

---

**Palavras-chave:** Flyback, VIPer22A, SMPS, Fonte Chaveada, 12V, 5V, 12W, BOM, Lista de Materiais  
