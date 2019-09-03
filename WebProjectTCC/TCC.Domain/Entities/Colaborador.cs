using TCC.Domain.Identity;
using System;
using System.Collections.Generic;

namespace TCC.Domain.Entities
{
    public class Colaborador : BaseEntity
    {
        //FK
        public int IdEmpresa { get; set; }
        public int? IdArqFoto { get; set; }
        public int? IdPerfil { get; set; }
        public int IdUsuarioLogin { get; set; }

        //Campos    

        public string Nome { get; set; }
        public string Cpf { get; set; }
        public decimal Valor { get; set; }
        public string Email { get; set; }
        public DateTime DataAdmissao { get; set; }

        public virtual Empresa Empresa { get; set; }


        public virtual ApplicationUser Usuario { get; set; }
        public virtual ApplicationRole Perfil { get; set; }

        public virtual ICollection<ColaboradorAtividades> ColaboradorAtividades { get; set; }
    }
}
