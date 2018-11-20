using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class Rating
    {

        public string Id { get; set; }

        public int Stars { get; set; }

        public string ProductId { get; set; }
        public virtual Product Product { get; set; }
    }
}
