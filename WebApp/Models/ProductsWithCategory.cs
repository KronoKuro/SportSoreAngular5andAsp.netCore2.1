using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class ProductsWithCategory
    {
        public string Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }

        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
    }
}
