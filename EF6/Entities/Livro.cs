namespace EF6.Entities
{
    
    using DataAccessLayer;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
  

    [Table("Livro")]
    public partial class Livro: IEntity
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Livro()
        {
            Emprestimos = new HashSet<Emprestimo>();
            Exemplares = new HashSet<Exemplar>();
        }

        [Key]
        public int IdLivro { get; set; }

        public int? IdAutor { get; set; }

        [StringLength(100)]
        public string Titulo { get; set; }

        [StringLength(50)]
        public string Area { get; set; }

        [Column(TypeName = "date")]
        public DateTime? DataPublicao { get; set; }

        public int? IdEditora { get; set; }

        public virtual Autor Autor { get; set; }

        public virtual Editora Editora { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Emprestimo> Emprestimos { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Exemplar> Exemplares { get; set; }

        [NotMapped]
        public EntityState EntityState { get; set; }
    }
}
