using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NEWPZU.Models;

namespace NEWPZU.Controllers
{
    public class FlightsController : Controller
    {
        Entities db = new Entities();
        DateTime now = DateTime.UtcNow.AddHours(2);
        // GET: Flights
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LoadData(int FlightTypeId, string Lang, int theDate)
        {
            var TheDate = DateTime.Now;
            TheDate = theDate == 0 ? TheDate : theDate == 1 ? TheDate.AddDays(1) : TheDate.AddDays(-1);

            var data = new object();

            if (FlightTypeId > 0)
            {
                data = db.Flights.Where(x => x.FlightTypeId == FlightTypeId
                & x.Date.Value.Year == TheDate.Year & x.Date.Value.Month == TheDate.Month & x.Date.Value.Day == TheDate.Day
                ).Select(p => new
                {
                    Id = p.Id,
                    Airline = Lang == "ar" ? p.Airline.NameAr : p.Airline.NameEng,
                    FlighFrom = Lang == "ar" ? p.AirPort.NameAr : p.AirPort.NameEng,
                    FlighTo = Lang == "ar" ? p.AirPort1.NameAr : p.AirPort1.NameEng,
                    Date = p.Date.ToString(),
                    Time = p.Time.Value.Hours + ":" + p.Time.Value.Minutes,
                    Status = Lang == "ar" ? p.FlightStatu.StatusAr : p.FlightStatu.StatusEng
                });
            }
            else
            {
                data = db.Flights.Where(x => x.Date.Value.Year == TheDate.Year & x.Date.Value.Month == TheDate.Month & x.Date.Value.Day == TheDate.Day
                ).Select(p => new
                {
                    Id = p.Id,
                    Airline = Lang == "ar" ? p.Airline.NameAr : p.Airline.NameEng,
                    FlighFrom = Lang == "ar" ? p.AirPort.NameAr : p.AirPort.NameEng,
                    FlighTo = Lang == "ar" ? p.AirPort1.NameAr : p.AirPort1.NameEng,
                    Date = p.Date.ToString(),
                    Time = p.Time.Value.Hours + ":" + p.Time.Value.Minutes,
                    Status = Lang == "ar" ? p.FlightStatu.StatusAr : p.FlightStatu.StatusEng
                });
            }
            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}