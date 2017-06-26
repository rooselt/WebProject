using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebProjectPA.Startup))]
namespace WebProjectPA
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
