using System.Collections.Generic;
using System.Linq;
using System.Net;
using TCC.Application;
using TCC.Domain.Entities;
using TCC.Infra.Context;
using TCC.Infra.Repositories;

namespace TCC.Infra.ValueObject
{
    public class ClienteObject : RepositoryBase<Cliente>
    {

        public ClienteObject(AcademiaContext context) : base(context)
        {
            Context = new AcademiaContext();
        }

        public ClienteObject()
        {
        }

        public List<ClienteDto> GetCombo()
        {
            var dados = GetAll()
                .Select(c => new ClienteDto
                {
                    Id = c.Id,
                    Descricao = c.Nome
                }).OrderBy(c => c.Descricao).ToList();

            return dados;
        }

        public bool UpdateCliente(Cliente clienteNew, Cliente clienteOld)
        {
            if (clienteOld == null)
            {
                return false;
            }
            
            clienteOld.IdCidade = clienteNew.IdCidade;
            clienteOld.IdEmpresa = clienteNew.IdEmpresa;
            clienteOld.Identidade = clienteNew.Identidade;
            clienteOld.Cpf = clienteNew.Cpf;
            clienteOld.Nome = clienteNew.Nome;
            clienteOld.CEP = clienteNew.CEP;        
            clienteOld.Complemento = clienteNew.Complemento;            
            clienteOld.Ramal = clienteNew.Ramal;
            clienteOld.TelefoneContato = clienteNew.TelefoneContato;
            clienteOld.TelefoneCelular = clienteNew.TelefoneCelular;
            clienteOld.Cidade = clienteNew.Cidade;            
            clienteOld.Logradouro = clienteNew.Logradouro;
            clienteOld.Numero = clienteNew.Numero;
            clienteOld.Complemento = clienteNew.Complemento;
            clienteOld.Bairro = clienteNew.Bairro;
            clienteOld.CEP = clienteNew.CEP;
         
            Update(clienteOld);
            Save();
            return true;
        }

        public ResponseMessage<Cliente> InsertOrUpdate(Cliente cliente)
        {
            var response = new ResponseMessage<Cliente>();
            var dados = GetById(cliente.Id);
            if (dados == null)
            {
                try
                {
                    Add(cliente);

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
                UpdateCliente(cliente, dados);
            }

            Save();

            return response;
        }
    }

    public class ClienteDto
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
    }
}
