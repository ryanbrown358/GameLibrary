using GameLibrary.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GameLibrary.API.Data {
    public class DataContext : DbContext {
        public DataContext (DbContextOptions<DataContext> options) : base (options) { }

        public DbSet<Games> Games { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos {get; set;}
    }
}