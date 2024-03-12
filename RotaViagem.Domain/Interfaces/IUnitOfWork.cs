using System.Threading.Tasks;

namespace RotaViagem.Domain.Interfaces
{
    public interface IUnitOfWork
    {
          Task Commit();
    }
}