#### 01 - Antecessor e sucessor

**Objetivo:**

Desenvolva um algoritmo que peça ao usuário para inserir um número inteiro qualquer. A partir desse valor, o programa deve calcular e exibir na tela:

1. O seu antecessor (o número que vem imediatamente antes).
2. O seu sucessor (o número que vem imediatamente depois).



#### 02 - Área do retângulo

**Objetivo:**

Calcule a área de um retângulo a partir de medidas fornecidas pelo usuário.

**Instruções:**

1. Entrada: Solicitar ao usuário a base (largura) e a altura (comprimento) do triângulo.
2. Cálculo: Processar a área utilizando a fórmula matemática: Área = base \\altura
3. Saída: Exibir o resultado final da área calculado em tela.



#### 03 - Converter idade em meses e dias

**Objetivo:**

Crie um algoritmo para realizar o cálculo de conversão de idade em meses e dias

**Instruções:**

1. Entrada: Solicite ao usuário a sua idade atual (considerando apenas anos inteiros).
2. Cálculo: O sistema deve processar essa informação para descobrir:
3.  	O total aproximado de meses vividos (considerando 1 ano = 12 meses).
4.  	O total aproximado de dias vividos (considerando 1 ano = 365 dias).
5. Saída: Exiba os dois resultados de forma clara e organizada no console.



#### 04 - Média escolar

**Objetivo:**
Criar um algoritmo que calcule a média aritmética de três números fornecidos pelo usuário.

**Instruções:**

1. Crie uma função que receba três parâmetros: os três números.
2. Na função, calcule a média aritmética somando os três números e dividindo o resultado por 3.
3. Retorne o resultado da média.
4. Exiba o resultado na tela ao chamar a função.

**Restrições**
Todos os números devem ser números reais (inteiros ou decimais).



#### 05 - Cálculo de desconto

**Objetivo:**
Desenvolver um programa que calcule o valor final de um produto após a aplicação de um desconto percentual.

**Instruções:**

1. Solicite ao usuário o valor original do produto.
2. Solicite o percentual de desconto a ser aplicado.
3. Calcule o valor do desconto e subtraia do valor original.
4. Exiba o valor final com o desconto aplicado.

**Restrições:**

1. O percentual de desconto deve estar entre 0 e 100.

O valor final deve ser exibido com duas casas decimais

|| variáveis



#### 06 - Número Par ou Ímpar

**Objetivo:**
Criar um algoritmo que determine se um número é par ou ímpar.

**Instruções:**

1. Crie uma função que receba um único parâmetro: o número a ser verificado.
2. Na função, utilize uma operação de módulo (%) para verificar se o número é divisível por 2.
3. Retorne "par" se o número for divisível por 2 e "ímpar" caso contrário.

**Restrições**
O número deve ser inteiro.





#### 07 - Pode votar

**Objetivo:**

Criar um algoritmo para verificar se uma pessoa pode ou não votar no Brasil.

**Instruções:**

1. Solicitar ao usuário que digite a sua idade (número inteiro).
2. O sistema deve verificar se a idade é maior ou igual a 18.
3. Exibir mensagens personalizadas: "Você pode votar" ou "Ainda não pode votar".



#### 08 - Aprovado ou reprovado

**Objetivo:**

Criar um algoritmo para verificar se um aluno foi aprovado.

**Instruções:**

1. Solicitar ao usuário que digite a nota final do aluno (número decimal).
2. O sistema deve verificar se a nota é maior ou igual a 6.
3. Exibir mensagens personalizadas: "Aprovado" ou "Reprovado".



#### 09 - Conversão de temperaturas



**Objetivo:**
Criar um algoritmo que converta temperaturas entre Celsius e Fahrenheit.

**Instruções:**
Crie uma função que receba dois parâmetros: o valor da temperatura e o tipo de conversão desejado ("C" para Celsius, "F" para Fahrenheit).
Na função:

1. Se o tipo for "C", use a fórmula para converter de Fahrenheit para Celsius. Fórmula:
   `C = (F−32)/1.8`
2. Se o tipo for "F", use a fórmula para converter de Celsius para Fahrenheit. Fórmula:
   `F = (C×1.8)+32`
   Retorne o valor convertido.

**Restrições**
O tipo de conversão deve ser validado como "C" ou "F".
Caso o tipo seja inválido, exiba uma mensagem de erro.



#### 10 - Calculadora básica

**Objetivo:**
Criar um algoritmo que receba dois números e realize os cálculos de adição, subtração, multiplicação e divisão, de acordo com a opção escolhida.

**Instruções:**
Crie uma função que receba três parâmetros, sendo:
`Primeiro número, segundo número, tipo da operação \[1,2,3,4]`

1. Se o tipo for 1, faça a adição dos dois números
2. Se o tipo for 2, faça a subtração dos dois números
3. Se o tipo for 3, faça a multiplicação dos dois números
4. Se o tipo for 4, faça a divisão dos dois números
   Para verificar o tipo de operação, utilize um comando condicional, como switch ou case, dependendo da linguagem de programação utilizada.
   Depois, chame a função, passando os valores para os parâmetros esperados.
   **Restrições**
   No caso da divisão, é necessário fazer o tratamento adequado para evitar erros de divisão por zero.



#### 11 - Contagem Regressiva de N até 0

**Objetivo:**
Criar um algoritmo que exiba uma contagem regressiva de um número N até 0.

1. **Instruções:**
   Crie um código simples utilizando um laço de repetição para exibir os números de N até 0.
2. A cada iteração, subtraia 1 do número atual.

**Restrições**
O número inicial deve ser um número inteiro maior ou igual a 0.

|| repetições



#### 12 - Tabuada do 1 ao 10

**Objetivo:**

Criar um algoritmo que calcule e exiba a tabuada de multiplicação dos números de 1 a 10. Para isso, você utilizará dois laços de repetição aninhados (um dentro do outro), preferencialmente o for, para percorrer os números de 1 a 10 e realizar as multiplicações.



**Instruções:**

Utilize dois laços for, um para controlar o multiplicando (números de 1 a 10) e outro para controlar o multiplicador (também de 1 a 10).

Dentro do laço interno, multiplique as variáveis de controle dos dois laços e exiba o resultado no formato:

`\[multiplicando] x \[multiplicador] = \[resultado].`

Certifique-se de que o algoritmo exiba todas as combinações possíveis de multiplicação de 1 a 10.



**Resultado esperado:**

1 x 1 = 1

1 x 2 = 2

1 x 3 = 3

...

2 x 1 = 2

2 x 2 = 4

2 x 3 = 6

E assim por diante

|| variáveis repetições



#### 13 - Encontrar o maior número

**Objetivo:**
Criar um algoritmo que encontre o maior número entre três números fornecidos pelo usuário.

**Instruções:**

1. Crie uma função que receba três parâmetros: os três números a serem comparados.
2. Utilize estruturas condicionais (if/else ou equivalente) para comparar os números e determinar o maior.
3. Retorne o maior número.

**Restrições**
Os números podem ser inteiros ou decimais.

|| funções condicionais



#### 14 - Verificar se o ano é bissexto

**Objetivo:**
Criar um algoritmo que verifique se um ano é bissexto.

**Instruções:**
Crie uma função que receba um parâmetro: o ano.
Na função, verifique se o ano é divisível por 4.

1. Se for divisível por 4 e não divisível por 100, é bissexto.
2. Se for divisível por 400, também é bissexto.
   Retorne "true" ou "false" indicando se o ano é bissexto.

**Restrições**
O ano deve ser um número inteiro positivo.



#### 15 - Álcool ou gasolina

**Objetivo:**

Criar um algoritmo para calcular se é mais compensativo abastecer usando álcool ou gasolina.

**Instruções:**

Crie uma função que receba dois parâmetros, sendo o primeiro o preço da gasolina e o segundo o preço do álcool.

Na função, faça a divisão usando a seguinte fórmula:

`preço álcool / preço gasolina`

Se o resultado for superior a 0.7, compensa a gasolina, caso contrário, o álcool

Retorne com a mensagem informando qual combustível é mais compensativo

Chame a função, informando os valores para os parâmetros.

|| variáveis função condicionais



#### 16 - Gerar sequência de Fibonacci

**Objetivo:**
Criar um algoritmo que gere os primeiros N números da sequência de Fibonacci.

**Instruções:**
Crie uma função que receba um parâmetro: o número de termos N desejados.
Utilize um laço de repetição para calcular a sequência:

1. O primeiro termo é 0 e o segundo termo é 1.
2. Cada termo seguinte é a soma dos dois anteriores.
   Retorne um array (ou lista) contendo os N termos da sequência.

**Restrições**
N deve ser um número inteiro positivo.

|| funções condicionais array



#### 17 - Inverter uma string

**Objetivo:**
Criar um algoritmo que inverta uma string fornecida pelo usuário.

**Instruções:**

1. Crie uma função que receba um parâmetro: a string a ser invertida.
2. Utilize métodos próprios da linguagem ou um laço de repetição para inverter a string.
3. Retorne a string invertida.

**Restrições**
A string não deve conter espaços extras antes ou depois do processamento.

|| variáveis repetição função



#### 18 - Cálculo de IMC

**Objetivo:**
Criar um algoritmo que calcule o Índice de Massa Corporal (IMC) de uma pessoa com base em seu peso e altura.

**Instruções:**
Crie uma função que receba dois parâmetros: peso (em kg) e altura (em metros).
Use a fórmula de IMC para calcular o índice.
Retorne o IMC calculado.
Com base no IMC, exiba uma mensagem indicando a classificação:

1. Abaixo de 18,5: Abaixo do peso
2. Entre 18,5 e 24,9: Peso normal
3. Entre 25 e 29,9: Sobrepeso
4. 30 ou mais: Obesidade

**Restrições**
O peso e a altura devem ser valores positivos.



#### 19 - Quadrado e potência

**Objetivo:**
Criar um algoritmo que calcule o quadrado de um número e permita calcular outras potências com base em um expoente fornecido.

**Instruções:**

1. Crie uma função que receba dois parâmetros: o número base e o expoente.
2. Calcule o quadrado do número se o expoente for igual a 2.
3. Caso contrário, calcule a potência utilizando base expoente.
4. Retorne o resultado.

**Restrições**
O número base deve ser real.
O expoente deve ser um número inteiro.



#### 20 - Jogo - acerte o número

**Objetivo:**
Criar um jogo em que o usuário tente adivinhar um número aleatório gerado pelo programa.

**Instruções:**

1. Gere um número aleatório dentro de um intervalo definido (por exemplo, de 1 a 100).
2. Peça ao usuário para informar uma tentativa.
3. Verifique se o número informado é maior, menor ou igual ao número gerado.
4. Continue solicitando tentativas até que o usuário acerte o número.
5. Informe ao usuário o número de tentativas realizadas ao final do jogo.

**Restrições**
O número deve ser gerado aleatoriamente a cada jogo.
Valide a entrada do usuário para garantir que seja um número dentro do intervalo permitido.





#### 21 - Cálculo de Juros Simples

**Objetivo:**

Criar um algoritmo que calcule o valor dos juros simples de um investimento ou empréstimo.

**Instruções:**

Crie uma função que receba os seguintes parâmetros:

1. Capital inicial (𝐶)
2. Taxa de juros (𝑖) em porcentagem
3. Tempo (𝑡) em meses ou anos

Utilize a fórmula de juros simples:

`J=C×i×t`

Calcule e retorne:

1. O valor dos juros (𝐽).
2. O montante final (𝑀 = 𝐶 + 𝐽).

**Restrições:**

Valide se os valores de capital, taxa, e tempo são positivos.



#### 22 - Cálculo de Juros Compostos

**Objetivo:**

Criar um algoritmo que calcule o valor dos juros compostos e o montante final de um investimento ou empréstimo.

**Instruções:**

Crie uma função que receba os seguintes parâmetros:

1. Capital inicial (𝐶)
2. Taxa de juros (𝑖) em porcentagem
3. Tempo (𝑡) em meses ou anos

Utilize a fórmula de juros simples:

`M = C × (1 + i)<sup>t</sup>`

Calcule e retorne:

1. O montante final (𝑀).
2. O valor dos juros (J = M - 𝐶 ).

**Restrições:**

Valide se os valores de capital, taxa, e tempo são positivos.



#### 23 - Ordenar sequência numérica

**Objetivo:**
Criar um algoritmo que ordene uma sequência de números em ordem crescente ou decrescente.

**Instruções:**

1. Crie uma função que receba dois parâmetros: uma lista de números e o tipo de ordenação ("crescente" ou "decrescente").
2. Utilize um método de ordenação para reorganizar os números com base no tipo especificado.
3. Retorne a lista ordenada.

**Restrições**
Todos os números na lista devem ser reais.



#### 24 - Mostrar número por extenso

**Objetivo:**
Desenvolver uma função que converta um número inteiro entre 0 e 999 em sua forma por extenso.

**Instruções:**

1. Solicite ao usuário um número inteiro entre 0 e 999.
2. Converta o número para texto por extenso (ex: 123 → “cento e vinte e três”).
3. Exiba o resultado na tela.

**Restrições**

1. Não utilize bibliotecas externas de conversão.
2. A função deve tratar corretamente os casos especiais como “cem”, “cento e um”, “dez”, “onze”, etc.



#### 25 - Remover itens duplicados de um array

**Objetivo:**
Criar um algoritmo que remova elementos duplicados de um array, mantendo apenas a primeira ocorrência de cada item.

**Instruções:**

1. Crie uma função que receba um array como parâmetro.
2. Utilize uma estrutura de dados ou lógica para identificar itens duplicados.
3. Retorne um novo array contendo apenas os itens únicos, na mesma ordem em que aparecem originalmente.

**Restrições:**

1. O array pode conter números, strings ou outros tipos de dados.
2. Mantenha a ordem dos itens originais.



#### 26 - Gerador de senhas

**Objetivo:**
Criar um gerador de senhas seguras com base em critérios definidos pelo usuário.

**Instruções:**

1. Solicite ao usuário o comprimento desejado da senha.
2. Pergunte se ele deseja incluir letras maiúsculas, minúsculas, números e símbolos.
3. Gere uma senha aleatória com os critérios escolhidos.
4. Exiba a senha gerada.

**Restrições**

1. A senha deve conter pelo menos um caractere de cada tipo selecionado.
2. O comprimento mínimo permitido é 6 caracteres.



#### 27 - Sistema de Filas (FIFO - First In First Out)

**Objetivo:**
Criar um algoritmo que simule um sistema de filas, seguindo o conceito de FIFO (First In, First Out).

**Instruções:**
Crie uma estrutura que permita:

1. Adicionar itens à fila (enfileirar).
2. Remover o primeiro item da fila (desenfileirar).
3. Exibir os itens da fila atual.
   Implemente as funções para cada uma das operações acima.
   Garanta que a fila funcione corretamente, mantendo a ordem de chegada dos itens.

**Restrições**
A fila deve ser implementada usando arrays ou listas.
Não permita desenfileirar se a fila estiver vazia.



#### 28 - Cálculo de Financiamento Usando Tabela Price

**Objetivo:**
Criar um algoritmo que calcule o valor das parcelas de um financiamento utilizando a Tabela Price.

**Instruções:**
Crie uma função que receba os seguintes parâmetros:

1. Valor do financiamento (𝑃𝑉)
2. Taxa de juros mensal (𝑖) em porcentagem

Quantidade de parcelas (𝑛)
Utilize a fórmula da Tabela Price para calcular a parcela fixa (𝑃𝑀𝑇)
Retorne o valor da parcela mensal (𝑃𝑀𝑇) e o valor total pago (𝑃𝑀𝑇 × 𝑛).
**Restrições**
Valide se o valor do financiamento, taxa e quantidade de parcelas são positivos.



#### 29 - Cálculo de Financiamento Usando Tabela SAC

**Objetivo:**
Criar um algoritmo que calcule o valor das parcelas de um financiamento utilizando a Tabela SAC (Sistema de Amortização Constante).

**Instruções:**
Crie uma função que receba os seguintes parâmetros:

1. Valor do financiamento (𝑃𝑉)
2. Taxa de juros mensal (𝑖) em porcentagem

Quantidade de parcelas (𝑛)
Utilize a fórmula da Tabela SAC
Para cada parcela 𝑘, calcule e exiba:
Valor da amortização (𝐴).
Valor dos juros da parcela.
Valor total da parcela (𝑃𝑀𝑇𝑘).
Retorne o valor total pago ao longo do financiamento.
**Restrições**
Valide se o valor do financiamento, taxa, e quantidade de parcelas são positivos.









