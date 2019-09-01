using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CSVUploadAngularAndGiphy.Data
{
    public class DataInitializer
    {
        //IHostingEnvironment env;
        //public DataInitializer(IHostingEnvironment env)
        //{
        //    this.env = env;
        //}
        public void SeedData(ApiContext context)
        {
            context.Database.EnsureCreated();

            if (context.People.Any())
            {
                //db is already created
                return;
            }

            
            context.People.Add(new Models.Person
            {
                Guid = System.Guid.NewGuid().ToString(),
                Email="matthew@kpa.com",
                FirstName = "Matthew",
                LastName = "Anderson",
            });

            context.People.Add(new Models.Person
            {
                Guid = System.Guid.NewGuid().ToString(),
                Email = "patrick@kpa.com",
                FirstName = "Patrick",
                LastName = "Anderson",
            });

            context.People.Add(new Models.Person
            {
                Guid = System.Guid.NewGuid().ToString(),
                Email = "jane@kpa.com",
                FirstName = "Jane",
                LastName = "Doe",
            });

            context.People.Add(new Models.Person
            {
                Guid = System.Guid.NewGuid().ToString(),
                Email = "tobias@kpa.com",
                FirstName = "Tobias",
                LastName = "Sammet",
            });


            context.SaveChanges();

        }
    }
}
