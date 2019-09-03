﻿using TCC.Domain.Entities;

namespace TCC.Infra.Mapping
{
    public class TreinamentoMap : BaseMap<Treinamento>
    {
        public TreinamentoMap()
        {
            ToTable("TREINAMENTO", "TCC");

            Property(x => x.IdArquivo).HasColumnName("ID_ARQUIVO").IsOptional();          
            Property(x => x.IdEmpresa).HasColumnName("ID_EMPRESA").IsRequired();            
            Property(x => x.IdColaborador).HasColumnName("ID_COLABORADOR");
            Property(x => x.Descricao).HasColumnName("CAPACITACAO").IsRequired();
            Property(x => x.CargaHoraria).HasColumnName("CARGA_HORARIA").IsRequired();              
           
            Property(x => x.PeriodoInicial).HasColumnName("PERIODO_INICIAL").IsOptional();
            Property(x => x.PeriodoFinal).HasColumnName("PERIODO_FINAL").IsOptional();            
            
            Property(x => x.Local).HasColumnName("LOCAL").IsOptional();
            
            HasRequired(x => x.Colaborador).WithMany().HasForeignKey(x => x.IdColaborador);
            HasOptional(x => x.Arquivo).WithMany().HasForeignKey(x => x.IdArquivo);
            HasRequired(x => x.Empresa).WithMany().HasForeignKey(x => x.IdEmpresa);            
        }
    }
}
