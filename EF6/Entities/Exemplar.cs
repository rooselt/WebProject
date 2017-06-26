namespace EF6.Entities
{

    using DataAccessLayer;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using System.Web.Script.Serialization;

    [Table("Exemplar")]
    public partial class Exemplar: IEntity
    {
        [Key]
        public int IdExemplar { get; set; }

        public int? IdLivro { get; set; }

        [StringLength(2)]
        public string Situacao { get; set; }

        [ScriptIgnore]
        public virtual Livro Livro { get; set; }

        [NotMapped]
        public EntityState EntityState { get; set; }
    }
}
