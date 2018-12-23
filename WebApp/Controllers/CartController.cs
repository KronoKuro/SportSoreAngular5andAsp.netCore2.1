using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Route("/api/[controller]")]
    public class CartController : Controller
    {
        private ApplicationContext db;
        private IHostingEnvironment env;
        public CartController(ApplicationContext _db, IHostingEnvironment _env)
        {
            db = _db;
            env = _env;
        }

        [HttpGet]
        public IActionResult GetCart()
        {
            return Ok(HttpContext.Session.GetString("cart"));
        }

        [HttpPost]
        public void PostCart([FromBody] ProductsWithCategory[] products)
        {
            var jsonData = JsonConvert.SerializeObject(products);
            HttpContext.Session.SetString("cart", jsonData);
        }

        [HttpGet("checkout")]
        public void Chekout()
        {
            HttpContext.Session.GetString("checkout");
        }


    }
}