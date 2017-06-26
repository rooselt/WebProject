namespace EF6
{

    using System.Data.Entity;
    using EF6.Entities;
    using EF6;

    public partial class BibliotecaEntities : DbContext
    {
        public BibliotecaEntities()
            : base("name=BibliotecaEntities")
        {
            Configuration.LazyLoadingEnabled = false;
            Configuration.ProxyCreationEnabled = false;
        }

        public virtual DbSet<Autor> Autores { get; set; }
        public virtual DbSet<Editora> Editoras { get; set; }
        public virtual DbSet<Emprestimo> Emprestimos { get; set; }
        public virtual DbSet<Exemplar> Exemplares { get; set; }
        public virtual DbSet<Livro> Livros { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<VW_dados_emprestimo> VW_dados_emprestimo { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Autor>()
                .Property(e => e.Idade)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<Exemplar>()
                .Property(e => e.Situacao)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<Livro>()
                .HasMany(e => e.Emprestimos)
                .WithRequired(e => e.Livro)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Usuario>()
                .Property(e => e.Matricula)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<Usuario>()
                .HasMany(e => e.Emprestimos)
                .WithRequired(e => e.Usuario)
                .WillCascadeOnDelete(false);
        }
    }
}
