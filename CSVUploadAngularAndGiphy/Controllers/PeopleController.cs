using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSVUploadAngularAndGiphy.Data;
using Microsoft.AspNetCore.Mvc;

namespace CSVUploadAngularAndGiphy.Controllers
{
    [Route("api/[controller]")]
    public class PeopleController : Controller
    {
        readonly ApiContext context;
        public PeopleController(ApiContext context)
        {
            this.context = context;
        }

        [HttpGet()]
        public IEnumerable<Models.Person> GetAllPeople()
        {
            return context.People.ToList();
        }
    }
}