using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using CSVUploadAngularAndGiphy.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CSVUploadAngularAndGiphy.Controllers
{

    [Route("api/[controller]")]
    public class CSVUploadController : Controller
    {

        readonly ApiContext context;
        public CSVUploadController(ApiContext context)
        {
            this.context = context;
        }

        [HttpGet("hey")]
        public async Task<IActionResult> Getter()
        {
            return Ok();
        }

        [HttpPost("uploadfiles")]
        public async Task<IActionResult> Post(List<IFormFile> files)
        {
            var file = files.First();
            // full path to file in temp location
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    using (var reader = new System.IO.StreamReader(stream))
                    {
                        string line = reader.ReadLine();
                        if (line == "") { return Ok(); }
                        int headerEmail = -1;
                        int headerFirstName = -1;
                        int headerLastName = -1;
                        string[] header = line.Split(',');
                        for (int i = 0; i < header.Length; ++i)
                        {
                            switch (header[i].ToLower())
                            {
                                case "email address":
                                    headerEmail = i;
                                    break;
                                case "first name":
                                    headerFirstName = i;
                                    break;
                                case "last name":
                                    headerLastName = i;
                                    break;
                            }
                        }
                        line = reader.ReadLine();
                        while (line != null)
                        {
                            string[] row = line.Split(',');
                            context.People.Add(new Models.Person
                            {
                                Guid = System.Guid.NewGuid().ToString(),
                                Email = row[headerEmail],
                                FirstName = row[headerFirstName],
                                LastName = row[headerLastName]
                            });
                            line = reader.ReadLine();
                        }
                        this.context.SaveChanges();
                    }

                }
            }
            return Ok();
        }
    }
}