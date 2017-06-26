namespace EF6
{
 
    using DataAccessLayer;
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    public partial class VW_dados_emprestimo : IEntity
    {
        [StringLength(100)]
        public string Usuario { get; set; }

        [Column(TypeName = "date")]
        public DateTime? DataEmprestimo { get; set; }

        [Column(TypeName = "date")]
        public DateTime? DataDevolucao { get; set; }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Codigo_Exemplar { get; set; }

        [StringLength(100)]
        public string Livro { get; set; }

        [StringLength(100)]
        public string Editora { get; set; }
        [NotMapped]
        public EntityState EntityState { get; set; }

    }
}
