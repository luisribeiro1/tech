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
   - App/Web: PIX, Cartão de Crédito/Débito
   - Ponto físico: Dinheiro, Cartão, PIX
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
   - Passageiro: CPF ou número do cartão
   - Operador/Admin: Pode consultar qualquer CPF
3. Sistema exibe:
   - Saldo atual
   - Últimas 10 transações
   - Status do cartão
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



🚌 MÓDULO 4: OPERAÇÃO NO ÔNIBUS

UC-10: Validar Acesso no Ônibus (RF-05)

Atores: Passageiro, Sistema Embarcado

Pré-condição: Validador operacional e com energia

Fluxo Principal:



Passageiro aproxima cartão do validador



Sistema lê UID do cartão (máx. 1 segundo)



Sistema verifica em cache local:



Cartão ativo? (não bloqueado)



Saldo suficiente?



Dentro do período de integração? (RF-07)



Se tudo OK, sistema:



Debita tarifa correspondente



Libera catraca



Emite sinal sonoro/visual de "Acesso Liberado"



Registra transação localmente



Tempo total: ≤ 3 segundos



Fluxos Alternativos:



3a. Cartão bloqueado: Som vermelho, display "Cartão Bloqueado"



3b. Saldo insuficiente: Som vermelho, display "Saldo Insuficiente"



3c. Em integração: Som especial, display "Integração"



UC-11: Sincronizar Dados do Validador (RF-08)

Atores: Sistema (automático), Motorista

Fluxos Possíveis:



Automático (Wi-Fi/4G):



Validador detecta conexão disponível

Sistema envia transações pendentes

Sistema recebe atualizações (cartões bloqueados, tarifas)

Sistema confirma sincronização completa

Manual (Garagem):



Motorista conecta validador à estação na garagem

Sistema detecta conexão física

Operador inicia sincronização manual

Sistema transfere todos os dados pendentes

Sistema atualiza firmware se necessário

⚙️ MÓDULO 5: CONFIGURAÇÃO DO SISTEMA

UC-12: Configurar Tarifas (RF-06)

Atores: Administrador, Gestor público

Fluxo Principal:



Sistema exibe matriz tarifária atual



Administrador seleciona "Nova Tarifa" ou "Editar"



Sistema apresenta parâmetros configuráveis:



Valor base



Categorias beneficiadas



Linhas/regiões aplicáveis



Horários de vigência



Regras de integração (RF-07)



Administrador define regras e valida



Sistema aplica validações de consistência



Sistema agenda vigência (imediatamente ou futura)



Sistema notifica validadores na próxima sincronização



Regra Especial: Alterações tarifárias exigem dupla aprovação para valores acima de limite



UC-13: Gerenciar Integração Tarifária (RF-07)

Atores: Sistema (automático)

Fluxo Principal:



Passageiro realiza primeira validação



Sistema registra horário, linha e valor cobrado



Passageiro tenta nova validação dentro de 90 minutos



Sistema verifica:



Mesmo cartão?



Dentro do período de integração?



Linha diferente da anterior?



Se todas condições OK:



Sistema cobra valor reduzido ou zero



Registra como "Integração"



Atualiza horário da última validação



📊 MÓDULO 6: RELATÓRIOS E MONITORAMENTO

UC-14: Gerar Relatório Personalizado (RF-10)

Atores: Administrador, Gestor público

Fluxo Principal:



Sistema exibe painel com tipos de relatório:



Operacional (passageiros/hora, ônibus, linha)



Financeiro (receita, estornos, médias)



Estatístico (demanda, integrações, fraudes)



Usuário seleciona tipo e define parâmetros:



Período



Linhas/regiões



Tipo de tarifa



Formato de saída (PDF, CSV, XLS)



Sistema processa e gera relatório



Sistema permite visualização prévia



Usuário baixa ou agenda envio periódico



UC-15: Monitorar Operação em Tempo Real (RF-09)

Atores: Administrador, Operador

Fluxo Principal:



Sistema exibe mapa/dashboard com:



Ônibus ativos (GPS)



Validadores online/offline



Alertas de falha



Transações por minuto



Sistema destaca em cores:



Verde: Operação normal



Amarelo: Alerta (ex: validador lento)



Vermelho: Crítico (ex: validador inativo)



Usuário pode clicar em qualquer ônibus para ver:



Últimas validações



Status do hardware



Conexão atual



Sistema gera alertas automáticos para suporte técnico



🔐 MÓDULO 7: ADMINISTRAÇÃO E SEGURANÇA

UC-16: Gerenciar Perfis de Acesso (RF-11)

Atores: Administrador do sistema

Fluxo Principal:



Sistema lista todos os usuários com perfis



Administrador seleciona usuário ou cria novo



Sistema exibe matriz de permissões por módulo:



Módulo Passageiros: Ler/Editar/Criar/Excluir



Módulo Financeiro: Apenas Leitura ou Total



Módulo Relatórios: Tipos permitidos



Módulo Configuração: Acesso negado/permitido



Administrador define perfil personalizado ou usa template



Sistema valida conflitos de permissão



Sistema notifica usuário sobre novas permissões



UC-17: Auditar Operações do Sistema (RF-12)

Atores: Administrador, Auditor externo

Fluxo Principal:



Sistema exibe interface de logs com filtros avançados



Usuário aplica filtros por:



Tipo de operação (financeira, cadastral, etc.)



Usuário executor



Período



CPF/cartão específico



Sistema apresenta linha do tempo de eventos



Para cada evento, sistema mostra:



Quem fez



O que fez



Quando



Dados antes/depois (se aplicável)



IP/Dispositivo de origem



Sistema permite exportar auditoria para investigação



UC-18: Detectar Padrões Suspeitos (RF-12)

Atores: Sistema (automático)

Fluxo Principal:



Sistema analisa transações em tempo real



Sistema aplica regras de detecção:



Múltiplas validações em curto intervalo (ex: 10 em 2 minutos)



Uso em linhas distantes em tempo impossível



Tentativas com cartões bloqueados



Padrões de recarga e uso rápido



Se detecta anomalia:



Sistema registra alerta



Notifica administrador (nível conforme gravidade)



Sugere ações (bloqueio temporário, investigação)



Sistema aprende com falsos positivos para melhorar detecção

