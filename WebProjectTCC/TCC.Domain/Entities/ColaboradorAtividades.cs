namespace TCC.Domain.Entities
{
    public class ColaboradorAtividades : BaseEntity
    {
        //FK
        public int IdColaborador { get; set; }
        public int Descricao { get; set; }

        public virtual Colaborador Colaborador { get; set; }

    }
}
