using EF6.DataAccessLayer;
using System.Collections.Generic;
using EF6.Entities;

namespace EF6.BusinessLayer
{
    public interface IViewEmprestimoLayer
    {
        IList<VW_dados_emprestimo> GetAllViewEmprestimo();
        IList<VW_dados_emprestimo> GetEmprestimoByLivroName(string livroName);
    }

    public class ViewEmprestimoLayer : IViewEmprestimoLayer
    {
        private readonly IViewEmprestimoRepository _viewEmprestimoRepository;

        public ViewEmprestimoLayer()
        {
            _viewEmprestimoRepository = new ViewEmprestimoRepository();
        }

        public ViewEmprestimoLayer(IViewEmprestimoRepository viewEmprestimoRepository)
        {
            _viewEmprestimoRepository = viewEmprestimoRepository;
        }

        public IList<VW_dados_emprestimo> GetEmprestimoByLivroName(string livroName)
        {
            return _viewEmprestimoRepository.GetList(c => c.Livro.Equals(livroName));
        }
        public IList<VW_dados_emprestimo> GetAllViewEmprestimo()
        {
            return _viewEmprestimoRepository.GetAll();
        }
    }
}
