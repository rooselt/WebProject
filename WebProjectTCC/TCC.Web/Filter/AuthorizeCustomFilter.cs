
using System.Web.Mvc;
using TCC.Domain.Entities;

namespace TCC.Web.Filter
{

    public class AuthorizeCustomFilter : AuthorizeAttribute, IAuthorizationFilter
    {
        void IAuthorizationFilter.OnAuthorization(AuthorizationContext filterContext)
        {
            SessionConfig.SubMenu = new SubMenu
            {
                Controller = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName,
                Action = filterContext.ActionDescriptor.ActionName
            };         
        }       
    }
}