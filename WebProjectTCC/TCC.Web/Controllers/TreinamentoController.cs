using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TCC.Web.Controllers
{
    public class TreinamentoController : BaseController
    {
        // GET: Treinamento
        public ActionResult Index()
        {
            return View();
        }
    }
}