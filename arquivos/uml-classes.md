#### O que é Programação Orientada a Objetos

A Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o software em objetos.

Um objeto representa algo do mundo real ou conceitual.

Exemplos:

1. Mundo real: Carro -> em software: Objeto Carro
2. Mundo real: Pessoa -> em software: Objeto Pessoa
3. Mundo real: Conta bancária -> em software: Objeto ContaBancaria

&nbsp;

**Cada objeto possui:**

1. Atributos → características
2. Métodos → comportamentos

&nbsp;

**Exemplo do mundo real**

Carro:

atributos

1. cor
2. modelo
3. velocidade

métodos

1. acelerar
2. frear



#### Classes

Uma classe é o molde para criar objetos. É a matriz ou o modelo que será usado na geração dos objetos.

&nbsp;

**Analogia:**

1. Classe = Planta de uma casa
2. Objeto = Casa construída

&nbsp;

Exemplo em C# com a criação da classe Pessoa

\#2#

class Pessoa

{

&nbsp;   public string Nome;

&nbsp;   public int Idade;

}

\#/2#

Criando dois objetos diferentes da mesma classe

\#2#

Pessoa p1 = new Pessoa();

p1.Nome = "Ana";

p1.Idade = 25;

&nbsp;

Pessoa p2 = new Pessoa();

p2.Nome = "Carlos";

p2.Idade = 30;

\#/2#



#### Atributos

Atributos representam dados da classe. São as características que identificam os objetos.

Exemplo em C#

\#2#

class Produto

{

&nbsp;   public string Nome;

&nbsp;   public double Preco;

&nbsp;   public int Estoque;

}

\#/2#

O objeto criado:

\#2#

Produto p = new Produto();

p.Nome = "Notebook";

p.Preco = 3500;

p.Estoque = 10;

\#/2#



#### Métodos

Métodos representam ações que o objeto pode realizar. São os comportamentos da classe.

Exemplo em C#

\#2#

class Calculadora

{

&nbsp;   public int Somar(int a, int b)

&nbsp;   {

&nbsp;       return a + b;

&nbsp;   }

}

\#/2#

Como usar:

\#2#

Calculadora calc = new Calculadora();

int resultado = calc.Somar(5,3);

Console.WriteLine(resultado);

&nbsp;

O resultado será: 8

\#/2#



#### Construtores

Construtores são métodos especiais usados na criação do objeto.

Eles têm o mesmo nome da classe.

Exemplo em C#

\#2#

class Pessoa

{

&nbsp;   public string Nome;

&nbsp;   public int Idade;

&nbsp;

&nbsp;   public Pessoa(string nome, int idade)

&nbsp;   {

&nbsp;       Nome = nome;

&nbsp;       Idade = idade;

&nbsp;   }

}

\#/2#

Uso:

\#2#

Pessoa p = new Pessoa("João", 40);

\#/2#



#### Encapsulamento

Encapsulamento significa proteger os dados do objeto.

Em vez de acessar diretamente os atributos, usamos propriedades ou métodos.

**Problema sem encapsulamento**

\#2#

class Conta

{

&nbsp;   public double Saldo;

}

\#/2#

Alguém poderia fazer:

\#2#

conta.Saldo = -1000

\#/2#

Isso não faz sentido.

**Com encapsulamento**

\#2#

class Conta

{

&nbsp;   private double saldo;

&nbsp;

&nbsp;   public void Depositar(double valor)

&nbsp;   {

&nbsp;       saldo += valor;

&nbsp;   }

&nbsp;

&nbsp;   public void Sacar(double valor)

&nbsp;   {

&nbsp;       if(valor <= saldo)

&nbsp;           saldo -= valor;

&nbsp;   }

&nbsp;

&nbsp;   public double GetSaldo()

&nbsp;   {

&nbsp;       return saldo;

&nbsp;   }

}

\#/2#

Uso:

\#2#

Conta c = new Conta();

c.Depositar(500);

c.Sacar(200);

Console.WriteLine(c.GetSaldo());

\#/2#



#### Propriedades (Properties)

Em C# usamos muito properties.

Exemplo em C#

\#2#

class Produto

{

&nbsp;   public string Nome { get; set; }

&nbsp;   public double Preco { get; set; }

}

\#/2#

Uso:

\#2#

Produto p = new Produto();

p.Nome = "Celular";

p.Preco = 1500;

\#/2#



#### Abstração

Abstração significa mostrar apenas o que é importante.

Exemplo:

Quando usamos um carro:

1. sabemos acelerar
2. sabemos frear
3. Mas não precisamos saber como funciona o motor.

Exemplo em código

\#2#

class Impressora

{

&nbsp;   public void Imprimir()

&nbsp;   {

&nbsp;       Console.WriteLine("Imprimindo documento...");

&nbsp;   }

}

\#/2#

O usuário da classe não precisa saber como a impressão funciona internamente.



#### Herança

Herança permite que uma classe herede características de outra.

\#2#

Animal

&nbsp;  |

&nbsp;  ├── Cachorro

&nbsp;  └── Gato

\#/2#

**Classe base**

\#2#

class Animal

{

&nbsp;   public string Nome;

&nbsp;

&nbsp;   public void Dormir()

&nbsp;   {

&nbsp;       Console.WriteLine("Dormindo...");

&nbsp;   }

}

\#/2#

**Classe filha**

\#2#

class Cachorro : Animal

{

&nbsp;   public void Latir()

&nbsp;   {

&nbsp;       Console.WriteLine("Au Au");

&nbsp;   }

}

\#/2#

Uso

\#2#

Cachorro c = new Cachorro();

c.Nome = "Rex";

c.Dormir();

c.Latir();

\#/2#



#### Polimorfismo

Polimorfismo significa mesma interface, comportamentos diferentes.

**Exemplo clássico**

Animais fazem sons diferentes.

**Classe base**

\#2#

class Animal

{

&nbsp;   public virtual void EmitirSom()

&nbsp;   {

&nbsp;       Console.WriteLine("Som genérico");

&nbsp;   }

}

\#/2#

**Classes derivadas**

\#2#

class Cachorro : Animal

{

&nbsp;   public override void EmitirSom()

&nbsp;   {

&nbsp;       Console.WriteLine("Au Au");

&nbsp;   }

}

&nbsp;

class Gato : Animal

{

&nbsp;   public override void EmitirSom()

&nbsp;   {

&nbsp;       Console.WriteLine("Miau");

&nbsp;   }

}

\#/2#

Uso

\#2#

Animal a1 = new Cachorro();

Animal a2 = new Gato();

a1.EmitirSom();

a2.EmitirSom();

\#/2#

Saída:

\#2#

Au Au

Miau

\#/2#



#### Classes Abstratas

Classes abstratas não podem ser instanciadas.

Elas servem como modelo para outras classes.

Exemplo em C#

\#2#

abstract class Forma

{

&nbsp;   public abstract double CalcularArea();

}

\#/2#

**Classe concreta**

\#2#

class Quadrado : Forma

{

&nbsp;   public double Lado;

&nbsp;

&nbsp;   public override double CalcularArea()

&nbsp;   {

&nbsp;       return Lado * Lado;

&nbsp;   }

}

\#/2#



#### Interfaces

Interfaces definem contratos.

Ou seja:

1. Se implementar esta interface,
2. deve implementar estes métodos.

**Interface**

\#2#

interface IPagamento

{

&nbsp;   void Pagar(double valor);

}

\#/2#

**Implementação**

\#2#

class CartaoCredito : IPagamento

{

&nbsp;   public void Pagar(double valor)

&nbsp;   {

&nbsp;       Console.WriteLine($"Pagamento de {valor} no cartão.");

&nbsp;   }

}

\#/2#



#### Composição

Composição significa que uma classe possui outra classe dentro dela.

**Exemplo**

Pedido possui Cliente.

\#2#

class Cliente

{

&nbsp;   public string Nome { get; set; }

}

&nbsp;

class Pedido

{

&nbsp;   public Cliente Cliente { get; set; }

}

\#/2#

Uso:

\#2#

Cliente c = new Cliente();

c.Nome = "Maria";

&nbsp;

Pedido p = new Pedido();

p.Cliente = c;

\#/2#
