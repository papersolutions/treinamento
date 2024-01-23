using MeuTodo.Models;
using Microsoft.EntityFrameworkCore;
namespace MinimalAPITeste.Data
{
    public class AppDbContext: DbContext
    {
        //public DbSet<Entity> entities { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlServer("Server=ACER-ERICK\\ACER_ERICK;Database=paperteste;User Id=paper;Password=paper;TrustServerCertificate=True");
    }
}
