using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NEWPZU.Models;

namespace NEWPZU.Controllers
{
    
    public class HotelsController : Controller
    {
        Entities db = new Entities();
        // GET: Hotels
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LoadData(string lang)
        {
            if(lang == "ar")
            {
                var data = db.Hotals.Where(f => f.IsActive == true).Select(p => new
                {
                    Name = p.NameAr,
                    Img = p.Img,
                    Location = p.Location,
                    Phone = p.Phone,
                    Star = p.Star,
                  
                });
                return Json(data, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var data = db.Hotals.Where(f => f.IsActive == true).Select(p => new
                {
                    Name = p.NameEng,
                    Img = p.Img,
                    Location = p.Location,
                    Phone = p.Phone,
                    Star = p.Star,
                  
                });
                return Json(data, JsonRequestBehavior.AllowGet);
            }
            
        }
    }
}