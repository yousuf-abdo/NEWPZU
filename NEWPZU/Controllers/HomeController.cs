using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NEWPZU.Models;

namespace NEWPZU.Controllers
{
    public class HomeController : Controller
    {
        Entities db = new Entities();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LoadData()
        {
            return null;
        }
    }
}