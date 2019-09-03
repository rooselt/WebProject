namespace TCC.Domain.Entities
{
    public class Arquivo : BaseEntity
    {
        //FK's
        public int IdTipo { get; set; }
        public int? IdEmpresa { get; set; }
        public int IdLogOperacao { get; set; }
        public decimal? Tamanho { get; set; }
        public string ContentType { get; set; }

        //Mapeamento das tabelas virtuais
        public virtual LogOperacao LogOperacao { get; set; }
        public virtual Empresa Empresa { get; set; }
        //Campos
        public string Caminho { get; set; }

        public string Descricao { get; set; }


        public override string ToString()
        {
            return this.Descricao;
        }
    }
}
