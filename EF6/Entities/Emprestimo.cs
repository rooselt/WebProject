namespace EF6.Entities
{

    using DataAccessLayer;
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Web.Script.Serialization;

    [Table("Emprestimo")]
    public partial class Emprestimo: IEntity
    {
        public int IdUsuario { get; set; }

        public int IdLivro { get; set; }

        [Column(TypeName = "date")]
        public DateTime DataEmprestimo { get; set; }

        [Column(TypeName = "date")]
        public DateTime? DataDevolucao { get; set; }

        [Key]
        public int IdEmprestimo { get; set; }
        [ScriptIgnore]
        public virtual Livro Livro { get; set; }
        [NotMapped]
        public DataAccessLayer.EntityState EntityState { get; set; }

        public virtual Usuario Usuario { get; set; }
    }
}
