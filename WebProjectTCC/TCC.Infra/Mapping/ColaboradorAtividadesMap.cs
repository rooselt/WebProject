using TCC.Domain.Entities;

namespace TCC.Infra.Mapping
{
    public class ColaboradorAtividadesMap : BaseMap<ColaboradorAtividades>
    {
        public ColaboradorAtividadesMap()
        {
            this.ToTable("COLABORADOR_ATIVIDADES", "TCC");
            
            this.Property(x => x.IdColaborador).HasColumnName("ID_COLABORADOR").IsRequired();
            this.Property(x => x.Descricao).HasColumnName("DESCRICAO").IsOptional();

            this.HasRequired(x => x.Colaborador).WithMany(x => x.ColaboradorAtividades).HasForeignKey(x => x.IdColaborador);
        }
    }
}
