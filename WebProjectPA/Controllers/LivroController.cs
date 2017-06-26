using EF6;
using EF6.BusinessLayer;
using EF6.DataAccessLayer;
using EF6.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace WebProjectPA.Controllers
{
    public class LivroController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetLivros()
        {
            ILivroLayer data = new LivroLayer();
            IList<Livro> livros = data.GetAllLivro();

            var listaLivros = livros.Select(c => new
            {
                IdLivro = c.IdLivro,
                Titulo = c.Titulo,
                Autor = c.Autor.Nome,
                IdAutor = c.IdAutor,
                IdEditora = c.IdEditora,
                Area = c.Area,
                Editora = c.Editora.Nome
            }).ToList();

        
            var selectAutor = listaLivros.Select(c => new { id = c.IdAutor, text = c.Editora }).Distinct();
            var selectEditora = listaLivros.Select(c => new { id = c.IdEditora, text = c.Autor }).Distinct();

            var obj = new { selectEditora = selectEditora, selectAutor = selectAutor, item = listaLivros };
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetDadosEmprestimo()
        {
            IViewEmprestimoLayer data = new ViewEmprestimoLayer();
            IList<VW_dados_emprestimo> emprestimo = data.GetAllViewEmprestimo();

            var listaEmprestimo = emprestimo.Select(c => new
            {
                DataDevolucao = c.DataDevolucao.HasValue ? c.DataDevolucao.Value.ToShortDateString() : null,
                DataEmprestimo = c.DataEmprestimo.HasValue ? c.DataEmprestimo.Value.ToShortDateString() : null,
                Livro = c.Livro,
                Usuario = c.Usuario,
                CodigoExemplar = c.Codigo_Exemplar,
                Editora = c.Editora
            }).ToList();

            return Json(listaEmprestimo, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult PostLivro(Livro livro)
        {
            try
            {
                ILivroLayer data = new LivroLayer();
                livro.EntityState = EntityState.Added;
                data.AddLivro(livro);

                IList<Livro> livros = data.GetAllLivro();

                var listaLivros = livros.Select(c => new
                {
                    IdLivro = c.IdLivro,
                    Titulo = c.Titulo,
                    Autor = c.Autor.Nome,
                    Area = c.Area,
                    Editora = c.Editora.Nome
                }).ToList();

                return Json(new { item = listaLivros, msg = "Inserido com Sucesso!" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { msg = "Não foi Possível Inserir!" }, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpGet]
        public ActionResult ExecutaProcedure(int exemplar, int emprestimo)
        {
            try
            {
                ExecutaProcedure(exemplar, emprestimo);

                return Json(new {  msg = "Emprestado com Sucesso!" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception e)
            {
                return Json(new { msg = "Não foi Possível Emprestar!" }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}