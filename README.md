```markdown
# IA no Controle e Predição de Falhas em Fonte Chaveada Flyback  
**Projeto de Iniciação Científica**  
*Orientador: Prof. Luis Carlos Canno | Orientando: Alexandre de Abreu Pereira*

*Última atualização: 20 de junho de 2025 - 15:36*

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

### 🔧 Passos para Configuração  
1. **Clonar o repositório**:  
   ```bash
   git clone https://github.com/seu-usuario/flyback-ia.git
   cd flyback-ia
   ```

2. **Instalar dependências**:  
   ```bash
   pip install -r requirements.txt
   ```

3. **Coletar dados**:  
   - Conectar sensores ao STM32.  
   - Executar script de coleta:  
     ```python
     python src/data_collection.py
     ```

4. **Treinar modelo de IA**:  
   ```python
   python src/train_model.py --dataset data/dados_flyback.csv
   ```

5. **Implementar no STM32**:  
   - Converter modelo para TensorFlow Lite.  
   - Carregar firmware no STM32 via STM32CubeIDE.  

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

## 📈 Exemplo de Código (Coleta de Dados)  
```python
# data_collection.py
import serial
import pandas as pd

ser = serial.Serial('COM3', 9600)  # Configurar porta serial
data = []

while True:
    line = ser.readline().decode().strip()
    if line:
        voltage, current, temp = map(float, line.split(','))
        data.append({
            'Voltage (V)': voltage,
            'Current (A)': current,
            'Temperature (°C)': temp
        })
        df = pd.DataFrame(data)
        df.to_csv('data/dados_flyback.csv', index=False)
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
Agradeço ao **Prof. Luis Carlos Canno** pela orientação, o Professor **Ricardo Alexandre Carmona**, pela confiança no desenvolvimento e execução projeto e à instituição pelo suporte técnico.

---

**Palavras-chave**: Flyback, IA, STM32, ESP32, TensorFlow Lite, Predição de Falhas.  
``` 

 
