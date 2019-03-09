using Microsoft.EntityFrameworkCore;
using GameLibrary.API.Models;

namespace GameLibrary.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<Games> Games { get; set; }
    }
}