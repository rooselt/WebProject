
using EF6.Entities;
using EF6.DataAccessLayer;

namespace EF6.DataAccessLayer
{
    public interface IAutorRepository : IRepository<Autor>
    {
    }
    public class AutorRepository : Repository<Autor>, IAutorRepository
    {
    }
    public interface ILivroRepository : IRepository<Livro>
    {
    }
    public class LivroRepository : Repository<Livro>, ILivroRepository
    {
    }
    public interface IEditoraRepository : IRepository<Editora>
    {
    }
    public class EditoraRepository : Repository<Editora>, IEditoraRepository
    {
    }
    public interface IEmprestimoRepository : IRepository<Emprestimo>
    {
    }
    public class EmprestimoRepository : Repository<Emprestimo>, IEmprestimoRepository
    {
        public bool ExecutaProcedure(string exemplar, string emprestimo)
        {
            try
            {
                using (BibliotecaEntities context = new BibliotecaEntities())
                {
                    var commad = string.Format("EXEC SP_Devolucao_Exemplar {0},{1}", exemplar, emprestimo);
                    DbContextExtensions.ToObjectContext(context).ExecuteStoreCommand(commad);
                    return true;
                }

            }
            catch (System.Exception e)
            {
                return false;
            }
        }
    }
    public interface IViewEmprestimoRepository : IRepository<VW_dados_emprestimo>
    {
    }
    public class ViewEmprestimoRepository : Repository<VW_dados_emprestimo>, IViewEmprestimoRepository
    {
    }
    public interface IExemplarRepository : IRepository<Exemplar>
    {
    }
    public class ExemplarRepository : Repository<Exemplar>, IExemplarRepository
    {
    }
    public interface IUsuarioRepository : IRepository<Usuario>
    {
    }
    public class UsuarioRepository : Repository<Usuario>, IUsuarioRepository
    {
    }
}
