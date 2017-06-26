using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;


namespace EF6.DataAccessLayer
{
    public interface IEntity
    {
        EntityState EntityState { get; set; }
    }
    public enum EntityState
    {
        Unchanged,
        Added,
        Modified,
        Deleted
    }
    public static class DbContextExtensions
    {
        public static ObjectContext ToObjectContext(this DbContext dbContext)
        {
            return (dbContext as IObjectContextAdapter).ObjectContext;
        }
    }
}