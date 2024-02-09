using MeuTodo.Models;
using Microsoft.EntityFrameworkCore;
using MinimalAPITeste.Models;
namespace MinimalAPITeste.Data
{
    public class AppDbContext: DbContext
    {
        public DbSet<Mill> Mills { get; set; }
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlServer("Server=ACER-ERICK\\ACER_ERICK;Database=paperteste;User Id=paper;Password=paper;TrustServerCertificate=True");
    }
}
