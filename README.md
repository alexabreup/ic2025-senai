# IA no Controle e Predição de Falhas em Fonte Chaveada Flyback  
**Projeto de Iniciação Científica**  
*Orientador: Prof. Luis Carlos Canno | Orientando: Alexandre de Abreu Pereira*

---

## 📖 Introdução  
Este projeto visa desenvolver um sistema inteligente baseado em **Inteligência Artificial (IA)** para monitorar e prever falhas em fontes chaveadas Flyback, integrando sensores, microcontroladores (STM32/ESP32) e técnicas de aprendizado de máquina. A solução busca aumentar a confiabilidade de sistemas eletrônicos críticos, alinhando-se às demandas da **Indústria 4.0**.

---

## 🎯 Funcionalidades Principais  
- **Monitoramento em tempo real** de tensão, corrente, temperatura e harmônicos.  
- **Predição de falhas** usando modelos de IA (CNN, RNN, SVM).  
- **Inferência local** no microcontrolador STM32 com TensorFlow Lite.  
- **Coleta de dados** em condições normais e de falha simulada.  

---

## 🛠️ Instalação e Uso  

### 📋 Requisitos de Hardware  
- Fonte Flyback em circuito intergrado(~10W).  
- Microcontroladores: STM32 (processamento), ESP32 (Wi-Fi / IoT).  
- Sensores: tensão, corrente, temperatura.  
- Carga eletrônica ajustável.  

### 💻 Requisitos de Software  
- Python 3.8+ e bibliotecas: `TensorFlow`, `Pandas`, `NumPy`.  
- Ambiente de desenvolvimento: `STM32CubeIDE`, `VS Code`.  
- Ferramentas: `Dashboard em Node JS e Python`.  

---

## 📂 Estrutura do Projeto  
```
flyback-ia/  
├── firmware/           # Código para STM32 e ESP32
├── sensors/            # Scripts de leitura de sensores
├── ai_models/          # Modelos treinados (TensorFlow, TFLite)
├── data/               # Dados brutos e processados (CSV)
├── docs/               # Documentação técnica
├── src/                # Código-fonte (Python, C++)
└── README.md
```

---


## 📜 Licença  
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📚 Referências  
- [Datasheet TNY286](https://www.power.com/sites/default/files/product-docs/tinyswitch-4_family_datasheet.pdf)  
- [Documentação TensorFlow Lite](https://www.tensorflow.org/lite)  
- [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)  

---

## 🤝 Agradecimentos  
Agradeço ao **Prof. Luis Carlos Canno** por ter aceito o desafio e pela orientação, o Professor **Ricardo Alexandre Carmona**, pela confiança no desenvolvimento e execução projeto e à instituição Senai Anchieta pelo suporte técnico.

---

**Palavras-chave**: Flyback, IA, STM32, ESP32, TensorFlow Lite, Predição de Falhas.  
``` 

 
