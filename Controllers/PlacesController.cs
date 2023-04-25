using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlacesController : ControllerBase
    {
        private static readonly List<Place> _places = new List<Place>() {
            new Place()
            {
                Name = "Big Ben",
                City = "London",
                State = "UK"
            },
            new Place()
            {
                Name = "Willis Tower",
                City = "Chicago",
                State = "Illinois"
            }
        };

        private readonly ILogger<PlacesController> _logger;

        public PlacesController(ILogger<PlacesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Place> GetPlaces()
        {
            return _places;
        }
    }
}
