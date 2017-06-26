namespace EF6.Entities
{
 
    using DataAccessLayer;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Usuario")]
    public partial class Usuario: IEntity
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Usuario()
        {
            Emprestimos = new HashSet<Emprestimo>();
        }

        [Key]
        public int IdUsuario { get; set; }

        [StringLength(10)]
        public string Matricula { get; set; }

        [StringLength(100)]
        public string Nome { get; set; }

        [StringLength(12)]
        public string Sexo { get; set; }

        [StringLength(100)]
        public string Endereco { get; set; }

        [Column(TypeName = "date")]
        public DateTime? DataNascimento { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Emprestimo> Emprestimos { get; set; }
        [NotMapped]
        public EntityState EntityState { get; set; }
    }
}
