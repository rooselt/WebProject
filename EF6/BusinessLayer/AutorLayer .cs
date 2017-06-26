using EF6.DataAccessLayer;
using System.Collections.Generic;
using EF6.Entities;

namespace EF6.BusinessLayer
{
    public interface IAutorLayer
    {
        IList<Autor> GetAllAutor();
        Autor GetAutorByName(string autorName);
        void AddAutor(params Autor[] Autors);
        void UpdateAutor(params Autor[] Autors);
        void RemoveAutor(params Autor[] Autors);
    }

    public class AutorLayer : IAutorLayer
    {
        private readonly IAutorRepository _AutorRepository;

        public AutorLayer()
        {
            _AutorRepository = new AutorRepository();

        }

        public AutorLayer(IAutorRepository AutorRepository,
            IEmprestimoRepository emprestimoRepository)
        {
            _AutorRepository = AutorRepository;

        }

        public IList<Autor> GetAllAutor()
        {
            return _AutorRepository.GetAll();
        }

        public Autor GetAutorByName(string tituloName)
        {
            return _AutorRepository.GetSingle(
                d => d.Nome.Equals(tituloName),
                d => d.Nacionalidade, 
                d => d.Livros); //include related employees
        }

        public void AddAutor(params Autor[] Autors)
        {
            /* Validation and error handling omitted */
            _AutorRepository.Add(Autors);
        }

        public void UpdateAutor(params Autor[] Autors)
        {
            /* Validation and error handling omitted */
            _AutorRepository.Update(Autors);
        }

        public void RemoveAutor(params Autor[] Autors)
        {
            /* Validation and error handling omitted */
            _AutorRepository.Remove(Autors);
        }

    }
}
