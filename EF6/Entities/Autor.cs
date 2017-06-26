namespace EF6.Entities
{
    using DataAccessLayer;

    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System;
    using System.Web.Script.Serialization;

    [Table("Autor")]
    public partial class Autor : IEntity
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Autor()
        {
            Livros = new HashSet<Livro>();
        }

        [Key]
        public int IdAutor { get; set; }

        [StringLength(100)]
        public string Nome { get; set; }

        [StringLength(50)]
        public string Nacionalidade { get; set; }

        [StringLength(5)]
        public string Idade { get; set; }

        [ScriptIgnore]
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Livro> Livros { get; set; }

        [NotMapped]
        public EntityState EntityState { get; set; }
               
    }  

}
