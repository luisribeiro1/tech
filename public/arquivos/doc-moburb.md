## MobUrb - Plataforma de dados para Mobilidade Urbana



### Parte 1 - Briefing do Projeto:





#### 1\. Visão Geral



O projeto MobUrb nasce da necessidade de modernizar a mobilidade urbana, substituindo o pagamento em espécie pela bilhetagem eletrônica. O objetivo é criar um ecossistema digital onde o passageiro gerencia seus créditos e o transporte público opera com maior fluidez, segurança e precisão de dados.





#### 2\. O Problema



Atualmente, o uso de dinheiro físico nos ônibus gera diversos gargalos:

* **Lentidão no embarque:** O tempo gasto com troco atrasa as viagens.
* **Insegurança:** Grandes quantias de dinheiro nos veículos atraem assaltos.
* **Falta de Dados:** A gestão municipal tem dificuldade em rastrear o fluxo real de passageiros por horário e linha.





#### 3\. A Solução Proposta



Implementar um sistema de cartões inteligentes (NFC/RFID) e validadores embarcados. O passageiro deixa de ser apenas um "pagante" e passa a ter uma identidade no sistema, permitindo tarifas diferenciadas (estudantes, idosos) e integração entre linhas.





#### 4\. Pilares do Sistema



* Conveniência: Recarga fácil via canais digitais e físicos.
* Agilidade: Validação de passagem em milissegundos.
* Transparência: Relatórios precisos para a empresa operadora e para a prefeitura.





#### 5\. Público-Alvo



* Passageiros: Buscam rapidez e facilidade no pagamento.
* Operadores (Motoristas/Cobradores): Foco na condução e segurança, com menor carga burocrática.
* Gestores Públicos: Necessitam de métricas para otimizar as frotas.





#### 6\. Principais Entregáveis



* Sistema de cadastro e emissão de cartões.
* Plataforma de gestão de créditos e vendas.
* Software embarcado para os validadores das catracas.
* Painel administrativo (Dashboard) para monitoramento em tempo real.





**Nota de Implementação:** O sistema deve ser desenhado para operar em regime híbrido. Ou seja, a validação do cartão deve ocorrer de forma offline (direto no hardware da catraca) para garantir o embarque mesmo em zonas de sombra de sinal de internet, sincronizando os dados assim que a conexão for restabelecida.



.



### Parte 2 - Documentação do sistema





#### 1\. Escopo e Objetivos



O sistema visa automatizar a cobrança de tarifas, reduzir o fluxo de dinheiro em espécie dentro dos veículos e gerar dados precisos sobre a demanda de passageiros para o planejamento urbano.





#### 2\. Requisitos Funcionais (RF)



Os requisitos descrevem o que o sistema deve fazer:





##### RF-01 – Cadastro de Passageiros



O sistema deve permitir o cadastro completo de passageiros, contendo no mínimo:



* Nome completo
* CPF (com validação de formato e unicidade)
* Data de nascimento
* Foto do usuário
* Categoria do passageiro (Comum, Estudante, Idoso, PCD, Outros)
* Status do cadastro (Ativo, Suspenso, Bloqueado)



**Regras associadas:**



* Passageiros das categorias Estudante, Idoso e PCD devem ter documentação comprobatória vinculada.
* Alterações cadastrais devem ser versionadas (histórico).







##### RF-02 – Emissão e Gerenciamento de Cartões



O sistema deve permitir:



* Vincular um cartão NFC/RFID a um passageiro.
* Reemitir cartões em caso de perda ou dano.
* Bloquear cartões por roubo, perda ou fraude.
* Desvincular cartões antigos automaticamente ao emitir um novo.



**Regras associadas:**



* Um CPF pode ter apenas um cartão ativo por vez.
* Cartões bloqueados não podem ser validados nos ônibus.







##### RF-03 – Gestão de Créditos



O sistema deve permitir:



* Consulta de saldo em tempo real (online) e localmente (offline).
* Histórico completo de recargas e débitos.
* Estorno de créditos em casos autorizados.







##### RF-04 – Recarga de Créditos



O sistema deve oferecer recarga por múltiplos canais:



* Aplicativo mobile
* Portal web
* Pontos físicos autorizados



**Regras associadas:**



* Recargas online devem ser refletidas no sistema central imediatamente.
* Em modo offline, o crédito deve ser sincronizado no próximo contato do cartão com um validador online.
* Suporte a diferentes meios de pagamento (PIX, cartão, dinheiro nos pontos físicos).







##### RF-05 – Validação de Acesso no Ônibus



O sistema embarcado deve:



* Ler o cartão NFC/RFID.
* Validar:

  * Autenticidade do cartão
  * Status (ativo/bloqueado)
  * Saldo disponível

* Debitar o valor da tarifa correspondente.
* Liberar a catraca automaticamente.



**Regras associadas:**



* O processo completo deve ocorrer em até 1 segundo.
* Caso não haja saldo, o acesso deve ser negado com feedback visual/sonoro.







##### RF-06 – Gestão de Tarifas



O sistema deve permitir:



* Cadastro de múltiplos tipos de tarifa:

  * Tarifa padrão
  * Meia-tarifa
  * Gratuidade
    Integração temporal

* Configuração por:

  * Categoria do usuário
  * Linha
  * Horário
  * Região







##### RF-07 – Integração entre Linhas



O sistema deve:



* Permitir integração tarifária dentro de um período configurável (ex: 90 minutos).
* Registrar as integrações realizadas.
* Impedir cobranças duplicadas indevidas.







##### RF-08 – Sincronização de Dados



O sistema deve:



* Armazenar transações localmente no validador.
* Sincronizar dados automaticamente quando houver conexão Wi-Fi (na garagem) ou 4G/5G.
* Garantir integridade e evitar duplicidade de transações.







##### RF-09 – Monitoramento Operacional



O sistema deve permitir:



* Acompanhamento em tempo real dos validadores ativos/inativos.
* Detecção de falhas de hardware ou software.
* Registro de eventos (reinicializações, falhas de leitura, tentativas de fraude).







##### RF-10 – Relatórios e Business Intelligence



O sistema deve gerar relatórios:



* Operacionais (passageiros por linha, horário, veículo)
* Financeiros (receita por período, tipo de tarifa)
* Estatísticos (picos de demanda, taxa de integração)
* Exportáveis (PDF, CSV, XLS)







##### RF-11 – Administração e Perfis de Acesso



O sistema deve possuir controle de acesso com perfis:



* Administrador do sistema
* Operador da empresa
* Gestor público
* Ponto de recarga



**Regras associadas:**



* Cada perfil deve ter permissões específicas.
* Todas as ações administrativas devem ser auditáveis.







##### RF-12 – Auditoria e Rastreamento



O sistema deve:



* Registrar logs de todas as operações críticas.
* Permitir rastreamento de transações por cartão, ônibus, linha e horário.
* Detectar padrões suspeitos (ex: uso excessivo em curto intervalo).







#### 3\. Requisitos Não Funcionais (RNF)



Os requisitos que definem a qualidade do sistema:



* **RNF-01: Disponibilidade:** O validador deve funcionar offline (caso o ônibus perca o sinal de internet), validando o saldo gravado no chip do cartão.
* **RNF-02: Segurança:** Criptografia de ponta a ponta para evitar clonagem de cartões.
* **RNF-03: Performance:** O tempo de resposta da catraca não deve exceder $500ms$.
* **RNF-04: Robustez:** O hardware embarcado deve resistir a vibrações, calor e poeira.
* **RNF-05: Escalabilidade:** Suportar crescimento de usuários, linhas e veículos sem degradação perceptível.
* **RNF-06: Conformidade Legal:** Adequação à LGPD (dados pessoais e biométricos).
* **RNF-07: Manutenibilidade:** Código modular e documentado.
* **RNF-08: Observabilidade:** Logs, métricas e alertas centralizados.





##### 4\. Arquitetura do Sistema



O sistema opera em uma estrutura de três camadas:



* **Módulo de Gestão (Backend):** Servidor central que armazena saldos, cadastros e relatórios.
* **Módulo de Recarga (Client/App):** Interfaces para o usuário e pontos de venda.
* **Unidade de Validação Embarcada (OBU):** O hardware que fica no ônibus, conectado à catraca.





#### 6\. Fluxo de Operação (Use Case)



Cenário: Passageiro embarcando



* O passageiro aproxima o cartão do validador.
* O validador lê o saldo e verifica se o cartão está ativo (cartões não bloqueados/roubados).
* O sistema subtrai o valor da tarifa: "Saldo novo = Saldo antigo - Tarifa".
* O validador envia um sinal de pulso elétrico para a trava da catraca.
* A transação é armazenada localmente e enviada ao servidor na próxima sincronização.
