﻿using TCC.Domain.Entities;

namespace TCC.Infra.Mapping
{
    public class ClienteMap : BaseMap<Cliente>
    {
        public ClienteMap()
        {
            this.ToTable("CLIENTE", "TCC");

            this.Property(x => x.IdCidade).HasColumnName("ID_CIDADE");
            this.Property(x => x.IdEmpresa).HasColumnName("ID_EMPRESA");
            this.Property(x => x.Nome).HasColumnName("NOME_FANTASIA").HasMaxLength(255).IsRequired();
            this.Property(x => x.Email).HasColumnName("EMAIL").HasMaxLength(150).IsOptional();
            this.Property(x => x.TelefoneContato).HasColumnName("TEL_CONTATO").HasMaxLength(14).IsOptional();
            this.Property(x => x.Ramal).HasColumnName("RAMAL").HasMaxLength(10).IsOptional();
            this.Property(x => x.TelefoneCelular).HasColumnName("TEL_CELULAR").HasMaxLength(15).IsOptional();
            this.Property(x => x.Logradouro).HasColumnName("LOGRADOURO").HasMaxLength(255).IsRequired();
            this.Property(x => x.Numero).HasColumnName("NUMERO").IsRequired();
            this.Property(x => x.Complemento).HasColumnName("COMPLEMENTO").HasMaxLength(50).IsOptional();
            this.Property(x => x.Bairro).HasColumnName("BAIRRO").HasMaxLength(150).IsRequired();
            this.Property(x => x.CEP).HasColumnName("CEP").HasMaxLength(100).IsRequired();


            this.HasRequired(x => x.Cidade).WithMany().HasForeignKey(x => x.IdCidade);
            this.HasRequired(x => x.Empresa).WithMany(x => x.Cliente).HasForeignKey(x => x.IdEmpresa);
        }
    }
}
