using EF6.DataAccessLayer;
using System.Collections.Generic;
using EF6.Entities;

namespace EF6.BusinessLayer
{
    public interface IEditoraLayer
    {
        IList<Editora> GetAllEditora();
        Editora GetEditoraByName(string EditoraName);
        void AddEditora(params Editora[] Editoras);
        void UpdateEditora(params Editora[] Editoras);
        void RemoveEditora(params Editora[] Editoras);
    }

    public class EditoraLayer : IEditoraLayer
    {
        private readonly IEditoraRepository _EditoraRepository;
     
        public EditoraLayer()
        {
            _EditoraRepository = new EditoraRepository();            
        }

        public EditoraLayer(IEditoraRepository EditoraRepository)
        {
            _EditoraRepository = EditoraRepository;         
        }

        public IList<Editora> GetAllEditora()
        {
            return _EditoraRepository.GetAll();
        }

        public Editora GetEditoraByName(string tituloName)
        {
            return _EditoraRepository.GetSingle(
                d => d.Nome.Equals(tituloName),
                d => d.Livros); //include related employees
        }

        public void AddEditora(params Editora[] Editoras)
        {
            /* Validation and error handling omitted */
            _EditoraRepository.Add(Editoras);
        }

        public void UpdateEditora(params Editora[] Editoras)
        {
            /* Validation and error handling omitted */
            _EditoraRepository.Update(Editoras);
        }

        public void RemoveEditora(params Editora[] Editoras)
        {
            /* Validation and error handling omitted */
            _EditoraRepository.Remove(Editoras);
        }

    }
}
