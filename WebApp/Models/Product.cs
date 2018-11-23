using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class Product
    {
        public string Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }

        public string CategoryId { get; set; }
        public virtual Category Category { get; set; }

        public virtual Suppler Suppler { get; set; }

        public List<Rating> Ratings { get; set; }
    }
}
