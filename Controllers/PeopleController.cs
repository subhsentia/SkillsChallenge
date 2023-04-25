using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InterviewTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PeopleController : ControllerBase
    {
        private static readonly List<Person> People = new List<Person>(){
            new Person()
            {
                FirstName = "Jim",
                LastName = "Parsons",
                Birthday = new DateTime(1977,2,20)
            },
             new Person()
            {
                FirstName = "Tony",
                LastName = "Smith",
                Birthday = new DateTime(1937,6,10)
            }

        };

        private readonly ILogger<PeopleController> _logger;

        public PeopleController(ILogger<PeopleController> logger) { 
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return People;
        }
    }
}
