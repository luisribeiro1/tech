#### Como incluir Javascript no HTML

**Uso comum e mais tradicional:** \&lt;script src="caminho/arquivo.js"\&gt;\&lt;/script\&gt;

**Uso como módulos - mais moderno:** \&lt;script type="module" src="caminho/arquivo.js"\&gt;\&lt;/script\&gt;

#### Como fazer comentário de código em Javascript

// Comentário de uma linha em Javascript

/\* Comentário de múltiplas linhas em Javascript \*/

#### Como declarar variáveis

**var nomeCompleto = "João da Silva"** (Uso tradicional)

**let salarioAnual = 39551.89** (pode ter valor alterado)

**const situacao = true** (não pode ter valor alterado)

#### Convenção de nomenclatura

**Variáveis e funções:** camelCase

**Classes:** PascalCase

**Constantes:** UPPER\_SNAKE\_CASE

#### Tipos de dados

let variavelString = "João da Silva"

let variavelNumericaInteira = 422

let variavelNumericaDecimal = 39551.89

let variavelBooleana = true

let variavelNula = null

let variavelIndefinida = undefined

let variavelArray = \[ "João", 422, 39551.89, true ]

let variavelObjeto = { nome: "João", idade: 30, salario: 39551.89 }

#### Operadores Aritméticos

\+ Adição

\- Subtração

\* Multiplicação

/ Divisão

% Módulo (Resto da divisão)

++ Incremento

-- Decremento

#### Operadores Lógicos

\&\& E

|| OU

! NÃO

#### Operadores de Comparação

== Igual

!= Diferente

=== Estritamente igual

!== Estritamente diferente

< Menor que

> Maior que

<= Menor ou igual a

>= Maior ou igual a

#### Estruturas Condicionais. Condição simples ou única

\#1#
if (condição) {

&nbsp;	código a ser executado se a condição for verdadeira
}
#/1#

Exemplo:

\#2#

const idade = 19

if (idade>=18) {

   console.log("Você é maior de idade")

}

\#/2#



#### Estruturas Condicionais. Verdadeira ou falsa

\#1#
if (condição) {
	código a ser executado se a condição for verdadeira
} else {
	código a ser executado se a condição for falsa
}
#/1#

Exemplo:

\#2#

const idade = 19

if (idade>=18) {

   console.log("Você é maior de idade")

}else{

   console.log("Você é menor de idade")

}

\#/2#



#### Estruturas Condicionais. Ternária (mesma condição acima escrita de forma diferente)

\#1#
condição
	? código se a condição for verdadeira
	: código se a condição for falsa
#/1#

Exemplo:

\#2#

const idade = 19

idade>=18

 	? console.log("Você é maior de idade")

 	: console.log("Você é menor de idade")

\#/2#



#### Estruturas Condicionais. Múltiplas condições

\#1#
if (condição) {
	código a ser executado se a condição for verdadeira
} else if (outraCondição) {
	código a ser executado se a outra condição for verdadeira
} else {
	código a ser executado se nenhuma das condições for verdadeira
}

\#/1#

Exemplo:

\#2#

const hora = 14

if (hora<12) {

   console.log("bom dia")

} else if (hora<18) {

   console.log("boa tarde")

} else if (hora<24) {

   console.log("boa noite")

} else {

   console.log("não é um horário válido")

}

\#/2#

#### Estruturas Condicionais - Switch

\#1#

switch (expressão) {

   case valor1:

&nbsp;	código a ser executado se a expressão for igual a valor1

&nbsp;	break;

   case valor2:

&nbsp;	código a ser executado se a expressão for igual a valor2

&nbsp;	break;

   default:

&nbsp;	código a ser executado se a expressão não corresponder a nenhum caso

}

\#/1#

Exemplo:

\#2#

let estado = ""

const sigla = "SP"

switch (sigla) {

   case "MG":

&nbsp;	\&nbsp;\&nbsp; estado = "Minas Gerais"

     	\&nbsp;\&nbsp; break;

   case "SP":

&nbsp;	\&nbsp;\&nbsp; estado = "São Paulo"

     	\&nbsp;\&nbsp; break;

   case "RJ":

&nbsp;	\&nbsp;\&nbsp; estado = "Rio de Janeiro"

     	\&nbsp;\&nbsp; break;

   case "ES":

&nbsp;	\&nbsp;\&nbsp; estado = "Espírito Santo"

     	\&nbsp;\&nbsp; break;

   default:

&nbsp;	\&nbsp;\&nbsp; estado = "Não é um estado da região sudeste"

}

Console.log(estado)

\#/2#



#### Estruturas de Repetição

**Estrutura de repetição for**

\#1#

for (inicialização; condição; incremento) {

&nbsp;	código a ser executado em cada iteração

}

\#/1#

Exemplo:

\#2#

for (let numero = 1; numero<50; numero++) {

 	console.log(numero)

}

\#/2#



**Estrutura de repetição while**

\#1#

while (condição) {

 	código a ser executado enquanto a condição for verdadeira

}

\#/1#

Exemplo:

\#2#

let numero

while (numero<50) {

 	console.log(numero)

&nbsp;	numero++

}

\#/2#

**Estrutura de repetição do...while**



\#1#



do {

&nbsp;	código a ser executado pelo menos uma vez

} while (condição);



\#/1#



Exemplo:



\#2#



let numero = 1



do {



&nbsp;	console.log(numero)



numero++



} while (numero <= 5);



\#/2#



#### Funções



**Função tradicional (function declaration)**



\#1#



function nomeDaFuncao(parametro1, parametro2) {

&nbsp;	código a ser executado

&nbsp;	return resultado

}



\#/1#



Exemplo:



\#2#



function somar(a, b) {



&nbsp;	return a + b



}



const resultado = somar(3, 5)



console.log(resultado)



\#/2#



**Função anônima (function expression)**



\#1#



const nomeDaFuncao = function(parametro1, parametro2) {



&nbsp;	return resultado



}

\#/1#



Exemplo:

\#2#

const somar = function(a, b) {

 	return a + b

}

const resultado = somar(3, 5)

console.log(resultado)

\#/2#



**Arrow function (função de seta)**



\#1#



const nomeDaFuncao = (parametro1, parametro2) => {



&nbsp;	return resultado



}

\#/1#

Exemplo:

\#2#

const somar = (a, b) => {

 	return a + b

}

const resultado = somar(3, 5)

console.log(resultado)

\#/2#



**Forma reduzida** (sem chaves, sem return, para uma única expressão)



\#1#

const nomeDaFuncao = (parametro1, parametro2) => resultado



\#/1#



Exemplo:



\#2#



const somar = (a, b) => a + b

console.log(somar(3, 5))

\#/2#



#### Arrays



\#1#



const nomeDoArray = \[elemento1, elemento2, elemento3]



\#/1#



Exemplo:



\#2#



const frutas = \["maçã", "banana", "laranja"]

&nbsp;



// Acessar elemento pelo índice (começa em 0)



console.log(frutas\[0]) // maçã

&nbsp;



// Tamanho do array



console.log(frutas.length) // 3



\#/2#



**Métodos principais de Array**



\#2#



const numeros = \[3, 1, 4, 1, 5, 9]

&nbsp;



// Adicionar no final

numeros.push(2)

&nbsp;

// Remover do final

numeros.pop()

&nbsp;

// Adicionar no início

numeros.unshift(0)

&nbsp;

// Remover do início

numeros.shift()

&nbsp;

// Encontrar índice de um elemento

numeros.indexOf(4)

&nbsp;

// Verificar se elemento existe

numeros.includes(5)

&nbsp;

// Ordenar

numeros.sort()

&nbsp;

// Inverter

numeros.reverse()

&nbsp;

// Percorrer (forEach)

numeros.forEach(function(numero) {

&nbsp;	console.log(numero)

})

&nbsp;

// Transformar (map) - retorna novo array

const dobrados = numeros.map(numero => numero \* 2)

&nbsp;

// Filtrar (filter) - retorna novo array

const maioresQueTres = numeros.filter(numero => numero > 3)

&nbsp;

// Reduzir a um único valor (reduce)

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)



\#/2#



#### Objetos



\#1#



const nomeDoObjeto = {



&nbsp;	propriedade1: valor1,



&nbsp;	propriedade2: valor2,



&nbsp;	metodo: function() {



&nbsp;		código



&nbsp;	}



}



\#/1#



Exemplo:



\#2#

const pessoa = {

&nbsp;	nome: "João",

&nbsp;	idade: 30,

&nbsp;	apresentar: function() {

&nbsp;		\&nbsp;\&nbsp; console.log("Olá, meu nome é " + this.nome)

&nbsp;	}

}

&nbsp;

// Acessar propriedade

console.log(pessoa.nome)

console.log(pessoa\["nome"])

&nbsp;

// Chamar método

pessoa.apresentar()

&nbsp;

// Adicionar propriedade

pessoa.email = "joao@email.com"

&nbsp;

// Remover propriedade

delete pessoa.email



\#/2#



#### Manipulação de Strings



\#2#

const texto = "Olá, Mundo!"

&nbsp;

// Tamanho

console.log(texto.length)

&nbsp;

// Converter para maiúsculo/minúsculo

texto.toUpperCase()

texto.toLowerCase()

&nbsp;

// Verificar se contém texto

texto.includes("Mundo")

&nbsp;

// Substituir

texto.replace("Mundo", "JavaScript")

&nbsp;

// Dividir em array

texto.split(", ")

&nbsp;

// Remover espaços do início e fim

"  texto  ".trim()

&nbsp;

// Pegar parte do texto

texto.slice(0, 3)

&nbsp;

// Encontrar posição

texto.indexOf("Mundo")



\#/2#



#### Template Literals (Template Strings)



\#1#

const variavel = "valor"

const mensagem = `Texto com ${variavel} interpolado`



\#/1#



Exemplo:



\#2#

const nome = "Maria"

const idade = 25

const apresentacao = `Meu nome é ${nome} e tenho ${idade} anos.`

console.log(apresentacao)

\#/2#



#### Desestruturação (Destructuring)



**Desestruturação de Arrays**



\#2#

const frutas = \["maçã", "banana", "laranja"]

const \[primeira, segunda, terceira] = frutas

console.log(primeira) // maçã

\#/2#



**Desestruturação de Objetos**



\#2#

const pessoa = { nome: "João", idade: 30, cidade: "SP" }

const { nome, idade } = pessoa

console.log(nome)  // João

console.log(idade) // 30

\#/2#



#### Spread e Rest



**Spread (...) - espalha elementos**



\#2#

const numeros1 = \[1, 2, 3]

const numeros2 = \[4, 5, 6]

const todos = \[...numeros1, ...numeros2]

&nbsp;

// Copiar objeto adicionando propriedade

const pessoa = { nome: "João", idade: 30 }

const pessoaAtualizada = { ...pessoa, cidade: "SP" }

\#/2#



**Rest (...) - agrupa argumentos**



\#2#

function somar(...numeros) {

&nbsp;	return numeros.reduce((total, n) => total + n, 0)

}

console.log(somar(1, 2, 3, 4, 5)) // 15



\#/2#



#### Tratamento de Erros (Try/Catch)



\#1#

try {

&nbsp;	// código que pode gerar um erro

} catch (erro) {

&nbsp;	// código executado se ocorrer um erro

&nbsp;	console.log(erro.message)

} finally {

&nbsp;	// código executado sempre, com ou sem erro

}



\#/1#



Exemplo:



\#2#



try {

&nbsp;	const resultado = 10 / 0

&nbsp;	if (!isFinite(resultado)) throw new Error("Divisão inválida")

&nbsp;	console.log(resultado)

} catch (erro) {

&nbsp;	console.log("Erro: " + erro.message)

} finally {

&nbsp;	console.log("Execução finalizada")

}



\#/2#



#### Manipulação do DOM



**Selecionar elementos**



\#2#

// Por ID

const elemento = document.getElementById("meuId")

&nbsp;

// Por classe

const elementos = document.getElementsByClassName("minhaClasse")

&nbsp;

// Por tag

const paragrafos = document.getElementsByTagName("p")

&nbsp;

// Por seletor CSS (retorna o primeiro)

const elemento = document.querySelector(".minhaClasse")

&nbsp;

// Por seletor CSS (retorna todos)

const elementos = document.querySelectorAll("p.destaque")

\#/2#



**Manipular elementos**



\#2#

const elemento = document.querySelector("#titulo")

&nbsp;

// Alterar conteúdo

elemento.textContent = "Novo título"

elemento.innerHTML = "<strong>Novo título</strong>"

&nbsp;

// Alterar estilo

elemento.style.color = "red"

elemento.style.fontSize = "24px"

&nbsp;

// Alterar classes

elemento.classList.add("ativo")

elemento.classList.remove("ativo")

elemento.classList.toggle("ativo")

&nbsp;

// Alterar atributos

elemento.setAttribute("href", "https://exemplo.com")

elemento.getAttribute("href")



\#/2#



**Criar e remover elementos**



\#2#

// Criar elemento

const novoParagrafo = document.createElement("p")

novoParagrafo.textContent = "Parágrafo criado via JS"

&nbsp;

// Adicionar ao DOM

document.body.appendChild(novoParagrafo)

&nbsp;

// Remover elemento

novoParagrafo.remove()



\#/2#



#### Eventos



\#1#

elemento.addEventListener("evento", function(event) {

&nbsp;	código a ser executado quando o evento ocorrer

})

\#/1#



Exemplo:



\#2#

const botao = document.querySelector("#meuBotao")

botao.addEventListener("click", function(event) {

&nbsp;	console.log("Botão clicado!")

})

\#/2#



**Eventos mais comuns**



\#2#

// Mouse

elemento.addEventListener("click", handler)       // clique

elemento.addEventListener("dblclick", handler)     // duplo clique

elemento.addEventListener("mouseover", handler)    // mouse sobre o elemento

elemento.addEventListener("mouseout", handler)     // mouse saiu do elemento

&nbsp;

// Teclado

document.addEventListener("keydown", handler)      // tecla pressionada

document.addEventListener("keyup", handler)        // tecla solta

&nbsp;

// Formulário

form.addEventListener("submit", handler)           // envio de formulário

input.addEventListener("change", handler)          // valor alterado

input.addEventListener("input", handler)           // digitação em tempo real

&nbsp;

// Página

window.addEventListener("load", handler)           // página carregada

window.addEventListener("resize", handler)         // janela redimensionada

\#/2#



#### Funções Assíncronas



**setTimeout e setInterval**



\#2#

// Executar uma vez após delay (em milissegundos)

setTimeout(function() {

&nbsp;	console.log("Executado após 2 segundos")

}, 2000)

&nbsp;

// Executar repetidamente a cada intervalo

const intervalo = setInterval(function() {

&nbsp;	console.log("Executado a cada 1 segundo")

}, 1000)

&nbsp;

// Cancelar intervalo

clearInterval(intervalo)



\#/2#



**Promises**



\#1#

const promessa = new Promise(function(resolve, reject) {

&nbsp;	// código assíncrono

&nbsp;	if (sucesso) {

&nbsp;		\&nbsp;\&nbsp;resolve(resultado)

&nbsp;	} else {

&nbsp;		\&nbsp;\&nbsp;reject(erro)

&nbsp;	}

})

promessa

.then(resultado => console.log(resultado))

.catch(erro => console.log(erro))



\#/1#



**Async/Await**



\#1#

async function nomeDaFuncao() {

&nbsp;	try {

&nbsp;		\&nbsp;\&nbsp;const resultado = await promessa

&nbsp;		\&nbsp;\&nbsp;return resultado

&nbsp;	} catch (erro) {

&nbsp;		\&nbsp;\&nbsp;console.log(erro)

&nbsp;	}

}



\#/1#



Exemplo:



\#2#

async function buscarDados() {

&nbsp;	try {

&nbsp;		\&nbsp;\&nbsp;const resposta = await fetch("https://api.exemplo.com/dados")

&nbsp;		\&nbsp;\&nbsp;const dados = await resposta.json()

&nbsp;		\&nbsp;\&nbsp;console.log(dados)

&nbsp;	} catch (erro) {

&nbsp;		\&nbsp;\&nbsp;console.log("Erro ao buscar dados: " + erro.message)

&nbsp;	}

}

&nbsp;

buscarDados()



\#/2#



#### Armazenamento Local (LocalStorage)



\#2#

// Salvar dado

localStorage.setItem("chave", "valor")

&nbsp;

// Salvar objeto (precisa converter para string)

localStorage.setItem("usuario", JSON.stringify({ nome: "João", idade: 30 }))

&nbsp;

// Recuperar dado

const valor = localStorage.getItem("chave")

&nbsp;

// Recuperar objeto

const usuario = JSON.parse(localStorage.getItem("usuario"))

&nbsp;

// Remover item

localStorage.removeItem("chave")

&nbsp;

// Limpar tudo

localStorage.clear()



\#/2#



