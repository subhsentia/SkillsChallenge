using Microsoft.EntityFrameworkCore;

namespace InterviewTest.Models
{
    public class ThingContext : DbContext
    {
        public ThingContext(DbContextOptions<ThingContext> options)
            : base(options)
        {
           
        }

        public DbSet<Thing> Things { get; set; } = null!;
    }
}