using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using EF6.BusinessLayer;
using EF6.Entities;
using EF6;
using System.Linq;

namespace WebBiblioteca.Tests.Cadastro
{
    [TestClass]
    public class ApplicationTest
    {
        [TestMethod]
        public void Livro()
        {
            ILivroLayer data = new LivroLayer();
            IList<Livro> livros = data.GetAllLivro();

            // Assert
            Assert.IsNotNull(livros);
        }

        [TestMethod]
        public void ViewEmprestimo()
        {
            IViewEmprestimoLayer data = new ViewEmprestimoLayer();
            IList<VW_dados_emprestimo> emprestimo = data.GetAllViewEmprestimo();

            var listaLivros = emprestimo.Select(c => new
            {
                DataDevolucao = c.DataDevolucao.HasValue ? c.DataDevolucao.Value.ToShortDateString() : null,
                DataEmprestimo = c.DataEmprestimo.HasValue ? c.DataEmprestimo.Value.ToShortDateString() : null,
                Livro = c.Livro,
                Usuario = c.Usuario,
                CodigoExemplar = c.Codigo_Exemplar,
                Editora = c.Editora
            }).ToList();

            Assert.IsNotNull(listaLivros);
        }
    }
}
