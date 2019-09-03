using TCC.Domain.Entities;

namespace TCC.Infra.Mapping
{
    public class CargoMap : BaseMap<Cargo>
    {
        public CargoMap()
        {
            this.ToTable("CARGO", "TCC");

            this.Property(x => x.Descricao).HasColumnName("DESCRICAO").HasMaxLength(250).IsRequired();
        }
    }
}