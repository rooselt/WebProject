namespace EF6.Entities
{
    using DataAccessLayer;

    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;


    [Table("Editora")]
    public partial class Editora: IEntity
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Editora()
        {
            Livros = new HashSet<Livro>();
        }

        [Key]
        public int IdEditora { get; set; }

        [StringLength(100)]
        public string Nome { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Livro> Livros { get; set; }
        [NotMapped]
        public EntityState EntityState { get; set; }

    }
}
