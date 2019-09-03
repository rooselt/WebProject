using Newtonsoft.Json;
using System;
using System.Net;
using System.Text;
using System.Web.Mvc;
using TCC.Application;
using TCC.Application.Interfaces;
using TCC.Domain.Entities;
using TCC.Domain.Objects;
using TCC.Infra.ValueObject;

namespace TCC.Web.Controllers
{
    [Authorize]
    //[XframeOptions]
    public class BaseController : Controller
    {
        public readonly ICrudMsgFormater CrudMsgFormater = new CrudMsgFormater();
        public readonly LogOperacaoObject LogOperacaoObject = new LogOperacaoObject();

        [HttpGet]
        public virtual ActionResult GetComboEmpresa()
        {
            var empresa = new EmpresaObject().GetCombo();

            return Json(empresa, JsonRequestBehavior.AllowGet);
        }

        public void LogErro(Exception e, eErrorGravity eErrorGravity)
        {
            var action = SessionConfig.SubMenu.Action;
            var controller = SessionConfig.SubMenu.Controller;
            var subMenu = SubMenuVision.GetSubMenuByRotaId(action, controller);

            var log = new LogOperacao
            {
                Message = CrudMsgFormater.CreateErrorCrudMessage(),
                StackTrace = e.StackTrace,
                InnerException = e.Message,
                eErrorGravity = eErrorGravity,
                IdSubMenu = subMenu.Id
            };           

            LogOperacaoObject.Add(log);
            LogOperacaoObject.Save();
        }

        protected override JsonResult Json(
            object data,
            string contentType,
            Encoding contentEncoding,
            JsonRequestBehavior behavior)
        {
            return new CustomJsonResult
            {
                Data = data,
                ContentType = contentType,
                ContentEncoding = contentEncoding,
                JsonRequestBehavior = behavior,
                MaxJsonLength = int.MaxValue
            };
        }
    }

    public class CustomJsonResult : JsonResult
    {
        private static readonly JsonSerializerSettings Settings =
            new JsonSerializerSettings
            {
                Formatting = Formatting.Indented,
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };

        public override void ExecuteResult(ControllerContext context)
        {
            //if (this.JsonRequestBehavior == JsonRequestBehavior.DenyGet && string.Equals(
            //        context.HttpContext.Request.HttpMethod,
            //        "GET",
            //        StringComparison.OrdinalIgnoreCase)) throw new InvalidOperationException("GET request not allowed");

            var response = context.HttpContext.Response;

            response.ContentType = !string.IsNullOrEmpty(ContentType) ? ContentType : "application/json";

            if (ContentEncoding != null)
            {
                response.ContentEncoding = ContentEncoding;
            }

            if (Data == null)
            {
                return;
            }

            response.Write(JsonConvert.SerializeObject(Data, Settings));
        }
    }
}