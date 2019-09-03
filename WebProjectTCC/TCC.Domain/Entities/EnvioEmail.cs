using TCC.Domain.Objects;
using System;

namespace TCC.Domain.Entities
{
    public class EnvioEmail : BaseEntity
    {
        public string Titulo { get; set; }

        public string Mensagem { get; set; }

        public string Destinatario { get; set; }

        public string Remetente { get; set; }

        public eTipoMensagem TipoMensagem { get; set; }        

        public DateTime? DataEnvio { get; set; }

        public bool Retorno { get; set; }
    }
}
