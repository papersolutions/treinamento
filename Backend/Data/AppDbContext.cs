using MinimalAPITeste.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace MinimalAPITeste.Data
{
    public class AppDbContext: DbContext
    {
        private readonly IConfiguration _configuration;
        public DbSet<MillFla> MillsFla { get; set; }
        public DbSet<Mill> Mills { get; set; }
        
        public DbSet<MillEduardo> MillEduardos { get; set; }

        public DbSet<User> Users { get; set; }

        public AppDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlServer(_configuration.GetConnectionString("localDb"));
    }
}
