//Base


var baseUrl = window.location.host.indexOf("localhost") > -1 ? "" : "";

var urlGetCnae = baseUrl + "/Base/GetCNAE";
var urlGetCombos = baseUrl + "/Base/GetCombos";
var urlGetPaisEstado = baseUrl + "/Base/GetPaisEstadoById";
var urlValidaCnpj = baseUrl + "/Base/ValidaCnpj";
var urlGetComboEmpresa = baseUrl + "/Base/GetComboEmpresa";
var urlGetComboColaboradorEmpresa = baseUrl + "/Base/GetComboColaborador";

//Cliente
var urlGetCliente = baseUrl + "/Cliente/Get";
var urlCreateCliente = baseUrl + "/Cliente/Create";
var urlTableCliente = baseUrl + "/Cliente/Table";
var urlTableFiltroCliente = baseUrl + "/Cliente/TableFiltro";
var urlFormCliente = baseUrl + "/Cliente/Form";
var urlDeleteCliente = baseUrl + "/Cliente/Delete";
var urlValidaCnpjCliente = baseUrl + "/Cliente/ValidaCnpjCliente";
var urlGetCombosCliente = baseUrl + "/Cliente/GetCombos";
var urlValidateDueDiligenceCliente = baseUrl + "/Cliente/ValidateDueDiligence";

//Empresa
var urlIndexEmpresa = baseUrl + "/Empresa/";
var urlGetEmpresabyId = baseUrl + "/Empresa/Get";
var urlCreateEmpresa = baseUrl + "/Empresa/Create";
var urlTableEmpresa = baseUrl + "/Empresa/Table";
var urlFormEmpresa = baseUrl + "/Empresa/Form";
var urlDeleteEmpresa = baseUrl + "/Empresa/Delete";
var urlInsertRelNormas = baseUrl + "/Empresa/InsertRelNormas";
var urlGetComboTipoEmpresa = baseUrl + "/Empresa/GetComboTipoEmpresa";
var urlValidateDueDiligenceEmpresa = baseUrl + "/Empresa/ValidateDueDiligence";
var urlGetEmpresaSub = baseUrl + "/Empresa/GetEmpresa";
var urlGetComboEmpresaSuperior = baseUrl + "/Empresa/GetComboEmpresaSuperior";
var urlValidaEmpresaSuperior = baseUrl + "/Empresa/ValidaEmpresaSuperior";

//Projeto
var urlGetProjeto = baseUrl + "/Projeto/Get";
var urlCreateProjeto = baseUrl + "/Projeto/Create";
var urlTableProjeto = baseUrl + "/Projeto/Table";
var urlFormProjeto = baseUrl + "/Projeto/Form";
var urlDeleteProjeto = baseUrl + "/Projeto/Delete";
var urlNormaProjeto = baseUrl + "/Projeto/Norma";
var urlInsertRelNormasProjeto = baseUrl + "/Projeto/InsertRelNormas";
var urlGetComposicao = baseUrl + "/Projeto/GetComposicao";
var urlFormComposicao = baseUrl + "/Projeto/FormComposicao";
var urlTableComposicao = baseUrl + "/Projeto/TableComposicao";
var urlCreateComposicao = baseUrl + "/Projeto/CreateComposicao";
var urlDeleteComposicao = baseUrl + "/Projeto/DeleteComposicao";
var urlValidaCnpjProjeto = baseUrl + "/Projeto/ValidaCnpj";
var urlValidateDueDiligenceProjeto = baseUrl + "/Projeto/ValidateDueDiligence";

//Dados do Projeto
var urlGetDadosProjeto = baseUrl + "/DadosProjeto/Get";
var urlGetCombosDadosProjeto = baseUrl + "/DadosProjeto/GetCombos";
var urlCreateDadosProjeto = baseUrl + "/DadosProjeto/Create";
var urlTableDadosProjeto = baseUrl + "/DadosProjeto/Table";
var urlFormDadosProjeto = baseUrl + "/DadosProjeto/Form";
var urlDeleteDadosProjeto = baseUrl + "/DadosProjeto/Delete";


//Tema
var urlGetTema = baseUrl + "/Tema/Get";
var urlCreateTema = baseUrl + "/Tema/Create";
var urlTableTema = baseUrl + "/Tema/Table";
var urlFormTema = baseUrl + "/Tema/Form";
var urlDeleteTema = baseUrl + "/Tema/Delete";

//Conflitos de Interesses
var urlGetConflito = baseUrl + "/Conflito/Get";
var urlGetConflitoAll = baseUrl + "/Conflito/GetAll";
var urlGetConflitoPrincipal = baseUrl + "/Conflito/GetConflitoPrincipal";

var urlIndexConflito = baseUrl + "/Conflito/";
var urlCreateConflito = baseUrl + "/Conflito/Create";
var urlTableConflito = baseUrl + "/Conflito/Table";
var urlFormConflito = baseUrl + "/Conflito/Form";
var urlDeleteConflito = baseUrl + "/Conflito/Delete";
var urlGetCombosConflito = baseUrl + "/Conflito/GetCombos";
var urlUpdateOrdenacaoConflito = baseUrl + "/Conflito/UpdateOrdenacaoConflito";

//AvaliacaoConflitos de Interesses
var urlGetConflitoGeral = baseUrl + "/ConflitoAvaliacao/GetConflito";

var urlIndexAvaliacao = baseUrl + "/ConflitoAvaliacao";
var urlGetCombosConflitoColaborador = baseUrl + "/ConflitoAvaliacao/GetComboColaborador";
var urlGetConflitoAlocacao = baseUrl + "/ConflitoAvaliacao/GetAlocacao";
var urlAvaliacaoConflito = baseUrl + "/ConflitoAvaliacao/Form";
var urlCreateAvaliacaoAvulsa = baseUrl + "/ConflitoAvaliacao/CreateAvaliacaoAvulsa";
var urlGetNextConflito = baseUrl + "/ConflitoAvaliacao/GetNextConflito";
var urlTableAvaliacao = baseUrl + "/ConflitoAvaliacao/Table";
var urlGetComboConflitoEmpresa = baseUrl + "/ConflitoAvaliacao/GetComboConflitoEmpresa";
var urlGetComboTratamentoConflito = baseUrl + "/ConflitoAvaliacao/GetComboTratamentoConflito";
var urlGetConflitoAvaliacao = baseUrl + "/ConflitoAvaliacao/GetConflitoAvaliacao";
var urlCreateItemAvaliacao = baseUrl + "/ConflitoAvaliacao/CreateItemAvaliacao";
var urlTratamentoConflito = baseUrl + "/ConflitoAvaliacao/TratamentoConfilto";

var urlGetConflitoUser = baseUrl + "/ConflitoAvaliacao/GetAvaliacaoConflitoUser";
var urlRespostaAvaliacao = baseUrl + "/ConflitoAvaliacao/RespostaAvaliacao";
var urlReadAvaliacao = baseUrl + "/ConflitoAvaliacao/Read";

var urlHome = baseUrl + "/Home";


//TipoEmpresa
var urlGetTipoEmpresa = baseUrl + "/TipoEmpresa/Get";
var urlCreateTipoEmpresa = baseUrl + "/TipoEmpresa/Create";
var urlTableTipoEmpresa = baseUrl + "/TipoEmpresa/Table";
var urlFormTipoEmpresa = baseUrl + "/TipoEmpresa/Form";
var urlDeleteTipoEmpresa = baseUrl + "/TipoEmpresa/Delete";
var urlGetTipoPrincipal = baseUrl + "/tipoempresa/GetTipoPrincipal";
var urlGetEmpresa = baseUrl + "/TipoEmpresa/GetTipoEmpresa";
var urlGetCombosTipoEmpresa = baseUrl + "/TipoEmpresa/GetCombos";


//Mapeamento Processo - Fluxo
var urlGetFluxo = baseUrl + "/Fluxo/Get";
var urlCreateFluxo = baseUrl + "/Fluxo/Create";
var urlTableFluxo = baseUrl + "/Fluxo/Table";
var urlTableFiltroFluxo = baseUrl + "/Fluxo/TableFiltro";
var urlFormFluxo = baseUrl + "/Fluxo/Form";
var urlDeleteFluxo = baseUrl + "/Fluxo/Delete";
var urlGetCombosFluxo = baseUrl + "/Fluxo/GetCombos";
var urlGetFluxoProcessoEmpresa = baseUrl + "/Fluxo/GetProcessoEmpresa";
var urlGraficoFluxo = baseUrl + "/Fluxo/GetGrafico";
var urlInsertMapaFluxo = baseUrl + "/Fluxo/InsertMapaFluxo";

//Mapeamento Processo - Processo
var urlGetProcesso = baseUrl + "/Processo/Get";
var urlCreateProcesso = baseUrl + "/Processo/Create";
var urlTableProcesso = baseUrl + "/Processo/Table";
var urlFormProcesso = baseUrl + "/Processo/Form";
var urlDeleteProcesso = baseUrl + "/Processo/Delete";
var urlGetCombosProcesso = baseUrl + "/Processo/GetCombos";
var urlGetComboSetor = baseUrl + "/Processo/GetComboSetor";
var urlInsRelMovProcesso = baseUrl + "/Processo/InsertRelMovProcesso";
var urlTableFiltroProcesso = baseUrl + "/Processo/TableFiltro";
var urlGetSetorProcesso = baseUrl + "/Processo/GetSetorProcesso";


//Palavra
var urlGetPalavra = baseUrl + "/Palavra/Get";
var urlCreatePalavra = baseUrl + "/Palavra/Create";
var urlTablePalavra = baseUrl + "/Palavra/Table";
var urlFormPalavra = baseUrl + "/Palavra/Form";
var urlDeletePalavra = baseUrl + "/Palavra/Delete";
var urlGetCombosPalavra = baseUrl + "/Palavra/GetCombos";
var urlGetComboPresidentePalavra = baseUrl + "/Palavra/GetComboPresidente";
var urlTableFiltroPalavra = baseUrl + "/Palavra/TableFiltro";

//Declaracao Politica
var urlGetDeclaracaoPolitica = baseUrl + "/DeclaracaoPolitica/Get";
var urlCreateDeclaracaoPolitica = baseUrl + "/DeclaracaoPolitica/Create";
var urlTableDeclaracaoPolitica = baseUrl + "/DeclaracaoPolitica/Table";
var urlTableDeclaracaoPoliticaEmpresa = baseUrl + "/DeclaracaoPolitica/TableFiltro";
var urlFormDeclaracaoPolitica = baseUrl + "/DeclaracaoPolitica/Form";
var urlDeleteDeclaracaoPolitica = baseUrl + "/DeclaracaoPolitica/Delete";
var urlGetCombosDeclaracaoPolitica = baseUrl + "/DeclaracaoPolitica/GetCombos";
var urlTableFiltroDeclaracaoPolitica = baseUrl + "/DeclaracaoPolitica/TableFiltro";

//Politica Arquivo
var urlTablePoliticaArquivo = baseUrl + "/DeclaracaoPolitica/TablePoliticaArquivo";
var urlGetArquivoPolitica = baseUrl + "/DeclaracaoPolitica/GetUploadedFile";
var urlSaveArquivoPolitica = baseUrl + "/DeclaracaoPolitica/SaveUploadFile";
var urlDeleteArquivoPolitica = baseUrl + "/DeclaracaoPolitica/DeleteArquivoPolitica";

//Comite
var urlGetComite = baseUrl + "/Comite/Get";
var urlGetTitularesComite = baseUrl + "/Comite/GetTitularesComite";
var urlGetColaboradoresComite = baseUrl + "/Comite/GetColaboradores";
var urlGetCombosComite = baseUrl + "/Comite/GetCombos";
var urlCreateComite = baseUrl + "/Comite/Create";
var urlTableComite = baseUrl + "/Comite/Table";
var urlTableFiltroComite = baseUrl + "/Comite/TableFiltro";
var urlFormComite = baseUrl + "/Comite/Form";
var urlDeleteComite = baseUrl + "/Comite/DeleteComite";

var urlGetComiteReuniao = baseUrl + "/Comite/GetReuniao";
var urlGetComiteReunioes = baseUrl + "/Comite/GetReunioes";
var urlGetNextNroAta = baseUrl + "/Comite/GetNextNroAta";
var urlCreateComiteReuniao = baseUrl + "/Comite/CreateReuniao";
var urlFormComiteReuniao = baseUrl + "/Comite/FormReuniao";
var urlDeleteComiteReuniao = baseUrl + "/Comite/DeleteComiteReuniao";
var urlGetCombosComiteReuniao = baseUrl + "/Comite/GetCombosComiteReuniao";
var urlCreateComiteReuniaoVinculo = baseUrl + "/Comite/CreateComiteReuniaoVinculo";
var urlGetComiteReuniaoAssociadaList = baseUrl + "/Comite/GetComiteReuniaoAssociadaList";

//ComiteReuniaoArquivo
var urlTableComiteReuniaoArquivo = baseUrl + "/Comite/TableComiteReuniaoArquivo";
var urlGetArquivoComiteReuniao = baseUrl + "/Comite/GetUploadedFile";
var urlSaveArquivoComiteReuniao = baseUrl + "/Comite/SaveUploadFile";
var urlDeleteArquivoComiteReuniao = baseUrl + "/Comite/DeleteRelArquivoReuniao";


//Estrutura Organizacional
var urlGetEstrutura = baseUrl + "/EstruturaOrganizacional/Get";
var urlGetOrganograma = baseUrl + "/EstruturaOrganizacional/GetOrganograma";
var urlGetCombosEstrutura = baseUrl + "/EstruturaOrganizacional/GetCombos";
var urlGetComboSubordinadoEstrutura = baseUrl + "/EstruturaOrganizacional/GetComboSubordinado";
var urlGetComboColaboradorAlocacaoByEmpresa = baseUrl + "/EstruturaOrganizacional/GetComboColaboradorAlocacao";
var urlCreateEstrutura = baseUrl + "/EstruturaOrganizacional/Create";
var urlTableEstrutura = baseUrl + "/EstruturaOrganizacional/Table";
var urlTableEstruturaFiltro = baseUrl + "/EstruturaOrganizacional/TableFiltro";
var urlFormEstrutura = baseUrl + "/EstruturaOrganizacional/Form";
var urlDeleteEstrutura = baseUrl + "/EstruturaOrganizacional/Delete";


//Autoridade
var urlGetAutoridade = baseUrl + "/Autoridade/Get";
var urlGetCombosAutoridade = baseUrl + "/Autoridade/GetCombos";
var urlCreateAutoridade = baseUrl + "/Autoridade/Create";
var urlTableAutoridade = baseUrl + "/Autoridade/Table";
var urlFormAutoridade = baseUrl + "/Autoridade/Form";
var urlDeleteAutoridade = baseUrl + "/Autoridade/Delete";
var urlBoardAutoridade = baseUrl + "/Autoridade/Board";
var urlDetail = baseUrl + "/Autoridade/Details";

//Termo
//var urlGetTermoCompromissoRenovacao = baseUrl + "/TermoCompromissoRenovacao/Get";
//var urlGetTermoCompromissoRenovacaoUser = baseUrl + "/TermoCompromissoRenovacao/GetTermoUser";
//var urlGetCombosTermoCompromissoRenovacao = baseUrl + "/TermoCompromissoRenovacao/GetCombos";
//var urlCreateTermoCompromissoRenovacao = baseUrl + "/TermoCompromissoRenovacao/Create";
//var urlTableTermoCompromissoRenovacao = baseUrl + "/TermoCompromissoRenovacao/Table";
//var urlFormTermoCompromissoRenovacao = baseUrl + "/TermoCompromissoRenovacao/Form";
//var urlDeleteTermoCompromissoRenovacao = baseUrl + "/TermoCompromissoRenovacao/Delete";
//var urlBoardTermoCompromissoRenovacao = baseUrl + "/TermoCompromissoRenovacao/Board";
//var urlDetailTermoCompromissoRenovacao = baseUrl + "/TermoCompromissoRenovacao/Details";
//var urlValidaTermoCompromissoRenovacao = baseUrl + "/TermoCompromissoRenovacao/ValidaTermo";
//var urlReadTermoCompromissoRenovacao = baseUrl + "/TermoCompromissoRenovacao/Read";

var urlGetTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/Get";
var urlGetTermoCompromissoPtmUser = baseUrl + "/TermoCompromissoPtm/GetTermoUser";
var urlGetCombosTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/GetCombos";
var urlCreateTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/Create";
var urlTableTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/Table";
var urlTableFiltroTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/TableFiltro";
var urlFormTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/Form";
var urlDeleteTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/Delete";
var urlBoardTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/Board";
var urlDetailTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/Details";
var urlValidaTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/ValidaTermo";
var urlReadTermoCompromissoPtm = baseUrl + "/TermoCompromissoPtm/Read";


var urlGetTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/Get";
var urlGetTermoCompromissoEticaUser = baseUrl + "/TermoCompromissoEtica/GetTermoUser";
var urlGetCombosTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/GetCombos";
var urlCreateTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/Create";
var urlTableTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/Table";
var urlTableFiltroTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/TableFiltro";
var urlFormTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/Form";
var urlDeleteTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/Delete";
var urlBoardTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/Board";
var urlDetailTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/Details";
var urlValidaTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/ValidaTermo";
var urlReadTermoCompromissoEtica = baseUrl + "/TermoCompromissoEtica/Read";

var urlGetTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/Get";
var urlGetTermoRenovacaoEticaUser = baseUrl + "/TermoRenovacaoEtica/GetTermoUser";
var urlGetCombosTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/GetCombos";
var urlCreateTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/Create";
var urlTableTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/Table";
var urlTableFiltroTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/TableFiltro";
var urlFormTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/Form";
var urlDeleteTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/Delete";
var urlBoardTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/Board";
var urlDetailTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/Details";
var urlValidaTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/ValidaTermo";
var urlReadTermoRenovacaoEtica = baseUrl + "/TermoRenovacaoEtica/Read";

var urlGetTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/Get";
var urlGetTermoRenovacaoPoliticaUser = baseUrl + "/TermoRenovacaoPolitica/GetTermoUser";
var urlGetCombosTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/GetCombos";
var urlCreateTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/Create";
var urlTableTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/Table";
var urlTableFiltroTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/TableFiltro";
var urlFormTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/Form";
var urlDeleteTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/Delete";
var urlBoardTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/Board";
var urlDetailTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/Details";
var urlValidaTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/ValidaTermo";
var urlValidaDataTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/ValidaDataTermo";
var urlReadTermoRenovacaoPolitica = baseUrl + "/TermoRenovacaoPolitica/Read";
var urlGetComboPoliticaTermoRenovacaPolitica = baseUrl + "/TermoRenovacaoPolitica/GetComboPolitica";


var urlGetTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/Get";
var urlGetTermoCompromissoPoliticaUser = baseUrl + "/TermoCompromissoPolitica/GetTermoUser";
var urlGetCombosTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/GetCombos";
var urlCreateTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/Create";
var urlTableTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/Table";
var urlTableFiltroTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/TableFiltro";
var urlFormTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/Form";
var urlDeleteTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/Delete";
var urlBoardTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/Board";
var urlDetailTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/Details";
var urlValidaTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/ValidaTermo";
var urlReadTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/Read";
var urlGetComboPoliticaTermoCompromissoPolitica = baseUrl + "/TermoCompromissoPolitica/GetComboPolitica";

var urlGetTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/Get";
var urlGetTermoRenovacaoPtmUser = baseUrl + "/TermoRenovacaoPtm/GetTermoUser";
var urlGetCombosTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/GetCombos";
var urlCreateTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/Create";
var urlTableTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/Table";
var urlTableFiltroTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/TableFiltro";
var urlFormTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/Form";
var urlDeleteTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/Delete";
var urlBoardTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/Board";
var urlDetailTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/Details";
var urlValidaTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/ValidaTermo";
var urlReadTermoRenovacaoPtm = baseUrl + "/TermoRenovacaoPtm/Read";

var urlGetComboTermoRegistro = baseUrl + "/TermoRegistro/GetCombos";
var urlTableFiltroTermoRegistro = baseUrl + "/TermoRegistro/TableFiltro";

//Questionario
var urlGetQuestionarioUser = baseUrl + "/Questionario/GetQuestionarioUser";
var urlFormQuestionario = baseUrl + "/Questionario/Form";
var urlGetQuestionario = baseUrl + "/Questionario/Get";
var urlCreateQuestionario = baseUrl + "/Questionario/Create";
var urlTableQuestionario = baseUrl + "/Questionario/Table";
var urlTableFiltroQuestionario = baseUrl + "/Questionario/TableFiltro";
var urlGetCombosQuestionario = baseUrl + "/Questionario/GetCombos";

var urlFormTopico = baseUrl + "/Questionario/FormTopico";
var urlGetTopico = baseUrl + "/Questionario/GetTopico";
var urlCreateTopico = baseUrl + "/Questionario/CreateTopico";
var urlTableTopico = baseUrl + "/Questionario/TableTopico";
var urlQuestTopicosCombos = baseUrl + "/Questionario/GetComboTopico";

var urlGetQuestPergunta = baseUrl + "/Questionario/GetPergunta";
var urlFormQuestPergunta = baseUrl + "/Questionario/FormPergunta";
var urlTableQuestPergunta = baseUrl + "/Questionario/TablePergunta";
var urlDeleteQuestPergunta = baseUrl + "/Questionario/DeletePergunta";
var urlCreateQuestPergunta = baseUrl + "/Questionario/CreatePergunta";
var urlCreateQuestGrafico = baseUrl + "/Questionario/GetGrafico";
var urlGetDados = baseUrl + "/Questionario/GetDados";
var urlGetQuestPerguntaAll = baseUrl + "/Questionario/GetPerguntaAll";

var urlQuestRespostaCombos = baseUrl + "/Questionario/GetComboResposta";
var urlGetQuestao = baseUrl + "/Questionario/GetQuestao";
var urlGetConsolidadoPerguntas = baseUrl + "/questionario/GetConsolidadoPerguntas";
var urlConsolidaResposta = baseUrl + "/questionario/GetConsolidadoRepostas";
var urlGetConsolidado = baseUrl + "/questionario/GetConsolidado";
var urlGetDetalhado = baseUrl + "/questionario/GetDetalhado";
var urlGetPergunta = baseUrl + "/questionario/GetConsolidado";
var urlCreateQuestao = baseUrl + "/questionario/CreateQuestao";

var urlRespostaQuestionario = baseUrl + "/Questionario/RespostaQuestionario";
var urlReadQuestionario = baseUrl + "/Questionario/Read";

//PTM, MISSAO, VISAO
var urlFormPTM = baseUrl + "/DeclaracaoProposito/Form";
var urlGetPTM = baseUrl + "/DeclaracaoProposito/Get";
var urlTablePTM = baseUrl + "/DeclaracaoProposito/Table";
var urlTableFiltroPTM = baseUrl + "/DeclaracaoProposito/TableFiltro";
var urlDeletePTM = baseUrl + "/DeclaracaoProposito/Delete";
var urlCreatePTM = baseUrl + "/DeclaracaoProposito/Create";
var urlGetCombosPTM = baseUrl + "/DeclaracaoProposito/GetCombos";
var urlGetUserPTM = baseUrl + "/DeclaracaoProposito/GetUser";
var urlReadDeclaracaoProposito = baseUrl + "/DeclaracaoProposito/Read";

//Valores
var urlFormValores = baseUrl + "/DeclaracaoValores/Form";
var urlGetValores = baseUrl + "/DeclaracaoValores/Get";
var urlTableValores = baseUrl + "/DeclaracaoValores/Table";
var urlTableFiltroValores = baseUrl + "/DeclaracaoValores/TableFiltro";
var urlDeleteValores = baseUrl + "/DeclaracaoValores/Delete";
var urlCreateValores = baseUrl + "/DeclaracaoValores/Create";
var urlGetCombosValores = baseUrl + "/DeclaracaoValores/GetCombos";


//Código de Etica
var urlGetCodigo = baseUrl + "/CodigoEtica/GetUploadFile";
var urlDeleteCodigo = baseUrl + "/CodigoEtica/Delete";
var urlSaveCodigo = baseUrl + "/CodigoEtica/Create";
var urlGetArquivosCodigo = baseUrl + "/CodigoEtica/Get";
var urlTableArquivosCodigo = baseUrl + "/CodigoEtica/Table";
var urlTableFiltroArquivosCodigo = baseUrl + "/CodigoEtica/TableFiltro";
var urlGetEmpresas = baseUrl + "/CodigoEtica/GetEmpresas";
var urlGetEntidades = baseUrl + "/CodigoEtica/GetEntidades";
var urlGetClientes = baseUrl + "/CodigoEtica/GetClientes";
var urlGetFornecedores = baseUrl + "/CodigoEtica/GetFornecedores";
var urlGetFiltrosCodigoEtica = baseUrl + "/CodigoEtica/GetFiltros";


//Objetivo
var urlGetObjetivo = baseUrl + "/Objetivo/Get";
var urlGetCombosObjetivo = baseUrl + "/Objetivo/GetCombos";
var urlCreateObjetivo = baseUrl + "/Objetivo/Create";
var urlTableObjetivo = baseUrl + "/Objetivo/Table";
var urlTableFiltroObjetivo = baseUrl + "/Objetivo/TableFiltro";
var urlFormObjetivo = baseUrl + "/Objetivo/Form";
var urlDeleteObjetivo = baseUrl + "/Objetivo/Delete";
var urlTableObjetivoEstrategico = baseUrl + "/Objetivo/TableObjetivoEstrategico";

//Norma
var urlGetNorma = baseUrl + "/Norma/Get";
var urlCreateNorma = baseUrl + "/Norma/Create";
var urlTableNorma = baseUrl + "/Norma/Table";
var urlFormNorma = baseUrl + "/Norma/Form";
var urlDeleteNorma = baseUrl + "/Norma/Delete";

//ListaVerificacaoCadastro
var urlGetListaVerificacaoCadastro = baseUrl + "/ListaVerificacaoCadastro/Get";
var urlCreateListaVerificacaoCadastro = baseUrl + "/ListaVerificacaoCadastro/Create";
var urlTableListaVerificacaoCadastro = baseUrl + "/ListaVerificacaoCadastro/Table";
var urlFormListaVerificacaoCadastro = baseUrl + "/ListaVerificacaoCadastro/Form";
var urlDeleteListaVerificacaoCadastro = baseUrl + "/ListaVerificacaoCadastro/Delete";
var urlGetCombosListaVerificacaoCadastro = baseUrl + "/ListaVerificacaoCadastro/GetCombos";


//ListaVerificaçãoEmpresa
var urlTableFiltroListaEmpresa = baseUrl + "/ListaVerificacaoCadastro/TableFiltroEmpresa";
var urlGetCombosListaEmpresa = baseUrl + "/ListaVerificacaoCadastro/GetComboListaEmpresa";
var urlDeleteListaEmpresa = baseUrl + "/ListaVerificacaoCadastro/DeleteListaEmpresa";
var urlFormListaEmrpesa = baseUrl + "/ListaVerificacaoCadastro/FormEmpresa";
var urlGetListaEmpresa = baseUrl + "/ListaVerificacaoCadastro/GetListaEmpresa";
var urlCreateListaEmpresa = baseUrl + "/ListaVerificacaoCadastro/CreateListaEmpresa";
var urlGetListaEmpresaFiltro = baseUrl + "/ListaVerificacaoCadastro/GetListaEmpresaByFiltro";
var urlGetComboResponsavel = baseUrl + "/ListaVerificacaoCadastro/GetComboResponsavel";
var urlUpdateResponsavelLista = baseUrl + "/ListaVerificacaoCadastro/UpdateResponsavelLista";


//Verificação
var urlTableListaVerificacaoMov = baseUrl + "/ListaVerificacao/TableVerificacao";
var urlTableListaVerificacao = baseUrl + "/ListaVerificacao/Table";
var urlTableListaVerificacaoFiltro = baseUrl + "/ListaVerificacao/TableFiltro";
var urlFormVerificacao = baseUrl + "/ListaVerificacao/Form";
var urlGetListaVerificacao = baseUrl + "/ListaVerificacao/GetLista";
var urlCreateListaVerificacao = baseUrl + "/ListaVerificacao/Create";
var urlGetResponsavelListaVerificacao = baseUrl + "/ListaVerificacao/GetResponsavel";
var urlIndexListaVerificacao = baseUrl + "/ListaVerificacao/";

var urlGetVerificacaoGrafico = baseUrl + "/ListaVerificacao/GetVerificacaoGrafico";
var urlRelatorioListaPDF = baseUrl + "/ListaVerificacao/Relatorio";
var urlRelatorioListaVerificacao = baseUrl + "/ListaVerificacao/RelatorioVerificacao";
var urlGetVerificacao = baseUrl + "/ListaVerificacao/GetVerificacao";
var urlGetVerificaoByEmpresa = baseUrl + "/ListaVerificacao/GetVerificaoByEmpresa";


var urlInsertMovListaVerificacao = baseUrl + "/ListaVerificacao/InsertMovCheckList";
var urlListaPerguntaListaVerificacao = baseUrl + "/ListaVerificacao/ListaPergunta";




//Cronograma
var urlGetCronograma = baseUrl + "/Cronograma/Get";
var urlGetEmpresaCronograma = baseUrl + "/Cronograma/GetEmpresa";
var urlCreateCronograma = baseUrl + "/Cronograma/Create";
var urlTableCronograma = baseUrl + "/Cronograma/Table";
var urlTableFiltroCronograma = baseUrl + "/Cronograma/TableFiltro";
var urlFormCronograma = baseUrl + "/Cronograma/Form";
var urlDeleteCronograma = baseUrl + "/Cronograma/Delete";

//CronogramaItem
var urlGetCronogramaItem = baseUrl + "/Cronograma/GetItem";
var urlGetCombosCronogramaItem = baseUrl + "/Cronograma/GetCombos";
var urlGetNextCronogramaItem = baseUrl + "/Cronograma/GetNextItem";
var urlCreateCronogramaItem = baseUrl + "/Cronograma/CreateItem";
var urlTableCronogramaItem = baseUrl + "/Cronograma/TableItem";
var urlFormCronogramaItem = baseUrl + "/Cronograma/FormItem";
var urlDeleteCronogramaItem = baseUrl + "/Cronograma/DeleteItem";

//Setor
var urlGetSetor = baseUrl + "/Setor/Get";
var urlGetCombosSetor = baseUrl + "/Setor/GetCombos";
var urlCreateSetor = baseUrl + "/Setor/Create";
var urlTableSetor = baseUrl + "/Setor/Table";
var urlTableFiltroSetor = baseUrl + "/Setor/TableFiltro";
var urlFormSetor = baseUrl + "/Setor/Form";
var urlDeleteSetor = baseUrl + "/Setor/Delete";

//Sistema Gestao
var urlGetSistemaGestao = baseUrl + "/SistemaGestao/Get";
var urlCreateSistemaGestao = baseUrl + "/SistemaGestao/Create";
var urlTableSistemaGestao = baseUrl + "/SistemaGestao/Table";
var urlFormSistemaGestao = baseUrl + "/SistemaGestao/Form";
var urlDeleteSistemaGestao = baseUrl + "/SistemaGestao/Delete";

//Entidade
var urlGetEntidade = baseUrl + "/Entidade/Get";
var urlCreateEntidade = baseUrl + "/Entidade/Create";
var urlTableEntidade = baseUrl + "/Entidade/Table";
var urlFormEntidade = baseUrl + "/Entidade/Form";
var urlDeleteEntidade = baseUrl + "/Entidade/Delete";

//Acionista
var urlGetAcionista = baseUrl + "/Acionista/Get";
var urlCreateAcionista = baseUrl + "/Acionista/Create";
var urlTableAcionista = baseUrl + "/Acionista/Table";
var urlFormAcionista = baseUrl + "/Acionista/Form";
var urlDeleteAcionista = baseUrl + "/Acionista/Delete";

//Cargo
var urlGetCargo = baseUrl + "/Cargo/Get";
var urlCreateCargo = baseUrl + "/Cargo/Create";
var urlTableCargo = baseUrl + "/Cargo/Table";
var urlFormCargo = baseUrl + "/Cargo/Form";
var urlDeleteCargo = baseUrl + "/Cargo/Delete";


//Nivel
var urlGetNivel = baseUrl + "/Nivel/Get";
var urlCreateNivel = baseUrl + "/Nivel/Create";
var urlTableNivel = baseUrl + "/Nivel/Table";
var urlFormNivel = baseUrl + "/Nivel/Form";
var urlDeleteNivel = baseUrl + "/Nivel/Delete";

//Titulo
var urlGetTitulo = baseUrl + "/Titulo/Get";
var urlCreateTitulo = baseUrl + "/Titulo/Create";
var urlTableTitulo = baseUrl + "/Titulo/Table";
var urlFormTitulo = baseUrl + "/Titulo/Form";
var urlDeleteTitulo = baseUrl + "/Titulo/Delete";

//Eap
var urlGetEap = baseUrl + "/Eap/Get";
var urlCreateEap = baseUrl + "/Eap/Create";
var urlTableEap = baseUrl + "/Eap/Table";
var urlFormEap = baseUrl + "/Eap/Form";
var urlDeleteEap = baseUrl + "/Eap/Delete";

//TipoArquivo
var urlGetTipoArquivo = baseUrl + "/TipoArquivo/Get";
var urlCreateTipoArquivo = baseUrl + "/TipoArquivo/Create";
var urlTableTipoArquivo = baseUrl + "/TipoArquivo/Table";
var urlFormTipoArquivo = baseUrl + "/TipoArquivo/Form";
var urlDeleteTipoArquivo = baseUrl + "/TipoArquivo/Delete";


//TipoTermo
var urlGetTipoTermo = baseUrl + "/TipoTermo/Get";
var urlCreateTipoTermo = baseUrl + "/TipoTermo/Create";
var urlTableTipoTermo = baseUrl + "/TipoTermo/Table";
var urlFormTipoTermo = baseUrl + "/TipoTermo/Form";
var urlDeleteTipoTermo = baseUrl + "/TipoTermo/Delete";


//TipoConselho
var urlGetTipoConselho = baseUrl + "/TipoConselho/Get";
var urlGetCombosTipoConselho = baseUrl + "/TipoConselho/GetCombos";
var urlCreateTipoConselho = baseUrl + "/TipoConselho/Create";
var urlTableTipoConselho = baseUrl + "/TipoConselho/Table";
var urlFormTipoConselho = baseUrl + "/TipoConselho/Form";
var urlDeleteTipoConselho = baseUrl + "/TipoConselho/Delete";

//PlanoAcao
var urlGetPlanoAcao = baseUrl + "/PlanoAcao/Get";
var urlGetPlanoAcaoColaborador = baseUrl + "/PlanoAcao/GetCombos";
var urlCreatePlanoAcao = baseUrl + "/PlanoAcao/Create";
var urlTablePlanoAcao = baseUrl + "/PlanoAcao/Table";
var urlFormPlanoAcao = baseUrl + "/PlanoAcao/Form";
var urlDeletePlanoAcao = baseUrl + "/PlanoAcao/Delete";
var urlTableFiltroPlanoAcao = baseUrl + "/PlanoAcao/TableFiltro";
var urlGetSetorPlano = baseUrl + "/PlanoAcao/GetSetorPlano";
var urlGetColaboradorPlano = baseUrl + "/PlanoAcao/GetColaboradorPlano";

//ItemPlanoAcao
var urlGetPlanoAcaoItem = baseUrl + "/PlanoAcao/GetItem";
var urlGetCombosPlanoAcaoItem = baseUrl + "/PlanoAcao/GetCombos";
var urlCreatePlanoAcaoItem = baseUrl + "/PlanoAcao/CreateTratamentoplano";
var urlTablePlanoAcaoItem = baseUrl + "/PlanoAcao/TableItem";
var urlFormPlanoAcaoItem = baseUrl + "/PlanoAcao/FormItem";
var urlDeletePlanoAcaoItem = baseUrl + "/PlanoAcao/DeleteItem";
var urlVisualizacaoPlanoAcao = baseUrl + "/PlanoAcao/Visualizacao";
var urlGetNextPlanoAcaoItem = baseUrl + "/PlanoAcao/GetNextItem";
var urlGetColaboradorPlanoItem = baseUrl + "/PlanoAcao/GetColaboradorPlanoItem";

//VerificacaoPlanoAcao
var urlGetVerificacaoPlanoAcao = baseUrl + "/PlanoAcao/GetVerificacaoPlanoAcao";
var urlCreateVerificacaoPlanoAcao = baseUrl + "/PlanoAcao/CreateVerificacaoPlanoAcao";
var urlTableVerificacaoPlanoAcao = baseUrl + "/PlanoAcao/TableVerificacaoPlanoAcao";
var urlFormVerificacaoPlanoAcao = baseUrl + "/PlanoAcao/FormVerificacaoPlanoAcao";
var urlDeleteVerificacaoPlanoAcao = baseUrl + "/PlanoAcao/DeleteVerificacaoPlanoAcao";
var urlUpdateVerificacaoPlanoAcao = baseUrl + "/PlanoAcao/UpdateVerificacaoPlanoAcao";

//Inventario
var urlGetInventario = baseUrl + "/Inventario/Get";
var urlCreateInventario = baseUrl + "/Inventario/Create";
var urlTableInventario = baseUrl + "/Inventario/Table";
var urlFormInventario = baseUrl + "/Inventario/Form";
var urlDeleteInventario = baseUrl + "/Inventario/Delete";
var urlDeleteTipoProcesso = baseUrl + "/TipoProcesso/Delete";

//Colaborador
var urlGetFotoColaborador = baseUrl + "/Colaborador/GetUploadedFile";
var urlSaveFotoColaborador = baseUrl + "/Colaborador/SaveUploadedFile";
var urlDeleteFotoColaborador = baseUrl + "/Colaborador/DeleteUploadedFile";
var urlSaveColaborador = baseUrl + "/Colaborador/Create";
var urlDeleteColaborador = baseUrl + "/Colaborador/Delete";
var urlGetColaborador = baseUrl + "/Colaborador/Get";
var urlFormColaborador = baseUrl + "/Colaborador/Form";
var urlGetCombosColaborador = baseUrl + "/Colaborador/GetCombos";
var urlTableColaborador = baseUrl + "/Colaborador/Table";
var urlTableFiltroColaborador = baseUrl + "/Colaborador/TableFiltro";
var urlValidateUserByEmail = baseUrl + "/Colaborador/ValidateUserByEmail";
var urlValidateDueDiligenceColaborador = baseUrl + "/Colaborador/ValidateDueDiligence";
var urlActiveUserByEmail = baseUrl + "/Colaborador/ActiveUserByEmail";
var urlGetBYCpf = baseUrl + "/Colaborador/GetBYCpf";

//Vinculo
var urlGetVinculo = baseUrl + "/Vinculo/Get";
var urlCreateVinculo = baseUrl + "/Vinculo/Create";
var urlTableVinculo = baseUrl + "/Vinculo/Table";
var urlFormVinculo = baseUrl + "/Vinculo/Form";
var urlDeleteVinculo = baseUrl + "/Vinculo/Delete";

//Denuncia
var urlGetDenuncia = baseUrl + "/Denuncia/Get";
var urlGetEmpresaDenuncia = baseUrl + "/Denuncia/GetEmpresa";
var urlCreateDenuncia = baseUrl + "/Denuncia/Create";
var urlTableDenuncia = baseUrl + "/Denuncia/Table";
var urlFormDenuncia = baseUrl + "/Denuncia/Form";
var urlDeleteDenuncia = baseUrl + "/Denuncia/Delete";

//CronogramaItem
var urlGetDenunciaItem = baseUrl + "/Denuncia/GetItem";
var urlGetCombosDenunciaItem = baseUrl + "/Denuncia/GetCombos";
var urlGetNextDenunciaItem = baseUrl + "/Denuncia/GetNextItem";
var urlCreateDenunciaItem = baseUrl + "/Denuncia/CreateItem";
var urlTableDenunciaItem = baseUrl + "/Denuncia/TableItem";
var urlFormDenunciaItem = baseUrl + "/Denuncia/FormItem";
var urlDeleteDenunciaItem = baseUrl + "/Denuncia/DeleteItem";

//Conselho
var urlGetConselho = baseUrl + "/Conselho/Get";
var urlGetCombosConselho = baseUrl + "/Conselho/GetCombos";
var urlCreateConselho = baseUrl + "/Conselho/Create";
var urlTableConselho = baseUrl + "/Conselho/Table";
var urlTableFiltroConselho = baseUrl + "/Conselho/TableFiltro";
var urlFormConselho = baseUrl + "/Conselho/Form";
var urlDeleteConselho = baseUrl + "/Conselho/Delete";


//ConselhoMandato
var urlGetConselhoMandato = baseUrl + "/Conselho/GetConselhoMandato";
var urlGetCombosConselhoMandato = baseUrl + "/Conselho/GetCombosConselhoMandato";
var urlCreateConselhoMandato = baseUrl + "/Conselho/CreateConselhoMandato";
var urlTableConselhoMandato = baseUrl + "/Conselho/TableConselhoMandato";
var urlFormConselhoMandato = baseUrl + "/Conselho/FormConselhoMandato";
var urlDeleteConselhoMandato = baseUrl + "/Conselho/DeleteConselhoMandato";
var urlGetTitularesConselhoEstrutura = baseUrl + "/Conselho/GetTitularesConselhoEstrutura";

//ConselhoEstrutura
var urlGetConselhoEstrutura = baseUrl + "/Conselho/GetConselhoEstrutura";
var urlGetCombosConselhoEstrutura = baseUrl + "/Conselho/GetCombosConselhoEstrutura";
var urlCreateConselhoEstrutura = baseUrl + "/Conselho/CreateConselhoEstrutura";
var urlTableConselhoEstrutura = baseUrl + "/Conselho/TableConselhoEstrutura";
var urlFormConselhoEstrutura = baseUrl + "/Conselho/FormConselhoEstrutura";
var urlDeleteConselhoEstrutura = baseUrl + "/Conselho/DeleteConselhoEstrutura";

//ConselhoReuniao
var urlGetConselhoReuniao = baseUrl + "/Conselho/GetConselhoReuniao";
var urlCreateConselhoReuniao = baseUrl + "/Conselho/CreateConselhoReuniao";
var urlTableConselhoReuniao = baseUrl + "/Conselho/TableConselhoReuniao";
var urlFormConselhoReuniao = baseUrl + "/Conselho/FormConselhoReuniao";
var urlDeleteConselhoReuniao = baseUrl + "/Conselho/DeleteConselhoReuniao";
var urlGetNextNroAtaConselho = baseUrl + "/Conselho/GetNextNroAtaConselho";
var urlGetCombosConselhoReuniao = baseUrl + "/Conselho/GetCombosConselhoReuniao";
var urlGetAtaReuniaoRelatorioConselho = baseUrl + "/Conselho/GetAtaReuniaoRelatorio";

//ConselhoReuniaoArquivo
var urlTableConselhoReuniaoArquivo = baseUrl + "/Conselho/TableConselhoReuniaoArquivo";
var urlGetArquivoConselhoReuniao = baseUrl + "/Conselho/GetUploadedFile";
var urlSaveArquivoConselhoReuniao = baseUrl + "/Conselho/SaveUploadFile";
var urlDeleteArquivoConselhoReuniao = baseUrl + "/Conselho/DeleteRelArquivoReuniao";

//Stakeholder
var urlGetStakeholder = baseUrl + "/Stakeholder/Get";
var urlGetCombosStakeholder = baseUrl + "/Stakeholder/GetCombos";
var urlCreateStakeholder = baseUrl + "/Stakeholder/Create";
var urlTableStakeholder = baseUrl + "/Stakeholder/Table";
var urlFormStakeholder = baseUrl + "/Stakeholder/Form";
var urlDeleteStakeholder = baseUrl + "/Stakeholder/Delete";
var urlCreateContatoStakeholder = baseUrl + "/Stakeholder/CreateContato";
var urlTableFiltroStakeholder = baseUrl + "/Stakeholder/TableFiltro";

//RequisitoNormativo
var urlGetRequisitoNormativo = baseUrl + "/RequisitoNormativo/Get";
var urlGetEmpresaRequisitoNormativo = baseUrl + "/RequisitoNormativo/GetEmpresa";
var urlCreateRequisitoNormativo = baseUrl + "/RequisitoNormativo/Create";
var urlTableRequisitoNormativo = baseUrl + "/RequisitoNormativo/Table";
var urlTableFiltroRequisitoNormativo = baseUrl + "/RequisitoNormativo/TableFiltro";
var urlFormRequisitoNormativo = baseUrl + "/RequisitoNormativo/Form";
var urlDeleteRequisitoNormativo = baseUrl + "/RequisitoNormativo/Delete";
var urlGetCombosRequisitoNormativo = baseUrl + "/RequisitoNormativo/GetCombos";
var urlInsertPlanoAcaoByRequisitoNormativo = baseUrl + "/RequisitoNormativo/InsertPlanoAcaoByRequisito";

//RequisitoNormativoItem
var urlGetRequisitoNormativoItem = baseUrl + "/RequisitoNormativo/GetItem";
var urlGetNextRequisitoNormativoItem = baseUrl + "/RequisitoNormativo/GetNextItem";
var urlCreateRequisitoNormativoItem = baseUrl + "/RequisitoNormativo/CreateItem";
var urlTableRequisitoNormativoItem = baseUrl + "/RequisitoNormativo/TableItem";
var urlFormRequisitoNormativoItem = baseUrl + "/RequisitoNormativo/FormItem";
var urlDeleteRequisitoNormativoItem = baseUrl + "/RequisitoNormativo/DeleteItem";
var urlGetCombosRequisitoNormativoItem = baseUrl + "/RequisitoNormativo/GetCombosItem";

//Nivel Acesso
var urlGetSubMenuNivelAcesso = baseUrl + "/NivelAcesso/SubMenu";
var urlGetNivelAcesso = baseUrl + "/NivelAcesso/Get";
var urlGetTableNivelAcesso = baseUrl + "/NivelAcesso/Table";
var urlCreateNivelAcesso = baseUrl + "/NivelAcesso/Create";
var urlGetCombosUsuarioNivelAcesso = baseUrl + "/NivelAcesso/GetCombosUsuario";
var urlGetCombosPerfilNivelAcesso = baseUrl + "/NivelAcesso/GetCombosPerfil";
var urlGetComboColaboradorNivelAcesso = baseUrl + "/NivelAcesso/GetComboColaborador";
var urlGetUsuarioNivelAcesso = baseUrl + "/NivelAcesso/GetUsuario";


//Aprova Registro
var urlGetAprovaRegistro = baseUrl + "/AprovaRegistro/Get";
var urlGetCombosAprovaRegistro = baseUrl + "/AprovaRegistro/GetCombos";
var urlCreateAprovaRegistro = baseUrl + "/AprovaRegistro/Create";
var urlTableAprovaRegistro = baseUrl + "/AprovaRegistro/Table";
var urlRejeitaAprovaRegistro = baseUrl + "/AprovaRegistro/Rejeita";

//Módulo
var urlGetModulo = baseUrl + "/Modulo/Get";
var urlCreateModulo = baseUrl + "/Modulo/Create";
var urlTableModulo = baseUrl + "/Modulo/Table";
var urlFormModulo = baseUrl + "/Modulo/Form";
var urlDeleteModulo = baseUrl + "/Modulo/Delete";

//Riscos
var urlGetRisco = baseUrl + "/Risco/Get";
var urlGetCombosRisco = baseUrl + "/Risco/GetCombos";
var urlCreateRisco = baseUrl + "/Risco/Create";
var urlTableRisco = baseUrl + "/Risco/Table";
var urlFormRisco = baseUrl + "/Risco/Form";
var urlDeleteRisco = baseUrl + "/Risco/Delete";


//RiscoIdentificacao
var urlGetRiscoIdentificacao = baseUrl + "/RiscoIdentificacao/Get";
var urlGetEmpresaRiscoIdentificacao = baseUrl + "/RiscoIdentificacao/GetEmpresa";
var urlCreateRiscoIdentificacao = baseUrl + "/RiscoIdentificacao/Create";
var urlTableRiscoIdentificacao = baseUrl + "/RiscoIdentificacao/Table";
var urlTableFiltroRiscoIdentificacao = baseUrl + "/RiscoIdentificacao/TableFiltro";
var urlFormRiscoIdentificacao = baseUrl + "/RiscoIdentificacao/Form";
var urlDeleteRiscoIdentificacao = baseUrl + "/RiscoIdentificacao/Delete";
var urlGetCombosRiscoIdentificacao = baseUrl + "/RiscoIdentificacao/GetCombos";
var urlInsertPlanoAcaoByRiscoIdentificacao = baseUrl + "/RiscoIdentificacao/InsertPlanoAcaoByAnaliseRisco";

//RiscoAnalise
var urlGetRiscoAnalise = baseUrl + "/RiscoAnalise/Get";
var urlGetRiscoMatriz = baseUrl + "/RiscoAnalise/GetRiscoMatriz";
var urlCreateRiscoAnalise = baseUrl + "/RiscoAnalise/Create";
var urlTableRiscoAnalise = baseUrl + "/RiscoAnalise/Table";
var urlFormRiscoAnalise = baseUrl + "/RiscoAnalise/Form";
var urlRiscoMAtriz = baseUrl + "/RiscoAnalise/RiscoMatriz";
var urlUpdateRiscoAnalise = baseUrl + "/RiscoAnalise/Update";
var urlTableFiltroRiscoAnalise = baseUrl + "/RiscoAnalise/TableFiltro";
var urlGetCombosRiscoAnalise = baseUrl + "/RiscoAnalise/GetCombos";

//Treinamento
var urlGetTreinamento = baseUrl + "/Treinamento/Get";
var urlGetTreinamentoOrcamento = baseUrl + "/Treinamento/GetOrcamento";
var urlGetCombosTreinamento = baseUrl + "/Treinamento/GetCombos";
var urlCreateTreinamento = baseUrl + "/Treinamento/Create";
var urlCreateTreinamentoOrcamento = baseUrl + "/Treinamento/CreateOrcamento";
var urlTableTreinamento = baseUrl + "/Treinamento/Table";
var urlFormTreinamento = baseUrl + "/Treinamento/Form";
var urlDeleteTreinamento = baseUrl + "/Treinamento/Delete";
var urlTableFiltroTreinamento = baseUrl + "/Treinamento/TableFiltro";
var urlGetTreinamentoUser = baseUrl + "/Treinamento/GetTreinamentoUser";
var urlGetVerificacaoTreinamentoUser = baseUrl + "/Treinamento/GetVerificacaoTreinamentoUser";
var urlGetAvaliacaoTreinamentoUser = baseUrl + "/Treinamento/GetAvaliacaoTreinamentoUser";

var urlGetCombosProgramacao = baseUrl + "/Treinamento/GetCombosProgramacao";
var urlGetProgramacao = baseUrl + "/Treinamento/GetProgramacao";
var urlTableProgramacao = baseUrl + "/Treinamento/TableProgramacao";
var urlTableFiltroProgramacao = baseUrl + "/Treinamento/TableFiltroProgramacao";
var urlFormProgramacao = baseUrl + "/Treinamento/FormProgramacao";
var urlCreateProgramacao = baseUrl + "/Treinamento/CreateProgramacao";

var urlGetAlocacaoParticipante = baseUrl + "/Treinamento/GetAlocacaoParticipantes";
var urlGetComboParticipante = baseUrl + "/Treinamento/GetComboParticipante";
var urlCreateParticipante = baseUrl + "/Treinamento/CreateParticipante";

var urlTreinamentoElaboracao = baseUrl + "Treinamento/Elaboracao";
var urlGetElaboracao = baseUrl + "/Treinamento/GetElaboracao";
var urlTableElaboracao = baseUrl + "/Treinamento/TableFiltroElaboracao";
var urlFormElaboracao = baseUrl + "/Treinamento/FormElaboracao";
var urlCreateElaboracao = baseUrl + "/Treinamento/CreateElaboracao";
var urlTableFiltroElaboracao = baseUrl + "/Treinamento/TableElaboracao";
var urlDeleteElaboracao = baseUrl + "/Treinamento/DeleteElaboracao";
var urlGetRespostasElaboracao = baseUrl + "/Treinamento/GetRespostas";
var urlCreateLeituraElaboracao = baseUrl + "/Treinamento/CreateLeitura";

var urlGetComboTreinamento = baseUrl + "/Treinamento/GetComboTreinamento";
var urlGetComboTreinamentoParametro = baseUrl + "/Treinamento/GetComboTreinamentoParametro";
var urlGetComboCargo = baseUrl + "/Treinamento/GetComboCargo";

var urlGetAvaliacaoCapacitacaoTreinamento = baseUrl + "/Treinamento/GetAvaliacaoCapacitacao";

var urlTableRegistro = baseUrl + "/Treinamento/TableRegistro";
var urlCreateRegistro = baseUrl + "/Treinamento/CreateRegistro";
var urlTreinamentoVerificacaoEficacia = baseUrl + "/Treinamento/VerificacaoEficacia";
var urlCreateTreinamentoQuestionario = baseUrl + "/Treinamento/CreateQuestionario";
var urlValidaAvaliacaoQuestionario = baseUrl + "/Treinamento/ValidaAvaliacao";

//RequisitoLegislacao
var urlGetRequisitoLegislacao = baseUrl + "/RequisitoLegislacao/Get";
var urlCreateRequisitoLegislacao = baseUrl + "/RequisitoLegislacao/Create";
var urlTableRequisitoLegislacao = baseUrl + "/RequisitoLegislacao/Table";
var urlTableFiltroRequisitoLegislacao = baseUrl + "/RequisitoLegislacao/TableFiltro";
var urlFormRequisitoLegislacao = baseUrl + "/RequisitoLegislacao/Form";
var urlDeleteRequisitoLegislacao = baseUrl + "/RequisitoLegislacao/Delete";
var urlGetCombosRequisitoLegislacao = baseUrl + "/RequisitoLegislacao/GetCombos";
var urlImportarRequisitoLegislacao = baseUrl + "/RequisitoLegislacao/Importar";
var urlGetComboImportacao = baseUrl + "/RequisitoLegislacao/GetComboImportacao";
var urlCreateImportacao = baseUrl + "/RequisitoLegislacao/CreateImportacao";


//TituloLegislacao
var urlGetTituloLegislacao = baseUrl + "/RequisitoLegislacao/GetTituloLegislacao";
var urlCreateTituloLegislacao = baseUrl + "/RequisitoLegislacao/CreateTituloLegislacao";
var urlTableTituloLegislacao = baseUrl + "/RequisitoLegislacao/TableTituloLegislacao";
var urlFormTituloLegislacao = baseUrl + "/RequisitoLegislacao/FormTituloLegislacao";
var urlDeleteTituloLegislacao = baseUrl + "/RequisitoLegislacao/DeleteTituloLegislacao";
var urlGetTableTituloLegislacao = baseUrl + "/RequisitoLegislacao/GetTableTituloLegislacao";

//CapituloLegislacao
var urlGetCapituloLegislacao = baseUrl + "/RequisitoLegislacao/GetCapituloLegislacao";
var urlCreateCapituloLegislacao = baseUrl + "/RequisitoLegislacao/CreateCapituloLegislacao";
var urlTableCapituloLegislacao = baseUrl + "/RequisitoLegislacao/TableCapituloLegislacao";
var urlFormCapituloLegislacao = baseUrl + "/RequisitoLegislacao/FormCapituloLegislacao";
var urlDeleteCapituloLegislacao = baseUrl + "/RequisitoLegislacao/DeleteCapituloLegislacao";
var urlGetTableCapituloLegislacao = baseUrl + "/RequisitoLegislacao/GetTableCapituloLegislacao";

//SecaoLegislacao
var urlGetSecaoLegislacao = baseUrl + "/RequisitoLegislacao/GetSecaoLegislacao";
var urlCreateSecaoLegislacao = baseUrl + "/RequisitoLegislacao/CreateSecaoLegislacao";
var urlTableSecaoLegislacao = baseUrl + "/RequisitoLegislacao/TableSecaoLegislacao";
var urlFormSecaoLegislacao = baseUrl + "/RequisitoLegislacao/FormSecaoLegislacao";
var urlDeleteSecaoLegislacao = baseUrl + "/RequisitoLegislacao/DeleteSecaoLegislacao";
var urlInsertPlanoAcaoBySecaoLegislacao = baseUrl + "/RequisitoLegislacao/InsertPlanoAcaoBySecaoLegislacao";
var urlGetTableSecaoLegislacao = baseUrl + "/RequisitoLegislacao/GetTableSecaoLegislacao";

//ItemSecaoLegislacao
var urlGetItemSecaoLegislacao = baseUrl + "/RequisitoLegislacao/GetItemSecaoLegislacao";
var urlGetNextItemSecaoLegislacao = baseUrl + "/RequisitoLegislacao/GetNextItemSecaoLegislacao";
var urlCreateItemSecaoLegislacao = baseUrl + "/RequisitoLegislacao/CreateItemSecaoLegislacao";
var urlTableItemSecaoLegislacao = baseUrl + "/RequisitoLegislacao/TableItemSecaoLegislacao";
var urlFormItemSecaoLegislacao = baseUrl + "/RequisitoLegislacao/FormItemSecaoLegislacao";
var urlDeleteItemSecaoLegislacao = baseUrl + "/RequisitoLegislacao/DeleteItemSecaoLegislacao";
var urlGetCombosItemSecaoLegislacao = baseUrl + "/RequisitoLegislacao/GetCombosItemSecaoLegislacao";

//Configurações

var urlGetLogoConfiguracao = baseUrl + "/Configuracao/GetUploadedFile";
var urlSaveLogoConfiguracao = baseUrl + "/Configuracao/SaveUploadedFile";
var urlDeleteLogoConfiguracao = baseUrl + "/Configuracao/DeleteUploadedFile";
var urlSaveConfiguracao = baseUrl + "/Configuracao/Create";
var urlDeleteConfiguracao = baseUrl + "/Configuracao/Delete";
var urlGetConfiguracao = baseUrl + "/Configuracao/Get";
var urlFormConfiguracao = baseUrl + "/Configuracao/Form";
var urlGetCombosConfiguracao = baseUrl + "/Configuracao/GetCombos";
var urlTableConfiguracao = baseUrl + "/Configuracao/Table";

//AnaliseMercado
var urlGetAnaliseMercado = baseUrl + "/AnaliseMercado/Get";
var urlGetEmpresaAnaliseMercado = baseUrl + "/AnaliseMercado/GetEmpresa";
var urlCreateAnaliseMercado = baseUrl + "/AnaliseMercado/Create";
var urlTableAnaliseMercado = baseUrl + "/AnaliseMercado/Table";
var urlFormAnaliseMercado = baseUrl + "/AnaliseMercado/Form";
var urlDeleteAnaliseMercado = baseUrl + "/AnaliseMercado/Delete";
var urlGetCombosAnaliseMercado = baseUrl + "/AnaliseMercado/GetCombos";
var urlTableFiltroAnaliseMercado = baseUrl + "/AnaliseMercado/TableFiltro";

//MatrizSwot
var urlGetMatrizSwot = baseUrl + "/MatrizSwot/Get";
var urlCreateMatrizSwot = baseUrl + "/MatrizSwot/Create";
var urlMatrizSwot = baseUrl + "/MatrizSwot/Matriz";
var urlFormMatrizSwot = baseUrl + "/MatrizSwot/Form";
var urlDeleteMatrizSwot = baseUrl + "/MatrizSwot/Delete";
var urlGetCombosMatrizSwot = baseUrl + "/MatrizSwot/GetCombos";
var urlMatrizFiltroMatrizSwot = baseUrl + "/MatrizSwot/MatrizFiltro";

//DueDiligence
var urlGetDueDiligence = baseUrl + "/DueDiligence/Get";
var urlCreateDueDiligence = baseUrl + "/DueDiligence/Create";
var urlCreateRiscoDueDiligence = baseUrl + "/DueDiligence/CreateRisco";
var urlDeleteDueDiligence = baseUrl + "/DueDiligence/Delete";
var urlTableDueDiligence = baseUrl + "/DueDiligence/Table";
var urlFormDueDiligence = baseUrl + "/DueDiligence/Form";
var urlGetPortalTransparencia = baseUrl + "/DueDiligence/GetPortalTransparencia";

//Ged
var urlGetGed = baseUrl + "/Ged/Get";
var urlGetChildrenGed = baseUrl + "/Ged/GetChildren";
var urlGetFileGed = baseUrl + "/Ged/GetFile";
var urlCreateGed = baseUrl + "/Ged/Create";
var urlUpdateGed = baseUrl + "/Ged/Update";
var urlCreateAsyncGed = baseUrl + "/Ged/CreateAsync";
var urlGetDetalheGed = baseUrl + "/Ged/GetDetalhe";
var urlDeleteGed = baseUrl + "/Ged/Delete";

//Reunião
var urlIndexReuniao = baseUrl + "/Reuniao/";
var urlGetReuniao = baseUrl + "/Reuniao/Get";
var urlGetCombosReuniao = baseUrl + "/Reuniao/GetCombos";
var urlCreateReuniao = baseUrl + "/Reuniao/Create";
var urlTableReuniao = baseUrl + "/Reuniao/Table";
var urlTableFiltroReuniao = baseUrl + "/Reuniao/TableFiltro";
var urlFormReuniao = baseUrl + "/Reuniao/Form";
var urlDeleteReuniao = baseUrl + "/Reuniao/Delete";

//Ordem_Reuniao
var urlGetOrdemReuniao = baseUrl + "/Reuniao/GetOrdemReuniao";
var urlCreateOrdemReuniao = baseUrl + "/Reuniao/CreateOrdemReuniao";
var urlTableOrdemReuniao = baseUrl + "/Reuniao/TableOrdemReuniao";
var urlFormOrdemReuniao = baseUrl + "/Reuniao/FormOrdemReuniao";
var urlDeleteOrdemReuniao = baseUrl + "/Reuniao/DeleteOrdemReuniao";
var urlGetNextOrdemReuniaoItem = baseUrl + "/Reuniao/GetNextItem";


//Participante Reuniao
var urlTableParticipanteReuniao = baseUrl + "/Reuniao/TableParticipanteReuniao";
var urlCreateParticipanteReuniao = baseUrl + "/Reuniao/CreateParticipanteReuniao";
var urlGetCombosParticipanteReuniao = baseUrl + "/Reuniao/GetCombosParticipanteReuniao";
var urlGetParticipanteReuniao = baseUrl + "/Reuniao/GetParticipanteReuniao";
var urlUpdatePresencaReuniao = baseUrl + "/Reuniao/UpdatePresencaReuniao";

//Requisito - Novo
var urlGetRequisitoEstrutura = baseUrl + "/Requisito/GetEstrutura";
var urlCreateRequisitoEstrutura = baseUrl + "/Requisito/CreateEstrutura";
var urlTableRequisitoEstrutura = baseUrl + "/Requisito/TableEstrutura";
var urlFormRequisitoEstrutura = baseUrl + "/Requisito/FormEstrutura";
var urlDeleteRequisitoEstrutura = baseUrl + "/Requisito/DeleteEstrutura";

var urlTableTipoRequisito = baseUrl + "/Requisito/TableTipo";
var urlGetTipoRequisito = baseUrl + "/Requisito/GetTipo";
var urlCreateTipoRequisito = baseUrl + "/Requisito/CreateTipo";
var urlFormTipoRequisito = baseUrl + "/Requisito/FormTipo";
var urlDeleteTipoRequisito = baseUrl + "/Requisito/DeleteTipo";

var urlGetCombosRequisito = baseUrl + "/Requisito/GetCombos";
var urlGetRequisito = baseUrl + "/Requisito/Get";
var urlCreateRequisito = baseUrl + "/Requisito/Create";
var urlTableRequisito = baseUrl + "/Requisito/Table";
var urlTableFiltroRequisito = baseUrl + "/Requisito/TableFiltro";
var urlFormRequisito = baseUrl + "/Requisito/Form";
var urlDeleteRequisito = baseUrl + "/Requisito/Delete";


var urlFormRequisitoItem = baseUrl + "/Requisito/IndexItem";
var urlGetRequisitoItem = baseUrl + "/Requisito/GetRequisitoItem";
var urlGetRequisitoItemById = baseUrl + "/Requisito/GetRequisitoItemById";
var urlGetRequisitoItemFiltro = baseUrl + "Requisito/GetRequisitoItemFiltro";
var urlCreateRequisitoItem = baseUrl + "/Requisito/CreateRequisitoItem";
var urlDeleteRequisitoItem = baseUrl + "/Requisito/DeleteRequisitoItem";
var urlUpdateOrdenacaoRequisitoItem = baseUrl + "/Requisito/UpdateOrdenacaoItem";


var urlTableRequisitoEmrpesa = baseUrl + "/Requisito/TableEmpresa";
var urlGetRequisitoEmpresaFiltro = baseUrl + "/Requisito/GetRequisitoEmpresaByFiltro";
var urlGetRequisitoEmpresa = baseUrl + "/Requisito/GetRequisitoEmpresa";
var urlCreateRequisitoEmpresa = baseUrl + "/Requisito/CreateEmpresa";
var urlFormRequisitoEmrpesa = baseUrl + "/Requisito/FormEmpresa";
var urlDeleteRequisitoEmpresa = baseUrl + "/Requisito/DeleteEmpresa";
var urlTableFiltroRequisitoEmpresa = baseUrl + "/Requisito/TableFiltroEmpresa";
var urlGetCombosRequisitoEmpresa = baseUrl + "/Requisito/GetComboRequisitoEmpresa";

var urlTableRequisitoAnalise = baseUrl + "/RequisitoAnalise/Table";
var urlGetRequisitoAnaliseFiltro = baseUrl + "/RequisitoAnalise/GetRequisitoEmpresaByFiltro";
var urlGetRequisitoAnalise = baseUrl + "/RequisitoAnalise/Get";
var urlGetRequisitoForAnalise = baseUrl + "/RequisitoAnalise/GetRequisitoById";
var urlGetRequisitoGeral = baseUrl + "/RequisitoAnalise/GetRequisitoGeral";
var urlCreateRequisitoAnalise = baseUrl + "/RequisitoAnalise/Create";
var urlFormRequisitoAnalise = baseUrl + "/RequisitoAnalise/Form";
var urlDeleteRequisitoAnalise = baseUrl + "/RequisitoAnalise/Delete";
var urlTableFiltroRequisitoAnalise = baseUrl + "/RequisitoAnalise/TableFiltro";
var urlGetCombosRequisitoAnalise = baseUrl + "/RequisitoAnalise/GetCombos";
var urlGetRequisitoAnaliseItemById = baseUrl + "/RequisitoAnalise/GetRequisitoAnaliseItemById";
var urlGetRequisitoAnaliseItem = baseUrl + "/RequisitoAnalise/GetRequisitoAnaliseItem";
var urlGetRequisitoAnaliseGeral = baseUrl + "/RequisitoAnalise/GetRequisitoAnaliseGeral";
var urlCreateRequisitoPlanoAcao = baseUrl + "/RequisitoAnalise/CreateRequisitoPlanoAcao";
var urlValidaGeracaoPlanoAcao = baseUrl + "/RequisitoAnalise/ValidaGeracaoPlanoAcao";

//TipoCodigoEtica
var urlGetTipoCodigoEtica = baseUrl + "/TipoCodigoEtica/Get";
var urlCreateTipoCodigoEtica = baseUrl + "/TipoCodigoEtica/Create";
var urlTableTipoCodigoEtica = baseUrl + "/TipoCodigoEtica/Table";
var urlFormTipoCodigoEtica = baseUrl + "/TipoCodigoEtica/Form";
var urlDeleteTipoCodigoEtica = baseUrl + "/TipoCodigoEtica/Delete";

//Termo Consentimento
var urlGetTermoConsentimento = baseUrl + "/TermoConsentimento/Get";
var urlGetTermoConsentimentoUser = baseUrl + "/TermoConsentimento/GetTermoUser";
var urlGetCombosTermoConsentimento = baseUrl + "/TermoConsentimento/GetCombos";
var urlCreateTermoConsentimento = baseUrl + "/TermoConsentimento/Create";
var urlTableTermoConsentimento = baseUrl + "/TermoConsentimento/Table";
var urlTableFiltroTermoConsentimento = baseUrl + "/TermoConsentimento/TableFiltro";
var urlFormTermoConsentimento = baseUrl + "/TermoConsentimento/Form";
var urlDeleteTermoConsentimento = baseUrl + "/TermoConsentimento/Delete";
var urlBoardTermoConsentimento = baseUrl + "/TermoConsentimento/Board";
var urlDetailTermoConsentimento = baseUrl + "/TermoConsentimento/Details";
var urlValidaTermoConsentimento = baseUrl + "/TermoConsentimento/ValidaTermo";
var urlReadTermoConsentimento = baseUrl + "/TermoConsentimento/Read";

//Auditoria
var urlGetAuditoria = baseUrl + "/Auditoria/Get";
var urlGetAltaDirecaoAuditoria = baseUrl + "/Auditoria/GetAltaDirecao";
var urlGetAuditoriaOrcamento = baseUrl + "/Auditoria/GetOrcamento";
var urlGetCombosAuditoria = baseUrl + "/Auditoria/GetCombos";
var urlCreateAuditoria = baseUrl + "/Auditoria/Create";
var urlCreateAuditoriaOrcamento = baseUrl + "/Auditoria/CreateOrcamento";
var urlTableAuditoria = baseUrl + "/Auditoria/Table";
var urlFormAuditoria = baseUrl + "/Auditoria/Form";
var urlDeleteAuditoria = baseUrl + "/Auditoria/Delete";
var urlTableFiltroAuditoria = baseUrl + "/Auditoria/TableFiltro";
var urlGetAuditoriaUser = baseUrl + "/Auditoria/GetAuditoriaUser";
var urlGetVerificacaoAuditoriaUser = baseUrl + "/Auditoria/GetVerificacaoAuditoriaUser";
var urlGetAvaliacaoAuditoriaUser = baseUrl + "/Auditoria/GetAvaliacaoAuditoriaUser";

var urlGetAuditoriaPlano = baseUrl + "/Auditoria/GetPlano";
var urlGetCombosAuditoriaPlano = baseUrl + "/Auditoria/GetCombosPlano"; 
var urlFormAuditoriaPlano = baseUrl + "/Auditoria/FormPlano";
var urlTableAuditoriaPlano = baseUrl + "/Auditoria/TablePlano";
var urlDeleteAuditoriaPlano = baseUrl + "/Auditoria/DeletePlano";
var urlCreateAuditoriaPlano = baseUrl + "/Auditoria/CreatePlano";

var urlFormAuditoriaRelatorio = baseUrl + "/Auditoria/FormRelatorio";
var urlCreateAuditoriaRelatorio = baseUrl + "/Auditoria/CreateRelatorio";
var urlGetAuditoriaRelatorio = baseUrl + "/Auditoria/GetRelatorio";

var urlAuditoriaElaboracao = baseUrl + "Auditoria/Elaboracao";
var urlGetAuditoriaElaboracao = baseUrl + "/Auditoria/GetElaboracao";
var urlTableAuditoriaElaboracao = baseUrl + "/Auditoria/TableFiltroElaboracao";
var urlFormAuditoriaElaboracao = baseUrl + "/Auditoria/FormElaboracao";
var urlCreateAuditoriaElaboracao = baseUrl + "/Auditoria/CreateElaboracao";
var urlTableFiltroAuditoriaElaboracao = baseUrl + "/Auditoria/TableElaboracao";
var urlDeleteAuditoriaElaboracao = baseUrl + "/Auditoria/DeleteElaboracao";
var urlGetRespostasAuditoriaElaboracao = baseUrl + "/Auditoria/GetRespostas";
var urlCreateLeituraAuditoriaElaboracao = baseUrl + "/Auditoria/CreateLeitura";

var urlGetComboAuditoria = baseUrl + "/Auditoria/GetComboAuditoria";
var urlGetComboAuditoriaParametro = baseUrl + "/Auditoria/GetComboAuditoriaParametro";
var urlGetComboAuditoriaCargo = baseUrl + "/Auditoria/GetComboCargo";

var urlGetAvaliacaoCapacitacaoAuditoria = baseUrl + "/Auditoria/GetAvaliacaoCapacitacao";

var urlTableAuditoriaRegistro = baseUrl + "/Auditoria/TableRegistro";
var urlCreateAuditoriaRegistro = baseUrl + "/Auditoria/CreateRegistro";
var urlAuditoriaVerificacaoEficacia = baseUrl + "/Auditoria/VerificacaoEficacia";
var urlCreateAuditoriaQuestionario = baseUrl + "/Auditoria/CreateQuestionario";
var urlAuditoriaValidaAvaliacaoQuestionario = baseUrl + "/Auditoria/ValidaAvaliacao";
var urlGetAuditoresAuditoria = baseUrl + "/Auditoria/GetAuditores";

//Dados Pessoais
var urlIndexDadosPessoais = baseUrl + "/DadosPessoais/";
var urlGetDadosPessoais = baseUrl + "/DadosPessoais/Get";
var urlCreateDadosPessoais = baseUrl + "/DadosPessoais/Create";
var urlTableDadosPessoais = baseUrl + "/DadosPessoais/Table";
var urlTableFiltroDadosPessoais = baseUrl + "/DadosPessoais/TableFiltro";
var urlFormDadosPessoais = baseUrl + "/DadosPessoais/Form";
var urlDeleteDadosPessoais = baseUrl + "/DadosPessoais/Delete";


//Gestão de Incidentes
var urlIndexGestaoIncidentes = baseUrl + "/GestaoIncidentes/";
var urlGetGestaoIncidentes = baseUrl + "/GestaoIncidentes/Get";
var urlCreateGestaoIncidentes = baseUrl + "/GestaoIncidentes/Create";
var urlTableGestaoIncidentes = baseUrl + "/GestaoIncidentes/Table";
var urlTableFiltroGestaoIncidentes = baseUrl + "/GestaoIncidentes/TableFiltro";
var urlFormGestaoIncidentes = baseUrl + "/GestaoIncidentes/Form";
var urlDeleteGestaoIncidentes = baseUrl + "/GestaoIncidentes/Delete";
var urlGetCombosGestaoIncidentes = baseUrl + "/GestaoIncidentes/GetCombosGestaoIncidentes";


//Não Conformidade
var urlIndexNaoConformidade = baseUrl + "/NaoConformidade/";
var urlGetNaoConformidade = baseUrl + "/NaoConformidade/Get";
var urlCreateNaoConformidade = baseUrl + "/NaoConformidade/Create";
var urlTableNaoConformidade = baseUrl + "/NaoConformidade/Table";
var urlTableFiltroNaoConformidade = baseUrl + "/NaoConformidade/TableFiltro";
var urlFormNaoConformidade = baseUrl + "/NaoConformidade/Form";
var urlDeleteNaoConformidade = baseUrl + "/NaoConformidade/Delete";
var urlGetComboNaoConformidade = baseUrl + "/NaoConformidade/GetCombosDados";