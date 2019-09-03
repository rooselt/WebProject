using TCC.Domain.Entities;

namespace TCC.Infra.Mapping
{
    public class EnvioEmailMap : BaseMap<EnvioEmail>
    {
        public EnvioEmailMap()
        {
            this.ToTable("ENVIO_EMAIL", "TCC");

            this.Property(x => x.Titulo).HasColumnName("TITULO").HasMaxLength(100);
            this.Property(x => x.Mensagem).HasColumnName("MENSAGEM");
            this.Property(x => x.Destinatario).HasColumnName("DESTINATARIO").IsRequired();
            this.Property(x => x.Remetente).HasColumnName("REMETENTE").IsRequired();
            this.Property(x => x.TipoMensagem).HasColumnName("TIPO_MENSAGEM").IsRequired();
            this.Property(x => x.DataEnvio).HasColumnName("DATA_ENVIO").IsOptional();
            this.Property(x => x.Retorno).HasColumnName("RETORNO").HasColumnAnnotation("Default", 0);
        }
    }
}
