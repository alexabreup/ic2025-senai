---
title: "Exemplo de Expressões Matemáticas com KaTeX"
date: "2025-05-22"
excerpt: "Demonstração de fórmulas matemáticas usando LaTeX no projeto Flyback"
---

# Demonstração de Expressões Matemáticas com KaTeX

Este post demonstra como usar expressões matemáticas no formato LaTeX em nossos artigos do blog.

## Expressões Matemáticas em Linha

A famosa equação de Einstein $E = mc^2$ relaciona energia e massa.

A lei de Ohm é expressa como $V = RI$, onde $V$ é a tensão, $R$ é a resistência e $I$ é a corrente.

## Expressões Matemáticas em Bloco

A equação para a tensão de saída de um transformador flyback é:

$$
V_{out} = \frac{N_s}{N_p} \cdot V_{in} \cdot \frac{D}{1-D}
$$

Onde:
- $N_s$ é o número de espiras do secundário
- $N_p$ é o número de espiras do primário
- $V_{in}$ é a tensão de entrada
- $D$ é o ciclo de trabalho (duty cycle)

## Equações Mais Complexas

A equação para calcular a indutância mútua em um transformador:

$$
L_m = \frac{\mu_0 \cdot \mu_r \cdot N_p^2 \cdot A_e}{l_e}
$$

Onde:
- $\mu_0$ é a permeabilidade do vácuo ($4\pi \times 10^{-7}$ H/m)
- $\mu_r$ é a permeabilidade relativa do núcleo
- $A_e$ é a área efetiva da seção transversal do núcleo
- $l_e$ é o comprimento efetivo do caminho magnético

## Sistemas de Equações

Um sistema de equações pode ser representado como:

$$
\begin{aligned}
a_1x + b_1y &= c_1 \\
a_2x + b_2y &= c_2
\end{aligned}
$$

## Matrizes

A matriz de indutância para um transformador com $n$ enrolamentos:

$$
\mathbf{L} = 
\begin{bmatrix}
L_1 & M_{12} & \cdots & M_{1n} \\
M_{21} & L_2 & \cdots & M_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
M_{n1} & M_{n2} & \cdots & L_n
\end{bmatrix}
$$

## Integrais e Derivadas

A potência instantânea em um indutor é dada por:

$$
p(t) = L \cdot i(t) \cdot \frac{di(t)}{dt}
$$

E a energia armazenada no indutor é:

$$
E = \frac{1}{2} L I^2 = \int_0^t p(\tau) \, d\tau
$$
