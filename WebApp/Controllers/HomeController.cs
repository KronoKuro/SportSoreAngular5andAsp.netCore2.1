using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("api/home")]
    public class HomeController : Controller
    {
        private ApplicationContext context;
        IHostingEnvironment env;
        public HomeController(ApplicationContext _context, IHostingEnvironment _env)
        {
            context = _context;
            env = _env;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = context.Products.Include(x => x.Category).Select(x => new ProductsWithCategory{
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                CategoryId = x.CategoryId,
                CategoryName = x.Category.Name
            });
            return Ok(products);
        }
    }
}