using MeuTodo.Models;
using Microsoft.EntityFrameworkCore;
namespace MinimalAPITeste.Data
{
    public class AppDbContext: DbContext
    {
        //public DbSet<Entity> entities { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlServer("Server=schdev.ddns.net,53341;Database=paperteste;User Id=schfla;Password=paper;TrustServerCertificate=True");
    }
}
