## UML - Classes



###### MobUrb - Plataforma de dados para Mobilidade Urbana



 

&nbsp;

1. Dominio: Passageiro ............. Passageiro, HistoricoPassageiro, Contato
2. Dominio: Cartao ................. Cartao, ReemissaoCartao
3. Dominio: Financeiro ............. Transacao, Recarga, Estorno
4. Dominio: Tarifa \& Integracao .... Tarifa, RegraIntegracao
5. Dominio: Validador .............. Validador, ResultadoValidacao
6. Dominio: Usuarios ............... Usuario, PerfilAcesso
7. Dominio: Auditoria \& Seguranca .. LogAuditoria, AlertaFraude
8. Dominio: Relatorios ............. Relatorio
9. Dominio: Monitoramento .......... Dashboard
10. Relacionamentos Entre Classes
11. Enumeracoes (Enums)



&nbsp;



### DOMINIO: PASSAGEIRO

Casos de uso cobertos: UC-01, UC-02, UC-03



### Classe: Passageiro

**Propriedades:**

* id                       : Long
* nome                     : String
* cpf                      : String
* dataNascimento            : LocalDate
* categoria                : CategoriaPassageiro
  { COMUM | ESTUDANTE | IDOSO | PCD }
* status                   : StatusPassageiro
  { ATIVO | BLOQUEADO | SUSPENSO }
* foto                     : byte\[]
* documentacaoComprobatoria: List<Documento>
* contato                  : Contato
* dataCadastro             : LocalDateTime
* versaoHistorico          : Integer

**Métodos:**

* cadastrar(nome, cpf, dataNasc, categoria)   : void
* alterar(campos: Map)                         : void
* bloquear(justificativa: String)              : void
* suspender(justificativa: String)             : void
* reativar()                                   : void
* buscarPorCpf(cpf: String)                    : Passageiro
* buscarPorNome(nome: String)                  : List<Passageiro>
* validarCpf(cpf: String)                      : Boolean
* exigeDocumentacao()                          : Boolean
* getHistoricoAlteracoes()                     : List<HistoricoPassageiro>

&nbsp;

### Classe: HistoricoPassageiro

**Propriedades:**

* id              : Long
* passageiroId    : Long
* versao          : Integer
* dadosAnteriores : String   { JSON snapshot }
* dadosNovos      : String   { JSON snapshot }
* operadorId      : Long
* dataAlteracao   : LocalDateTime
* motivoAlteracao : String

**Métodos:**

* registrarVersao(passageiro: Passageiro, operador: Usuario) : void
* listarPorPassageiro(passageiroId: Long)                    : List<HistoricoPassageiro>
* compararVersoes(v1, v2: Integer)                           : Map<String, Object>

&nbsp;

### Classe: Contato

**Propriedades:**

* id                   : Long
* email                : String
* telefone             : String
* enderecoNotificacao  : String
* aceitaNotificacoes   : Boolean

**Métodos:**

* notificar(mensagem: String, canal: CanalNotificacao) : void
* validarEmail(email: String)                          : Boolean

&nbsp;
DOMINIO: CARTAO
---

Casos de uso cobertos: UC-04, UC-05, UC-06

&nbsp;

### Classe: Cartao

**Propriedades:**

* id                    : Long
* uid                   : String   { identificador NFC/RFID unico }
* passageiroId          : Long
* saldo                 : BigDecimal
* status                : StatusCartao
  { ATIVO | BLOQUEADO | BLOQUEADO\_FRAUDE | CANCELADO }
* dataVinculacao        : LocalDateTime
* dataUltimaAtualizacao : LocalDateTime
* motivoBloqueio        : String
* numeracaoExterna      : String

**Métodos:**

* vincularPassageiro(passageiroId: Long)          : void
* bloquear(motivo: String)                         : void
* bloquearFraude(motivo: String)                   : void
* cancelar()                                       : void
* consultarSaldo()                                 : BigDecimal
* adicionarSaldo(valor: BigDecimal)                : void
* debitarSaldo(valor: BigDecimal)                  : Boolean
* transferirSaldo(cartaoDestino: Cartao)           : void
* isAtivo()                                        : Boolean
* isBloqueado()                                    : Boolean
* buscarPorUid(uid: String)                        : Cartao
* buscarPorPassageiro(passageiroId: Long)          : Cartao

&nbsp;

### Classe: ReemissaoCartao

**Propriedades:**

* id                : Long
* cartaoAntigoId    : Long
* cartaoNovoId      : Long
* motivo            : MotivoReemissao   { PERDA | DANO | ROUBO }
* saldoTransferido  : BigDecimal
* dataReemissao     : LocalDateTime
* operadorId        : Long
* comprovante       : String

**Métodos:**

* executarReemissao(cpf: String, novoUid: String, motivo: MotivoReemissao) : Cartao
* gerarComprovante()                                                         : String



&nbsp;
3. DOMINIO: FINANCEIRO
---

Casos de uso cobertos: UC-07, UC-08, UC-09

&nbsp;

### Classe: Transacao

**Propriedades:**

* id                   : Long
* cartaoId             : Long
* tipo                 : TipoTransacao
  { RECARGA | DEBITO | ESTORNO | INTEGRACAO }
* valor                : BigDecimal
* saldoAntes           : BigDecimal
* saldoDepois          : BigDecimal
* dataHora             : LocalDateTime
* linhaId              : Long
* validadorId          : Long
* statusSincronizacao  : StatusSync   { PENDENTE | SINCRONIZADO }
* hashIntegridade      : String

**Métodos:**

* registrar(cartao: Cartao, tipo: TipoTransacao, valor: BigDecimal)        : void
* listarPorCartao(cartaoId: Long, filtro: FiltroTransacao)                 : List<Transacao>
* listarUltimas(cartaoId: Long, limite: Integer)                           : List<Transacao>
* calcularTotalPeriodo(cartaoId: Long, inicio, fim: LocalDate)             : BigDecimal
* gerarRelatorioFinanceiro(params: ParametroRelatorio)                     : Relatorio

&nbsp;

### Classe: Recarga

**Propriedades:**

* id                 : Long
* transacaoId        : Long
* formaPagamento     : FormaPagamento   { PIX | CREDITO | DEBITO | DINHEIRO }
* valorPago          : BigDecimal
* comprovante        : String
* canal              : CanalRecarga     { APP | WEB | PONTO\_FISICO }
* statusPagamento    : StatusPagamento  { PENDENTE | CONFIRMADO | RECUSADO }
* operadorId         : Long
* sincronizadoOffline: Boolean

**Métodos:**

* iniciar(cartao: Cartao, valor: BigDecimal, forma: FormaPagamento) : Recarga
* confirmarPagamento()                                               : void
* cancelar()                                                         : void
* gerarComprovante(canal: CanalRecarga)                             : String
* sincronizarOffline()                                               : void

&nbsp;

### Classe: Estorno

**Propriedades:**

* id                  : Long
* transacaoOriginalId : Long
* valor               : BigDecimal
* justificativa       : String
* documentoAnexo      : byte\[]
* administradorId     : Long
* dataEstorno         : LocalDateTime

**Métodos:**

* executar(transacaoId: Long, justificativa: String, doc: byte\[]) : void
* validarElegibilidade(transacao: Transacao)                       : Boolean
* ajustarSaldo(cartao: Cartao)                                     : void
* notificarPassageiro(passageiro: Passageiro)                      : void



&nbsp;
4. DOMINIO: TARIFA \& INTEGRACAO
---

Casos de uso cobertos: UC-12, UC-13

&nbsp;

### Classe: Tarifa

**Propriedades:**

* id                     : Long
* valorBase              : BigDecimal
* categoriasBeneficiadas : List<CategoriaPassageiro>
* linhasAplicaveis       : List<Long>
* horaInicio             : LocalTime
* horaFim                : LocalTime
* dataVigenciaInicio     : LocalDate
* dataVigenciaFim        : LocalDate
* status                 : StatusTarifa   { AGENDADA | VIGENTE | EXPIRADA }
* regraIntegracao        : RegraIntegracao
* aprovadores            : List<Long>     { dupla aprovacao obrigatoria }

**Métodos:**

* criar(params: ParametroTarifa)                              : Tarifa
* editar(params: ParametroTarifa)                             : void
* agendarVigencia(dataInicio: LocalDate)                      : void
* aplicarImediatamente()                                      : void
* calcularValor(passageiro: Passageiro, integracao: Boolean)  : BigDecimal
* validarConsistencia()                                       : List<String>
* notificarValidadores()                                      : void
* exigeDuplaAprovacao(valorBase: BigDecimal)                  : Boolean
* aprovar(aprovadorId: Long)                                  : void

&nbsp;

### Classe: RegraIntegracao

**Propriedades:**

* id                    : Long
* periodoMaximoMinutos  : Integer    { padrao: 90 }
* valorReduzido         : BigDecimal
* isGratuito            : Boolean
* permiteLinhaRepetida  : Boolean

**Métodos:**

* verificarIntegracao(cartao: Cartao, linha: Long) : ResultadoIntegracao
* calcularDesconto(tarifaBase: BigDecimal)          : BigDecimal
* isElegivel(ultimaValidacao: Validacao)            : Boolean



&nbsp;
5. DOMINIO: VALIDADOR
---

Casos de uso cobertos: UC-10, UC-11

&nbsp;

### Classe: Validador

**Propriedades:**

* id                        : Long
* onibusId                  : Long
* status                    : StatusValidador   { ONLINE | OFFLINE | MANUTENCAO }
* ultimaSincronizacao       : LocalDateTime
* transacoesPendentes       : List<Transacao>
* cacheCartoesBloqueados    : Set<String>
* tarifaAtual               : Tarifa
* versaoFirmware            : String
* posicaoGps                : Coordenada

**Métodos:**

* validarAcesso(uid: String)                           : ResultadoValidacao
* verificarCartaoCache(uid: String)                    : StatusCartao
* debitarTarifa(cartao: Cartao, valor: BigDecimal)     : Boolean
* registrarTransacaoLocal(transacao: Transacao)        : void
* sincronizarAutomatico()                              : void
* sincronizarManual(operadorId: Long)                  : void
* receberAtualizacoes(dados: PacoteSincronizacao)      : void
* atualizarFirmware(versao: String)                    : void
* isOperacional()                                      : Boolean

## REGRAS DE NEGOCIO

* Tempo maximo de validacao: <= 3 segundos
* Leitura do UID do cartao: <= 1 segundo
* Opera em modo offline com cache local

&nbsp;

### Classe: ResultadoValidacao

**Propriedades:**

* status            : StatusValidacao
  { LIBERADO | BLOQUEADO | SALDO\_INSUFICIENTE |
  INTEGRACAO | ERRO }
* mensagemDisplay   : String
* sinalSonoro       : TipoSinal
* valorCobrado      : BigDecimal
* saldoRestante     : BigDecimal
* isIntegracao      : Boolean
* tempoProcessamento: Long   { em milissegundos }

**Métodos:**

* emitirSinalSonoro() : void
* exibirDisplay()      : void
* liberarCatraca()     : void



&nbsp;
6. DOMINIO: USUARIOS DO SISTEMA
---

Casos de uso cobertos: UC-16

&nbsp;

### Classe: Usuario

**Propriedades:**

* id           : Long
* nome         : String
* login        : String
* senhaHash    : String
* perfil       : PerfilAcesso
* status       : StatusUsuario   { ATIVO | INATIVO }
* ultimoAcesso : LocalDateTime
* ip           : String

**Métodos:**

* autenticar(login: String, senha: String) : Token
* hasPermissao(modulo: String, acao: String): Boolean
* alterarSenha(senhaAtual, novaSenha: String): void
* registrarAcesso(ip: String)               : void

&nbsp;

### Classe: PerfilAcesso

**Propriedades:**

* id         : Long
* nome       : String
  { OPERADOR | ADMINISTRADOR | GESTOR\_PUBLICO | AUDITOR }
* permissoes : Map<String, Set<String>>
  { modulo -> \[ler, criar, editar, excluir] }

**Métodos:**

* criarPerfil(nome: String, permissoes: Map) : PerfilAcesso
* editarPermissoes(modulo: String, acoes: Set): void
* validarConflitos()                          : List<String>
* atribuirAUsuario(usuarioId: Long)           : void

## PERFIS PADRAO

Operador         -> Passageiros \[ler, criar, editar]
Financeiro  \[ler]
Relatorios  \[operacional]
Administrador    -> Todos os modulos \[acesso total]
Gestor Publico   -> Relatorios \[todos]
Tarifas    \[aprovar]
Auditor          -> Logs       \[ler, exportar]
Relatorios \[todos, somente leitura]



&nbsp;
7. DOMINIO: AUDITORIA \& SEGURANCA
---

Casos de uso cobertos: UC-17, UC-18

&nbsp;

### Classe: LogAuditoria

**Propriedades:**

* id              : Long
* tipo            : TipoLog
  { FINANCEIRO | CADASTRAL | ACESSO |
  CONFIGURACAO | FRAUDE }
* usuarioId       : Long
* entidadeAfetada : String
* entidadeId      : Long
* dadosAntes      : String   { JSON }
* dadosDepois     : String   { JSON }
* dataHora        : LocalDateTime
* ip              : String
* dispositivo     : String
* descricao       : String

**Métodos:**

* registrar(tipo, usuarioId, entidade, antes, depois)        : void
* buscarComFiltros(filtro: FiltroAuditoria)                  : List<LogAuditoria>
* exportarInvestigacao(filtro: FiltroAuditoria, fmt: String) : byte\[]
* gerarLinhaDoTempo(entidadeId: Long)                        : List<LogAuditoria>

&nbsp;

### Classe: AlertaFraude

**Propriedades:**

* id                       : Long
* cartaoId                 : Long
* tipo                     : TipoFraude
  { MULTIPLAS\_VALIDACOES | DISTANCIA\_IMPOSSIVEL |
  CARTAO\_BLOQUEADO | RECARGA\_SUSPEITA }
* gravidade                : Gravidade   { BAIXA | MEDIA | ALTA | CRITICA }
* descricao                : String
* dados                    : Map<String, Object>
* status                   : StatusAlerta
  { ABERTO | EM\_INVESTIGACAO | RESOLVIDO |
  FALSO\_POSITIVO }
* dataDeteccao             : LocalDateTime
* administradorResponsavel : Long

**Métodos:**

* analisarTransacoes(cartao: Cartao)                     : List<AlertaFraude>
* detectarMultiplasValidacoes(cartao, janela: Duration)  : Boolean
* detectarDistanciaImpossivel(v1, v2: Validacao)         : Boolean
* notificarAdministrador(alerta: AlertaFraude)           : void
* sugerirAcao()                                          : AcaoSugerida
* marcarFalsoPositivo(motivo: String)                    : void
* aprenderComFeedback()                                  : void

**REGRAS DE DETECCAO**

* Multiplas validacoes: > 10 em menos de 2 minutos
* Distancia impossivel: duas validacoes em pontos
  geograficamente incompativeis com o tempo decorrido
* Uso de cartao bloqueado: qualquer tentativa
* Recarga suspeita: recarga seguida de uso imediato total



&nbsp;
8. DOMINIO: RELATORIOS
---

Casos de uso cobertos: UC-14

&nbsp;

### Classe: Relatorio

**Propriedades:**

* id            : Long
* tipo          : TipoRelatorio   { OPERACIONAL | FINANCEIRO | ESTATISTICO }
* parametros    : ParametroRelatorio
* dadosGerados  : byte\[]
* formato       : FormatoSaida    { PDF | CSV | XLS }
* dataGeracao   : LocalDateTime
* geradoPor     : Long
* agendamento   : AgendamentoRelatorio

**Métodos:**

* gerar(tipo: TipoRelatorio, params: ParametroRelatorio) : Relatorio
* gerarOperacional(params)                                : Relatorio
* gerarFinanceiro(params)                                 : Relatorio
* gerarEstatistico(params)                                : Relatorio
* exportar(formato: FormatoSaida)                         : byte\[]
* agendarEnvioPeriodico(cron: String, dest: List)         : void
* visualizarPrevia()                                      : String   { HTML }

**TIPOS DE RELATORIO**

Operacional  -> passageiros/hora, onibus ativos, linha, validadores
Financeiro   -> receita total, estornos, medias por periodo
Estatistico  -> demanda, integracoes, fraudes detectadas



&nbsp;
9. DOMINIO: MONITORAMENTO
---

Casos de uso cobertos: UC-15

&nbsp;

### Classe: Dashboard

**Propriedades:**

* onibusAtivos         : List<StatusOnibus>
* validadoresOnline    : Integer
* validadoresOffline   : Integer
* alertasFalha         : List<Alerta>
* transacoesPorMinuto  : Integer
* ultimaAtualizacao    : LocalDateTime

**Métodos:**

* carregarDados()                                    : void
* atualizarTempoReal()                               : void
* filtrarOnibus(linha: Long)                         : List<StatusOnibus>
* getDetalheOnibus(onibusId: Long)                   : DetalheOnibus
* getStatusValidador(validadorId: Long)              : StatusValidador
* gerarAlertaAutomatico(evento: EventoCritico)       : void

**LEGENDA DE CORES DO PAINEL**

\[VERDE ] Operacao normal
\[AMARELO] Alerta — ex: validador respondendo lentamente
\[VERMELHO] Critico — ex: validador inativo, falha de hardware



&nbsp;
10. RELACIONAMENTOS ENTRE CLASSES
---

Notacao utilizada:
1 ----< 0..\* = um para muitos (zero ou mais)
1 ---- 0..1  = um para zero-ou-um
\* ----  1    = muitos para um

+--------------------+--------------------+-----------+-----------------------------+
| Classe A           | Classe B           | Cardinalidade | Descricao              |
+--------------------+--------------------+-----------+-----------------------------+
| Passageiro         | Cartao             | 1 --- 0..1 | Passageiro tem 0 ou 1 cartao|
| Passageiro         | HistoricoPassageiro| 1 ---< 0..*| Cada alteracao gera versao  |
| Passageiro         | Contato            | 1 --- 0..1 | Passageiro pode ter contato |
| Cartao             | Transacao          | 1 ---< 0..*| Cartao acumula transacoes   |
| Transacao          | Recarga            | 1 --- 0..1 | Transacao pode ser recarga  |
| Transacao          | Estorno            | 1 --- 0..1 | Transacao pode ser estornada|
| Validador          | Transacao          | 1 ---< 0..\*| Validador registra transacoes|
| Tarifa             | RegraIntegracao    | 1 --- 0..1 | Tarifa tem regra integracao |
| Usuario            | PerfilAcesso       | \* ---  1   | Usuario possui um perfil    |
| LogAuditoria       | Usuario            | \* ---  1   | Log referencia executor     |
| AlertaFraude       | Cartao             | \* ---  1   | Alerta gerado para cartao   |
| Relatorio          | Usuario            | \* ---  1   | Relatorio solicitado por usr|
| Validador          | Tarifa             | \* ---  1   | Validador usa tarifa vigente|
| AlertaFraude       | LogAuditoria       | 1 --- 0..1 | Alerta gera log de auditoria|
+--------------------+--------------------+-----------+-----------------------------+



&nbsp;
11. ENUMERACOES (ENUMS)
---

### CategoriaPassageiro

&nbsp;   COMUM | ESTUDANTE | IDOSO | PCD


### StatusPassageiro

&nbsp;   ATIVO | BLOQUEADO | SUSPENSO


### StatusCartao

&nbsp;   ATIVO | BLOQUEADO | BLOQUEADO\_FRAUDE | CANCELADO


### MotivoReemissao

&nbsp;   PERDA | DANO | ROUBO


### TipoTransacao

&nbsp;   RECARGA | DEBITO | ESTORNO | INTEGRACAO


### FormaPagamento

&nbsp;   PIX | CREDITO | DEBITO | DINHEIRO


### CanalRecarga

&nbsp;   APP | WEB | PONTO\_FISICO


### StatusPagamento

&nbsp;   PENDENTE | CONFIRMADO | RECUSADO


### StatusSync

&nbsp;   PENDENTE | SINCRONIZADO


### StatusValidador

&nbsp;   ONLINE | OFFLINE | MANUTENCAO


### StatusValidacao

&nbsp;   LIBERADO | BLOQUEADO | SALDO\_INSUFICIENTE | INTEGRACAO | ERRO


### TipoLog

&nbsp;   FINANCEIRO | CADASTRAL | ACESSO | CONFIGURACAO | FRAUDE


### TipoFraude

&nbsp;   MULTIPLAS\_VALIDACOES | DISTANCIA\_IMPOSSIVEL |
    CARTAO\_BLOQUEADO | RECARGA\_SUSPEITA


### Gravidade

&nbsp;   BAIXA | MEDIA | ALTA | CRITICA


### StatusAlerta

&nbsp;   ABERTO | EM\_INVESTIGACAO | RESOLVIDO | FALSO\_POSITIVO


### TipoRelatorio

&nbsp;   OPERACIONAL | FINANCEIRO | ESTATISTICO


### FormatoSaida

&nbsp;   PDF | CSV | XLS


### StatusTarifa

&nbsp;   AGENDADA | VIGENTE | EXPIRADA


### CanalNotificacao

&nbsp;   EMAIL | SMS | PUSH



