## Caso de uso



Caso de Uso é um conceito da engenharia de software que descreve como um sistema interage com usuários ou outros sistemas para atingir um objetivo específico.



Foco: **Como fazer**



Os pilares:



* **Ator:** Quem/usará o sistema (usuário, outro sistema)
* **Sistema:** Software sendo desenvolvido
* **Objetivo:** Meta que o ator quer alcançar
* **Fluxo:** Sequência de passos para atingir o objetivo





### Casos de uso Sistema MobUrb



**Legenda:**

* UC: Caso de Uso
* RF: Requisito Funcional atendido
* Ator: Quem executa o caso de uso



**Atores:**

* Passageiro
* Operador
* Administrador
* Sistema
* Gestor público





#### UC-01: Cadastrar Passageiro (RF-01)



**Atores:** Operador

**Pré-condição:** Operador autenticado no sistema

**Fluxo Principal:**



1. Sistema exibe formulário de cadastro
2. Operador insere: nome, CPF, data nascimento, categoria
3. Sistema valida formato CPF e verifica unicidade
4. Operador anexa foto e documentação comprobatória (se estudante/idoso/PCD)
5. Sistema salva cadastro com status "ativo"
6. Sistema registra versão inicial no histórico
7. Sistema exibe confirmação de sucesso



**Fluxos Alternativos:**



* 3a. CPF duplicado: Sistema informa "CPF já cadastrado"
* 3b. CPF inválido: Sistema informa "CPF com formato inválido"
* 4a. Categoria exige documentação não anexada: Sistema solicita upload obrigatório





#### UC-02: Alterar Cadastro de Passageiro (RF-01)



**Atores:** Operador, Administrador

**Pré-condição:** Passageiro cadastrado e ativo

**Fluxo Principal:**



1. Sistema permite busca por CPF/nome
2. Operador seleciona passageiro e opção "alterar"
3. Sistema exibe dados atuais em formulário editável
4. Operador modifica campos necessários
5. Sistema salva alterações e cria nova versão no histórico
6. Sistema notifica sobre alteração (se configurado)



**Regras Especiais:** Alteração de categoria exige nova documentação





#### UC-03: Bloquear/Suspender Passageiro (RF-01)



**Atores:** Administrador

**Fluxo Principal:**



1. Sistema lista passageiros com filtros
2. Administrador seleciona passageiro
3. Sistema mostra histórico e status atual
4. Administrador seleciona novo status (bloqueado/suspenso)
5. Administrador insere justificativa obrigatória
6. Sistema bloqueia cartão vinculado automaticamente (RF-02)
7. Sistema registra ação em logs de auditoria (RF-12)





#### UC-04: Vincular Cartão a Passageiro (RF-02)



**Atores:** Operador

**Pré-condição:** Passageiro cadastrado e sem cartão ativo

**Fluxo Principal:**



1. Sistema solicita CPF do passageiro
2. Sistema verifica se passageiro existe e está ativo
3. Sistema verifica que não há cartão ativo para o CPF
4. Operador aproxima cartão físico do leitor
5. Sistema lê UID do cartão NFC/RFID
6. Sistema vincula cartão ao passageiro
7. Sistema define status do cartão como "ativo"
8. Sistema exibe confirmação com número do cartão



**Fluxos Alternativos:**



* 2a. Passageiro bloqueado: Sistema nega operação
* 3a. Já tem cartão ativo: Sistema solicita desvinculação primeiro



#### UC-05: Reemitir Cartão (RF-02)



**Atores:** Operador

**Fluxo Principal:**



1. Operador informa CPF do passageiro
2. Sistema exibe dados do cartão atual (se houver)
3. Operador seleciona motivo: perda, dano ou roubo
4. Sistema bloqueia cartão antigo automaticamente
5. Operador aproxima novo cartão físico
6. Sistema vincula novo cartão
7. Sistema transfere saldo do cartão antigo (se aplicável)
8. Sistema emite comprovante de reemissão



#### UC-06: Bloquear Cartão por Fraude (RF-02)



**Atores:** Administrador, Sistema

**Fluxo Principal:**



1. Sistema detecta padrão suspeito (RF-12) ou Administrador identifica fraude
2. Sistema/Administrador seleciona cartão para bloqueio
3. Sistema define status como "bloqueado - fraude"
4. Sistema notifica passageiro (se tiver contato cadastrado)
5. Sistema impede validações futuras
6. Sistema registra em logs de auditoria com motivo





#### UC-07: Recarregar Cartão (RF-03, RF-04)



**Atores:** Passageiro, Operador

**Pré-condição:** Cartão ativo e não bloqueado

**Fluxo Principal:**



1. Sistema exibe saldo atual e opções de valor
2. Usuário seleciona valor da recarga
3. Sistema exibe opções de pagamento:

   * App/Web: PIX, Cartão de Crédito/Débito
   * Ponto físico: Dinheiro, Cartão, PIX

4. Usuário conclui pagamento
5. Sistema confirma transação financeira
6. Sistema atualiza saldo em tempo real
7. Sistema registra no histórico (RF-03)
8. Sistema emite comprovante (digital ou físico)



**Fluxos Alternativos:**



* 5a. Pagamento recusado: Sistema cancela operação
* Modo offline (ponto físico): Sistema armazena localmente e sincroniza depois





#### UC-08: Consultar Saldo e Histórico (RF-03)



**Atores:** Passageiro, Operador, Administrador

**Fluxo Principal:**



1. Usuário acessa módulo de consulta
2. Sistema solicita identificação:

   * Passageiro: CPF ou número do cartão
   * Operador/Admin: Pode consultar qualquer CPF

3. Sistema exibe:

   * Saldo atual
   * Últimas 10 transações
   * Status do cartão

4. Usuário pode filtrar por período ou tipo de transação
5. Sistema gera relatório resumido (opcional)



**Observação:** Operadores veem dados limitados; Administradores veem tudo



#### UC-09: Estornar Crédito (RF-03)



**Atores:** Administrador

**Pré-condições:** Transação identificada, justificativa documentada

**Fluxo Principal:**



1. Administrador localiza transação no histórico
2. Sistema exibe detalhes completos da transação
3. Administrador seleciona "Estornar"
4. Sistema solicita justificativa obrigatória e anexo de documento
5. Sistema executa estorno financeiro
6. Sistema ajusta saldo do passageiro
7. Sistema registra estorno em logs de auditoria (RF-12)
8. Sistema notifica passageiro sobre o estorno



