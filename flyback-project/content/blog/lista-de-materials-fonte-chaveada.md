---
title: "Lista de Materiais para Fonte Chaveada (SMPS) com Viper22"
date: "2025-04-21"
excerpt: "Lista de Materiais para Fonte Chaveada (SMPS) com Viper22: 12V e 5V, Saída Total de 12W."

---


A lista de materiais (Bill of Materials (BOM)) para o projeto **VIPer22A-based 12V/5V SMPS** com saída total de 12W, conforme os links fornecidos:

---

### **Bill of Materials (BOM) – VIPer22A SMPS (12V/5V, 12W)**  

#### **1. Componentes Principais**  
| Ref. | Componente | Especificações | Quantidade |
|------|------------|----------------|------------|
| U1   | IC VIPer22A | Conversor Chaveado (STMicroelectronics) | 1 |
| T1   | Transformador | EE16 ou EE19 (Primário: 230V, Secundário: 12V & 5V) | 1 |
| D1   | Diodo Retificador | 1N4007 (1000V, 1A) | 1 |
| D2   | Diodo Schottky (12V) | SB5100 (5A, 100V) | 1 |
| D3   | Diodo Schottky (5V) | SB560 (5A, 60V) | 1 |
| C1   | Capacitor Eletrolítico | 10µF/400V (Primário) | 1 |
| C2   | Capacitor Eletrolítico | 100µF/25V (Saída 12V) | 1 |
| C3   | Capacitor Eletrolítico | 470µF/16V (Saída 5V) | 1 |
| C4   | Capacitor Cerâmico | 100nF/50V (Filtro) | 1 |
| R1   | Resistor | 1MΩ (1/4W) | 1 |
| R2   | Resistor | 10Ω (1/4W) | 1 |
| R3   | Resistor | 1kΩ (1/4W) | 1 |
| R4   | Resistor | 4.7kΩ (1/4W) | 1 |
| R5   | Resistor | 1kΩ (1/4W) | 1 |
| VR1  | Regulador Zener (12V) | BZX55C12 (12V, 0.5W) | 1 |
| VR2  | Regulador Zener (5V) | BZX55C5V1 (5.1V, 0.5W) | 1 |
| L1   | Indutor de Filtro | 100µH (para EMI) | 1 |

#### **2. Componentes Opcionais/Proteção**  
| Ref. | Componente | Especificações | Quantidade |
|------|------------|----------------|------------|
| F1   | Fusível | 250V, 1A | 1 |
| RV1  | Varistor | 275V (Proteção contra surtos) | 1 |
| C5   | Capacitor X2 | 0.1µF/275V (Filtro EMI) | 1 |
| C6   | Capacitor Y2 | 2.2nF/250V (Filtro EMI) | 1 |

#### **3. PCB e Conectores**  
| Ref. | Componente | Especificações | Quantidade |
|------|------------|----------------|------------|
| -    | Placa PCB | Customizada (Ver projeto PCBWay) | 1 |
| J1   | Conector AC | Terminal Block 2-pin (Entrada 220V) | 1 |
| J2   | Conector DC | Terminal Block 2-pin (Saída 12V) | 1 |
| J3   | Conector DC | Terminal Block 2-pin (Saída 5V) | 1 |

#### **4. Imagens do Projeto**

##### **Layout da PCB**
![PCB Top](/ic2025-senai/viper22-top.png)

![PCB Bottom](/ic2025-senai/viper22-bottom.png)

##### **Esquemático do Circuito**
![Esquemático do Circuito](/ic2025-senai/viper22-smps.jpg)

---

### **Observações:**  
1. O **transformador (T1)** projetado para as especificações do projeto (primário: ~230V, secundário: 12V @ 0.5A e 5V @ 1A).  
2. Os **diodos Schottky (D2, D3)** são recomendados para maior eficiência.  
3. Para melhor desempenho em EMI, adicioneI os capacitores **X2/Y2 (C5, C6)**.  
 
 