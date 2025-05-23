---
title: "Montagem de Fonte Chaveada VIPer22"
---

# **Projeto de Fonte Chaveada SMPS Flyback com VIPer22A – 12W de Saída (5V e 12V)**  

## **Introdução**  
As fontes chaveadas (*Switched-Mode Power Supply – SMPS*) são essenciais na eletrônica moderna devido à sua **alta eficiência e compactação**. Neste artigo, abordaremos a montagem de uma **fonte Flyback** utilizando o **VIPer22A**, um controlador integrado da STMicroelectronics com MOSFET incorporado, capaz de fornecer **5V e 12V com até 12W de potência total**.  

Este projeto é baseado em duas referências práticas:  
1. **[PCBWay – VIPer22A 5V/12V SMPS Circuit](https://www.pcbway.com/project/shareproject/viper22A_5V_12V_SMPS_Circuit_0c248d23.html)**  
2. **[Hackster.io – VIPer22A 12V/5V SMPS (12W Output)](https://www.hackster.io/FiDeNet/viper22a-12v-5v-smps-with-12w-total-output-fef0bc)**  

Ambos os projetos demonstram implementações funcionais, e aqui vamos **combinar as melhores práticas** para um design otimizado.  

---

## **Especificações Técnicas**  
| **Parâmetro**       | **Valor**               |  
|----------------------|-------------------------|  
| Tensão de entrada    | 85V–265V AC (universal) |  
| Saída 1              | 12V @ 0.5A (6W)         |  
| Saída 2              | 5V @ 1A (5W)            |  
| Potência total       | ~12W                    |  
| Eficiência           | ~80–85%                 |  
| Frequência de chaveio| ~60kHz                  |  

---
![Fonte chaveada VIPer22A - Vista superior](/ic2025-senai/viper22-top.png)

![Fonte chaveada VIPer22A - Vista inferior](/ic2025-senai/viper22-bottom.png)
---

## **Componentes Principais**  

### **1. VIPer22A**  
- **Controlador integrado + MOSFET** (800V, 0.3Ω RDSon).  
- **Proteções internas**: *Overvoltage (OVP), Overcurrent (OCP), Thermal Shutdown (OTP)*.  
- **Alimentação VDD**: 8V–30V (geralmente suprida por enrolamento auxiliar).  

### **2. Transformador Flyback (Ferrite EE/EI Core)**  
- **Primário**: 100–120 espiras (ajuste conforme indutância necessária).  
- **Secundário (12V)**: ~15 espiras (com derivação central, se necessário).  
- **Secundário (5V)**: ~6 espiras.  
- **Enrolamento auxiliar (VDD)**: ~10 espiras (para alimentar o VIPer22).  

**Dica:** Use fio esmaltado de bitola adequada (ex.: 0,3mm para secundários).  

### **3. Retificação e Filtragem**  
- **Entrada CA**: Ponte retificadora (1N4007) + Capacitor eletrolítico (10µF/400V).  
- **Saída 12V**: Diodo Schottky (SB560) + Capacitor (470µF/25V).  
- **Saída 5V**: Diodo Schottky (1N5822) + Capacitor (1000µF/16V).  

### **4. Circuito de Feedback (Regulação)**  
- **Optoacoplador (PC817)** + **TL431** (referência de tensão precisa).  
- **Divisor resistivo** para ajuste da tensão de saída.  

### **5. Proteções Adicionais**  
- **Varistor (MOV)** para supressão de surtos na entrada.  
- **Fusível (250V, 1A)** para segurança.  

---

## **Esquemático e Funcionamento**  

![Fonte chaveada VIPer22A - Vista inferior](/ic2025-senai/viper22-smps.jpg)

### **1. Etapas do Circuito**  
1. **Entrada CA** → Retificação em onda completa + filtro (capacitor de alta tensão).  
2. **VIPer22A** → Gera pulsos PWM para chavear o transformador.  
3. **Transformador Flyback** → Isola e converte a tensão para 5V e 12V.  
4. **Saídas DC** → Retificação com diodos Schottky + filtro LC.  
5. **Feedback** → O optoacoplador ajusta o ciclo de trabalho para manter a regulação.  

**Diagrama completo:**  
- [Hackster.io – Esquemático Detalhado](https://www.hackster.io/FiDeNet/viper22a-12v-5v-smps-with-12w-total-output-fef0bc)  

---

## **Montagem e Ajustes**  

### **1. Enrolamento do Transformador**  
- Utilize um **núcleo de ferrite EE16 ou EE20**.  
- **Primário**: 120 espiras de fio 0,2mm.  
- **Secundário 12V**: 15 espiras de fio 0,5mm.  
- **Secundário 5V**: 6 espiras de fio 0,7mm.  
- **Enrolamento auxiliar (VDD)**: 10 espiras de fio 0,2mm.  

### **2. Alimentação do VIPer22A**  
- O enrolamento auxiliar deve fornecer **~12V DC** (usar diodo retificador + capacitor 22µF/25V).  

### **3. Testes Iniciais**  
- **Use uma lâmpada em série** na primeira energização para evitar curtos.  
- Meça as tensões de saída **sem carga** antes de conectar dispositivos.  

### **4. Otimização da Eficiência**  
- Utilize **diodos Schottky** nas saídas para reduzir perdas.  
- Ajuste o **feedback (TL431 + optoacoplador)** para maior estabilidade.  

---

## **Comparativo Entre as Referências**  

| **Aspecto**          | **PCBWay**                          | **Hackster.io**                     |  
|-----------------------|-------------------------------------|-------------------------------------|  
| **Potência**          | ~10W (5V + 12V)                    | 12W (5V @1A + 12V @0.5A)           |  
| **Regulação**         | Zener + optoacoplador               | TL431 + optoacoplador (mais preciso)|  
| **Transformador**     | Núcleo EE16                         | Núcleo EE20 (maior potência)        |  
| **Proteções**         | Básica (fusível)                    | MOV + fusível + melhor feedback     |  

 

---

## **Conclusão**  
Este projeto de **fonte Flyback com VIPer22A** é ideal para aplicações que exigem **saídas duplas (5V e 12V) com até 12W de potência**, como:  
- Fontes para microcontroladores (Arduino, ESP8266).  
- Alimentação de pequenos motores e sensores.  
- Circuitos de baixo consumo (LEDs, módulos RF).  

**Melhorias sugeridas:**  
- Adicionar **filtro EMI** (inductor + capacitor cerâmico).  
- Usar **resistor NTC** para limitar corrente de partida.  
- Implementar **proteção contra curto-circuito** (PTC ou circuito dedicado).  

---

## **Referências e Links Úteis**  
- [Datasheet VIPer22A (STMicroelectronics)](https://www.st.com/resource/en/datasheet/viper22a-e.pdf)  
- [Projeto PCBWay (5V/12V SMPS)](https://www.pcbway.com/project/shareproject/viper22A_5V_12V_SMPS_Circuit_0c248d23.html)  
- [Projeto Hackster.io (12W SMPS)](https://www.hackster.io/FiDeNet/viper22a-12v-5v-smps-with-12w-total-output-fef0bc)  
- [Calculadora de Transformador Flyback](https://www.smps.us/transformer-design.html)  

 