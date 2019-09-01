using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CSVUploadAngularAndGiphy.Data
{
    public class ApiContext : DbContext
    {
        public DbSet<Models.Person> People { get; set; }

        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Models.Person>()
                .HasIndex(b => b.FirstName);
            modelBuilder.Entity<Models.Person>()
                .HasIndex(b => b.LastName);
        }
    }
}
