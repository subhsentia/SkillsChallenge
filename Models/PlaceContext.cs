using Microsoft.EntityFrameworkCore;

namespace InterviewTest.Models
{
    public class PlaceContext : DbContext
    {
        public PlaceContext(DbContextOptions<PlaceContext> options)
            : base(options)
        {
           
        }


        public DbSet<Place> Places { get; set; } = null!;
    }
}