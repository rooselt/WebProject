using EF6.DataAccessLayer;
using System.Collections.Generic;
using EF6.Entities;

namespace EF6.BusinessLayer
{
    public interface IEmprestimoLayer
    {
        IList<Emprestimo> GetEmprestimoByLivroName(string livroName);
        void AddEmprestimo(Emprestimo emprestimo);
        void UpdateEmprestimo(Emprestimo emprestimo);
        void RemoveEmprestimo(Emprestimo emprestimo);
    }

    public class EmprestimoLayer : IEmprestimoLayer
    {
        private readonly IEmprestimoRepository _emprestimoRepository;

        public EmprestimoLayer()
        {
            _emprestimoRepository = new EmprestimoRepository();
        }

        public EmprestimoLayer(IEmprestimoRepository emprestimoRepository)
        {
            _emprestimoRepository = emprestimoRepository;
        }

        public IList<Emprestimo> GetEmprestimoByLivroName(string livroName)
        {
            return _emprestimoRepository.GetList(e => e.Livro.Titulo.Equals(livroName));
        }

        public void AddEmprestimo(Emprestimo emprestimo)
        {
            _emprestimoRepository.Add(emprestimo);
        }

        public void UpdateEmprestimo(Emprestimo emprestimo)
        {
            _emprestimoRepository.Update(emprestimo);
        }

        public void RemoveEmprestimo(Emprestimo emprestimo)
        {
            _emprestimoRepository.Remove(emprestimo);
        }

    }
}
