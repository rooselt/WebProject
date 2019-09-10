using System.Collections.Generic;
using System.Linq;
using System.Net;
using TCC.Application;
using TCC.Domain.Entities;
using TCC.Infra.Context;
using TCC.Infra.Repositories;

namespace TCC.Infra.ValueObject
{
    public class TreinamentoObject : RepositoryBase<Treinamento>
    {


        public TreinamentoObject(AcademiaContext context) : base(context)
        {
            Context = new AcademiaContext();
        }

        public TreinamentoObject()
        {
        }


        public List<TreinamentoDto> GetTreinamento()
        {
            var treinamento = GetAll().Select(c => new TreinamentoDto
            {
                Id = c.Id,
                Descricao = c.Descricao,
                Local = c.Local,
                Instrutor = c.Colaborador.Nome
            }).ToList();

            return treinamento;
        }


        public ResponseMessage<Treinamento> InsertOrUpdate(Treinamento treinamento)
        {
            var response = new ResponseMessage<Treinamento>();
            var dados = GetById(treinamento.Id);
            if (dados == null)
            {
                try
                {
                    Add(treinamento);

                    response.statusCode = HttpStatusCode.OK;
                    response.mensagem = _crudMsgFormater.CreateSuccesCrudMessage();
                }
                catch
                {
                    response.statusCode = HttpStatusCode.BadRequest;
                    response.mensagem = _crudMsgFormater.CreateErrorCrudMessage();
                }
            }
            else
            {
                new TreinamentoSemanaObject().DeleteBy(dados.Id);

                dados.IdColaborador = treinamento.IdColaborador;
                dados.IdEmpresa = treinamento.IdEmpresa;
                dados.IdArquivo = treinamento.IdArquivo;
                dados.Descricao = treinamento.Descricao;
                dados.PeriodoInicial = treinamento.PeriodoInicial;
                dados.PeriodoFinal = treinamento.PeriodoFinal;

                dados.TreinamentoSemana = treinamento.TreinamentoSemana;

                Update(dados);
            }

            Save();

            return response;
        }
    }

    public class TreinamentoDto
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Instrutor { get;  set; }
        public string Local { get;  set; }
    }
}
