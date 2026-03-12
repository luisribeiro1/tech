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



Construtores



Construtores são métodos especiais usados na criação do objeto.



Eles têm o mesmo nome da classe.



Exemplo

class Pessoa

{

&nbsp;   public string Nome;

&nbsp;   public int Idade;



&nbsp;   public Pessoa(string nome, int idade)

&nbsp;   {

&nbsp;       Nome = nome;

&nbsp;       Idade = idade;

&nbsp;   }

}



Uso:



Pessoa p = new Pessoa("João", 40);

6\. Encapsulamento



Encapsulamento significa proteger os dados do objeto.



Em vez de acessar diretamente os atributos, usamos propriedades ou métodos.



Problema sem encapsulamento

class Conta

{

&nbsp;   public double Saldo;

}



Alguém poderia fazer:



conta.Saldo = -1000



Isso não faz sentido.



Com encapsulamento

class Conta

{

&nbsp;   private double saldo;



&nbsp;   public void Depositar(double valor)

&nbsp;   {

&nbsp;       saldo += valor;

&nbsp;   }



&nbsp;   public void Sacar(double valor)

&nbsp;   {

&nbsp;       if(valor <= saldo)

&nbsp;           saldo -= valor;

&nbsp;   }



&nbsp;   public double GetSaldo()

&nbsp;   {

&nbsp;       return saldo;

&nbsp;   }

}



Uso:



Conta c = new Conta();



c.Depositar(500);

c.Sacar(200);



Console.WriteLine(c.GetSaldo());

7\. Propriedades (Properties)



Em C# usamos muito properties.



Exemplo

class Produto

{

&nbsp;   public string Nome { get; set; }

&nbsp;   public double Preco { get; set; }

}



Uso:



Produto p = new Produto();



p.Nome = "Celular";

p.Preco = 1500;

8\. Abstração



Abstração significa mostrar apenas o que é importante.



Exemplo:



Quando usamos um carro:



sabemos acelerar



sabemos frear



Mas não precisamos saber como funciona o motor.



Exemplo em código

class Impressora

{

&nbsp;   public void Imprimir()

&nbsp;   {

&nbsp;       Console.WriteLine("Imprimindo documento...");

&nbsp;   }

}



O usuário da classe não precisa saber como a impressão funciona internamente.



9\. Herança



Herança permite que uma classe herde características de outra.



Animal

&nbsp;  |

&nbsp;  ├── Cachorro

&nbsp;  └── Gato

Classe base

class Animal

{

&nbsp;   public string Nome;



&nbsp;   public void Dormir()

&nbsp;   {

&nbsp;       Console.WriteLine("Dormindo...");

&nbsp;   }

}

Classe filha

class Cachorro : Animal

{

&nbsp;   public void Latir()

&nbsp;   {

&nbsp;       Console.WriteLine("Au Au");

&nbsp;   }

}

Uso

Cachorro c = new Cachorro();



c.Nome = "Rex";

c.Dormir();

c.Latir();

10\. Polimorfismo



Polimorfismo significa mesma interface, comportamentos diferentes.



Exemplo clássico



Animais fazem sons diferentes.



Classe base

class Animal

{

&nbsp;   public virtual void EmitirSom()

&nbsp;   {

&nbsp;       Console.WriteLine("Som genérico");

&nbsp;   }

}

Classes derivadas

class Cachorro : Animal

{

&nbsp;   public override void EmitirSom()

&nbsp;   {

&nbsp;       Console.WriteLine("Au Au");

&nbsp;   }

}



class Gato : Animal

{

&nbsp;   public override void EmitirSom()

&nbsp;   {

&nbsp;       Console.WriteLine("Miau");

&nbsp;   }

}

Uso

Animal a1 = new Cachorro();

Animal a2 = new Gato();



a1.EmitirSom();

a2.EmitirSom();



Saída:



Au Au

Miau

11\. Classes Abstratas



Classes abstratas não podem ser instanciadas.



Elas servem como modelo para outras classes.



Exemplo

abstract class Forma

{

&nbsp;   public abstract double CalcularArea();

}

Classe concreta

class Quadrado : Forma

{

&nbsp;   public double Lado;



&nbsp;   public override double CalcularArea()

&nbsp;   {

&nbsp;       return Lado \* Lado;

&nbsp;   }

}

12\. Interfaces



Interfaces definem contratos.



Ou seja:



Se implementar esta interface,

deve implementar estes métodos

Interface

interface IPagamento

{

&nbsp;   void Pagar(double valor);

}

Implementação

class CartaoCredito : IPagamento

{

&nbsp;   public void Pagar(double valor)

&nbsp;   {

&nbsp;       Console.WriteLine($"Pagamento de {valor} no cartão.");

&nbsp;   }

}

13\. Composição



Composição significa que uma classe possui outra classe dentro dela.



Exemplo



Pedido possui Cliente.



class Cliente

{

&nbsp;   public string Nome { get; set; }

}



class Pedido

{

&nbsp;   public Cliente Cliente { get; set; }

}



Uso:



Cliente c = new Cliente();

c.Nome = "Maria";



Pedido p = new Pedido();

p.Cliente = c;



























