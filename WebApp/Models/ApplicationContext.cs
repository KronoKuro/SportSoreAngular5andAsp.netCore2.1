using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class ApplicationContext : IdentityDbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Suppler> Supplers { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Category> Categories { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
      : base(options)
        {
            //Database.EnsureCreated();
        }
    }
}
