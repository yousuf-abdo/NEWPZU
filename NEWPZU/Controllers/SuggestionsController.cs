using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NEWPZU.Models;
namespace NEWPZU.Controllers
{
    public class SuggestionsController : Controller
    {
        Entities db = new Entities();
        // GET: Suggestions
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(Suggestion formData)
        {
            if (ModelState.IsValid)
            {
                db.Suggestions.Add(formData);
                db.SaveChanges();
                
                return Json("تم استلام مقترحكم ..." , JsonRequestBehavior.AllowGet);
            }
            return Json("حدث خطأ", JsonRequestBehavior.AllowGet);
        }

    }
}