using EF6.DataAccessLayer;
using System.Collections.Generic;
using EF6.Entities;
using System;

namespace EF6.BusinessLayer
{
    public interface ILivroLayer
    {
        IList<Livro> GetAllLivro();
        Livro GetLivroByName(string LivroName);
        void AddLivro(params Livro[] livros);
        void UpdateLivro(params Livro[] livros);
        void RemoveLivro(params Livro[] livros);
    }

    public class LivroLayer : ILivroLayer
    {
        private readonly ILivroRepository _livroRepository;

        public LivroLayer()
        {
            _livroRepository = new LivroRepository();

        }

        public LivroLayer(ILivroRepository livroRepository)
        {
            _livroRepository = livroRepository;

        }

        public IList<Livro> GetAllLivro()
        {
            return _livroRepository.GetAll(
                d => d.Emprestimos,
                d => d.Autor,
                d => d.Editora,
                d => d.Exemplares);
        }
        public Livro GetLivroByName(string tituloName)
        {
            return _livroRepository.GetSingle(
                d => d.Titulo.Equals(tituloName),
                d => d.Emprestimos,
                d => d.Exemplares); //include related employees
        }

        public void AddLivro(params Livro[] livros)
        {
            /* Validation and error handling omitted */
            _livroRepository.Add(livros);
        }

        public void UpdateLivro(params Livro[] livros)
        {
            /* Validation and error handling omitted */
            _livroRepository.Update(livros);
        }

        public void RemoveLivro(params Livro[] livros)
        {
            /* Validation and error handling omitted */
            _livroRepository.Remove(livros);
        }
        
    }
}
