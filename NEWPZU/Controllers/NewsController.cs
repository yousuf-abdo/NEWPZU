using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NEWPZU.Models;

namespace NEWPZU.Controllers
{
    public class NewsController : Controller
    {
        Entities db = new Entities();
        // GET: News
        public ActionResult Index(int ? id)
        {
            ViewBag.Id = id;
            return View();
        }
        public ActionResult GetNewsData(int ? id , string lang)
        {
            //var data =  new News();
            if(lang == "ar")
            {
                if (id == null)
                {
                    var data = db.News.Where(d => d.IsActive == true).Select(p=> new
                    {
                        Id = p.Id,
                        Title = p.TitleAr,
                        Content = p.ContentAr,
                        CreatedDate = p.CreatedDate,
                        Img = p.Img,
                    }).OrderByDescending(f => f.Id).FirstOrDefault();
                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var data = db.News.Select(p => new
                    {
                        Id = p.Id,
                        Title = p.TitleAr,
                        Content = p.ContentAr,
                        CreatedDate = p.CreatedDate,
                        Img = p.Img,

                    }).FirstOrDefault(f => f.Id == id);
                    return Json(data, JsonRequestBehavior.AllowGet);
                }
            }else
            {
                if (id == null)
                {
                    var data = db.News.Where(d => d.IsActive == true).Select(p => new
                    {
                        Id = p.Id,
                        Title = p.TitleEng,
                        Content = p.ContentEng,
                        CreatedDate = p.CreatedDate,
                        Img = p.Img,
                    }).OrderByDescending(f => f.Id).FirstOrDefault();
                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    var data = db.News.Select(p => new
                    {
                        Id = p.Id,
                        Title = p.TitleEng,
                        Content = p.ContentEng,
                        CreatedDate = p.CreatedDate,
                        Img = p.Img,
                    }).FirstOrDefault(f => f.Id == id);
                    return Json(data, JsonRequestBehavior.AllowGet);
                }
            }

        }
        public ActionResult LoadNewsTitles(string lang)
        {
            if(lang == "ar")
            {
                var data = db.News.Where(d => d.IsActive == true).OrderByDescending(f => f.Id).Select(p => new
                {
                    Id = p.Id,
                    Title = p.TitleAr
                }).Take(10);
                return Json(data, JsonRequestBehavior.AllowGet);
            }else
            {
                var data = db.News.Where(d => d.IsActive == true).OrderByDescending(f => f.Id).Select(p => new
                {
                    Id = p.Id,
                    Title = p.TitleEng
                }).Take(10);
                return Json(data, JsonRequestBehavior.AllowGet);
            }
            
        }

        public ActionResult GetLastThreeNews(string lang)
        {
            if(lang == "ar")
            {
                var data = db.News.Where(d => d.IsActive == true).OrderByDescending(f => f.Id).Take(3).Select(p => new {
                    Id = p.Id,
                    Title = p.TitleAr,
                    Content = p.ContentAr.Substring(0, 250),
                    Img = p.Img
                });
                return Json(data, JsonRequestBehavior.AllowGet);
            }else
            {
                var data = db.News.Where(d => d.IsActive == true).OrderByDescending(f => f.Id).Take(3).Select(p => new {
                    Id = p.Id,
                    Title = p.TitleEng,
                    Content = p.ContentEng.Substring(0, 250),
                    Img = p.Img
                });
                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }
    }
}