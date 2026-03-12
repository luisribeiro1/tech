#### O que é React

React é uma biblioteca JavaScript para construção de interfaces de usuário (UI).
Desenvolvida pelo Facebook, é baseada em **componentes** reutilizáveis e utiliza um
**DOM Virtual** para atualizar apenas o que mudou na tela, tornando as aplicações
rápidas e eficientes.

#### Como criar um projeto React

**Usando Vite (recomendado - mais rápido)**

\#2#

npm create vite@latest meu-projeto -- --template react

cd meu-projeto

npm install

npm run dev

\#/2#

**Usando Create React App (tradicional)**

\#2#

npx create-react-app meu-projeto

cd meu-projeto

npm start

\#/2#

#### Estrutura de pastas padrão (Vite)

\#1#

meu-projeto/

 	├── node\_modules/

 	├── public/

 	├── src/

 	│   ├── assets/

 	│   ├── components/

 	│   ├── App.jsx

 	│   └── main.jsx

 	├── index.html

 	├── package.json

 	└── vite.config.js

\#/1#

#### JSX - JavaScript XML

JSX é a sintaxe usada no React para escrever HTML dentro do JavaScript.

**Regras importantes:**

\#1#

// 1. Todo componente deve retornar um único elemento raiz

// 2. Use className no lugar de class

// 3. Tags sempre fechadas (inclusive as de auto-fechamento)

// 4. Expressões JavaScript dentro de { }

\#/1#

Exemplo:

\#2#

function MeuComponente() {

 	const nome = "Maria"

 	const idade = 25

 	return (

   	<div className="container">

     	<h1>Olá, {nome}!</h1>

     	<p>Você tem {idade} anos.</p>

     	<img src="foto.jpg" alt="foto" />

   	</div>

 	)

}

\#/2#

#### Componentes

Componentes são blocos de construção reutilizáveis da interface.
O nome deve começar com letra maiúscula (PascalCase).

**Componente funcional (padrão atual)**

\#1#

function NomeDoComponente() {

 	return (

   	<div>

     	<p>Conteúdo do componente</p>

   	</div>

 	)

}

export default NomeDoComponente

\#/1#

Exemplo:

\#2#

function Cabecalho() {

 	return (

   	<header>

     	<h1>Meu Site</h1>

     	<nav>

       	<a href="/">Início</a>

       	<a href="/sobre">Sobre</a>

     	</nav>

   	</header>

 	)

}

export default Cabecalho

\#/2#

**Usar (importar) um componente**

\#2#

import Cabecalho from "./components/Cabecalho"

function App() {

 	return (

   	<div>

     	<Cabecalho />

     	<p>Conteúdo principal</p>

   	</div>

 	)

}

\#/2#

#### Props

Props (propriedades) são dados passados de um componente pai para um componente filho.
São somente leitura — o componente filho não pode alterá-las.

\#1#

// Componente filho - recebe props

function NomeDoComponente(props) {

 	return <p>{props.nomeDaProp}</p>

}

// Ou com desestruturação (mais comum)

function NomeDoComponente({ prop1, prop2 }) {

 	return <p>{prop1} - {prop2}</p>

}

// Componente pai - passa props

<NomeDoComponente prop1="valor1" prop2="valor2" />

\#/1#

Exemplo:

\#2#

function CartaoUsuario({ nome, idade, email }) {

 	return (

   	<div className="cartao">

     	<h2>{nome}</h2>

     	<p>Idade: {idade}</p>

     	<p>Email: {email}</p>

   	</div>

 	)

}

// Uso:

<CartaoUsuario nome="João" idade={30} email="joao@email.com" />

\#/2#

**Prop children - conteúdo entre as tags**

\#2#

function Caixa({ children }) {

 	return <div className="caixa">{children}</div>

}

// Uso:

<Caixa>

 	<p>Qualquer conteúdo aqui dentro</p>

</Caixa>

\#/2#

#### Hook useState

Gerencia o estado (dados que mudam) dentro de um componente.
Quando o estado muda, o componente é re-renderizado.

\#1#

import { useState } from "react"

const \[estado, setEstado] = useState(valorInicial)

\#/1#

Exemplo:

\#2#

import { useState } from "react"

function Contador() {

 	const \[contador, setContador] = useState(0)

 	return (

   	<div>

     	<p>Contagem: {contador}</p>

     	<button onClick={() => setContador(contador + 1)}>+</button>

     	<button onClick={() => setContador(contador - 1)}>-</button>

     	<button onClick={() => setContador(0)}>Resetar</button>

   	</div>

 	)

}

\#/2#

**Estado com objetos**

\#2#

const \[usuario, setUsuario] = useState({ nome: "", email: "" })

// Atualizar sem perder as outras propriedades (usar spread)

setUsuario({ ...usuario, nome: "João" })

\#/2#

#### Hook useEffect

Executa efeitos colaterais: chamadas de API, manipulação do DOM, timers, etc.

\#1#

import { useEffect } from "react"

// Executa após toda re-renderização

useEffect(() => {

 	// código do efeito

})

// Executa apenas uma vez (ao montar o componente)

useEffect(() => {

 	// código do efeito

}, \[])

// Executa quando "dependencia" mudar

useEffect(() => {

 	// código do efeito

}, \[dependencia])

// Com limpeza (cleanup) - executa ao desmontar o componente

useEffect(() => {

 	// código do efeito

 	return () => {

   	// limpeza

 	}

}, \[])

\#/1#

Exemplo:

\#2#

import { useState, useEffect } from "react"

function ListaUsuarios() {

 	const \[usuarios, setUsuarios] = useState(\[])

 	useEffect(() => {

   	fetch("https://jsonplaceholder.typicode.com/users")

     	.then(resposta => resposta.json())

     	.then(dados => setUsuarios(dados))

 	}, \[])

 	return (

   	<ul>

     	{usuarios.map(usuario => (

       	<li key={usuario.id}>{usuario.name}</li>

     ))}

   	</ul>

 	)

}

\#/2#

#### Renderização de Listas

Use o método `.map()` para renderizar listas. Cada item deve ter uma prop `key` única.

\#2#

function ListaFrutas() {

 	const frutas = \["Maçã", "Banana", "Laranja", "Uva"]

 	return (

   	<ul>

     	{frutas.map((fruta, index) => (

       	<li key={index}>{fruta}</li>

     ))}

   	</ul>

 	)

}

\#/2#

**Com array de objetos**

\#2#

const produtos = \[

 	{ id: 1, nome: "Notebook", preco: 3500 },

 	{ id: 2, nome: "Mouse", preco: 150 },

 	{ id: 3, nome: "Teclado", preco: 250 },

]

function ListaProdutos() {

 	return (

   	<ul>

     	{produtos.map(produto => (

       	<li key={produto.id}>

         	{produto.nome} - R$ {produto.preco}

       	</li>

     ))}

   	</ul>

 	)

}

\#/2#

#### Renderização Condicional

\#2#

function Saudacao({ estaLogado }) {

 	// Usando if/else

 	if (estaLogado) {

   	return <h1>Bem-vindo de volta!</h1>

 	}

 	return <h1>Por favor, faça login.</h1>

}

function Painel({ usuario }) {

 	return (

   	<div>

     	{/\* Operador ternário \*/}

     	{usuario ? <p>Olá, {usuario.nome}</p> : <p>Visitante</p>}

     	{/\* Operador \&\& - renderiza apenas se verdadeiro \*/}

     	{usuario \&\& <button>Sair</button>}

   	</div>

 	)

}

\#/2#

#### Manipulação de Formulários

\#2#

import { useState } from "react"

function Formulario() {

 	const \[nome, setNome] = useState("")

 	const \[email, setEmail] = useState("")

 	function handleSubmit(event) {

   	event.preventDefault()

   	console.log({ nome, email })

 	}

 	return (

   	<form onSubmit={handleSubmit}>

     	<input

       	type="text"

       	value={nome}

       	onChange={(e) => setNome(e.target.value)}

       	placeholder="Seu nome"

     	/>

     	<input

       	type="email"

       	value={email}

       	onChange={(e) => setEmail(e.target.value)}

       	placeholder="Seu email"

     	/>

     	<button type="submit">Enviar</button>

   	</form>

 	)

}

\#/2#

#### Estilização

**CSS externo (arquivo .css)**

\#2#

// No arquivo Componente.css

.titulo {

 	color: blue;

 	font-size: 24px;

}

// No componente

import "./Componente.css"

function Componente() {

 	return <h1 className="titulo">Meu Título</h1>

}

\#/2#

**CSS Modules (escopo local - evita conflitos)**

\#2#

// No arquivo Componente.module.css

.titulo {

 	color: blue;

}

// No componente

import styles from "./Componente.module.css"

function Componente() {

 	return <h1 className={styles.titulo}>Meu Título</h1>

}

\#/2#

**Estilo inline**

\#2#

function Componente() {

 	const estilo = {

   	color: "blue",

   	fontSize: "24px",     // camelCase no lugar de font-size

   	backgroundColor: "#f0f0f0"

 	}

 	return <h1 style={estilo}>Meu Título</h1>

}

\#/2#

#### Hook useRef

Acessa diretamente elementos do DOM ou armazena valores que não causam re-renderização.

\#2#

import { useRef } from "react"

function CampoFoco() {

 	const inputRef = useRef(null)

 	function focarInput() {

   	inputRef.current.focus()

 	}

 	return (

   	<div>

     	<input ref={inputRef} type="text" />

     	<button onClick={focarInput}>Focar</button>

   	</div>

 	)

}

\#/2#

#### Hook useContext

Compartilha dados entre componentes sem precisar passar props manualmente em cada nível.

\#2#

import { createContext, useContext, useState } from "react"

// 1. Criar o contexto

const TemaContext = createContext()

// 2. Criar o Provider (envolve os componentes que precisam do dado)

function TemaProvider({ children }) {

 	const \[tema, setTema] = useState("claro")

 	return (

   	<TemaContext.Provider value={{ tema, setTema }}>

     	{children}

   	</TemaContext.Provider>

 	)

}

// 3. Consumir o contexto em qualquer componente filho

function BotaoTema() {

 	const { tema, setTema } = useContext(TemaContext)

 	return (

   	<button onClick={() => setTema(tema === "claro" ? "escuro" : "claro")}>

     	Tema atual: {tema}

   	</button>

 	)

}

// 4. Usar o Provider na raiz

function App() {

 	return (

   	<TemaProvider>

     	<BotaoTema />

   	</TemaProvider>

 	)

}

\#/2#

#### Hook useReducer

Alternativa ao useState para lógicas de estado mais complexas.

\#2#

import { useReducer } from "react"

const estadoInicial = { contador: 0 }

function reducer(estado, acao) {

 	switch (acao.type) {

   	case "incrementar":

     	return { contador: estado.contador + 1 }

   	case "decrementar":

     	return { contador: estado.contador - 1 }

   	case "resetar":

     	return estadoInicial

   	default:

     	return estado

 	}

}

function Contador() {

 	const \[estado, dispatch] = useReducer(reducer, estadoInicial)

 	return (

   	<div>

     	<p>Contagem: {estado.contador}</p>

     	<button onClick={() => dispatch({ type: "incrementar" })}>+</button>

     	<button onClick={() => dispatch({ type: "decrementar" })}>-</button>

     	<button onClick={() => dispatch({ type: "resetar" })}>Resetar</button>

   	</div>

 	)

}

\#/2#

#### Criando Hooks Customizados

Hooks customizados permitem extrair e reutilizar lógica com estado entre componentes.
O nome deve começar com **use**.

\#2#

import { useState, useEffect } from "react"

// Hook customizado para buscar dados de uma API

function useFetch(url) {

 	const \[dados, setDados] = useState(null)

 	const \[carregando, setCarregando] = useState(true)

 	const \[erro, setErro] = useState(null)

 	useEffect(() => {

   	fetch(url)

     	.then(res => res.json())

     	.then(data => {

       	setDados(data)

       	setCarregando(false)

     	})

     	.catch(err => {

       	setErro(err.message)

       	setCarregando(false)

     	})

 	}, \[url])

 	return { dados, carregando, erro }

}

// Uso em qualquer componente

function ListaPostagens() {

 	const { dados, carregando, erro } = useFetch("https://jsonplaceholder.typicode.com/posts")

 	if (carregando) return <p>Carregando...</p>

 	if (erro) return <p>Erro: {erro}</p>

 	return (

   	<ul>

     	{dados.map(post => (

       	<li key={post.id}>{post.title}</li>

     ))}

   	</ul>

 	)

}

\#/2#

#### React Router (Navegação entre páginas)

**Instalação**

\#2#

npm install react-router-dom

\#/2#

**Configuração e uso**

\#2#

import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom"

// Componentes de página

function Inicio() { return <h1>Página Inicial</h1> }

function Sobre() { return <h1>Sobre</h1> }

function Usuario() {

 	const { id } = useParams()    // pega parâmetro da URL

 	return <h1>Usuário: {id}</h1>

}

function NaoEncontrado() { return <h1>404 - Página não encontrada</h1> }

// Configuração das rotas

function App() {

 	return (

   	<BrowserRouter>

     	<nav>

       	<Link to="/">Início</Link>

       	<Link to="/sobre">Sobre</Link>

     	</nav>

     	<Routes>

       	<Route path="/" element={<Inicio />} />

       	<Route path="/sobre" element={<Sobre />} />

       	<Route path="/usuario/:id" element={<Usuario />} />

       	<Route path="\*" element={<NaoEncontrado />} />

     	</Routes>

   	</BrowserRouter>

 	)

}

\#/2#

**Navegação programática**

\#2#

function BotaoVoltar() {

 	const navigate = useNavigate()

 	return (

   	<button onClick={() => navigate("/")}>Ir para Início</button>

 	)

}

\#/2#

