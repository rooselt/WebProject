using TCC.Domain.Entities;

namespace TCC.Infra.Mapping
{
   public class TreinamentoColaboradoradorAlocacaoMap : BaseMap<TreinamentoColaborador>
    {
        public TreinamentoColaboradoradorAlocacaoMap()
        {
            ToTable("TREINAMENTO_COLABORADOR", "TCC");

            Property(x => x.DataLeitura).HasColumnName("DATA_LEITURA").IsOptional();      
            Property(x => x.DataConfirma).HasColumnName("DATA_CONFIRMA").IsOptional();
            
            Property(x => x.BoolLeitura).HasColumnName("BOL_LEITURA").HasColumnAnnotation("Default", 0);
                        
            Property(x => x.IdTreinamento).HasColumnName("ID_TREINAMENTO");
            Property(x => x.IdColaborador).HasColumnName("ID_COLABORADOR");
            Property(x => x.Confirma).HasColumnName("CONFIRMA").HasColumnAnnotation("Default", 0); 

            HasRequired(x => x.Treinamento).WithMany().HasForeignKey(x => x.IdTreinamento);
            HasRequired(x => x.Colaborador).WithMany().HasForeignKey(x => x.IdColaborador);
        }
    }
}
