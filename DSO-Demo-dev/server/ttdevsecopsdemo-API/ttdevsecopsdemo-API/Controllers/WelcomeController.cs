using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ttdevsecopsdemo.Business.Welcome;
namespace ttdevsecopsdemo_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class WelcomeController : ControllerBase
    {
        public WelcomeController()
        {
          
        }
        [HttpGet]
        [Route("GetWelcomeDetails")]
        public async Task<IActionResult> GetWelcomeDetails()
        {
            try
            {
                WelcomeBA welcomeba = new WelcomeBA();
                var result = await welcomeba.GetWelcomeDetails();
                return Ok(result);
            }
            catch (Exception ex)
            {
              throw ex;
            }
        }

    }
}
