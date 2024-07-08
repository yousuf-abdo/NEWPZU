using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NEWPZU.Models;

namespace NEWPZU.Controllers
{
    public class AirlinesController : Controller
    {
        Entities db = new Entities();
        // GET: Airlines
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LoadData()
        {
            var data = db.Airlines.Where(f=>f.IsActive == true).Select(p => new
            {
                Logo = p.Logo,
                Link = p.Link,
                Name = p.NameAr
            });
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}