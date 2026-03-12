#### O que é SQL e MySQL

SQL (Structured Query Language) é a linguagem padrão para gerenciar e manipular
bancos de dados relacionais. MySQL é um dos sistemas gerenciadores de banco de dados
(SGBD) mais populares do mundo, open source e amplamente usado em aplicações web.

**Conceitos fundamentais:**

Um banco de dados relacional organiza dados em **tabelas** (linhas e colunas).
Cada tabela representa uma entidade (ex: usuários, produtos, pedidos).
As tabelas se relacionam entre si por meio de **chaves** (primary key e foreign key).



#### Tipos de Dados principais no MySQL

**Texto**

\#1#

VARCHAR(n)   -- texto variável até n caracteres (ex: nomes, emails)

CHAR(n)      -- texto fixo de n caracteres (ex: siglas, CEP)

TEXT         -- texto longo sem limite definido (ex: descrições)

ENUM(...)    -- valor de uma lista predefinida (ex: 'ativo','inativo')

\#/1#

**Numéricos**

\#1#

INT          -- número inteiro (ex: idade, quantidade)

DECIMAL(n,d) -- número decimal com n dígitos e d casas (ex: preços)

FLOAT        -- número decimal de ponto flutuante (menos preciso)

BOOLEAN      -- verdadeiro ou falso (armazenado como 1 ou 0)

\#/1#

**Data e hora**

\#1#

DATE         -- apenas data         (ex: 2024-12-31)

TIME         -- apenas hora         (ex: 14:30:00)

DATETIME     -- data e hora         (ex: 2024-12-31 14:30:00)

TIMESTAMP    -- data e hora com fuso horário automático

\#/1#



#### Banco de Dados

\#1#

CREATE DATABASE nome\_do\_banco;		-- Criar banco de dados

USE nome\_do\_banco;			-- Selecionar banco de dados para uso

SHOW DATABASES;				-- Listar bancos de dados existentes

DROP DATABASE nome\_do\_banco;		-- Remover banco de dados

\#/1#



#### Tabelas

**Criar tabela**

\#1#

CREATE TABLE nome\_da\_tabela (

 	coluna1 TIPO RESTRIÇÕES,

 	coluna2 TIPO RESTRIÇÕES,

 	...

);

\#/1#

Exemplo:

\#2#

CREATE TABLE usuarios (

 	id         INT AUTO\_INCREMENT PRIMARY KEY,

 	nome       VARCHAR(100) NOT NULL,

 	email      VARCHAR(150) NOT NULL UNIQUE,

 	idade      INT,

 	ativo      BOOLEAN DEFAULT true,

 	criado\_em  TIMESTAMP DEFAULT CURRENT\_TIMESTAMP

);

\#/2#

**Restrições (Constraints) mais usadas**

\#1#

PRIMARY KEY   	-- identificador único da linha

NOT NULL      	-- campo obrigatório, não aceita nulo

UNIQUE        	-- valor não pode se repetir na coluna

DEFAULT valor 	-- valor padrão se não informado

AUTO\_INCREMENT 	-- incrementa automaticamente (usado com INT e PK)

FOREIGN KEY   	-- referencia a chave primária de outra tabela

\#/1#

**Alterar tabela**

\#2#

ALTER TABLE usuarios ADD COLUMN telefone VARCHAR(20);		-- Adicionar coluna

ALTER TABLE usuarios MODIFY COLUMN telefone VARCHAR(30);	-- Modificar tipo de coluna

ALTER TABLE usuarios RENAME COLUMN telefone TO celular;		-- Renomear coluna

ALTER TABLE usuarios DROP COLUMN celular;			-- Remover coluna

\#/2#

**Remover e visualizar tabelas**

\#2#

SHOW TABLES;				-- Listar tabelas do banco atual

DESC usuarios;				-- Ver estrutura da tabela

DROP TABLE usuarios;			-- Remover tabela

DROP TABLE IF EXISTS usuarios;		-- Remover tabela somente se existir (sem erro)

\#/2#



#### INSERT - Inserindo dados

\#1#

-- Inserir um registro

INSERT INTO tabela (coluna1, coluna2) VALUES (valor1, valor2);

-- Inserir múltiplos registros

INSERT INTO tabela (coluna1, coluna2) VALUES

 	(valor1a, valor2a),

 	(valor1b, valor2b),

 	(valor1c, valor2c);

\#/1#

Exemplo:

\#2#

INSERT INTO usuarios (nome, email, idade) VALUES

 	('João Silva',  'joao@email.com',  30),

 	('Maria Santos','maria@email.com', 25),

 	('Pedro Lima',  'pedro@email.com', 35);

\#/2#



#### SELECT - Consultando dados

\#1#

SELECT \* FROM tabela;				-- Selecionar todas as colunas

SELECT coluna1, coluna2 FROM tabela;		-- Selecionar colunas específicas

SELECT coluna1 AS apelido FROM tabela;		-- Usar alias (apelido) nas colunas

\#/1#

Exemplo:

\#2#

SELECT \* FROM usuarios;				-- Todos os usuários

SELECT nome, email FROM usuarios;		-- Apenas nome e email

SELECT nome AS 'Nome Completo', email AS 'E-mail' FROM usuarios;	-- Com alias

\#/2#



#### WHERE - Filtrando dados

\#1#

SELECT \* FROM tabela WHERE condição;

\#/1#

Exemplo:

\#2#

-- Operadores de comparação

SELECT \* FROM usuarios WHERE idade > 18;

SELECT \* FROM usuarios WHERE idade BETWEEN 20 AND 30;

SELECT \* FROM usuarios WHERE email = 'joao@email.com';

SELECT \* FROM usuarios WHERE nome != 'João';

&nbsp;

-- Operadores lógicos

SELECT \* FROM usuarios WHERE idade > 18 AND ativo = true;

SELECT \* FROM usuarios WHERE idade < 18 OR ativo = false;

SELECT \* FROM usuarios WHERE NOT ativo = true;

&nbsp;

-- Verificar nulo

SELECT \* FROM usuarios WHERE telefone IS NULL;

SELECT \* FROM usuarios WHERE telefone IS NOT NULL;

&nbsp;

-- Busca parcial com LIKE

SELECT \* FROM usuarios WHERE nome LIKE 'Jo%';   -- começa com Jo

SELECT \* FROM usuarios WHERE nome LIKE '%Silva'; -- termina com Silva

SELECT \* FROM usuarios WHERE nome LIKE '%ao%';  -- contém ao

&nbsp;

-- Lista de valores com IN

SELECT \* FROM usuarios WHERE idade IN (20, 25, 30);

SELECT \* FROM usuarios WHERE cidade NOT IN ('SP', 'RJ');

\#/2#



#### ORDER BY, LIMIT e OFFSET

\#2#

-- Ordenar crescente (padrão)

SELECT \* FROM usuarios ORDER BY nome ASC;

&nbsp;

-- Ordenar decrescente

SELECT \* FROM usuarios ORDER BY idade DESC;

&nbsp;

-- Ordenar por múltiplas colunas

SELECT \* FROM usuarios ORDER BY cidade ASC, nome ASC;

&nbsp;

-- Limitar número de resultados

SELECT \* FROM usuarios LIMIT 10;

&nbsp;

-- Paginação com OFFSET (pular registros)

SELECT \* FROM usuarios LIMIT 10 OFFSET 20;  -- página 3 (registros 21 a 30)

\#/2#



#### UPDATE - Atualizando dados

\#1#

UPDATE tabela SET coluna1 = valor1, coluna2 = valor2 WHERE condição;

\#/1#

Exemplo:

\#2#

-- Atualizar um campo

UPDATE usuarios SET ativo = false WHERE id = 3;

&nbsp;

-- Atualizar múltiplos campos

UPDATE usuarios

 	SET nome = 'João Souza', email = 'joao.souza@email.com'

 	WHERE id = 1;

\#/2#

**Atenção:** sempre use WHERE no UPDATE. Sem ele, todos os registros serão alterados.



#### DELETE - Removendo dados

\#1#

DELETE FROM tabela WHERE condição;

\#/1#

Exemplo:

\#2#

-- Remover registro específico

DELETE FROM usuarios WHERE id = 5; 

&nbsp;

-- Remover com condição

DELETE FROM usuarios WHERE ativo = false;

&nbsp;

-- Remover todos os registros (mantém a estrutura da tabela)

DELETE FROM usuarios;

&nbsp;

-- Forma mais rápida de apagar todos (reinicia AUTO\_INCREMENT)

TRUNCATE TABLE usuarios;

\#/2#

**Atenção:** sempre use WHERE no DELETE. Sem ele, todos os registros serão removidos.



#### Funções de Agregação

Funções que realizam cálculos sobre um conjunto de linhas e retornam um único valor.

\#2#

-- Contar registros

SELECT COUNT(\*) FROM usuarios;

SELECT COUNT(telefone) FROM usuarios;  -- ignora nulos

&nbsp;

-- Soma, média, mínimo e máximo

SELECT SUM(preco)   AS total    FROM produtos;

SELECT AVG(preco)   AS media    FROM produtos;

SELECT MIN(preco)   AS mais\_barato FROM produtos;

SELECT MAX(preco)   AS mais\_caro   FROM produtos;

\#/2#

**GROUP BY - Agrupar resultados**

\#2#

-- Contar usuários por cidade

SELECT cidade, COUNT(\*) AS total

FROM usuarios

GROUP BY cidade;

&nbsp;

-- Média de preço por categoria

SELECT categoria, AVG(preco) AS preco\_medio

FROM produtos

GROUP BY categoria;

&nbsp;

-- Maior salário por departamento

SELECT departamento, MAX(salario) AS maior\_salario

FROM funcionarios

GROUP BY departamento;

\#/2#

**HAVING - Filtrar grupos (como WHERE, mas para GROUP BY)**

\#2#

-- Cidades com mais de 10 usuários

SELECT cidade, COUNT(\*) AS total

FROM usuarios

GROUP BY cidade

HAVING total > 10;

&nbsp;

-- Categorias com preço médio acima de 100

SELECT categoria, AVG(preco) AS preco\_medio

FROM produtos

GROUP BY categoria

HAVING preco\_medio > 100

ORDER BY preco\_medio DESC;

\#/2#



#### JOINs - Combinando tabelas

JOINs combinam linhas de duas ou mais tabelas com base em uma coluna relacionada.

**Tabelas de exemplo para os JOINs:**

\#2#

CREATE TABLE clientes (

 	id    INT PRIMARY KEY AUTO\_INCREMENT,

 	nome  VARCHAR(100),

 	email VARCHAR(150)

);

CREATE TABLE pedidos (

 	id          INT PRIMARY KEY AUTO\_INCREMENT,

 	cliente\_id  INT,

 	produto     VARCHAR(100),

 	valor       DECIMAL(10,2),

 	FOREIGN KEY (cliente\_id) REFERENCES clientes(id)

);

\#/2#

**INNER JOIN - apenas registros que existem nas duas tabelas**

\#2#

SELECT clientes.nome, pedidos.produto, pedidos.valor

FROM clientes

INNER JOIN pedidos ON clientes.id = pedidos.cliente\_id;

&nbsp;

-- Com alias nas tabelas (mais legível)

SELECT c.nome, p.produto, p.valor

FROM clientes c

INNER JOIN pedidos p ON c.id = p.cliente\_id;

\#/2#

**LEFT JOIN - todos da tabela da esquerda, mesmo sem correspondência**

\#2#

-- Todos os clientes, com ou sem pedidos

SELECT c.nome, p.produto, p.valor

FROM clientes c

LEFT JOIN pedidos p ON c.id = p.cliente\_id;

&nbsp;

-- Clientes que nunca fizeram pedido

SELECT c.nome

FROM clientes c

LEFT JOIN pedidos p ON c.id = p.cliente\_id

WHERE p.id IS NULL;

\#/2#

**RIGHT JOIN - todos da tabela da direita, mesmo sem correspondência**

\#2#

-- Todos os pedidos, mesmo de clientes removidos

SELECT c.nome, p.produto, p.valor

FROM clientes c

RIGHT JOIN pedidos p ON c.id = p.cliente\_id;

\#/2#

**Múltiplos JOINs**

\#2#

SELECT c.nome, p.produto, e.status

FROM clientes c

INNER JOIN pedidos      p ON c.id = p.cliente\_id

INNER JOIN entregas     e ON p.id = e.pedido\_id

WHERE e.status = 'pendente';

\#/2#



#### Subqueries - Subconsultas

Uma subquery é uma consulta SELECT dentro de outra consulta.

**No WHERE**

\#2#

-- Clientes que fizeram ao menos um pedido acima de R$500

SELECT nome FROM clientes

WHERE id IN (

 	SELECT cliente\_id FROM pedidos WHERE valor > 500

);

&nbsp;

-- Produtos mais caros que a média

SELECT nome, preco FROM produtos

WHERE preco > (

 	SELECT AVG(preco) FROM produtos

);

\#/2#

**No FROM (tabela derivada)**

\#2#

-- Média dos totais por cliente

SELECT cliente\_id, AVG(total) AS media\_gasta

FROM (

 	SELECT cliente\_id, SUM(valor) AS total

 	FROM pedidos

 	GROUP BY cliente\_id

) AS totais\_por\_cliente

GROUP BY cliente\_id;

\#/2#

**Subquery correlacionada (referencia a tabela externa)**

\#2#

-- Clientes cujo total de pedidos supera R$1000

SELECT nome FROM clientes c

WHERE (

 	SELECT SUM(valor) FROM pedidos p

 	WHERE p.cliente\_id = c.id

) > 1000;

\#/2#

**EXISTS - verifica se subquery retorna algum resultado**

\#2#

-- Clientes que possuem pelo menos um pedido

SELECT nome FROM clientes c

WHERE EXISTS (

 	SELECT 1 FROM pedidos p WHERE p.cliente\_id = c.id

);

\#/2#



#### Índices e Performance

Índices aceleram consultas, mas consomem espaço e tornam INSERT/UPDATE/DELETE mais lentos.

**Criar e remover índices**

\#2#

-- Criar índice simples

CREATE INDEX idx\_email ON usuarios(email);

&nbsp;

-- Criar índice único

CREATE UNIQUE INDEX idx\_email\_unico ON usuarios(email);

&nbsp;

-- Criar índice composto (útil para buscas por múltiplas colunas)

CREATE INDEX idx\_cidade\_ativo ON usuarios(cidade, ativo);

&nbsp;

-- Listar índices de uma tabela

SHOW INDEX FROM usuarios;

&nbsp;

-- Remover índice

DROP INDEX idx\_email ON usuarios;

\#/2#

**Boas práticas de índices**

\#1#

Criar índice em colunas usadas frequentemente no WHERE

Criar índice em colunas usadas em JOINs (foreign keys)

Criar índice em colunas usadas no ORDER BY

Não indexar colunas com poucos valores distintos (ex: booleanos)

Não criar índices em excesso em tabelas com muitos INSERTs

\#/1#

**EXPLAIN - analisar performance de uma query**

\#2#

-- Ver como o MySQL executa a query

EXPLAIN SELECT \* FROM usuarios WHERE email = 'joao@email.com';

&nbsp;

-- Colunas importantes do resultado:

-- type:  ALL = leitura completa (ruim) | ref/eq\_ref = usa índice (bom)

-- key:   índice que foi utilizado

-- rows:  estimativa de linhas lidas (menor = melhor)

\#/2#

**Dicas gerais de performance**

\#1#

-- Evitar SELECT \* em produção (trazer só o necessário)

SELECT id, nome, email FROM usuarios;

-- Evitar funções em colunas indexadas no WHERE (impede uso do índice)

-- ruim

WHERE YEAR(criado\_em) = 2024

-- bom

WHERE criado\_em BETWEEN '2024-01-01' AND '2024-12-31'

-- Usar LIMIT em queries que podem retornar muitos resultados

SELECT \* FROM logs ORDER BY criado\_em DESC LIMIT 100;

\#/1#



#### Transactions - Transações

Transações garantem que um conjunto de operações seja executado por completo
ou desfeito totalmente em caso de erro (princípio do tudo ou nada).

\#2#

START TRANSACTION;

-- operações SQL aqui

UPDATE contas SET saldo = saldo - 500 WHERE id = 1;

UPDATE contas SET saldo = saldo + 500 WHERE id = 2;

&nbsp;

-- Se tudo ok, confirmar

COMMIT;

&nbsp;

-- Se algo der errado, desfazer

ROLLBACK;

\#/2#

Exemplo com tratamento de erro:

\#2#

START TRANSACTION;

UPDATE estoque SET quantidade = quantidade - 1 WHERE produto\_id = 10;

INSERT INTO pedidos (cliente\_id, produto\_id, valor) VALUES (3, 10, 99.90);

-- Verificar se a operação foi bem-sucedida antes de confirmar

-- Em caso de erro em qualquer etapa, executar ROLLBACK

COMMIT;

\#/2#



#### Views - Visões

Uma view é uma consulta salva que se comporta como uma tabela virtual.

\#2#

-- Criar view

CREATE VIEW vw\_pedidos\_completos AS

SELECT

 	c.nome     AS cliente,

 	p.produto,

 	p.valor,

 	p.criado\_em

FROM clientes c

INNER JOIN pedidos p ON c.id = p.cliente\_id;

&nbsp;

-- Usar view como se fosse uma tabela

SELECT \* FROM vw\_pedidos\_completos WHERE valor > 200;

&nbsp;

-- Remover view

DROP VIEW vw\_pedidos\_completos;

\#/2#



#### Stored Procedures - Procedimentos armazenados

Bloco de código SQL salvo no banco que pode ser chamado quando necessário.

\#2#

-- Criar procedure

DELIMITER $$

CREATE PROCEDURE buscar\_usuarios\_por\_cidade(IN cidade\_param VARCHAR(100))

BEGIN

 	SELECT nome, email

 	FROM usuarios

 	WHERE cidade = cidade\_param;

END $$

DELIMITER ;

&nbsp;

-- Chamar procedure

CALL buscar\_usuarios\_por\_cidade('São Paulo');

&nbsp;

-- Remover procedure

DROP PROCEDURE buscar\_usuarios\_por\_cidade;

\#/2#

