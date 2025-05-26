---
title: Dimensionamento para conversor flyback
date: 2025-05-03
excerpt: Dimensionamento em sete etapas
---

 

Apresento as **expressões matemáticas principais** utilizadas no projeto de um conversor flyback em **modo de condução descontínuo (DCM)**. Essas equações são fundamentais para o cálculo dos componentes e análise do funcionamento da fonte.

---

##  Etapas com Expressões Matemáticas

###  Passo 1: Definir os Parâmetros de Projeto
> Não envolve fórmulas diretas, mas define os parâmetros de entrada:
- VIN(min) – Tensão de entrada mínima
- VIN(max) – Tensão de entrada máxima
- VOUT – Tensão de saída
- IOUT – Corrente de saída
- POUT – Potência de saída
- DMAX – Máximo ciclo de trabalho (geralmente 0.5)
- FSW – Frequência de chaveamento
- η – Eficiência estimada (~0.8)

---

### Passo 2: Cálculo da Indutância Primária Máxima (LP)

A indutância primária é calculada com base na energia armazenada durante o tempo de condução:

$$
L_P = \frac{V_{IN(min)}^2 \cdot D_{MAX}^2}{2 \cdot P_{OUT} \cdot f_{SW} \cdot \eta}
$$

Onde:
- $ L_P $ – Indutância primária (H)
- $ V_{IN(min)} $ – Tensão de entrada mínima (V)
- $ D_{MAX} $ – Ciclo de trabalho máximo (geralmente 0.5)
- $ P_{OUT} $ – Potência de saída (W)
- $ f_{SW} $ – Frequência de chaveamento (Hz)
- $ \eta $ – Eficiência estimada

---

### Passo 3: Cálculo da Relação de Espiras (nS1)

A relação entre espiras do transformador é determinada pela tensão refletida no secundário:

$$
n_{S1} = \frac{V_{IN(min)} \cdot D_{MAX}}{(V_{OUT} + V_F) \cdot (1 - D_{MAX})}
$$

Onde:
- $ n_{S1} $ – Relação de espiras (Np/Ns)
- $ V_F $ – Queda de tensão no diodo retificador (V)

---

###  Passo 4: Cálculo da Tensão e Corrente Máximas no MOSFET

#### Tensão máxima no dreno-fonte (VDS_MAX):

$$
V_{DS\_MAX} = V_{IN(max)} + (V_{OUT} + V_F) \cdot n_{S1}
$$

Adiciona-se uma margem de segurança (geralmente 20%) para garantir operação segura.

#### Corrente máxima no MOSFET (ID_MAX):

$$
I_{D\_MAX} = \frac{2 \cdot P_{OUT}}{V_{IN(min)} \cdot D_{MAX} \cdot \eta}
$$

---

### Passo 5: Cálculo da Tensão e Corrente nos Diodos Retificadores

#### Tensão reversa máxima no diodo (VR_MAX):

$$
V_{R\_MAX} = \frac{V_{IN(max)}}{n_{S1}} + V_{OUT}
$$

Adiciona-se uma margem de segurança (geralmente 40%).

#### Corrente média no diodo (IDIODE_AVG):

$$
I_{DIODE\_AVG} = I_{OUT}
$$

#### Corrente de pico no diodo (IDIODE_PK):

$$
I_{DIODE\_PK} = \frac{2 \cdot P_{OUT}}{(V_{OUT} + V_F) \cdot (1 - D_{MAX}) \cdot \eta}
$$

---

### Passo 6: Cálculo do Capacitor de Saída

#### Estimativa da capacitância necessária:

$$
C_{OUT} = \frac{I_{OUT} \cdot D_{MAX}}{f_{SW} \cdot \Delta V_{OUT}}
$$

Onde:
- $ \Delta V_{OUT} $ – Ripple de tensão aceitável na saída

---

###  Passo 7: Projeto do Snubber (RCD Clamp)

#### Estimativa da indutância de fuga (LLK):

$$
L_{LK} \approx 0.02 \cdot L_P
$$

#### Estimativa da tensão máxima no capacitor do snubber:

$$
V_{CS\_MAX} = V_{DS\_MAX} + \Delta V_{CS}
$$

Onde:
- $ \Delta V_{CS} $ – Ripple de tensão permitido no capacitor do snubber (geralmente 10%)

#### Estimativa da potência dissipada no resistor do snubber:

$$
P_{RS} = \frac{1}{2} \cdot L_{LK} \cdot I_{D\_MAX}^2 \cdot f_{SW}
$$

#### Valor do resistor do snubber:

$$
R_S = \frac{V_{CS\_MAX}^2}{P_{RS}}
$$

#### Valor do capacitor do snubber:

$$
C_S = \frac{I_{D\_MAX} \cdot t_{OFF}}{\Delta V_{CS}}
$$

Onde:
- $ t_{OFF} = \frac{1 - D_{MAX}}{f_{SW}} $

---

##  Resumo das Equações Principais

| Item                 | Fórmula                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------ |
| Indutância Primária  | $ L_P = \frac{V_{IN(min)}^2 \cdot D_{MAX}^2}{2 \cdot P_{OUT} \cdot f_{SW} \cdot \eta} $    |
| Relação de Espiras   | $ n_{S1} = \frac{V_{IN(min)} \cdot D_{MAX}}{(V_{OUT} + V_F) \cdot (1 - D_{MAX})} $         |
| Tensão no MOSFET     | $ V_{DS\_MAX} = V_{IN(max)} + (V_{OUT} + V_F) \cdot n_{S1} $                               |
| Corrente no MOSFET   | $ I_{D\_MAX} = \frac{2 \cdot P_{OUT}}{V_{IN(min)} \cdot D_{MAX} \cdot \eta} $              |
| Tensão no Diodo      | $ V_{R\_MAX} = \frac{V_{IN(max)}}{n_{S1}} + V_{OUT} $                                      |
| Corrente no Diodo    | $ I_{DIODE\_PK} = \frac{2 \cdot P_{OUT}}{(V_{OUT} + V_F) \cdot (1 - D_{MAX}) \cdot \eta} $ |
| Capacitor de Saída   | $ C_{OUT} = \frac{I_{OUT} \cdot D_{MAX}}{f_{SW} \cdot \Delta V_{OUT}} $                    |
| Indutância de Fuga   | $ L_{LK} \approx 0.02 \cdot L_P $                                                          |
| Resistor do Snubber  | $ R_S = \frac{V_{CS\_MAX}^2}{P_{RS}} $                                                     |
| Capacitor do Snubber | $ C_S = \frac{I_{D\_MAX} \cdot t_{OFF}}{\Delta V_{CS}} $                                   |
 