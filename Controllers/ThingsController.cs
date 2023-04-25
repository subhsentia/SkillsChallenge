using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThingsController : ControllerBase
    {
        private static readonly List<Thing> Things = new List<Thing>()
        {
            new Thing()
            {
                Name= "Shoe",
                Description = "It goes on your feet"
            },
            new Thing()
            {
                Name = "Towel",
                Description = "You can dry things with it"
            }
        };

        private readonly ILogger<ThingsController> _logger;

        public ThingsController(ILogger<ThingsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Thing> Get()
        {
            return Things;
        }
    }
}
