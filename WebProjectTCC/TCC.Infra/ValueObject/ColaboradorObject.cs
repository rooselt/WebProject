using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using TCC.Application;
using TCC.Domain.Entities;
using TCC.Domain.Identity;
using TCC.Domain.Objects;
using TCC.Infra.Context;
using TCC.Infra.Repositories;

namespace TCC.Infra.ValueObject
{
    public class ColaboradorObject : RepositoryBase<Colaborador>
    {

        public ColaboradorObject(AcademiaContext context) : base(context)
        {
            Context = new AcademiaContext();
        }

        public ColaboradorObject()
        {
        }

        public List<ColaboradorDto> GetCombo()
        {
            var dados = GetAll()
                .Select(c => new ColaboradorDto
                {
                    Id = c.Id,
                    Descricao = c.Nome
                }).OrderBy(c => c.Descricao).ToList();

            return dados;
        }

        public bool UpdateColaborador(Colaborador clienteNew, Colaborador clienteOld)
        {
            if (clienteOld == null)
            {
                return false;
            }
            
            clienteOld.IdPerfil = clienteNew.IdPerfil;
            clienteOld.IdAtividade = clienteNew.IdAtividade;
            clienteOld.IdEmpresa = clienteNew.IdEmpresa;
            
            clienteOld.Cpf = clienteNew.Cpf;
            clienteOld.Nome = clienteNew.Nome;
          
            clienteOld.Email = clienteNew.Email;           
           
         
            Update(clienteOld);
            Save();
            return true;
        }

        public ResponseMessage<Colaborador> InsertOrUpdate(Colaborador colaborador)
        {
            var response = new ResponseMessage<Colaborador>();
            var dados = GetById(colaborador.Id);
            if (dados == null)
            {
                try
                {
                    colaborador.Usuario = new ApplicationUser
                    {
                        PasswordHash = EnumHelper.HashPassword("Acm12345"),
                        Email = colaborador.Email,
                        UserName = colaborador.Email,
                        SecurityStamp = Guid.NewGuid().ToString()
                    };

                    Add(colaborador);

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
                UpdateColaborador(colaborador, dados);
            }

            Save();

            return response;
        }
    }

    public class ColaboradorDto
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
    }
}
