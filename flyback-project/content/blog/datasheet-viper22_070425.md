---
title: "Datasheet do VIPer22A-E"
date: "2025-04-07"
excerpt: "Tradução livre para fins educacionais."
---

# Datasheet do VIPer22A-E – Tradução para Português  
*(Documento original: VIPer22A-E, VIPer22ADIP-E, VIPer22AS-E – STMicroelectronics, Nov. 2010, Rev. 2)*  

---

## 1. Introdução  
O **VIPer22A-E** é um controlador primário para fontes chaveadas (*SMPS – Switched-Mode Power Supply*) offline de baixa potência, que integra um controlador **PWM em modo corrente** e um **MOSFET de alta tensão** em um único chip.  

### 🔍 Principais Características  
- Frequência de chaveamento fixa: **60 kHz**  
- Tensão **VDD** ampla: **9 V a 38 V**  
- Controle em **modo corrente**  
- **Proteções integradas**:  
  - Sobretemperatura (*OTP*)  
  - Sobrecorrente (*OCP*)  
  - Sobretensão (*OVP*) com auto-reinício  
- Fonte de corrente de partida de alta tensão  
- *Undervoltage Lockout* (**UVLO**) com histerese  

### 🛠 Aplicações Típicas  
- Fontes para carregadores de bateria  
- Fontes *standby* para TVs e monitores  
- Fontes auxiliares para controle de motores  

---

## 2. Dados Elétricos  

### 2.1 Máximas Tensões e Correntes  
| Símbolo  | Parâmetro                          | Valor               | Unidade |  
|----------|------------------------------------|---------------------|---------|  
| VDS(sw)  | Tensão dreno-fonte (chaveamento)   | -0,3 a 730 V        | V       |  
| VDS(st)  | Tensão dreno-fonte (partida)       | -0,3 a 400 V        | V       |  
| ID       | Corrente contínua de dreno         | Limitada internamente | A       |  
| VDD      | Tensão de alimentação              | 0 a 50 V            | V       |  
| IFB      | Corrente de realimentação (FB)     | 3                   | mA      |  
| TJ       | Temperatura de junção              | Limitada internamente | °C      |  
| Tstg     | Temperatura de armazenamento       | -55 a 150 °C        | °C      |  

### 2.2 Dados Térmicos  
| Símbolo | Parâmetro                     | SO-8 | DIP-8 | Unidade |  
|---------|-------------------------------|------|-------|---------|  
| RthJC   | Resistência térmica (junção-case) | 25   | 15    | °C/W    |  
| RthJA   | Resistência térmica (junção-ambiente) | 55   | 45    | °C/W    |  

---

## 3. Características Elétricas  

### 3.1 Seção de Potência  
| Parâmetro | Condições               | Mín. | Típ. | Máx. | Unidade |  
|-----------|-------------------------|------|------|------|---------|  
| BVDS      | Tensão de ruptura dreno-fonte | 730  | –    | –    | V       |  
| RDS(on)   | Resistência dreno-fonte | 15   | 17   | –    | Ω       |  
| tr / tf   | Tempo de subida/queda   | –    | 50/100 | –    | ns      |  

### 3.2 Seção de Alimentação (VDD)  
| Parâmetro  | Condições  | Mín. | Típ. | Máx. | Unidade |  
|------------|------------|------|------|------|---------|  
| VDDon      | Tensão de partida | –    | 14,5 | 16   | V       |  
| VDDoff     | Tensão de desligamento | 7   | 8    | 9    | V       |  
| VDDhyst    | Histerese VDD | 5,8 | 6,5  | 7,2  | V       |  
| VDDovp     | Limite de sobretensão | 38 | 42   | 46   | V       |  

### 3.3 Seção PWM  
| Parâmetro | Condições           | Mín. | Típ. | Máx. | Unidade |  
|-----------|---------------------|------|------|------|---------|  
| GID       | Ganho de corrente   | –    | 560  | –    | –       |  
| IDlim     | Limite de corrente  | 0,56 | 0,7  | 0,84 | A       |  
| IFBsd     | Corrente de desligamento | – | 0,9  | –    | mA      |  

---

## 4. Funcionamento do VIPer22A-E  

### 4.1 Partida (*Startup*)  
- Ao aplicar tensão de entrada, uma **fonte de corrente de alta tensão** carrega o capacitor **VDD**.  
- Quando **VDD ≥ VDDon (~14,5 V)**, o circuito inicia a operação e desliga a fonte de partida.  
- Se **VDD ≤ VDDoff (~8 V)**, o circuito para e reinicia a carga.  

### 4.2 Controle por Modo Corrente (FB)  
A corrente de dreno (**ID**) é controlada pela equação:  