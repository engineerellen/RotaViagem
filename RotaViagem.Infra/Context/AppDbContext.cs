using Microsoft.EntityFrameworkCore;
using RotaViagem.Domain.Models;

namespace RotaViagem.Infra.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Rotas> Rotas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}