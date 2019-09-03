using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using TCC.Domain.Entities;

namespace TCC.Infra.Mapping
{
    public class ArquivoMap : EntityTypeConfiguration<Arquivo>
    {
        public ArquivoMap()
        {
            this.ToTable("ARQUIVO", "TCC");

            HasKey(x => x.Id).Property(x => x.Id)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None)
                .HasColumnName("ID");
            Property(x => x.IdLogOperacao).HasColumnName("ID_LOG_OPERACAO").HasColumnAnnotation("Default", 0);
            Property(x => x.IdUsuario).HasColumnName("ID_USUARIO").IsRequired();
            Property(x => x.IdEmpresa).HasColumnName("ID_EMPRESA").IsOptional();
            Property(x => x.DataRegistro).HasColumnName("DATA_REGISTRO").IsRequired();
            Property(x => x.DataExclusao).HasColumnName("DATA_EXCLUSAO").IsOptional();
            Property(x => x.Tamanho).HasColumnName("TAMANHO").IsOptional();
            Property(x => x.Caminho).HasColumnName("CAMINHO").HasMaxLength(255).IsOptional();
            Property(x => x.Descricao).HasColumnName("DESCRICAO").HasMaxLength(255).IsOptional();
            Property(x => x.ContentType).HasColumnName("CONTENT_TYPE").HasMaxLength(255).IsOptional();
            Property(x => x.IdTipo).HasColumnName("ID_TIPO");

            HasOptional(x => x.Empresa).WithMany().HasForeignKey(x => x.IdEmpresa);
            HasRequired(x => x.LogOperacao).WithMany().HasForeignKey(x => x.IdLogOperacao);
        }
    }
}
