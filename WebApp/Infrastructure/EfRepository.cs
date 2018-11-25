using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Linq;
using WebApp.Models;

namespace WebApp.Infrastructure
{
    public class EfRepository<T> : IRepository<T> where T : class
    {
        private ApplicationContext _context;
        protected DbSet<T> DbSet { get; set; }

        public EfRepository(ApplicationContext context)
        {
            if (context == null)
                throw new ArgumentNullException("context");
            _context = context;
            DbSet = context.Set<T>();
        }

        public virtual IQueryable<T> GetAll()
        {
            return DbSet;
        }

        public virtual T GetById(string id)
        {
            return DbSet.Find(id);
        }

        public void Add(T entity)
        {
            EntityEntry<T> entityEntry = _context.Entry(entity);
            if (entityEntry.State != (EntityState)EntityState.Detached)
            {
                entityEntry.State = EntityState.Added;
            }
            else
            {
                DbSet.Add(entity);
            }
        }
        public virtual void Update(T entity)
        {
            EntityEntry<T> entryEntity = _context.Entry(entity);
            if (entryEntity.State != (EntityState)EntityState.Detached)
            {
                DbSet.Attach(entity);
            }

            entryEntity.State = EntityState.Modified;
        }

        public void Delete(T entity)
        {
            EntityEntry<T> entryEntity = _context.Entry(entity);
            if (entryEntity.State != (EntityState)EntityState.Detached)
            {
                entryEntity.State = EntityState.Deleted;
            }

            else
            {
                DbSet.Attach(entity);
                DbSet.Remove(entity);
            }
        }

        public void Delete(string id)
        {
            var entiry = GetById(id);
            if (entiry == null) return;
            Delete(entiry);
        }

    }
}
