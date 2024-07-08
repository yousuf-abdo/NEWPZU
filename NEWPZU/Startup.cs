using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NEWPZU.Startup))]
namespace NEWPZU
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
