using System;

namespace TCC.Domain.Entities
{
    public class TreinamentoColaborador : BaseEntity
    {
        //CAMPOS  
        public DateTime? DataLeitura { get; set; }
        public DateTime? DataConfirma { get; set; }
        
        public bool? BoolLeitura { get; set; }

        public int IdTreinamento { get; set; }
        public int IdColaborador { get; set; }
      
        public bool? Confirma { get; set; }

        public virtual Treinamento Treinamento { get; set; }
        public virtual Colaborador Colaborador { get; set; }
    }
}
