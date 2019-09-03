using System;

namespace TCC.Domain.Entities
{
    public class Treinamento : BaseEntity
    {
        public int? IdColaborador { get; set; }
        public int IdEmpresa { get; set; }
        public int? IdArquivo { get; set; }

        public string Descricao { get; set; }
        public string Local { get; set; }
      
        public DateTime? PeriodoInicial { get; set; }
        public DateTime? PeriodoFinal { get; set; }

        public decimal CargaHoraria { get; set; }

        public virtual Arquivo Arquivo { get; set; }
        public virtual Empresa Empresa { get; set; }
        public virtual Colaborador Colaborador { get; set; }
    }
}
