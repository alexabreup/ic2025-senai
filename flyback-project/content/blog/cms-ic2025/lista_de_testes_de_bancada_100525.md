

Testes para a análise funcional e elétrica da fonte.

---

## Plano de Testes: Fonte Chaveada Flyback com VIPer22A

### 1. **Teste de Tensão de Saída**
- **Descrição:** Verificar se a tensão de saída está dentro das especificações para as duas saídas (12V e 5V).
- **Testes:**
  - Aplicar tensão de entrada nominal (230V AC).
  - Medir a tensão de saída em cada linha (12V e 5V) com multímetro.
  - Variar a carga (0%, 50% e 100% da capacidade) e verificar estabilidade da tensão.
- **Resultado Esperado:** Saídas de 12V ±5% e 5V ±5% sob todas as condições de carga.
- **Observação:** Utilizar o INA219 e/ou ADS1256 para medições precisas.

---

### 2. **Teste de Corrente de Saída**
- **Descrição:** Avaliar a capacidade da fonte de entregar correntes nominais (12V/0.5A e 5V/1A).
- **Testes:**
  - Aplicar cargas resistivas ajustáveis às saídas.
  - Medir corrente com amperímetro ou sensor (INA219).
  - Verificar se a corrente entregue corresponde ao esperado sem queda de tensão significativa.
- **Resultado Esperado:** Entrega de corrente conforme especificação com mínima variação de tensão.

---

### 3. **Teste de Ripple e Ruído na Saída (THD)**
- **Descrição:** Analisar a qualidade da tensão de saída em termos de ripple e distorção harmônica total (THD).
- **Testes:**
  - Conectar osciloscópio na saída da fonte.
  - Medir o ripple sob diferentes cargas.
  - Usar o ADS1256 para análise detalhada de THD.
- **Resultado Esperado:** Ripple < 50mVpp e THD < 5%.

---

### 4. **Teste de Temperatura**
- **Descrição:** Monitorar o aquecimento dos componentes críticos durante operação contínua.
- **Testes:**
  - Inserir termopares nos pontos críticos (VIPer22A, diodos Schottky, transformador).
  - Operar a fonte por 1 hora em carga máxima.
  - Registrar temperatura com MAX6675 ou outro conversor SPI conectado ao STM32.
- **Resultado Esperado:** Temperaturas abaixo dos limites máximos permitidos (ex.: VIPer22A < 120°C).

---

### 5. **Teste de Partida e Estabilidade Dinâmica**
- **Descrição:** Verificar o comportamento da fonte durante partida e transições rápidas de carga.
- **Testes:**
  - Ligar a fonte e observar resposta inicial.
  - Aplicar e remover carga abruptamente e monitorar tensão/corrente com osciloscópio.
- **Resultado Esperado:** Tempo de subida rápido, sem overshoot excessivo ou oscilações instáveis.

---

### 6. **Teste de Sobrecorrente (OCP)**
- **Descrição:** Validar a proteção contra sobrecorrente integrada no VIPer22A.
- **Testes:**
  - Simular curto-circuito na saída.
  - Verificar se o circuito interrompe a saída e reinicia após o problema ser resolvido.
- **Resultado Esperado:** Proteção ativada com rearme automático ou reinicialização segura.

---

### 7. **Teste de Sobretensão (OVP)**
- **Descrição:** Verificar a proteção contra sobretensão.
- **Testes:**
  - Ajustar a saída para ultrapassar o limite nominal.
  - Observar se a proteção atua desligando a saída.
- **Resultado Esperado:** Desligamento imediato da saída com indicação de falha.

---

### 8. **Teste de Subtensão (UVLO)**
- **Descrição:** Garantir que a fonte não opere com tensão de entrada insuficiente.
- **Testes:**
  - Reduzir gradativamente a tensão de entrada até o ponto de corte.
  - Verificar se a saída é desligada conforme especificação do UVLO do VIPer22A.
- **Resultado Esperado:** Fonte desliga quando VDD < 8V e reinicia quando >14,5V.

---

### 9. **Teste de Compatibilidade Eletromagnética (EMC)**
- **Descrição:** Verificar emissões conduzidas e irradiadas e imunidade a ruídos externos.
- **Testes:**
  - Realizar medições de EMI com analisador de espectro.
  - Testar funcionamento em ambientes com campos magnéticos fortes.
- **Resultado Esperado:** Fonte opera normalmente sem interferência excessiva e sem falhas em ambiente típico industrial.

---

### 10. **Teste de Durabilidade/Stress**
- **Descrição:** Submeter a fonte a ciclos repetidos de carga/descarga e temperaturas elevadas.
- **Testes:**
  - Operar a fonte em regime contínuo por 24h em carga máxima.
  - Expor a fonte a ciclos térmicos (ambiente quente/frio).
- **Resultado Esperado:** Funcionamento contínuo sem degradação visível.

---

### 11. **Teste de Firmware/Software (Se aplicável)**
- **Descrição:** Se houver microcontrolador (STM32/ESP32) controlando a fonte, verificar firmware.
- **Testes:**
  - Carregar firmware de monitoramento.
  - Coletar dados de tensão, corrente e temperatura via I²C/SPI.
  - Verificar comunicação serial (UART/RS485) se utilizada.
- **Resultado Esperado:** Dados coletados com precisão e enviados corretamente.

---

### 12. **Teste de Calibração/Precisão**
- **Descrição:** Comparar os valores medidos pelos sensores com padrões de referência.
- **Testes:**
  - Medir tensão/corrente com instrumentos calibrados.
  - Comparar com os valores obtidos pelo INA219, ZMPT101B e SCT-013-020.
- **Resultado Esperado:** Erro inferior a 2% entre medições.

---

### ✅ Resultados Gerais
| Teste | Status | Observações |
|-------|--------|-------------|
| Tensão de Saída | Aguardando |  |
| Corrente de Saída | Aguardando |  |
| Ripple e THD | Aguardando |  |
| Temperatura | Aguardando |  |
| Partida e Estabilidade | Aguardando |  |
| OCP | Aguardando |  |
| OVP | Aguardando |  |
| UVLO | Aguardando |  |
| EMC | Aguardando |  |
| Stress/Durabilidade | Aguardando |  |
| Firmware/Software | Aguardando |  |
| Calibração | Aguardando |  |
 