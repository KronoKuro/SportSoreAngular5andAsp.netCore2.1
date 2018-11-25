using System.Linq;

namespace WebApp.Infrastructure
{
    interface IRepository<T> where T : class
    {
        IQueryable<T> GetAll();
        T GetById(string id);

        void Add(T enity);

        void Update(T entity);

        void Delete(T entity);
        void Delete(string id);
    }
}
