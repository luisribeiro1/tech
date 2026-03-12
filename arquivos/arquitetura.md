#### O que é Arquitetura de Software



Arquitetura de software é a estrutura fundamental de um sistema, composta por:

1. Componentes
2. Relacionamentos entre componentes
3. Regras de interação
4. Princípios que guiam o desenvolvimento

&#x20;

Ela define como o sistema é organizado.



#### Objetivos da Arquitetura



Uma boa arquitetura busca:

&#x20;

**Escalabilidade**



Suportar crescimento.



Exemplo:

1. sistema com 100 usuários
2. depois 100.000 usuários

&#x20;

**Manutenibilidade**



Facilidade de alterar o sistema.



Exemplo:

1. Adicionar Pix em um sistema financeiro.

&#x20;

**Reutilização**



Componentes reaproveitáveis ou modular.



Exemplo:

1. módulo de autenticação
2. módulo de pagamentos

&#x20;

**Testabilidade**



Permitir testes automatizados.



Exemplo:

1. testes unitários
2. testes de integração

&#x20;

**Performance**



Eficiência do sistema.



Exemplo:

1. cache
2. filas
3. processamento assíncrono



#### Tipos de Arquitetura de Software

&#x20;

Existem vários estilos arquiteturais. Os principais:



1. Arquitetura em Camadas
2. MVC
3. Arquitetura Hexagonal
4. Clean Architecture
5. Microservices
6. Event Driven
7. Serverless



#### Arquitetura em Camadas (Layered Architecture)

&#x20;

É a arquitetura mais comum, de fácil aplicação e entendimento.

&#x20;

Estrutura típica:

\#1#

Apresentação (UI)

&#x20;    ↓

Aplicação

&#x20;    ↓

Domínio

&#x20;    ↓

Infraestrutura

&#x20;    ↓

Banco de dados

\#/1#



Exemplo prático de um sistema web.



\#1#

React

&#x20;  ↓

API Node ou C#

&#x20;  ↓

Regras de negócio

&#x20;  ↓

Repository

&#x20;  ↓

Banco SQL

\#/1#



##### Camadas

**Presentation Layer**



Interface com usuário.



Exemplo:

1. React
2. HTML
3. Mobile



**Application Layer**



Coordena casos de uso.



Exemplo:

1. CriarPedido
2. RegistrarUsuario
3. GerarRelatorio



**Domain Layer**



Regras de negócio.



Exemplo:

1. Pedido não pode ter valor negativo
2. Usuário precisa ter CPF válido



**Infrastructure Layer**



Acesso a recursos externos.



Exemplo:

1. banco de dados
2. APIs externas
3. arquivos



#### MVC (Model View Controller)



É uma estrutura em três camadas com separação de responsabilidades em cada uma delas. Muito usado em:

1. PHP / Laravel
2. Python / Django
3. Ruby on Rails
4. ASP.NET

&#x20;

Estrutura:



\#1#

Controller

&#x20;  ↓

Model

&#x20;  ↓

View

\#/1#



##### Componentes



**Model**



Representa os dados.



Exemplo:



\#2#

class Produto

{

&#x20;   public int Id {get;set;}

&#x20;   public string Nome {get;set;}

&#x20;   public decimal Preco {get;set;}

}

\#/2#



**View**



Interface visual. Em ambientes web ele é representado pelo HTML, CSS e demais recursos visuais e de interface



**Controller**



Controla fluxo.



Exemplo:



\#2#

public IActionResult Listar()

{

&#x20;   var produtos = repositorio.Listar();

&#x20;   return View(produtos);

}

\#/2#



#### Monólito vs Microservices



**Monólito**



Tudo em um único sistema.

1. Frontend
2. Backend
3. Banco

&#x20;

Vantagens:

1. simples
2. fácil deploy
3. menos complexidade



Desvantagens:

1. difícil escalar partes específicas
2. código cresce demais

&#x20;

**Microservices**



Sistema dividido em serviços independentes.

&#x20;

Exemplo:

1. Auth Service
2. Pagamento Service
3. Pedidos Service
4. Estoque Service

&#x20;

Geralmente, cada serviço tem:

1. banco próprio
2. deploy independente



#### Arquitetura Hexagonal (Ports and Adapters)



Ideia central: Separar o núcleo do sistema do mundo externo.

&#x20;

**Estrutura:**



\#1#

&#x20;       API

&#x20;        |

Adapter — Core — Adapter

&#x20;        |

&#x20;      Banco

\#/1#



O Core contém:

1. regras de negócio
2. entidades
3. casos de uso

&#x20;

Adapters:

1. Conectam o sistema ao mundo externo.



Exemplo:

1. banco de dados
2. API REST
3. CLI
4. fila



#### Arquitetura Orientada a Eventos



Baseada em eventos do sistema.

&#x20;

Exemplo:

1. PedidoCriado
2. PagamentoAprovado
3. ProdutoEnviado

&#x20;

Arquitetura:



\#1#

Producer → Event Bus → Consumer

\#/1#



Ferramentas comuns:

1. Kafka
2. RabbitMQ
3. AWS SNS





